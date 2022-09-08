import React from 'react';
import { FlatList } from 'react-native';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { useTranslation } from 'react-i18next';

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
  testID: string;
}

const CategorySelectScreen = gestureHandlerRootHOC(
  ({ category, closeSelectCategory, setCategory, testID }: Props) => {
    const { t } = useTranslation();

    return (
      <Container testID={testID}>
        <Header>
          <Title>{t('categorySelect.title')}</Title>
        </Header>
        <FlatList
          data={categories}
          style={{ flex: 1, width: '100%' }}
          keyExtractor={item => item.key}
          renderItem={({ item }) => (
            <Category
              onPress={() => setCategory(item)}
              testID={item.key}
              isActive={category.key === item.key}>
              <IconStyled name={item.icon} />
              <Name>{t(`${item.name}`)}</Name>
            </Category>
          )}
          ItemSeparatorComponent={() => <Separator />}
        />
        <Footer>
          <Button
            title={t('categorySelect.button')}
            onPress={closeSelectCategory}
            testID="category-select-button"
          />
        </Footer>
      </Container>
    );
  },
);

export { CategorySelectScreen };
