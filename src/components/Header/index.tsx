import React from 'react';
import { Feather } from '@expo/vector-icons';

import { BorderlessButton } from 'react-native-gesture-handler';
import {
  Container,
  Content,
  TxtContainer,
  Greetings,
  Title,
  SubtitleContainer,
  Subtitle,
  InformationContainer,
  Information,
} from './styles';

interface Props {
  name: string;
  userName: string;
  isHome?: boolean;
  isMyProfile?: boolean;
}

export function Header({ name, userName, isHome, isMyProfile }: Props) {
  return (
    <Container>
      {isHome ? (
        <Content>
          <TxtContainer>
            <Greetings>Olá,</Greetings>
            <Title> {userName} </Title>
          </TxtContainer>
          <BorderlessButton onPress={() => {}}>
            <Feather name="log-out" color="white" size={34} />
          </BorderlessButton>
        </Content>
      ) : (
        <Content>
          <TxtContainer>
            <Title> {name} </Title>
            <SubtitleContainer>
              <Subtitle> ({userName}) </Subtitle>
              <InformationContainer>
                {isMyProfile && <Information>Edit</Information>}
                <Information> Profile</Information>
              </InformationContainer>
            </SubtitleContainer>
          </TxtContainer>
        </Content>
      )}
    </Container>
  );
}
