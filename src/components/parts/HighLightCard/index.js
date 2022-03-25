import { View, Text } from 'react-native';
import React from 'react';
import {
  Amount,
  Container,
  Footer,
  Header,
  Icon,
  LastTransaction,
  Title,
} from './styles';

const icon = {
  up: '%',
  down: '#',
  total: '$'
}

const HighLightCard = ({amount, title, type, lastTransaction}) => {
  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        <Icon type={type}>{icon[type]}</Icon>
      </Header>
      <Footer>
        <Amount>USD {amount}</Amount>
        <LastTransaction>last transaction: {lastTransaction}</LastTransaction>
      </Footer>
    </Container>
  );
};

export { HighLightCard };
