import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import { Header, Input } from '../../components';

import {
  Container,
  Content,
  Body,
  InformationsContainer,
  UserInformation,
  UserLabel,
  CompanyInformationContainer,
  CompanyTitle,
  CompanyInformation,
  CompanyInfoLabel,
} from './styles';

export function EditProfile() {
  const [email, setEmail] = useState('');

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Content>
        <Header userName="Júnior" name="Júnior Nunes" isMyProfile />
        <Body>
          <InformationsContainer>
            <UserInformation>
              <UserLabel>Email</UserLabel>
              <Input
                iconName="mail"
                title="Email"
                value={email}
                onChangeText={setEmail}
              />
            </UserInformation>
            <UserInformation>
              <UserLabel>WebSite</UserLabel>
              <Input iconName="mail" title="Email" />
            </UserInformation>
            <UserInformation>
              <UserLabel>Phone</UserLabel>
              <Input iconName="mail" title="Email" />
            </UserInformation>
            <CompanyInformationContainer>
              <CompanyTitle>Company</CompanyTitle>
              <CompanyInformation>
                <CompanyInfoLabel>Name:</CompanyInfoLabel>
                <Input iconName="mail" title="Email" />
              </CompanyInformation>
              <CompanyInformation>
                <CompanyInfoLabel>Catch Phrase:</CompanyInfoLabel>
                <Input iconName="mail" title="Email" />
              </CompanyInformation>
              <CompanyInformation>
                <CompanyInfoLabel>BS:</CompanyInfoLabel>
                <Input iconName="mail" title="Email" />
              </CompanyInformation>
            </CompanyInformationContainer>
          </InformationsContainer>
        </Body>
      </Content>
    </Container>
  );
}
