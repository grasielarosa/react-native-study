import React from 'react';
import { RawButtonProps, RectButtonProps } from 'react-native-gesture-handler';

import { Container, Title } from './styles';

interface Props extends RectButtonProps {
  title: string;
  onPress: () => void;
  testID: string;
  // accessibilityLabel?: string;
}

const Button = ({
  title,
  onPress,
  // accessibilityLabel,
  testID,
  ...rest
}: Props) => {
  return (
    <Container onPress={onPress} {...rest}>
      <Title testID={testID}>{title}</Title>
    </Container>
  );
};

export { Button };
