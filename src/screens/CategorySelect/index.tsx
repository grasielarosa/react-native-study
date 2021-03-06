import React from 'react';
import { FlatList } from 'react-native';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

import { Button } from '../../components';
import { categories } from '../../utils';
import {
  Container,
  Header,
  Title,
  Category,
  IconStyled,
  Name,
  Separator,
  Footer,
} from './styles';

interface Category {
  key: string;
  name: string;
}
interface Props {
  category: Category;
  setCategory: (category: Category) => void;
  closeSelectCategory: () => void;
}

const CategorySelectScreen = gestureHandlerRootHOC(
  ({ category, closeSelectCategory, setCategory }: Props) => {
    return (
      <Container>
        <Header>
          <Title>Categorias</Title>
        </Header>
        <FlatList
          data={categories}
          style={{ flex: 1, width: '100%' }}
          keyExtractor={item => item.key}
          renderItem={({ item }) => (
            <Category
              onPress={() => setCategory(item)}
              isActive={category.key === item.key}>
              <IconStyled name={item.icon} />
              <Name>{item.name}</Name>
            </Category>
          )}
          ItemSeparatorComponent={() => <Separator />}
        />
        <Footer>
          <Button title="Selecionar" onPress={closeSelectCategory} />
        </Footer>
      </Container>
    );
  },
);

export { CategorySelectScreen };
