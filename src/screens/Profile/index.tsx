import React from 'react';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
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
  CompanyInformationContainer,
  CompanyTitle,
  CompanyInformation,
  CompanyInfoLabel,
  CompanyInfo,
} from './styles';

export function Profile() {
  const theme = useTheme();
  const { text } = theme.colors;
  const navigation = useNavigation();

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
        <Header userName="Breth" name="Leane Graham" type="profile" />
        <Body>
          <InformationsContainer>
            <UserInformation>
              <UserLabel>Email</UserLabel>
              <UserInfo>incere@april.bi</UserInfo>
            </UserInformation>
            <UserInformation>
              <UserLabel>WebSite</UserLabel>
              <UserInfo>hildegard.org</UserInfo>
            </UserInformation>
            <UserInformation>
              <UserLabel>Phone</UserLabel>
              <UserInfo>1-770-736-8031 x56442</UserInfo>
            </UserInformation>
            <Button title="Voltar" color={text} onPress={handleGoBack} />
          </InformationsContainer>
        </Body>
      </Content>
    </Container>
  );
}
