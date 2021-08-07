import React from 'react';
import { Feather } from '@expo/vector-icons';

import { useTheme } from 'styled-components';
import { BorderlessButton } from 'react-native-gesture-handler';
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

  return (
    <Container>
      <Header>
        <BorderlessButton onPress={() => {}}>
          <Name> {data.userName} </Name>
        </BorderlessButton>
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
