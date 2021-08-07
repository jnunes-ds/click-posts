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
  type: 'home' | 'profile' | 'post';
  isMyProfile?: boolean;
  isNewPost?: boolean;
}

export function Header({
  name,
  userName,
  type,
  isMyProfile,
  isNewPost,
}: Props) {
  return (
    <Container>
      {type === 'home' && (
        <Content>
          <TxtContainer>
            <Greetings>Olá,</Greetings>
            <Title> {userName} </Title>
          </TxtContainer>
          <BorderlessButton onPress={() => {}}>
            <Feather name="log-out" color="white" size={34} />
          </BorderlessButton>
        </Content>
      )}
      {type === 'profile' && (
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
      {type === 'post' && (
        <Content>
          <TxtContainer>
            <Title> {name} </Title>
            <SubtitleContainer>
              <InformationContainer>
                {isNewPost ? (
                  <Information>New</Information>
                ) : (
                  <Information>Edit</Information>
                )}
                <Information> Post</Information>
              </InformationContainer>
            </SubtitleContainer>
          </TxtContainer>
        </Content>
      )}
    </Container>
  );
}
