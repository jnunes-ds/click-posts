import styled, { css } from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { BorderlessButton } from 'react-native-gesture-handler';

interface OptionContentProps {
  isActive?: boolean;
}

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
  border-radius: ${RFValue(10)}px;
  margin-top: 5px;
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

export const ChoosingChange = styled.View`
  flex-direction: row;
  justify-content: space-around;
  padding: 5px;
`;

export const UserInformatonContainer = styled.View``;

export const OptionContainer = styled(BorderlessButton)``;

export const OptionContent = styled.View<OptionContentProps>`
  justify-content: center;
  align-items: center;
  padding: 35px;
  padding-top: 10px;
  margin-bottom: 5px;

  ${({ isActive, theme }) =>
    isActive &&
    css`
      border-bottom-width: 2px;
      border-bottom-color: ${theme.colors.subtitle};
    `}
`;

export const Option = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${RFValue(22)}px;
  color: ${({ theme }) => theme.colors.subtitle};
`;
