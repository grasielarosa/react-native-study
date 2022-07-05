import React from 'react';
import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

interface TypeProps {
  type: 'up' | 'down' | 'total';
}
export const Amount = styled.Text`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${RFValue(32)}px;
  margin-top: 38px;
`;

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.complementary};
  width: ${RFValue(300)}px;
  border-radius: 5px;
  padding: 19px 23px;
  padding-bottom: ${RFValue(42)}px;
  margin-right: 16px;
`;

export const Footer = styled.View``;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Icon = styled.Text<TypeProps>`
  font-size: ${RFValue(40)}px;

  ${props =>
    props.type === 'up' &&
    css`
      color: ${({ theme }) => theme.colors.incomeValue};
    `};
  ${props =>
    props.type === 'down' &&
    css`
      color: ${({ theme }) => theme.colors.outcomeValue};
    `};
  ${props =>
    props.type === 'total' &&
    css`
      color: ${({ theme }) => theme.colors.primary};
    `};
`;

export const LastTransaction = styled.Text`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${RFValue(12)}px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${RFValue(14)}px;
`;
