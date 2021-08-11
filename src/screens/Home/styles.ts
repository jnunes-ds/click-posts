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

export const Posts = styled.View`
  flex: 1;
  padding: ${RFValue(10)}px;
  padding-top: 0;
  padding-bottom: 0;
`;

export const AnimationContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
