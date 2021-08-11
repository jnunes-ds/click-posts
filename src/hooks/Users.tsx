import React, { createContext, ReactNode, useState, useContext } from 'react';
import AsynncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import uuid from 'react-native-uuid';
import { User } from '../dtos/UserDTO';
import api from '../services/api';

interface Auth {
  email: string;
  password: string;
}

type NewUser = Omit<User, 'id' | 'phone' | 'website'> & {
  password: string;
};

type EditUserProps = Omit<User, 'username' | 'email'>;

interface PostsContextData {
  users: User[];
  getUsers(): Promise<() => void>;
  // eslint-disable-next-line no-unused-vars
  createNewUser({ email, username, name, password }: NewUser): void;
  // eslint-disable-next-line no-unused-vars
  singIn({ email, password }: Auth): void;
  singOut(): Promise<void>;
  user: User;
  // eslint-disable-next-line
  editUserProfile({ id, name, phone, website, password }: EditUserProps): Promise<void>;
  deleteUserProfile(): Promise<void>;
  checkIfUserIsLogged(): Promise<void>;
}

interface PostsProviderProps {
  children: ReactNode;
}

const UsersContext = createContext<PostsContextData>({} as PostsContextData);

function UsersProvider({ children }: PostsProviderProps) {
  const [users, setUsers] = useState<User[]>([] as User[]);
  const [user, setUser] = useState<User>({} as User);

  const dataKey = '@clickposts:user';

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
        id: uuid.v4(),
        email,
        username,
        name,
        password,
      };

      await api.post('/users', newUser);

      Alert.alert('Parabéns!', 'Usuário criado com sucesso!');
    } catch (error) {
      throw new Error(String(error));
    }
  }

  async function singIn({ email, password }: Auth): Promise<void> {
    try {
      await getUsers();
      const filteredUsers = users.filter(item => item.email === email);

      if (filteredUsers[0].password !== password) {
        Alert.alert('Erro de login', 'Login ou senha incorreto');

        return;
      }
      setUser(filteredUsers[0]);
      await AsynncStorage.setItem(dataKey, JSON.stringify(filteredUsers[0]));
    } catch (error) {
      console.log(error);
      Alert.alert('Não foi possível efetuar o login');
    }
  }

  async function singOut() {
    setUser({} as User);
    try {
      await AsynncStorage.removeItem(dataKey);
    } catch (error) {
      console.log(error);
    }
  }

  async function editUserProfile({
    id,
    name,
    phone,
    website,
    password,
  }: EditUserProps) {
    try {
      const editedProfile: User = {
        id: user.id,
        email: user.email,
        username: user.username,
        name: name || user.name,
        phone,
        website,
        password,
      };
      setUser(editedProfile);
      await api.put(`/users/${id}`, editedProfile);
      Alert.alert('TUDO CERTO', 'Seu perfil foi alterado com sucesso!');
      await getUsers();
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async function checkIfUserIsLogged() {
    try {
      const response = await AsynncStorage.getItem(dataKey);
      if (response) {
        setUser(JSON.parse(response!));
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteUserProfile() {
    await api.delete(`/users/${user.id}`);
    setUser({} as User);
  }

  return (
    <UsersContext.Provider
      value={{
        users,
        getUsers,
        createNewUser,
        singIn,
        singOut,
        user,
        editUserProfile,
        deleteUserProfile,
        checkIfUserIsLogged,
      }}
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
