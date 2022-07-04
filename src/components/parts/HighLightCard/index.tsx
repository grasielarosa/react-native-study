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

interface Props {
  type: 'up' | 'down' | 'total';
  title: string;
  amount: string;
  lastTransaction: string;
}

const icon = {
  up: '%',
  down: '#',
  total: '$',
};

const HighLightCard = ({ amount, title, type, lastTransaction }: Props) => {
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
