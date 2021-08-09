import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';
import * as Yup from 'yup';
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';
import { BackButton, Button, Input } from '../../../components';

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

export function RegistrationFirstStep() {
  const [name, SetName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const theme = useTheme();
  const { subtitle, main } = theme.colors;

  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  async function handleGoToSecondStep() {
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .required('E-mail é obrigatório!')
          .email('Digite um e-mail válido!'),
        username: Yup.string().required('Nome de usuário é obrigatório'),
        name: Yup.string().required('Nome é brigatório'),
      });

      await schema.validate({ name, username, email });

      navigation.navigate('RegistrationSecondStep', { name, username, email });
    } catch (error) {
      const e = error as Yup.ValidationError;
      Alert.alert('Atenção', `${e.message}`);
    }
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
                <Bullet isActive />
                <Bullet />
              </BulletsContainer>
            </RegistrationHeader>
            <RegistrationContainer>
              <RegistrationInput>
                <Input
                  iconName="user"
                  title="Seu Nome"
                  value={name}
                  onChangeText={SetName}
                />
              </RegistrationInput>
              <RegistrationInput>
                <Input
                  iconName="smile"
                  title="Nome de usuário (Apelido)"
                  value={username}
                  onChangeText={setUsername}
                />
              </RegistrationInput>
              <RegistrationInput>
                <Input
                  iconName="mail"
                  title="E-mail"
                  value={email}
                  onChangeText={setEmail}
                />
              </RegistrationInput>
            </RegistrationContainer>
            <ButtonsContainer>
              <Button
                title="Próximo passo"
                color={subtitle}
                onPress={handleGoToSecondStep}
              />
            </ButtonsContainer>
          </Content>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
