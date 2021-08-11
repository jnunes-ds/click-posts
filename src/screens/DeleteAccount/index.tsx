import React from 'react';
import { useTheme } from 'styled-components';
import { Button, PasswordInput } from '../../components';

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
  const theme = useTheme();
  const { success, main } = theme.colors;

  return (
    <Container>
      <DeleteAccountBox>
        <DeleteAccountTitle>DELETAR CONTA</DeleteAccountTitle>
        <DeleteAccountSubtitle>
          Para prosseguir informe a sua senha
        </DeleteAccountSubtitle>
      </DeleteAccountBox>
      <DeleteAccountInputsContainer>
        <PasswordInput title="Informe a senha" />
        <PasswordInput title="Repita a senha" />
      </DeleteAccountInputsContainer>
      <DeleteAccountButtonsContainer>
        <Button title="Cancelar" color={success} onPress={onCloseModal} />
        <Button title="Deletar conta" color={main} />
      </DeleteAccountButtonsContainer>
    </Container>
  );
}
