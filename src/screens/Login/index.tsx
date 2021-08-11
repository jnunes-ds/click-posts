import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import {
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
  Platform,
} from 'react-native';
import { useTheme } from 'styled-components';
import * as Yup from 'yup';
import { Button, Input, PasswordInput } from '../../components';
import { useUsers } from '../../hooks/Users';

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

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { singIn, getUsers } = useUsers();

  const theme = useTheme();
  const { subtitle, success } = theme.colors;

  const navigation = useNavigation();

  async function handleSingIn() {
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .required('Informe o e-mail!')
          .email('Digite um e-mail válido!'),
        password: Yup.string().required('Digite a senha!'),
      });

      await schema.validate({ email, password });
      singIn({ email, password });
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        Alert.alert('Atenção!', error.message);
      }
      console.log(error);
    }
  }

  function handleGoToRegistration() {
    navigation.navigate('RegistrationFirstStep');
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <KeyboardAvoidingView behavior="position" enabled style={{ flex: 1 }}>
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
                  keyboardType="email-address"
                  title="E-mail"
                  autoCapitalize="none"
                  value={email}
                  onChangeText={setEmail}
                  autoCorrect={false}
                />
              </LoginInput>
              <LoginInput>
                <PasswordInput
                  title="Senha"
                  value={password}
                  onChangeText={setPassword}
                  autoCorrect={false}
                />
              </LoginInput>
            </LoginContainer>
            <ButtonsContainer>
              <Button title="Login" color={success} onPress={handleSingIn} />
              <Button
                title="Criar conta gratuita"
                color={subtitle}
                onPress={handleGoToRegistration}
              />
            </ButtonsContainer>
          </Content>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
