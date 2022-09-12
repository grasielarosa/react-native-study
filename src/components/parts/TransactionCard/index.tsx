import React from 'react';
import { categories } from '../../../utils';
import { useTranslation } from 'react-i18next';

import {
  Container,
  Title,
  Amount,
  Footer,
  Category,
  IconStyled,
  CategoryName,
  Date,
} from './style';

export interface TransactionCardProps {
  type: 'positive' | 'negative';
  name: string;
  amount: string;
  category: string;
  date: string;
}

interface Props {
  data: TransactionCardProps;
  testID: string;
}

const TransactionCard = ({ data, testID }: Props) => {
  const { t } = useTranslation();
  const [category] = categories.filter(item => item.key === data.category);
  return (
    <Container testID={testID}>
      <Title>{data.name}</Title>
      <Amount type={data.type}>
        {data.type === 'negative' && '- '}
        {data.amount}
      </Amount>
      <Footer>
        <Category>
          <IconStyled name={category.icon} />
          <CategoryName>{t(`${category.name}`)}</CategoryName>
        </Category>
        <Date>{data.date}</Date>
      </Footer>
    </Container>
  );
};

export { TransactionCard };
