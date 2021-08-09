import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

interface NameProps {
  isMyPost?: boolean;
}

export const Container = styled.View`
  width: 100%;
  height: ${RFValue(180)}px;
  margin-top: ${RFValue(18)}px;
  padding: ${RFValue(10)}px;
  border-radius: 10px;

  background-color: ${({ theme }) => theme.colors.shape};
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const Name = styled.Text<NameProps>`
  font-family: ${({ theme }) => theme.fonts.primary_bold};
  font-size: ${RFValue(22)}px;
  color: ${({ theme }) => theme.colors.Title};
  ${({ isMyPost }) =>
    !isMyPost &&
    css`
      text-decoration: underline;
    `}
`;

export const Content = styled.View`
  padding-right: ${RFValue(15)}px;
  padding-left: ${RFValue(15)}px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_bold};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.subtitle};
  text-align: justify;
`;

export const Message = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.text};
  text-align: justify;
`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  padding-right: ${RFValue(15)}px;
  width: 100%;
`;

export const DateContainer = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_bold};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.subtitle};
`;
