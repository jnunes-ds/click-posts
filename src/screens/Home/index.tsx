import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import LottieView from 'lottie-react-native';
import NetInfo from '@react-native-community/netinfo';
import { Header, PostCard } from '../../components';
import { PostDTO } from '../../dtos/PostDTO';
import { usePosts } from '../../hooks/Posts';
import { useUsers } from '../../hooks/Users';
import loadingPostsAnimated from '../../assets/post-animated.json';
import Error404 from '../../assets/404-network.json';

import { Container, Content, Posts, AnimationContainer } from './styles';

interface Post extends PostDTO {
  date?: Date;
  isMyPost?: boolean;
}

export function Home() {
  const [loading, setLoading] = useState(true);
  // eslint-disable-next-line prettier/prettier
  const [formattedPostList, setFormattedPostList] = useState<Post[]>([] as Post[]);
  const [isConnected, setIsConnected] = useState<boolean>(true);

  const { getPosts, posts, hasPromiseError } = usePosts();
  const { getUsers, user, checkIfUserIsLogged } = useUsers();

  useEffect(() => {
    async function fetchPosts() {
      setLoading(true);
      getUsers();
      getPosts();
      checkIfUserIsLogged();
    }

    fetchPosts();
  }, []);

  useEffect(() => {
    NetInfo.fetch().then(state => {
      setIsConnected(Boolean(state.isConnected));
    });
  }, []);

  useEffect(() => {}, [isConnected]);

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

  useEffect(() => {
    if (formattedPostList.length > 0) {
      setLoading(false);
    }
  }, [formattedPostList]);

  useEffect(() => {
    if (hasPromiseError) {
      setLoading(false);
    }
  }, [hasPromiseError]);

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
          {loading && (
            <AnimationContainer>
              <LottieView
                source={loadingPostsAnimated}
                autoPlay
                style={{ height: 300 }}
                resizeMode="contain"
                loop
              />
            </AnimationContainer>
          )}
          {!loading && posts.length > 0 && (
            <FlatList
              data={formattedPostList}
              keyExtractor={item => String(item.id)}
              renderItem={({ item }) => (
                <PostCard postData={item} isMyPost={item.userId === user.id} />
              )}
              showsVerticalScrollIndicator={false}
            />
          )}
          {!loading && hasPromiseError && formattedPostList.length === 0 && (
            <AnimationContainer>
              <LottieView
                source={Error404}
                autoPlay
                style={{ height: 300 }}
                resizeMode="contain"
                loop
              />
            </AnimationContainer>
          )}
        </Posts>
      </Content>
    </Container>
  );
}
