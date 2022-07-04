import React from 'react';
import { HighLightCard, TransactionCard } from '../../components';
import { TransactionCardProps } from '../../components/parts/TransactionCard';

import {
  Container,
  Header,
  HighLightCards,
  Icon,
  Photo,
  User,
  UserGreeting,
  UserInfo,
  UserName,
  UserWrapper,
  Transactions,
  TitleList,
  TransactionList,
} from './styles';

export interface DataListProps extends TransactionCardProps {
  id: number;
}
const Dashboard = () => {
  const data: DataListProps[] = [
    {
      id: 1,
      type: 'positive',
      title: 'Desenvolviment de Site',
      amount: '12.000,00',
      category: {
        name: 'vendas',
        icon: '$',
      },
      date: '12/04/2022',
    },
    {
      id: 2,
      type: 'negative',
      title: 'Aluguel',
      amount: '1.000,00',
      category: {
        name: 'aluguel',
        icon: '$',
      },
      date: '12/04/2022',
    },
    {
      id: 3,
      type: 'negative',
      title: 'Rancho',
      amount: '500,00',
      category: {
        name: 'alimentação',
        icon: '$',
      },
      date: '12/04/2022',
    },
    {
      id: 4,
      type: 'negative',
      title: 'Gasolina',
      amount: '600,00',
      category: {
        name: 'gasolina',
        icon: '$',
      },
      date: '12/04/2022',
    },
  ];

  return (
    <Container>
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
          <Icon>X</Icon>
        </UserWrapper>
      </Header>
      <HighLightCards>
        <HighLightCard
          title={'Entrada'}
          amount={'256,00'}
          lastTransaction={'april, 4'}
          type="up"
        />
        <HighLightCard
          title={'salida'}
          amount={'26,00'}
          lastTransaction={'may, 7'}
          type="down"
        />
        <HighLightCard
          title={'total'}
          amount={'230,00'}
          lastTransaction={'may, 7'}
          type="total"
        />
      </HighLightCards>
      <Transactions>
        <TitleList>Listagem</TitleList>
        <TransactionList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />
      </Transactions>
    </Container>
  );
};

export { Dashboard };
