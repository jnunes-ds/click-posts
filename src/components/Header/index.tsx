import React from 'react';
import { Feather } from '@expo/vector-icons';

import { BorderlessButton } from 'react-native-gesture-handler';
import { Container, TxtContainer, Greetings, Title } from './styles';

interface Props {
  title: string;
  isHome?: boolean;
}

export function Header({ title, isHome }: Props) {
  return (
    <Container>
      <TxtContainer>
        {isHome && <Greetings>Olá,</Greetings>}
        <Title> {title}! </Title>
      </TxtContainer>
      <BorderlessButton onPress={() => {}}>
        <Feather name="log-out" color="white" size={34} />
      </BorderlessButton>
    </Container>
  );
}
