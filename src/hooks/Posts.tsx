import React, { createContext, ReactNode, useState, useContext } from 'react';
import { PostDTO as Post } from '../dtos/PostDTO';
import api from '../services/api';

interface PostsContextData {
  posts: Post[];
  getPosts(): void;
}

interface PostsProviderProps {
  children: ReactNode;
}

const PostsContext = createContext<PostsContextData>({} as PostsContextData);

function PostsProvider({ children }: PostsProviderProps) {
  const [posts, setPosts] = useState<Post[]>([] as Post[]);

  async function getPosts() {
    // eslint-disable-next-line prefer-const
    let isMounted = true;
    try {
      const response = await api.get('/posts');
      if (isMounted) {
        setPosts(response.data);
      }
    } catch (error) {
      throw new Error(String(error));
    }

    return () => {
      isMounted = false;
    };
  }

  return (
    <PostsContext.Provider value={{ posts, getPosts }}>
      {children}
    </PostsContext.Provider>
  );
}

function usePosts() {
  const context = useContext(PostsContext);

  return context;
}

export { PostsProvider, usePosts };
