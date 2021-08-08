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
  ChoosingChange,
  UserInformatonContainer,
  Option,
  OptionContainer,
  OptionContent,
} from './styles';

export function EditProfile() {
  const [isDataActive, setIsDataActive] = useState(true);
  const [email, setEmail] = useState('');

  const theme = useTheme();
  const { success, main } = theme.colors;

  function handleGoToChangeData() {
    setIsDataActive(true);
  }

  function handleGoToChangePassword() {
    setIsDataActive(false);
  }

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Content>
        <Header
          userName="Júnior"
          name="Júnior Nunes"
          type="profile"
          isMyProfile
        />
        <Body>
          <InformationsContainer>
            <ChoosingChange>
              <OptionContainer onPress={handleGoToChangeData}>
                <OptionContent isActive={isDataActive}>
                  <Option>Dados</Option>
                </OptionContent>
              </OptionContainer>
              <OptionContainer onPress={handleGoToChangePassword}>
                <OptionContent isActive={!isDataActive}>
                  <Option>Senha</Option>
                </OptionContent>
              </OptionContainer>
            </ChoosingChange>
            {isDataActive ? (
              <UserInformatonContainer>
                <UserInformation>
                  <Input
                    iconName="user"
                    title="Name"
                    value={email}
                    onChangeText={setEmail}
                  />
                </UserInformation>
                <UserInformation>
                  <Input
                    iconName="smile"
                    title="Apelido"
                    value={email}
                    onChangeText={setEmail}
                  />
                </UserInformation>
                <UserInformation>
                  <Input
                    iconName="mail"
                    title="E-mail"
                    value={email}
                    onChangeText={setEmail}
                  />
                </UserInformation>
                <UserInformation>
                  <Input iconName="mail" title="Site" />
                </UserInformation>
                <UserInformation>
                  <Input iconName="mail" title="Telefone" />
                </UserInformation>
              </UserInformatonContainer>
            ) : (
              <UserInformatonContainer>
                <UserInformation>
                  <PasswordInput title="Senha atual" />
                </UserInformation>
                <UserInformation>
                  <PasswordInput title="Nova senha" />
                </UserInformation>
                <UserInformation>
                  <PasswordInput title="Repita a nova senha" />
                </UserInformation>
              </UserInformatonContainer>
            )}

            <Button title="Salvar Alterações" color={success} />
            <Button title="Excluir conta" color={main} />
          </InformationsContainer>
        </Body>
      </Content>
    </Container>
  );
}
