import React from 'react';
import { Container, Category, IconStyled } from './styles';

interface Props {
  title: string;
  onPress: () => void;
}

const CategorySelect = ({ title, onPress }: Props) => {
  return (
    <Container onPress={onPress}>
      <Category>{title}</Category>
      <IconStyled name="keyboard-arrow-down" />
    </Container>
  );
};

export { CategorySelect };
