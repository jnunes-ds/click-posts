import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components';
import { Button, Header, Input, PasswordInput } from '../../components';
import { useUsers } from '../../hooks/Users';

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
  const { user } = useUsers();
  const [name, setName] = useState(user.name);
  const [website, setWebsite] = useState(user.website);
  const [phone, setPhone] = useState(user.phone);
  const [isDataActive, setIsDataActive] = useState(true);

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
          userName={user.username}
          name={user.name}
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
                    title="Nome"
                    value={name}
                    onChangeText={setName}
                  />
                </UserInformation>
                <UserInformation>
                  <Input
                    iconName="smile"
                    title={user.username}
                    editable={false}
                    selectTextOnFocus={false}
                    disabled
                  />
                </UserInformation>
                <UserInformation>
                  <Input
                    iconName="mail"
                    title={user.email}
                    editable={false}
                    selectTextOnFocus={false}
                    disabled
                  />
                </UserInformation>
                <UserInformation>
                  <Input
                    iconName="mail"
                    title="Site"
                    value={website}
                    onChangeText={setWebsite}
                  />
                </UserInformation>
                <UserInformation>
                  <Input
                    iconName="mail"
                    title="Telefone"
                    value={phone}
                    onChangeText={setPhone}
                  />
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
