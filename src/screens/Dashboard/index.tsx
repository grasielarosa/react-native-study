import React, { useState, useEffect, useCallback } from 'react';
import { ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

import { HighLightCard, TransactionCard } from '../../components';
import { TransactionCardProps } from '../../components/parts/TransactionCard';

import {
  Container,
  Header,
  HighLightCards,
  Photo,
  User,
  UserGreeting,
  UserInfo,
  UserName,
  UserWrapper,
  Transactions,
  TitleList,
  TransactionList,
  LogoutButton,
  LoadContainer,
} from './styles';

export interface DataListProps extends TransactionCardProps {
  id: number;
}
interface HighLightProps {
  amount: string;
}
interface HighLightValues {
  totalInflows: HighLightProps;
  totalOutflows: HighLightProps;
  total: HighLightProps;
}

const Dashboard = () => {
  const theme = useTheme();
  const [isLoading, setisLoading] = useState(true);
  const [data, setData] = useState<DataListProps[]>([]);
  const [highLightValues, setHighLightValues] = useState<HighLightValues>();
  const dataKey = '@gofinances:transactions';

  const loadTransactions = async () => {
    // await AsyncStorage.removeItem(dataKey);
    const response = await AsyncStorage.getItem(dataKey);
    const transactions = response ? JSON.parse(response) : [];

    let inflows = 0;
    let outflows = 0;

    const transactionsFormatted: DataListProps[] = transactions.map(
      (item: DataListProps) => {
        if (item.type === 'positive') {
          inflows += Number(item.amount);
        } else {
          outflows += Number(item.amount);
        }

        const amount = Number(item.amount).toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        });

        const date = Intl.DateTimeFormat('pt-BR', {
          day: '2-digit',
          month: '2-digit',
          year: '2-digit',
        }).format(new Date(item.date));

        return {
          id: item.id,
          name: item.name,
          amount,
          type: item.type,
          category: item.category,
          date,
        };
      },
    );

    setData(transactionsFormatted);
    // const lastTransactionAdded = data.filter(item => data.type === 'positive');

    const total = inflows - outflows;
    setHighLightValues({
      totalInflows: {
        amount: inflows.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }),
      },
      totalOutflows: {
        amount: outflows.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }),
      },
      total: {
        amount: total.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }),
      },
    });
    setisLoading(false);
  };

  useEffect(() => {
    loadTransactions();
  }, []);

  useFocusEffect(
    useCallback(() => {
      loadTransactions();
    }, []),
  );

  return (
    <Container>
      {isLoading ? (
        <LoadContainer>
          <ActivityIndicator color={'red'} />
        </LoadContainer>
      ) : (
        <>
          <Header>
            <UserWrapper>
              <UserInfo>
                <Photo
                  source={{
                    uri: 'https://avatars.githubusercontent.com/u/80060167?v=4',
                  }}
                />
                <User>
                  <UserGreeting>Hi,</UserGreeting>
                  <UserName>Grasi</UserName>
                </User>
              </UserInfo>
              <LogoutButton>
                <Icon
                  name="power-settings-new"
                  size={RFValue(18)}
                  color={theme.colors.secondary}
                />
              </LogoutButton>
            </UserWrapper>
          </Header>
          <HighLightCards>
            <HighLightCard
              title={'total'}
              amount={highLightValues.total.amount}
              lastTransaction={'may, 7'}
              type="total"
            />
            <HighLightCard
              title={'Entradas'}
              amount={highLightValues.totalInflows.amount}
              lastTransaction={'april, 4'}
              type="positive"
            />
            <HighLightCard
              title={'Saídas'}
              amount={highLightValues.totalOutflows.amount}
              lastTransaction={'may, 7'}
              type="negative"
            />
          </HighLightCards>
          <Transactions>
            <TitleList>Listagem</TitleList>
            <TransactionList<DataListProps>
              data={data}
              keyExtractor={item => item.id}
              renderItem={({ item }) => <TransactionCard data={item} />}
            />
          </Transactions>
        </>
      )}
    </Container>
  );
};

export { Dashboard };
