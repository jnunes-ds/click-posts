import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { RectButton } from 'react-native-gesture-handler';

interface Props {
  color: string;
}

export const Container = styled(RectButton)<Props>`
  width: 100%;
  height: ${RFValue(53)}px;
  justify-content: center;
  align-items: center;
  background-color: red;
  margin-top: ${RFValue(24)}px;
  border-radius: ${RFValue(10)}px;
  background-color: ${({ color }) => color};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.shape};
`;
