import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';

import { useTheme } from 'styled-components';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import { User } from '../../dtos/UserDTO';
import {
  Container,
  Header,
  Name,
  Content,
  Title,
  Message,
  Footer,
  Date,
} from './styles';
import { useUsers } from '../../hooks/Users';

interface PostData {
  userId: string;
  id: string;
  title: string;
  body: string;
  date?: string;
  isMyPost?: boolean;
}

interface Props {
  postData: PostData;
}

export function PostCard({ postData }: Props) {
  const [user, setUser] = useState<User>({} as User);
  const theme = useTheme();
  const { subtitle } = theme.colors;

  const { users } = useUsers();

  const navigation = useNavigation();

  function handleGoToProfile() {
    navigation.navigate('Profile');
  }

  function handleGoToEditPost() {
    navigation.navigate('EditPost');
  }

  useEffect(() => {
    // eslint-disable-next-line prefer-const
    let isMounted = true;
    function getAtualUser() {
      const filteredUsers = users.filter(item => item.id === postData.userId);

      setUser(filteredUsers[0]);
    }
    getAtualUser();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <Container>
      <Header>
        {postData.isMyPost ? (
          <Name isMyPost> {user.username} </Name>
        ) : (
          <BorderlessButton onPress={handleGoToProfile}>
            <Name> {user.username} </Name>
          </BorderlessButton>
        )}

        {postData.isMyPost && (
          <BorderlessButton onPress={handleGoToEditPost}>
            <Feather name="edit" color={subtitle} size={24} />
          </BorderlessButton>
        )}
      </Header>
      <Content>
        <Title> {postData.title} </Title>
        <Message> {postData.body} </Message>
      </Content>
      <Footer>
        {postData.date ? <Date>{postData.date}</Date> : <Date>05/08/2021</Date>}
      </Footer>
    </Container>
  );
}
