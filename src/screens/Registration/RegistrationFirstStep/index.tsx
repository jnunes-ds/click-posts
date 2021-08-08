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
  WelcomeMessage,
  LoginContainer,
  LoginInput,
  ButtonsContainer,
} from './styles';

export function RegistrationFirstStep() {
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const theme = useTheme();
  const { subtitle, main } = theme.colors;

  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <BackButton onPress={handleGoBack} />
          <Content>
            <WelcomeMessage>
              <Title>
                Vamos {'\n'}
                Começar!
              </Title>
              <Subtitle>
                Informe os seus dados {'\n'}
                pessoais para continuar
              </Subtitle>
            </WelcomeMessage>
            <LoginContainer>
              <LoginInput>
                <Input
                  iconName="mail"
                  title="E-mail"
                  value={userName}
                  onChangeText={setUsername}
                />
              </LoginInput>
              <LoginInput>
                <PasswordInput
                  title="Senha"
                  value={password}
                  onChangeText={setPassword}
                />
              </LoginInput>
            </LoginContainer>
            <ButtonsContainer>
              <Button title="Próximo passo" color={subtitle} />
              <Button title="Cancelar" color={main} />
            </ButtonsContainer>
          </Content>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
