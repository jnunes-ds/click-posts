import React from 'react';
import { StatusBar } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useTheme } from 'styled-components';
import { Header, Button } from '../../components';

import {
  Container,
  Content,
  Body,
  InformationsContainer,
  UserInformation,
  UserLabel,
  UserInfo,
} from './styles';
import { User } from '../../dtos/UserDTO';

interface Params {
  user: User;
}

export function Profile() {
  const theme = useTheme();
  const { text } = theme.colors;
  const navigation = useNavigation();
  const routes = useRoute();
  const { user } = routes.params as Params;

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Content>
        <Header userName={user!.username} name={user!.name} type="profile" />
        <Body>
          <InformationsContainer>
            <UserInformation>
              <UserLabel>Email</UserLabel>
              <UserInfo>{user.email}</UserInfo>
            </UserInformation>
            <UserInformation>
              <UserLabel>WebSite</UserLabel>
              <UserInfo>{user.website}</UserInfo>
            </UserInformation>
            <UserInformation>
              <UserLabel>Phone</UserLabel>
              <UserInfo>{user.phone}</UserInfo>
            </UserInformation>
            <Button title="Voltar" color={text} onPress={handleGoBack} />
          </InformationsContainer>
        </Body>
      </Content>
    </Container>
  );
}
