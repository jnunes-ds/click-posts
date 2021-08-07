import React, { useState } from 'react';

import { Feather } from '@expo/vector-icons';
import { TextInputProps } from 'react-native';

import { useTheme } from 'styled-components';
import { BorderlessButton } from 'react-native-gesture-handler';
import {
  Container,
  IconContainer,
  InputContainer,
  InputText,
  IconEyeContainer,
} from './styles';

interface Props extends TextInputProps {
  title: string;
  value?: string;
}

export function PasswordInput({ title, value, ...rest }: Props) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const theme = useTheme();
  const { text, subtitle } = theme.colors;

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!value);
  }

  function handleChangePasswordVisibility() {
    setIsPasswordVisible(!isPasswordVisible);
  }

  return (
    <Container>
      <IconContainer isFocused={isFocused}>
        <Feather name="lock" size={22} color={isFilled ? subtitle : text} />
      </IconContainer>
      <InputContainer isFocused={isFocused}>
        <InputText
          {...rest}
          secureTextEntry={!isPasswordVisible}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          placeholder={title}
          autoCorrect={false}
        />
        <IconEyeContainer>
          <BorderlessButton onPress={handleChangePasswordVisibility}>
            <Feather
              name={!isPasswordVisible ? 'eye' : 'eye-off'}
              size={24}
              color={text}
            />
          </BorderlessButton>
        </IconEyeContainer>
      </InputContainer>
    </Container>
  );
}
