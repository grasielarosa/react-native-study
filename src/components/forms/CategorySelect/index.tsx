import React from 'react';
import { Container, Category, IconStyled } from './styles';

interface Props {
  title: string;
  onPress: () => void;
  testID?: string;
}

const CategorySelect = ({ title, onPress, testID }: Props) => {
  return (
    <Container onPress={onPress} testID={testID}>
      <Category>{title}</Category>
      <IconStyled name="keyboard-arrow-down" />
    </Container>
  );
};

export { CategorySelect };
