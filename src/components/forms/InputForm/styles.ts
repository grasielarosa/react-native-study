import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  width: 100%;
`;

export const Error = styled.Text`
  color: ${({ theme }) => theme.colors.outcomeValue};
  font-size: ${RFValue(10)}px;
  margin-bottom: 7px;
`;
