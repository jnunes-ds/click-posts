import styled, { css } from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

interface Props {
  isFocused: boolean;
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

export const NewPostContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 10px;
  padding: ${RFValue(43)}px;
  border-radius: ${RFValue(10)}px;
  margin-top: 5px;
`;

export const NewPostContent = styled.View`
  margin-bottom: 15px;
`;

export const NewPostLabel = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_bold};
  font-size: ${RFValue(22)}px;
  color: ${({ theme }) => theme.colors.Title};
`;

export const Title = styled.TextInput<Props>`
  flex: 1;
  width: 100%;
  height: ${RFValue(58)}px;

  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.secondary};

  color: ${({ theme }) => theme.colors.text};

  padding-horizontal: ${RFValue(10)}px;

  background-color: ${({ theme }) => theme.colors.background_secondary};

  ${({ isFocused, theme }) =>
    isFocused &&
    css`
      border-bottom-width: 2px;
      border-bottom-color: ${theme.colors.subtitle};
    `}
`;

export const Message = styled.TextInput<Props>`
  flex: 1;
  width: 100%;
  height: ${RFValue(150)}px;

  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.secondary};

  color: ${({ theme }) => theme.colors.text};
  text-align-vertical: top;

  padding-horizontal: ${RFValue(10)}px;

  background-color: ${({ theme }) => theme.colors.background_secondary};

  ${({ isFocused, theme }) =>
    isFocused &&
    css`
      border-bottom-width: 2px;
      border-bottom-color: ${theme.colors.subtitle};
    `}
`;
