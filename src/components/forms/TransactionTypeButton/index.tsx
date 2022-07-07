import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { Container, IconStyled, Title, Button } from './styles';

interface Props extends RectButtonProps {
  title: string;
  type: 'up' | 'down';
  isActive: boolean;
}

const icons = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle',
};

const TransactionTypeButton = ({ title, type, isActive, ...rest }: Props) => {
  return (
    <Container isActive={isActive} type={type}>
      <Button {...rest}>
        <IconStyled isActive={isActive} type={type} name={icons[type]} />
        <Title type={type}>{title}</Title>
      </Button>
    </Container>
  );
};

export { TransactionTypeButton };
