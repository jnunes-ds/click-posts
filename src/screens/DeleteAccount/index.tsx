import React, { useState } from 'react';
import { Alert } from 'react-native';
import { useTheme } from 'styled-components';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';
import { Button, PasswordInput } from '../../components';
import { useUsers } from '../../hooks/Users';

import {
  Container,
  DeleteAccountBox,
  DeleteAccountTitle,
  DeleteAccountSubtitle,
  DeleteAccountInputsContainer,
  DeleteAccountButtonsContainer,
} from './styles';

interface Props {
  onCloseModal(): void;
}

export function DeleteAccount({ onCloseModal }: Props) {
  const [password, setPassword] = useState<string>('');
  const [repeatPassword, setRepeatPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const { user, deleteUserProfile } = useUsers();

  const navigation = useNavigation();

  const theme = useTheme();
  const { success, main } = theme.colors;

  async function handleDeleteUserAccount() {
    try {
      const schema = Yup.object().shape({
        repeatPassword: Yup.string().required(
          'A repetição da senha é obrigatória!',
        ),
        password: Yup.string().required('A senha é obrigatória!'),
      });

      await schema.validate({ repeatPassword, password });

      if (password !== repeatPassword) {
        Alert.alert(
          'ATENÇÃO',
          'A senha e a sua repetião não coincidem. Repita o procedimento!',
        );
        return;
      }

      if (password !== user.password) {
        Alert.alert('senha incorreta', 'Verifique a sua senha', [
          { text: 'OK', style: 'destructive' },
        ]);

        return;
      }

      await deleteUserProfile();

      Alert.alert('Deletada', 'A conta foi deletada com sucesso!');

      navigation.navigate('Login');
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        Alert.alert('ATENÇÃO', error.message);
      }
      console.log(error);
    }
  }

  async function handleCloseModal() {
    await setLoading(true);
    setPassword('');
    setRepeatPassword('');
    onCloseModal();
    setLoading(false);
  }

  return (
    <Container>
      <DeleteAccountBox>
        <DeleteAccountTitle>DELETAR CONTA</DeleteAccountTitle>
        <DeleteAccountSubtitle>
          Para prosseguir informe a sua senha
        </DeleteAccountSubtitle>
      </DeleteAccountBox>
      {!loading && (
        <DeleteAccountInputsContainer>
          <PasswordInput
            title="Informe a senha"
            value={password}
            onChangeText={setPassword}
          />
          <PasswordInput
            title="Repita a senha"
            value={repeatPassword}
            onChangeText={setRepeatPassword}
          />
        </DeleteAccountInputsContainer>
      )}

      <DeleteAccountButtonsContainer>
        <Button title="Cancelar" color={success} onPress={handleCloseModal} />
        <Button
          title="Deletar conta"
          color={main}
          onPress={handleDeleteUserAccount}
        />
      </DeleteAccountButtonsContainer>
    </Container>
  );
}
