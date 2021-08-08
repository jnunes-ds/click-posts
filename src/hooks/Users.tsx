import React, { createContext, ReactNode, useState, useContext } from 'react';
import { User } from '../dtos/UserDTO';
import api from '../services/api';

interface PostsContextData {
  users: User[];
  getUsers(): void;
}

interface PostsProviderProps {
  children: ReactNode;
}

const UsersContext = createContext<PostsContextData>({} as PostsContextData);

function UsersProvider({ children }: PostsProviderProps) {
  const [users, setUsers] = useState<User[]>([] as User[]);

  async function getUsers() {
    try {
      const response = await api.get('/users');
      setUsers(response.data);
    } catch (error) {
      throw new Error(String(error));
    }
  }

  return (
    <UsersContext.Provider value={{ users, getUsers }}>
      {children}
    </UsersContext.Provider>
  );
}

function useUsers() {
  const context = useContext(UsersContext);

  return context;
}

export { UsersProvider, useUsers };
