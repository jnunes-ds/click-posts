import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import { useTheme } from 'styled-components';
import { Button, Input, PasswordInput } from '../../../components';

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

export function RegistrationSecondStep() {
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const theme = useTheme();
  const { subtitle, success } = theme.colors;

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <Content>
            <WelcomeMessage>
              <Title>
                Comece a {'\n'}
                postar agora!
              </Title>
              <Subtitle>
                Entre com seu {'\n'}
                logn para continuar
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
              <Button title="Login" color={success} />
              <Button title="Criar conta" color={subtitle} />
            </ButtonsContainer>
          </Content>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
