import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

interface TypeProps {
  type: 'up' | 'down';
}

interface ContainerProps {
  isActive: boolean;
  type: 'up' | 'down';
}

export const Container = styled.View<ContainerProps>`
  width: 48%;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 5px;

  ${({ isActive, type }) =>
    isActive &&
    type === 'up' &&
    css`
      background-color: ${({ theme }) => theme.colors.incomeLigth};
      border: none;
    `}
  ${({ isActive, type }) =>
    isActive &&
    type === 'down' &&
    css`
      background-color: ${({ theme }) => theme.colors.outcomeLigth};
      border: none;
    `}
`;

export const Button = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 16px;
`;

export const Icon = styled.Text<ContainerProps>`
  font-size: ${RFValue(18)}px;
  margin-right: 12px;

  color: ${({ theme, type }) =>
    type === 'up' ? theme.colors.incomeLigth : theme.colors.outcomeLigth};
  font-weight: bold;

  ${({ isActive, type }) =>
    isActive &&
    type === 'up' &&
    css`
      color: ${({ theme }) => theme.colors.incomeValue};
    `}
  ${({ isActive, type }) =>
    isActive &&
    type === 'down' &&
    css`
      color: ${({ theme }) => theme.colors.outcomeValue};
    `}
`;

export const Title = styled.Text<TypeProps>`
  color: ${({ theme }) => theme.colors.body};
  font-size: ${RFValue(14)}px;
  font-weight: bold;
`;
