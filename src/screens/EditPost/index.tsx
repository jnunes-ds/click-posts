import React, { useState, useEffect } from 'react';
import { Alert, StatusBar } from 'react-native';
import { useTheme } from 'styled-components';
import { useNavigation, useRoute } from '@react-navigation/native';
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
import { useUsers } from '../../hooks/Users';
import { usePosts } from '../../hooks/Posts';

interface PostData {
  userId: string;
  id: string;
  title: string;
  body: string;
  date?: string;
}

interface Params {
  postData: PostData;
}

export function EditPost() {
  const route = useRoute();
  const { postData } = route.params as Params;
  const [title, setTitle] = useState<string>(postData.title || '');
  const [body, setBody] = useState<string>(postData.body || '');
  const [titleIsFocused, setTitleIsFocused] = useState(false);
  const [messageIsFocused, setMessageIsFocused] = useState(false);

  const theme = useTheme();
  const { success, subtitle } = theme.colors;

  const navigation = useNavigation();

  const { user } = useUsers();
  const { editPost, getPosts } = usePosts();

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

  function handleGoBack() {
    navigation.goBack();
  }

  async function handleEditPost() {
    try {
      await editPost({
        id: postData.id,
        userId: postData.userId,
        date: new Date(`${postData.date}`),
        title,
        body,
      });
      await getPosts();
      navigation.navigate('Home');
      Alert.alert('Parabéns, Seu post foi editado com sucesso!');
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    setTitle(postData.title);
    setBody(postData.body);
  }, [postData]);

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Content>
        <Header
          userName={user.username}
          name={user.name}
          type="post"
          isNewPost
        />
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
            <Button title="Enviar" color={success} onPress={handleEditPost} />
            <Button title="Cancelar" color={subtitle} onPress={handleGoBack} />
          </NewPostContainer>
        </Body>
      </Content>
    </Container>
  );
}
