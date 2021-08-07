import React from 'react';
import { StatusBar } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Header, PostCard } from '../../components';

import { Container, Content, Posts } from './styles';

interface User {
  id: string;
  name: string;
  title: string;
  message: string;
  date?: string;
  isMyPost: boolean;
}

export function Home() {
  const users: User[] = [
    {
      id: '1',
      name: 'Júnior',
      title: 'Por que nossas postagens parecem tão detro de um padrão?',
      message:
        'Infelizmente venho reparando no padrão de postagem dessa rede, é importante lembrarmos que, enquanto eu sou uma pessoa de verdade, você é um mero crud pra eu poder gerar o meu designe bonitinho.',
      date: '07/08/2021',
      isMyPost: true,
    },
    {
      id: '2',
      name: 'Larissa',
      title:
        'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      message:
        'Infelizmente venho reparando no padrão de postagem dessa rede, é importante lembrarmos que, enquanto eu sou uma pessoa de verdade, você é um mero crud pra eu poder gerar o meu designe bonitinho.',
      isMypost: false,
    },
    {
      id: '3',
      name: 'Lis',
      title:
        'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      message:
        'Infelizmente venho reparando no padrão de postagem dessa rede, é importante lembrarmos que, enquanto eu sou uma pessoa de verdade, você é um mero crud pra eu poder gerar o meu designe bonitinho.',
      isMypost: false,
    },
    {
      id: '4',
      name: 'Nunes',
      title:
        'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      message:
        'Infelizmente venho reparando no padrão de postagem dessa rede, é importante lembrarmos que, enquanto eu sou uma pessoa de verdade, você é um mero crud pra eu poder gerar o meu designe bonitinho.',
      isMypost: false,
    },
  ] as User[];

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
          <FlatList
            data={users}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <PostCard data={item} />}
            showsVerticalScrollIndicator={false}
          />
        </Posts>
      </Content>
    </Container>
  );
}
