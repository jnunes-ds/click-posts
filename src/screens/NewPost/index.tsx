import React, { useState } from 'react';
import { Alert, StatusBar } from 'react-native';
import { useTheme } from 'styled-components';
import * as Yup from 'yup';
import uuid from 'react-native-uuid';
import { format, compareAsc } from 'date-fns';
import { Button, Header } from '../../components';
import { usePosts } from '../../hooks/Posts';
import { useUsers } from '../../hooks/Users';

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
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const theme = useTheme();
  const { success, subtitle } = theme.colors;

  const { sendPost, getPosts } = usePosts();
  const { user } = useUsers();

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

  async function handleSendPost() {
    try {
      const schema = Yup.object().shape({
        title: Yup.string().required('Título é obrigatório!'),
        body: Yup.string().required('É obrigatório escrever uma mensagem!'),
      });

      const userId = user.id;
      const newDate = new Date();

      await schema.validate({ title, body });

      await sendPost({ title, body, userId, date: String(newDate) });
      setTitle('');
      setBody('');
      getPosts();
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        Alert.alert('Atenção', error.message);
      }

      console.log(error);
    }
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
                value={title}
                onChangeText={setTitle}
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
                value={body}
                onChangeText={setBody}
              />
            </NewPostContent>
            <Button title="Enviar" color={success} onPress={handleSendPost} />
          </NewPostContainer>
        </Body>
      </Content>
    </Container>
  );
}
