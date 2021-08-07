import React from 'react';
import { StatusBar } from 'react-native';
import { Header } from '../../components';

import {
  Container,
  Content,
  Body,
  InformationsContainer,
  UserInformation,
  UserLabel,
  UserInfo,
  CompanyInformationContainer,
  CompanyTitle,
  CompanyInformation,
  CompanyInfoLabel,
  CompanyInfo,
} from './styles';

export function Profile() {
  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Content>
        <Header userName="Breth" name="Leane Graham" type="profile" />
        <Body>
          <InformationsContainer>
            <UserInformation>
              <UserLabel>Email</UserLabel>
              <UserInfo>incere@april.bi</UserInfo>
            </UserInformation>
            <UserInformation>
              <UserLabel>WebSite</UserLabel>
              <UserInfo>hildegard.org</UserInfo>
            </UserInformation>
            <UserInformation>
              <UserLabel>Phone</UserLabel>
              <UserInfo>1-770-736-8031 x56442</UserInfo>
            </UserInformation>
            <CompanyInformationContainer>
              <CompanyTitle>Company</CompanyTitle>
              <CompanyInformation>
                <CompanyInfoLabel>Name:</CompanyInfoLabel>
                <CompanyInfo>Romaguera-Crona</CompanyInfo>
              </CompanyInformation>
              <CompanyInformation>
                <CompanyInfoLabel>Catch Phrase:</CompanyInfoLabel>
                <CompanyInfo>
                  Multi-layered client-server neural-net
                </CompanyInfo>
              </CompanyInformation>
              <CompanyInformation>
                <CompanyInfoLabel>BS:</CompanyInfoLabel>
                <CompanyInfo>harness real-time e-markets</CompanyInfo>
              </CompanyInformation>
            </CompanyInformationContainer>
          </InformationsContainer>
        </Body>
      </Content>
    </Container>
  );
}
