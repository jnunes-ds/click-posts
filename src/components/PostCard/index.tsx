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

interface Props {
  name: string;
  title: string;
  message: string;
  date?: string;
  isMyPost?: boolean;
}

export function PostCard({
  name,
  title,
  message,
  date = '05/08/2021',
  isMyPost,
}: Props) {
  const theme = useTheme();
  const { subtitle } = theme.colors;

  return (
    <Container>
      <Header>
        <BorderlessButton onPress={() => {}}>
          <Name> {name} </Name>
        </BorderlessButton>
        {isMyPost && <Feather name="edit" color={subtitle} size={24} />}
      </Header>
      <Content>
        <Title> {title} </Title>
        <Message> {message} </Message>
      </Content>
      <Footer>
        <Date> {date} </Date>
      </Footer>
    </Container>
  );
}
