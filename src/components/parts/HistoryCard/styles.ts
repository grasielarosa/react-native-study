import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

interface ContainerProps {
  color: string;
}

export const Container = styled.View<ContainerProps>`
  background-color: ${({ theme }) => theme.colors.secondary};
  flex-direction: row;
  justify-content: space-between;
  padding: 13px 24px;
  border-radius: 5px;
  border-left-width: 5px;
  border-left-color: ${({ color }) => color};
  margin-bottom: 8px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(15)}px;
`;

export const Amount = styled.Text`
  font-size: ${RFValue(15)}px;
  font-weight: bold;
`;
