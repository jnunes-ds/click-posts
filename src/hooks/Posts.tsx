import React, { createContext, ReactNode, useState, useContext } from 'react';
import { Alert } from 'react-native';
import uuid from 'react-native-uuid';
import { PostDTO as Post } from '../dtos/PostDTO';
import api from '../services/api';

interface PostProps {
  id?: string;
  userId: string;
  title: string;
  body: string;
  date: string;
}

interface DeleteProps {
  id: string;
}

interface PostsContextData {
  posts: Post[];
  getPosts(): void;
  // eslint-disable-next-line no-unused-vars
  sendPost({ userId, title, body, date }: PostProps): Promise<void>;
  // eslint-disable-next-line no-unused-vars
  editPost({ id, title, body, date, userId }: PostProps): Promise<void>;
  // eslint-disable-next-line no-unused-vars
  deletePost({ id }: DeleteProps): Promise<void>;
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

  async function sendPost({ userId, title, body, date }: PostProps) {
    try {
      const newId = uuid.v4();

      const newPost = {
        id: newId,
        userId,
        title,
        body,
        date,
      };

      await api.post('/posts', newPost);
      Alert.alert('Post efetuado com sucesso!');
    } catch (error) {
      const e = error as string;
      throw new Error(e);
    }
  }

  async function editPost({ id, title, body, date, userId }: PostProps) {
    try {
      await api.put(`/posts/${id}`, {
        title,
        body,
        userId,
        date,
      });
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async function deletePost({ id }: DeleteProps) {
    try {
      await api.delete(`/posts/${id}`);
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  return (
    <PostsContext.Provider
      value={{ posts, getPosts, sendPost, editPost, deletePost }}
    >
      {children}
    </PostsContext.Provider>
  );
}

function usePosts() {
  const context = useContext(PostsContext);

  return context;
}

export { PostsProvider, usePosts };
