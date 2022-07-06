import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { Container, Icon, Title, Button } from './styles';

interface Props extends RectButtonProps {
  title: string;
  type: 'up' | 'down';
  isActive: boolean;
}

const icons = {
  up: '%',
  down: '#',
};

const TransactionTypeButton = ({ title, type, isActive, ...rest }: Props) => {
  return (
    <Container isActive={isActive} type={type}>
      <Button {...rest}>
        <Icon isActive={isActive} type={type}>
          {icons[type]}
        </Icon>
        <Title type={type}>{title}</Title>
      </Button>
    </Container>
  );
};

export { TransactionTypeButton };
