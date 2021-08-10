import React, { useEffect, useState } from 'react';
import { StatusBar, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { format } from 'date-fns';
import { Header, PostCard } from '../../components';
import { PostDTO } from '../../dtos/PostDTO';
import { usePosts } from '../../hooks/Posts';
import { useUsers } from '../../hooks/Users';
import api from '../../services/api';

import { Container, Content, Posts } from './styles';

interface Post extends PostDTO {
  date?: Date;
  isMyPost?: boolean;
}

export function Home() {
  const [loading, setLoading] = useState(true);
  // eslint-disable-next-line prettier/prettier
  const [formattedPostList, setFormattedPostList] = useState<Post[]>([] as Post[])

  const { getPosts, posts } = usePosts();
  const { getUsers, user } = useUsers();

  useEffect(() => {
    // eslint-disable-next-line prefer-const
    let isPostsMounted = true;
    async function fetchPosts() {
      setLoading(true);
      getUsers();
      getPosts();
      setLoading(false);
    }

    fetchPosts();
  }, []);

  useEffect(() => {
    // eslint-disable-next-line prefer-const
    let isMounted = true;
    function createFormattedPostList() {
      const newArray = [] as Post[];
      if (posts.length >= 100) {
        posts.forEach(item => {
          if (!item.date) {
            const newDate = new Date('08/05/2021');
            newArray.push({ date: newDate, ...item });
          } else {
            newArray.push(item);
          }

          newArray.sort((a, b) => {
            return (
              new Date(`${b.date}`).getTime() - new Date(`${a.date}`).getTime()
            );
          });
        });
      }
      setFormattedPostList(newArray);

      return () => {
        isMounted = false;
      };
    }
    createFormattedPostList();
  }, [posts]);

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Content>
        <Header userName={user.username} name={user.name} type="home" />
        <Posts>
          {loading ? (
            <Text>Loading . . .</Text>
          ) : (
            <FlatList
              data={formattedPostList}
              keyExtractor={item => String(item.id)}
              renderItem={({ item }) => (
                <PostCard postData={item} isMyPost={item.userId === user.id} />
              )}
              showsVerticalScrollIndicator={false}
            />
          )}
        </Posts>
      </Content>
    </Container>
  );
}
