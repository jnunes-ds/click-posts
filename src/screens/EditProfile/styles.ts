import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_primary};
  padding-right: ${RFPercentage(0.25)}%;
  padding-left: ${RFPercentage(0.25)}%;
`;

export const Content = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_secondary};
  border-radius: ${RFValue(55)}px;
  overflow: hidden;
`;

export const Body = styled.ScrollView`
  flex: 1;
  padding: ${RFValue(10)}px;
  padding-bottom: ${RFPercentage(20)}px;
`;

export const InformationsContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 10px;
  padding: ${RFValue(43)}px;
`;

export const UserInformation = styled.View`
  margin-bottom: 15px;
`;

export const UserLabel = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_bold};
  font-size: ${RFValue(22)}px;
  color: ${({ theme }) => theme.colors.Title};
`;

export const UserInfo = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${RFValue(22)}px;
  color: ${({ theme }) => theme.colors.subtitle};
`;

export const CompanyInformationContainer = styled.View``;

export const CompanyTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_bold};
  font-size: ${RFValue(26)}px;
  color: ${({ theme }) => theme.colors.Title};
`;

export const CompanyInformation = styled.View``;

export const CompanyInfoLabel = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_bold};
  font-size: ${RFValue(22)}px;
  color: ${({ theme }) => theme.colors.subtitle};
`;

export const CompanyInfo = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.text};
`;
