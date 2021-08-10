import React, { useState } from 'react';

import { Feather } from '@expo/vector-icons';
import { TextInputProps } from 'react-native';

import { useTheme } from 'styled-components';
import { Container, IconContainer, InputContainer, InputText } from './styles';

interface Props extends TextInputProps {
  title: string;
  value?: string;
  iconName: React.ComponentProps<typeof Feather>['name'];
  disabled?: boolean;
}

export function Input({ title, value, iconName, disabled, ...rest }: Props) {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const theme = useTheme();
  const { text, subtitle, main } = theme.colors;

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!value);
  }

  return (
    <Container>
      <IconContainer isFocused={isFocused}>
        {disabled ? (
          <Feather name={iconName} size={22} color={main} />
        ) : (
          <Feather
            name={iconName}
            size={22}
            color={isFilled ? subtitle : text}
          />
        )}
      </IconContainer>
      <InputContainer isFocused={isFocused}>
        <InputText
          {...rest}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          placeholder={title}
        />
      </InputContainer>
    </Container>
  );
}
