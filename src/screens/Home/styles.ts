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
`;
