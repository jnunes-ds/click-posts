import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { TextInput } from 'react-native';

interface Props {
  isFocused: boolean;
}

export const Container = styled.View`
  height: ${RFValue(48)}px;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.shape};
`;

export const IconContainer = styled.View<Props>`
  flex: 2;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background_secondary};
  ${({ isFocused, theme }) =>
    isFocused &&
    css`
      border-bottom-width: 2px;
      border-bottom-color: ${theme.colors.subtitle};
    `}
`;

export const InputContainer = styled.View<Props>`
  flex: 10;
  background-color: ${({ theme }) => theme.colors.background_secondary};
  margin-left: 2px;

  ${({ isFocused, theme }) =>
    isFocused &&
    css`
      border-bottom-width: 2px;
      border-bottom-color: ${theme.colors.subtitle};
    `}
`;

export const InputText = styled(TextInput)`
  flex: 1;
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.secondary};

  color: ${({ theme }) => theme.colors.text};
  padding-left: ${RFValue(10)}px;
`;
