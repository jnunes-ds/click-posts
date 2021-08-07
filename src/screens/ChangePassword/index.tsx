import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components';
import { Button, Header, Input, PasswordInput } from '../../components';

import {
  Container,
  Content,
  Body,
  InformationsContainer,
  UserInformation,
  UserLabel,
  CompanyInformationContainer,
  CompanyTitle,
  CompanyInformation,
  CompanyInfoLabel,
} from './styles';

export function ChangePassword() {
  const [email, setEmail] = useState('');

  const theme = useTheme();
  const { success, subtitle, main } = theme.colors;

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Content>
        <Header userName="Júnior" name="Júnior Nunes" isMyProfile />
        <Body>
          <InformationsContainer>
            <UserInformation>
              <UserLabel>Senha atual</UserLabel>
              <PasswordInput
                title="******"
                value={email}
                onChangeText={setEmail}
              />
            </UserInformation>
            <UserInformation>
              <UserLabel>Nova Senha</UserLabel>
              <PasswordInput
                title="******"
                value={email}
                onChangeText={setEmail}
              />
            </UserInformation>
            <UserInformation>
              <UserLabel>Repita a nova senha</UserLabel>
              <PasswordInput
                title="******"
                value={email}
                onChangeText={setEmail}
              />
            </UserInformation>
            <Button title="Salvar Senha" color={success} />
            <Button title="Cancelar" color={subtitle} />
          </InformationsContainer>
        </Body>
      </Content>
    </Container>
  );
}
