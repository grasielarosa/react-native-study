import React from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { BorderlessButton } from 'react-native-gesture-handler';

import { DataListProps } from '.';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.body};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(42)}px;
  background-color: ${({ theme }) => theme.colors.primary};
  justify-content: center;
  align-items: flex-start;
  flex-direction: row;
`;

export const HighLightCards = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingHorizontal: 24 },
})`
  width: 100%;
  position: absolute;
  margin-top: ${RFPercentage(20)}px;
`;

export const LogoutButton = styled(BorderlessButton)``;

export const Photo = styled.Image`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;

  border-radius: 10px;
`;

export const User = styled.View`
  margin-left: 17px;
`;

export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const UserGreeting = styled.Text`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${RFValue(18)}px;
`;

export const UserName = styled.Text`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${RFValue(18)}px;
  font-weight: bold;
`;

export const UserWrapper = styled.View`
  width: 100%;
  padding: 0px 24px;
  margin-top: ${RFValue(28)}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Transactions = styled.View`
  flex: 1;
  padding: 0 24px;
  margin-top: ${RFPercentage(12)}px;
`;

export const TitleList = styled.Text`
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: bold;
  margin-bottom: 16px;
`;

export const TransactionList = styled(FlatList).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: 20,
  },
})`` as React.ComponentType as new <DataListProps>() => FlatList<DataListProps>;

export const LoadContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
