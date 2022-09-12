import React from 'react';

import { Container, Title, Amount } from './styles';

interface Props {
  title: string;
  amount: string;
  color: string;
  testID: string;
}

const HistoryCard = ({ title, amount, color, testID }: Props) => {
  return (
    <Container color={color} testID={testID}>
      <Title>{title}</Title>
      <Amount>{amount}</Amount>
    </Container>
  );
};

export { HistoryCard };
