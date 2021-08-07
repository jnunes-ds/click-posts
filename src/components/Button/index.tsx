import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components';

import { Container, Title } from './styles';

interface Props extends RectButtonProps {
  title: string;
  color: string;
}

export function Button({ title, color, ...rest }: Props) {
  const theme = useTheme();

  return (
    <Container color={color} {...rest}>
      <Title> {title} </Title>
    </Container>
  );
}
