import React from 'react';
import { StatusBar } from 'react-native';
import { Header } from '../../components';

import { Container, Content } from './styles';

export function Home() {
  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Content>
        <Header title="Júnior" isHome />
      </Content>
    </Container>
  );
}
