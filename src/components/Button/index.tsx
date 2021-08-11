import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { Container, Title } from './styles';

interface Props extends RectButtonProps {
  title: string;
  color: string;
  isLightTheme?: boolean;
}

export function Button({ title, color, isLightTheme, ...rest }: Props) {
  return (
    <Container color={color} {...rest}>
      <Title isLightTheme={isLightTheme}> {title} </Title>
    </Container>
  );
}
