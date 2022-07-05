import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, Icon, Title } from './styles';

interface Props extends TouchableOpacityProps {
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
    <Container isActive={isActive} type={type} {...rest}>
      <Icon isActive={isActive} type={type}>
        {icons[type]}
      </Icon>
      <Title type={type}>{title}</Title>
    </Container>
  );
};

export { TransactionTypeButton };
