import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  width: 100%;
  height: 20%;
  padding-right: ${RFValue(30)}px;
  padding-left: ${RFValue(20)}px;
  border: none;
  border-radius: ${RFValue(50)}px;
  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Content = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  align-items: center;
`;

export const TxtContainer = styled.View``;

export const Greetings = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_regular};
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.shape};
  padding-left: ${RFValue(5)}px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${RFValue(36)}px;
  color: ${({ theme }) => theme.colors.shape};
`;

export const SubtitleContainer = styled.View`
  flex-direction: row;
`;

export const Subtitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_bold};
  font-size: ${RFValue(28)}px;
  color: ${({ theme }) => theme.colors.subtitle};
`;

export const InformationContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: flex-end;
  padding-left: ${RFValue(15)}px;
`;

export const Information = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_bold};
  font-size: ${RFValue(22)}px;
  color: ${({ theme }) => theme.colors.shape};
`;
