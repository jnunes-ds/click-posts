import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  position: relative;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const DeleteAccountBox = styled.View`
  position: absolute;
  width: 90%;
  height: 520px;
  border: 3px solid ${({ theme }) => theme.colors.Title};
  border-radius: 20px;

  background-color: ${({ theme }) => theme.colors.shape};
`;

export const DeleteAccountTitle = styled.Text`
  margin-top: 20px;
  margin-left: 20px;
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${RFValue(32)}px;
  color: ${({ theme }) => theme.colors.main};
`;

export const DeleteAccountSubtitle = styled.Text`
  margin-top: 20px;
  margin-left: 20px;
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${RFValue(22)}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const DeleteAccountInputsContainer = styled.View`
  position: relative;
  top: 50px;
  width: 100%;
  height: 120px;
  justify-content: space-around;
  padding-horizontal: 15%;
`;

export const DeleteAccountButtonsContainer = styled.View`
  position: relative;
  top: 5%;
  width: 100%;
  padding-horizontal: 15%;
`;
