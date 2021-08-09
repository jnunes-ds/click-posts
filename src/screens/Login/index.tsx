import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
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

  const { singIn } = useUsers();

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
      await singIn({ email, password });
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
                  value={email}
                  onChangeText={setEmail}
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
