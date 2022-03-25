import React from 'react';
import { HighLightCard } from '../../components';

import {
  Container,
  Header,
  HighLightCards,
  Icon,
  Photo,
  User,
  UserGreeting,
  UserInfo,
  UserName,
  UserWrapper,
} from './styles';

const Dashboard = () => {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{
                uri: 'https://avatars.githubusercontent.com/u/80060167?v=4',
              }}
            />
            <User>
              <UserGreeting>Hi,</UserGreeting>
              <UserName>Grasi</UserName>
            </User>
          </UserInfo>
          <Icon>X</Icon>
        </UserWrapper>
      </Header>
      <HighLightCards>
        <HighLightCard title={'Entrada'} amount={'256,00'} lastTransaction={'april, 4'} type='up'/>
        <HighLightCard title={'salida'} amount={'26,00'} lastTransaction={'may, 7'} type='down'/>
        <HighLightCard title={'total'} amount={'230,00'} lastTransaction={'may, 7'} type='total'/>

      </HighLightCards>
    </Container>
  );
};

export { Dashboard };
