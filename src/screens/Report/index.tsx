import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';

import { HistoryCard } from '../../components';
import { categories } from '../../utils';
import { Container, Header, Title, Content } from './styles';

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
  total: string;
  color: string;
}

const Report = () => {
  const [totalByCategories, setTotalByCategories] = useState<CategoryData[]>(
    [],
  );

  const loadData = async () => {
    const dataKey = '@gofinances:transactions';
    const response = await AsyncStorage.getItem(dataKey);
    const responseFormatted = response ? JSON.parse(response) : [];

    const outflows = responseFormatted.filter(
      (outflow: TransactionDataProps) => outflow.type === 'negative',
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
        const total = categorySum.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        });
        totalByCategory.push({
          key: category.key,
          name: category.name,
          total,
          color: category.color,
        });
      }
    });
    setTotalByCategories(totalByCategory);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Container>
      <Header>
        <Title>Resumos por Categoria</Title>
      </Header>
      <Content>
        {totalByCategories.map(item => (
          <HistoryCard
            key={item.key}
            title={item.name}
            amount={item.total}
            color={item.color}
          />
        ))}
      </Content>
    </Container>
  );
};

export { Report };
