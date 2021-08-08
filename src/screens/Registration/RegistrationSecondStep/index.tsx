import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';
import { BackButton, Button, Input, PasswordInput } from '../../../components';

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

export function RegistrationSecondStep() {
  const [name, SetName] = useState('');
  const [userName, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const theme = useTheme();
  const { subtitle, text } = theme.colors;

  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  function handleRegister() {}

  function HandleCancel() {
    navigation.navigate('Login');
  }

  return (
    <KeyboardAvoidingView behavior="position" enabled>
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
                <PasswordInput title="Escolha uma senha" />
              </RegistrationInput>
              <RegistrationInput>
                <PasswordInput title="Repita a senha" />
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
