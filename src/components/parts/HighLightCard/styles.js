import React from 'react';
import styled, {css} from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';


export const Amount = styled.Text`
  color: ${({ theme }) => theme.colors.textFaded};
  font-size: ${RFValue(32)}px;
  margin-top: 38px;
`;

export const Container = styled.View`
background-color: ${({ theme }) => theme.colors.card};
width: ${RFValue(300)}px;
border-radius: 5px;
padding: 19px 23px;
padding-bottom:  ${RFValue(42)}px;
margin-right: 16px;

`;

export const Footer = styled.View``;

export const Header = styled.View`
flex-direction: row;
justify-content: space-between;
`;

export const Icon = styled.Text`
 font-size: ${RFValue(40)}px;

 ${(props) => props.type === 'up' && css`
 color: ${({theme}) => theme.colors.primary}
 `};
 ${(props) => props.type === 'down' && css`
 color: ${({theme}) => theme.colors.secondary}
 `};
 ${(props) => props.type === 'total' && css`
 color: ${({theme}) => theme.colors.primary}
 `};

`;

export const LastTransaction = styled.Text`
  color: ${({ theme }) => theme.colors.text};
 font-size: ${RFValue(12)}px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text};
 font-size: ${RFValue(14)}px;
`;
