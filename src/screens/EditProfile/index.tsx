import React, { useState } from 'react';
import { Alert, Modal, StatusBar, Text, View } from 'react-native';
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';
import * as Yup from 'yup';
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
  CenteredView,
  DeleteAccountModal,
} from './styles';
import { DeleteAccount } from '../DeleteAccount';

export function EditProfile() {
  const { user, editUserProfile } = useUsers();

  const [name, setName] = useState<string>('');
  const [website, setWebsite] = useState<string>(user.website);
  const [phone, setPhone] = useState<string>(user.phone);
  const [password, setPassword] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [repeatNewPassword, setRepeatNewPassword] = useState<string>('');
  const [isDataActive, setIsDataActive] = useState<boolean>(true);

  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const theme = useTheme();
  const { success, main, background_secondary } = theme.colors;

  const navigation = useNavigation();

  function handleGoToChangeData() {
    setIsDataActive(true);
  }

  function handleGoToChangePassword() {
    setIsDataActive(false);
  }

  async function handleSaveChanges(): Promise<void> {
    try {
      if (password !== '' || newPassword !== '' || repeatNewPassword !== '') {
        const passwordSchema = Yup.object().shape({
          repeatNewPassword: Yup.string().required(
            'Repita a nova senha escolhida!',
          ),
          newPassword: Yup.string().required(
            'Escolha uma nova senha para substituir a atual!',
          ),
          password: Yup.string().required('Digite a sua sena atual!'),
        });

        await passwordSchema.validate({
          password,
          newPassword,
          repeatNewPassword,
        });

        if (newPassword !== repeatNewPassword) {
          Alert.alert(
            'ATENÇÃO',
            'Novo Password e sua repetição não são iguais, repita o procedimento!',
          );
          return;
        }

        if (password !== user.password) {
          Alert.alert('senha incorreta', 'Verifique a sua senha', [
            { text: 'OK', style: 'destructive' },
          ]);

          return;
        }
      }

      Alert.alert(
        'ATENÇÃO',
        'Tem certeza que deseja salvar as informações e alterar o perfil?',
        [
          {
            text: 'CANCELAR',
            style: 'cancel',
          },
          {
            text: 'ALTERAR',
            style: 'default',
            onPress: () => handleEditProfile(),
          },
        ],
      );
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        Alert.alert(error.message);
      }
      console.log(error);
    }
  }

  async function handleEditProfile() {
    try {
      await await editUserProfile({
        id: user.id,
        name,
        website,
        phone,
        password: newPassword,
      });
      handleCleanInputs();
      setIsDataActive(true);
      navigation.navigate('Home');
    } catch (error) {
      const e = error as unknown as Error;
      Alert.alert(e.message);
    }
  }

  async function handleCleanInputs() {
    await setLoading(true);
    setName('');
    setWebsite('');
    setPhone('');
    setPassword('');
    setNewPassword('');
    setRepeatNewPassword('');
    setLoading(false);
  }

  function handleOpenModal() {
    setModalIsOpen(true);
  }

  function handleCloseModal() {
    setModalIsOpen(false);
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
        {loading ? (
          <View>
            <Text>Loading. . .</Text>
          </View>
        ) : (
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
                      title={user.name}
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
                      title={user.website || 'Site'}
                      value={website}
                      onChangeText={setWebsite}
                    />
                  </UserInformation>
                  <UserInformation>
                    <Input
                      iconName="mail"
                      title={user.phone || 'Telefone'}
                      value={phone}
                      onChangeText={setPhone}
                    />
                  </UserInformation>
                </UserInformatonContainer>
              ) : (
                <UserInformatonContainer>
                  <UserInformation>
                    <PasswordInput
                      title="Senha atual"
                      value={password}
                      onChangeText={setPassword}
                    />
                  </UserInformation>
                  <UserInformation>
                    <PasswordInput
                      title="Nova senha"
                      value={newPassword}
                      onChangeText={setNewPassword}
                    />
                  </UserInformation>
                  <UserInformation>
                    <PasswordInput
                      title="Repita a nova senha"
                      value={repeatNewPassword}
                      onChangeText={setRepeatNewPassword}
                    />
                  </UserInformation>
                </UserInformatonContainer>
              )}

              <Button
                title="Salvar Alterações"
                color={success}
                onPress={handleSaveChanges}
              />
              <Button
                title="Limpar Dados"
                color={background_secondary}
                onPress={handleCleanInputs}
                isLightTheme
              />
              <Button
                title="Excluir conta"
                color={main}
                onPress={handleOpenModal}
              />
            </InformationsContainer>
          </Body>
        )}
      </Content>
      <DeleteAccountModal modalIsOpen={modalIsOpen}>
        <DeleteAccount onCloseModal={handleCloseModal} />
      </DeleteAccountModal>
    </Container>
  );
}
