import React from 'react';
import { useTranslation } from 'react-i18next';

import {
  Amount,
  Container,
  Footer,
  Header,
  IconStyled,
  LastTransaction,
  Title,
} from './styles';

interface Props {
  type: 'positive' | 'negative' | 'total';
  title: string;
  amount: string;
  lastTransaction: string;
}

const icon = {
  positive: 'arrow-up-circle',
  negative: 'arrow-down-circle',
  total: 'dollar-sign',
};

const HighLightCard = ({ amount, title, type, lastTransaction }: Props) => {
  const { t } = useTranslation();
  return (
    <Container type={type}>
      <Header>
        <Title>{title}</Title>
        <IconStyled type={type} name={icon[type]} />
      </Header>
      <Footer>
        <Amount>{amount}</Amount>
        <LastTransaction>
          {t('highLightCard.message')} {lastTransaction}
        </LastTransaction>
      </Footer>
    </Container>
  );
};

export { HighLightCard };
