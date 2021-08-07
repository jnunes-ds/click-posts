import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.shape};
`;

export const Content = styled.View`
  height: 100%;
  padding: ${RFValue(26.3)}px;
  padding-top: ${RFValue(175)}px;
  padding-bottom: ${RFValue(157)}px;
`;

export const WelcomeMessage = styled.View`
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

export const LoginContainer = styled.View`
  justify-content: space-between;
`;

export const LoginInput = styled.View`
  margin-top: 9px;
`;

export const ButtonsContainer = styled.View``;
