import React from 'react';

import { PostsProvider } from './Posts';
import { UsersProvider } from './Users';

interface AppProviderProps {
  children: React.ReactNode;
}

function AppProvider({ children }: AppProviderProps) {
  return (
    <PostsProvider>
      <UsersProvider>{children}</UsersProvider>
    </PostsProvider>
  );
}

export { AppProvider };
