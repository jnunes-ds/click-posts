import React from 'react';
import { StatusBar } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Header, PostCard } from '../../components';

import { Container, Content, Posts } from './styles';

interface Post {
  id: string;
  userName: string;
  title: string;
  message: string;
  date?: string;
  isMyPost: boolean;
}

export function Home() {
  const posts: Post[] = [
    {
      id: '1',
      userName: 'Júnior',
      title: 'Por que nossas postagens parecem tão detro de um padrão?',
      message:
        'Infelizmente venho reparando no padrão de postagem dessa rede, é importante lembrarmos que, enquanto eu sou uma pessoa de verdade, você é um mero crud pra eu poder gerar o meu designe bonitinho.',
      date: '07/08/2021',
      isMyPost: true,
    },
    {
      id: '2',
      userName: 'Larissa',
      title:
        'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      message:
        'Infelizmente venho reparando no padrão de postagem dessa rede, é importante lembrarmos que, enquanto eu sou uma pessoa de verdade, você é um mero crud pra eu poder gerar o meu designe bonitinho.',
      isMypost: false,
    },
    {
      id: '3',
      userName: 'Lis',
      title:
        'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      message:
        'Infelizmente venho reparando no padrão de postagem dessa rede, é importante lembrarmos que, enquanto eu sou uma pessoa de verdade, você é um mero crud pra eu poder gerar o meu designe bonitinho.',
      isMypost: false,
    },
    {
      id: '4',
      userName: 'Nunes',
      title:
        'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      message:
        'Infelizmente venho reparando no padrão de postagem dessa rede, é importante lembrarmos que, enquanto eu sou uma pessoa de verdade, você é um mero crud pra eu poder gerar o meu designe bonitinho.',
      isMypost: false,
    },
  ] as Post[];

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Content>
        <Header userName="Júnior" name="Júnior Nunes" type="home" />
        <Posts>
          <FlatList
            data={posts}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <PostCard data={item} />}
            showsVerticalScrollIndicator={false}
          />
        </Posts>
      </Content>
    </Container>
  );
}
