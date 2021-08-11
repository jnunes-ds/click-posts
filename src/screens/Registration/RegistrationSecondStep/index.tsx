import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';
import { useTheme } from 'styled-components';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as Yup from 'yup';
import uuid from 'react-native-uuid';

import { BackButton, Button, PasswordInput } from '../../../components';

import {
  Container,
  Content,
  Title,
  Subtitle,
  InformationMessage,
  RegistrationContainer,
  RegistrationInput,
  ButtonsContainer,
  RegistrationHeader,
  BulletsContainer,
  Bullet,
} from './styles';
import { useUsers } from '../../../hooks/Users';

interface Params {
  name: string;
  username: string;
  email: string;
}

export function RegistrationSecondStep() {
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

  const theme = useTheme();
  const { subtitle, text } = theme.colors;

  const route = useRoute();
  const { name, username, email } = route.params as Params;

  const { createNewUser } = useUsers();

  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  async function handleRegister() {
    try {
      const schema = Yup.object().shape({
        passwordRepeat: Yup.string().required(
          'É necessário repetir a senha para continuar.',
        ),
        password: Yup.string().required('Senha é obrigatória!'),
      });

      await schema.validate({ password, passwordRepeat });

      if (password !== passwordRepeat) {
        throw new Error('A senha  repetida deve ser idêntica a anterior.');
      }

      await createNewUser({ name, username, email, password });
      navigation.navigate('Login');
    } catch (error) {
      const e = error as Yup.ValidationError;
      Alert.alert('Atenção', e.message);
    }
  }

  function HandleCancel() {
    navigation.navigate('Login');
  }

  return (
    <KeyboardAvoidingView behavior="position" enabled style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <BackButton onPress={handleGoBack} />
          <Content>
            <RegistrationHeader>
              <InformationMessage>
                <Title>
                  Vamos {'\n'}
                  Começar!
                </Title>
                <Subtitle>
                  Informe os seus dados {'\n'}
                  pessoais para continuar
                </Subtitle>
              </InformationMessage>
              <BulletsContainer>
                <Bullet />
                <Bullet isActive />
              </BulletsContainer>
            </RegistrationHeader>
            <RegistrationContainer>
              <RegistrationInput>
                <PasswordInput
                  title="Escolha uma senha"
                  value={password}
                  onChangeText={setPassword}
                />
              </RegistrationInput>
              <RegistrationInput>
                <PasswordInput
                  title="Repita a senha"
                  value={passwordRepeat}
                  onChangeText={setPasswordRepeat}
                />
              </RegistrationInput>
            </RegistrationContainer>
            <ButtonsContainer>
              <Button
                title="Cadastrar"
                color={subtitle}
                onPress={handleRegister}
              />
              <Button title="Cancelar" color={text} onPress={HandleCancel} />
            </ButtonsContainer>
          </Content>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
