import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components';
import { Button, Header } from '../../components';

import {
  Container,
  Content,
  Body,
  NewPostContainer,
  NewPostContent,
  NewPostLabel,
  Title,
  Message,
} from './styles';

export function NewPost() {
  const [titleIsFocused, setTitleIsFocused] = useState(false);
  const [messageIsFocused, setMessageIsFocused] = useState(false);
  const theme = useTheme();
  const { success, subtitle } = theme.colors;

  function handlerTitleFocus() {
    setTitleIsFocused(true);
  }

  function handlerTitleBlur() {
    setTitleIsFocused(false);
  }

  function handlerMessageFocus() {
    setMessageIsFocused(true);
  }

  function handlerMessageBlur() {
    setMessageIsFocused(false);
  }

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Content>
        <Header userName="Júnior" name="Júnior Nunes" type="post" isNewPost />
        <Body>
          <NewPostContainer>
            <NewPostContent>
              <NewPostLabel>Título</NewPostLabel>
              <Title
                isFocused={titleIsFocused}
                placeholder="Está é uma nova mensagem"
                onFocus={handlerTitleFocus}
                onBlur={handlerTitleBlur}
              />
            </NewPostContent>
            <NewPostContent>
              <NewPostLabel>Mensagem</NewPostLabel>
              <Message
                isFocused={messageIsFocused}
                onFocus={handlerMessageFocus}
                onBlur={handlerMessageBlur}
                multiline
                maxLength={100}
                numberOfLines={5}
                autoCorrect={false}
              />
            </NewPostContent>
            <Button title="Enviar" color={success} />
          </NewPostContainer>
        </Body>
      </Content>
    </Container>
  );
}
