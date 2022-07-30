/* eslint-disable react-native/no-inline-styles */
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useCallback, useState } from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { VictoryPie } from 'victory-native';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { addMonths, subMonths, format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { ActivityIndicator } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import { useTheme } from 'styled-components';
import { HistoryCard } from '../../components';
import { categories } from '../../utils';
import {
  Container,
  Header,
  Title,
  Content,
  ChartContainer,
  MonthSelect,
  MonthSelectButton,
  SelectIcon,
  Month,
  LoadContainer,
} from './styles';


export interface TransactionDataProps {
  type: 'positive' | 'negative';
  name: string;
  amount: string;
  category: string;
  date: string;
}

interface CategoryData {
  key: string;
  name: string;
  totalFormatted: string;
  total: number;
  color: string;
  outflowsTotal: string;
}

const Report = () => {
  const theme = useTheme();
  const [selectDate, setSelectDate] = useState(new Date());
  const [totalByCategories, setTotalByCategories] = useState<CategoryData[]>(
    [],
  );
  const [isLoading, setisLoading] = useState(false);

  const handleDateChange = (action: 'next' | 'prev') => {
    if (action === 'next') {
      const newDate = addMonths(selectDate, 1);
      setSelectDate(newDate);
    } else {
      const newDate = subMonths(selectDate, 1);
      setSelectDate(newDate);
    }
  };

  const loadData = async () => {
    setisLoading(true);
    const dataKey = '@gofinances:transactions';
    const response = await AsyncStorage.getItem(dataKey);
    const responseFormatted = response ? JSON.parse(response) : [];

    const outflows = responseFormatted.filter(
      (outflow: TransactionDataProps) =>
        outflow.type === 'negative' &&
        new Date(outflow.date).getMonth() === selectDate.getMonth() &&
        new Date(outflow.date).getFullYear() === selectDate.getFullYear(),
    );

    const outflowsTotal = outflows.reduce(
      (acc: number, outflow: TransactionDataProps) => {
        return (acc += Number(outflow.amount));
      },
      0,
    );

    const totalByCategory: CategoryData[] = [];

    categories.forEach(category => {
      let categorySum = 0;

      outflows.forEach((outflow: TransactionDataProps) => {
        if (outflow.category === category.key) {
          categorySum += Number(outflow.amount);
        }
      });

      if (categorySum > 0) {
        const totalFormatted = categorySum.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        });

        const percent = `${((categorySum / outflowsTotal) * 100).toFixed(0)}%`;

        totalByCategory.push({
          key: category.key,
          name: category.name,
          total: categorySum,
          totalFormatted,
          color: category.color,
          outflowsTotal: percent,
        });
      }
    });
    setTotalByCategories(totalByCategory);
    setisLoading(false);
  };

  useFocusEffect(
    useCallback(() => {
      loadData();
    }, [selectDate]),
  );

  return (
    <Container>
      <Header>
        <Title>Resumos por Categoria</Title>
      </Header>
      {isLoading ? (
        <LoadContainer>
          <ActivityIndicator color={'red'} />
        </LoadContainer>
      ) : (
        <Content
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 24,
            paddingBottom: useBottomTabBarHeight(),
          }}>
          <MonthSelect>
            <MonthSelectButton onPress={() => handleDateChange('prev')}>
              <SelectIcon name="chevron-left" />
            </MonthSelectButton>
            <Month>{format(selectDate, 'MMMM, yyyy', { locale: ptBR })}</Month>
            <MonthSelectButton onPress={() => handleDateChange('next')}>
              <SelectIcon name="chevron-right" />
            </MonthSelectButton>
          </MonthSelect>
          <ChartContainer>
            <VictoryPie
              data={totalByCategories}
              x="outflowsTotal"
              y="total"
              colorScale={totalByCategories.map(category => category.color)}
              style={{
                labels: {
                  fontSize: RFValue(18),
                  fontWeight: 'bold',
                  fill: theme.colors.textSecondary,
                },
              }}
              labelRadius={50}
            />
          </ChartContainer>
          {totalByCategories.map(item => (
            <HistoryCard
              key={item.key}
              title={item.name}
              amount={item.totalFormatted}
              color={item.color}
            />
          ))}
        </Content>
      )}
    </Container>
  );
};

export { Report };
