import React from 'react';
import { Container, Category, Icon } from './styles';

interface Props {
  title: string;
  onPress: () => void;
}

const CategorySelect = ({ title, onPress }: Props) => {
  return (
    <Container onPress={onPress}>
      <Category>{title}</Category>
      <Icon>v</Icon>
    </Container>
  );
};

export { CategorySelect };
