import React from 'react';
import styled, { css } from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

interface Props {
  type: 'positive' | 'negative';
}

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.complementary};
  border-radius: 5px;
  padding: 17px 24px;
  margin-bottom: 16px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: bold;
`;

export const Amount = styled.Text<Props>`
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-top: 2px;
  color: ${({ theme, type }) =>
    type === 'positive' ? theme.colors.incomeValue : theme.colors.outcomeValue};
`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 19px;
`;

export const Category = styled.Text`
  flex-direction: row;
  align-items: center;
  flex: 1;
`;

export const Icon = styled.Text`
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const CategoryName = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.primary};
  margin-left: 17px;
`;

export const Date = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.primary};
`;
