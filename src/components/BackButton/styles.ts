import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';

interface IconProps {
  content?: 'dark' | 'light';
}

export const Container = styled.View`
  position: absolute;
  top: ${RFValue(50)}px;
  left: ${RFValue(25)}px;
`;

export const Icon = styled(Feather)<IconProps>`
  ${({ content, theme }) =>
    content === 'dark'
      ? css`
          color: ${theme.colors.shape};
        `
      : css`
          color: ${theme.colors.background_primary};
        `}
`;
