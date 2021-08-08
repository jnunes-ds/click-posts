import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

interface BulletProps {
  isActive?: boolean;
}

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.shape};
`;

export const Content = styled.View`
  height: 100%;
  padding: ${RFValue(26.3)}px;
  padding-top: ${RFValue(175)}px;
  padding-bottom: ${RFValue(157)}px;
`;

export const RegistrationHeader = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const BulletsContainer = styled.View`
  justify-content: space-around;
  width: 50px;
  height: 100px;
`;

export const Bullet = styled.View<BulletProps>`
  width: ${RFValue(30)}px;
  height: ${RFValue(30)}px;
  border-radius: ${RFValue(15)}px;

  ${({ isActive, theme }) =>
    isActive
      ? css`
          background-color: ${theme.colors.subtitle};
        `
      : css`
          background-color: ${theme.colors.background_secondary};
        `}
`;

export const InformationMessage = styled.View`
  margin-bottom: ${RFValue(44)}px;
`;

export const Title = styled.Text`
  margin-bottom: ${RFValue(37)}px;
  font-family: ${({ theme }) => theme.fonts.primary_bold};
  font-size: ${RFValue(36)}px;
  color: ${({ theme }) => theme.colors.subtitle};
`;

export const Subtitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const RegistrationContainer = styled.View`
  justify-content: space-between;
`;

export const RegistrationInput = styled.View`
  margin-top: 9px;
`;

export const ButtonsContainer = styled.View``;
