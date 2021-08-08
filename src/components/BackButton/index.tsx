import React from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';

import { Container, Icon } from './styles';

interface Props {
  onPress(): void;
}

export function BackButton({ onPress }: Props) {
  return (
    <Container>
      <BorderlessButton onPress={onPress}>
        <Icon name="arrow-left" size={24} />
      </BorderlessButton>
    </Container>
  );
}
