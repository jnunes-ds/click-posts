import React, { useEffect, useState } from 'react';
import { StatusBar, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Header, PostCard } from '../../components';
import { PostDTO } from '../../dtos/PostDTO';
import { usePosts } from '../../hooks/Posts';
import { useUsers } from '../../hooks/Users';
import api from '../../services/api';

import { Container, Content, Posts } from './styles';

interface Post extends PostDTO {
  date?: string;
  isMyPost?: boolean;
}

export function Home() {
  const [loading, setLoading] = useState(true);

  const { getPosts, posts } = usePosts();
  const { getUsers, users } = useUsers();

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

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Content>
        <Header userName="Júnior" name="Júnior Nunes" type="home" />
        <Posts>
          {loading ? (
            <Text>Loading . . .</Text>
          ) : (
            <FlatList
              data={posts}
              keyExtractor={item => item.id}
              renderItem={({ item }) => <PostCard postData={item} />}
              showsVerticalScrollIndicator={false}
            />
          )}
        </Posts>
      </Content>
    </Container>
  );
}
