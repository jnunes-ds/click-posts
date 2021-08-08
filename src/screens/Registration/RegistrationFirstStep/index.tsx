import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
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
  const [userName, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const theme = useTheme();
  const { subtitle, main } = theme.colors;

  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  function handleGoToSecondStep() {
    navigation.navigate('RegistrationSecondStep');
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
                  value={userName}
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
