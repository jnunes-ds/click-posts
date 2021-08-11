import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';

import { useTheme } from 'styled-components';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { format } from 'date-fns';

import { User } from '../../dtos/UserDTO';
import {
  Container,
  Header,
  Name,
  Content,
  Title,
  Message,
  Footer,
  DateContainer,
  DeletedName,
} from './styles';
import { useUsers } from '../../hooks/Users';

interface PostData {
  userId: string;
  id: string;
  title: string;
  body: string;
  date?: string;
}

interface Props {
  postData: PostData;
  isMyPost?: boolean;
}

export function PostCard({ postData, isMyPost }: Props) {
  const [isDeletedUser, setIsDeletedUser] = useState(false);
  const [currentUser, setCurrentUser] = useState<User>({} as User);

  const date = new Date(`${postData.date}`);
  const formattedDate = format(date, 'dd/MM/yyyy');

  const theme = useTheme();
  const { subtitle } = theme.colors;

  const { users } = useUsers();

  const navigation = useNavigation();

  function handleGoToProfile() {
    navigation.navigate('Profile', { user: currentUser });
  }

  function handleGoToEditPost() {
    navigation.navigate('EditPost', { postData });
  }

  useEffect(() => {
    // eslint-disable-next-line prefer-const
    let isMounted = true;
    function getAtualUser() {
      const checkIfIsDeletedUset = users.map(
        item => item.id === postData.userId,
      );

      if (!checkIfIsDeletedUset.includes(true)) {
        setIsDeletedUser(true);

        return;
      }

      const filteredUsers = users.filter(item => item.id === postData.userId);

      setCurrentUser(filteredUsers[0]);
    }
    getAtualUser();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <Container>
      <Header>
        {isDeletedUser && <DeletedName>Usuário deletado!</DeletedName>}
        {isMyPost ? (
          <Name isMyPost> {currentUser.username} </Name>
        ) : (
          <BorderlessButton onPress={handleGoToProfile}>
            <Name> {currentUser.username} </Name>
          </BorderlessButton>
        )}

        {isMyPost && (
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
        {postData.date ? (
          <DateContainer>{formattedDate}</DateContainer>
        ) : (
          <DateContainer>05/08/2021</DateContainer>
        )}
      </Footer>
    </Container>
  );
}
