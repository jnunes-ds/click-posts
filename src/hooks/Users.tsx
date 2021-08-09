import React, { createContext, ReactNode, useState, useContext } from 'react';
import { Alert } from 'react-native';
import { v4 as uuid } from 'uuid';
import { User } from '../dtos/UserDTO';
import api from '../services/api';

interface Auth {
  email: string;
  password: string;
}

type NewUser = Omit<User, 'id' | 'phone' | 'website'> & {
  password: string;
};

interface PostsContextData {
  users: User[];
  getUsers(): void;
  // eslint-disable-next-line no-unused-vars
  createNewUser({ email, username, name, password }: NewUser): void;
  // eslint-disable-next-line no-unused-vars
  logIn({ email, password }: Auth): void;
  user: User;
}

interface PostsProviderProps {
  children: ReactNode;
}

const UsersContext = createContext<PostsContextData>({} as PostsContextData);

function UsersProvider({ children }: PostsProviderProps) {
  const [users, setUsers] = useState<User[]>([] as User[]);
  const [user, setUser] = useState<User>({} as User);

  async function getUsers() {
    // eslint-disable-next-line prefer-const
    let isMounted = true;
    try {
      const response = await api.get('/users');
      if (isMounted) {
        setUsers(response.data);
      }
    } catch (error) {
      throw new Error(String(error));
    }

    return () => {
      isMounted = false;
    };
  }

  async function createNewUser({
    email,
    username,
    name,
    password,
  }: NewUser): Promise<void> {
    try {
      await getUsers();
      const checkUsername = users.map(item => item.username === username);
      const userAlreadyExist = checkUsername.includes(true);

      if (userAlreadyExist) {
        Alert.alert(
          'Username em uso',
          'Já existe um usuário com esse mesmo apelido, por favor escolha outro',
        );

        return;
      }

      const checkUserEmail = users.map(item => item.email === email);
      const emailAlreadyUsed = checkUserEmail.includes(true);

      if (emailAlreadyUsed) {
        Alert.alert(
          'Email Em uso!',
          'Atenção, este e-mail já está sendo utilizado por outro usuário!',
        );

        return;
      }

      const newUser = {
        id: uuid(),
        email,
        username,
        name,
        password,
      };

      await api.post('/users', newUser);
    } catch (error) {
      throw new Error(String(error));
    }
  }

  async function logIn({ email, password }: Auth): Promise<void> {
    await getUsers();
    const filteredUsers = users.filter(item => item.email === email);

    if (filteredUsers[0].password !== password) {
      Alert.alert('Erro de login', 'Login ou senha incorreto');

      return;
    }
    setUser(filteredUsers[0]);
  }

  return (
    <UsersContext.Provider
      value={{ users, getUsers, createNewUser, logIn, user }}
    >
      {children}
    </UsersContext.Provider>
  );
}

function useUsers() {
  const context = useContext(UsersContext);

  return context;
}

export { UsersProvider, useUsers };
