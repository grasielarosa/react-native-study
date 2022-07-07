import React from 'react';
import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/Feather';

interface TypeProps {
  type: 'positive' | 'negative' | 'total';
}
export const Amount = styled.Text`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${RFValue(32)}px;
  margin-top: 38px;
`;

export const Container = styled.View<TypeProps>`
  ${props =>
    props.type !== 'total' &&
    css`
      background-color: ${({ theme }) => theme.colors.complementary};
    `};
  ${props =>
    props.type === 'total' &&
    css`
      background-color: ${({ theme }) => theme.colors.secondary};
    `};

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

export const IconStyled = styled(Icon)<TypeProps>`
  font-size: ${RFValue(40)}px;

  ${props =>
    props.type === 'positive' &&
    css`
      color: ${({ theme }) => theme.colors.incomeValue};
    `};
  ${props =>
    props.type === 'negative' &&
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
