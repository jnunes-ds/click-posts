import React from 'react';
import { Feather } from '@expo/vector-icons';

import { useTheme } from 'styled-components';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

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

interface Data {
  id: string;
  userName: string;
  title: string;
  message: string;
  date?: string;
  isMyPost: boolean;
}

interface Props {
  data: Data;
}

export function PostCard({ data }: Props) {
  const theme = useTheme();
  const { subtitle } = theme.colors;

  const navigation = useNavigation();

  function handleGoToProfile() {
    navigation.navigate('Profile');
  }

  return (
    <Container>
      <Header>
        {data.isMyPost ? (
          <Name isMyPost> {data.userName} </Name>
        ) : (
          <BorderlessButton onPress={handleGoToProfile}>
            <Name> {data.userName} </Name>
          </BorderlessButton>
        )}

        {data.isMyPost && <Feather name="edit" color={subtitle} size={24} />}
      </Header>
      <Content>
        <Title> {data.title} </Title>
        <Message> {data.message} </Message>
      </Content>
      <Footer>
        <Date> {data.date} </Date>
      </Footer>
    </Container>
  );
}
