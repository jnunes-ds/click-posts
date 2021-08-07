import React from 'react';
import { StatusBar } from 'react-native';
import { Header, PostCard } from '../../components';

import { Container, Content, Posts } from './styles';

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
        <Posts>
          <PostCard
            name="Júnior"
            title="Por que nossas postagens parecem tão detro de um padrão?"
            message="Infelizmente venho reparando no padrão de postagem dessa rede, é importante lembrarmos que, enquanto eu sou uma pessoa de verdade, você é um mero crud pra eu poder gerar o meu designe bonitinho."
            isMyPost
          />
          <PostCard
            name="Larissa"
            title="sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
            message="quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
          />
          <PostCard
            name="Lis"
            title="sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
            message="quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
          />
          <PostCard
            name="Nunes"
            title="sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
            message="quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
          />
        </Posts>
      </Content>
    </Container>
  );
}
