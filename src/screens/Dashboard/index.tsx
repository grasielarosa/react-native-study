/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useCallback } from 'react';
import { ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import { useTheme } from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTranslation } from 'react-i18next';

import { useAuth } from '../../hooks/auth';
import {
  HighLightCard,
  TransactionCard,
  TransactionCardProps,
} from '../../components';

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
  lastTransaction: string;
}
interface HighLightValues {
  totalInflows: HighLightProps;
  totalOutflows: HighLightProps;
  total: HighLightProps;
}

const Dashboard = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const [isLoading, setisLoading] = useState(true);
  const [data, setData] = useState<DataListProps[]>([]);
  const [highLightValues, setHighLightValues] = useState<HighLightValues>(
    {} as HighLightValues,
  );
  const { signOut, userInfo } = useAuth();

  const getLastTransactionDate = (
    collection: DataListProps[],
    type: 'positive' | 'negative',
  ) => {
    const collectionFiltered = collection.filter(
      transaction => transaction.type === type,
    );

    if (collectionFiltered.length === 0) {
      return 0;
    }
    const lastTransactionAdded = new Date(
      Math.max.apply(
        Math,
        collectionFiltered.map(transaction =>
          new Date(transaction.date).getTime(),
        ),
      ),
    );

    return `${lastTransactionAdded.getDate()} de ${lastTransactionAdded.toLocaleString(
      'pt-BR',
      { month: 'long' },
    )}`;
  };

  const loadTransactions = async () => {
    const dataKey = `@gofinances:transactions_user:${userInfo?.id}`;
    // await AsyncStorage.removeItem('@gofinances:users');
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
    const lastInflowsAdded = getLastTransactionDate(transactions, 'positive');
    const lastOutflowsAdded = getLastTransactionDate(transactions, 'negative');

    const totalInterval =
      lastOutflowsAdded === 0
        ? t('dashboard.noTransactions')
        : `${lastOutflowsAdded}`;

    const total = inflows - outflows;

    setHighLightValues({
      totalInflows: {
        amount: inflows.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }),
        lastTransaction:
          lastInflowsAdded === 0
            ? t('dashboard.noTransactions')
            : `${t('dashboard.lastIncome')} ${lastInflowsAdded}`,
      },
      totalOutflows: {
        amount: outflows.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }),
        lastTransaction:
          lastOutflowsAdded === 0
            ? t('dashboard.noTransactions')
            : `${t('dashboard.lastOutcome')} ${lastOutflowsAdded}`,
      },
      total: {
        amount: total.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }),
        lastTransaction: totalInterval,
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
    <Container testID="dashboard-screen">
      {isLoading ? (
        <LoadContainer>
          <ActivityIndicator color={theme.colors.primary} size="large" />
        </LoadContainer>
      ) : (
        <>
          <Header>
            <UserWrapper>
              <UserInfo>
                <Photo
                  source={{
                    uri: userInfo?.photo,
                  }}
                />
                <User>
                  <UserGreeting>{t('dashboard.greeting')}</UserGreeting>
                  <UserName>{userInfo?.name}</UserName>
                </User>
              </UserInfo>
              <LogoutButton onPress={signOut} testID="logout-button">
                <Icon
                  name="power-settings-new"
                  size={RFValue(18)}
                  color={theme.colors.secondary}
                />
              </LogoutButton>
            </UserWrapper>
          </Header>
          <HighLightCards testID="dashboard-cards">
            <HighLightCard
              title={t('dashboard.total')}
              amount={highLightValues.total.amount}
              lastTransaction={highLightValues.total.lastTransaction}
              type="total"
            />
            <HighLightCard
              title={t('dashboard.incomes')}
              amount={highLightValues.totalInflows.amount}
              lastTransaction={highLightValues.totalInflows.lastTransaction}
              type="positive"
            />
            <HighLightCard
              title={t('dashboard.outcomes')}
              amount={highLightValues.totalOutflows.amount}
              lastTransaction={highLightValues.totalOutflows.lastTransaction}
              type="negative"
            />
          </HighLightCards>
          <Transactions>
            <TitleList>{t('dashboard.list')}</TitleList>
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
