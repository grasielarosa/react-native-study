import React, { useState } from 'react';
import { Modal, Keyboard, Alert } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';
import { useForm } from 'react-hook-form';
import {
  useNavigation,
  NavigationProp,
  ParamListBase,
} from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

import {
  InputForm,
  Button,
  TransactionTypeButton,
  CategorySelect,
} from '../../components';

import { useAuth } from '../../hooks/auth';
import { CategorySelectScreen } from '../../screens';
import {
  Container,
  Header,
  Title,
  Form,
  Fields,
  TransactionType,
} from './styles';

interface FormData {
  [name: string]: string;
}

const schema = Yup.object().shape({
  name: Yup.string().required('register.schema.fieldName'),
  amount: Yup.number()
    .typeError('register.schema.fieldNumber')
    .positive('register.schema.fieldValue')
    .required('register.schema.fieldPrice'),
});

const Register = () => {
  const { userInfo } = useAuth();
  const { t } = useTranslation();
  const dataKey = `@gofinances:transactions_user:${userInfo?.id}`;
  const [transactionType, setTransactionType] = useState('');
  const [visible, setVisible] = useState(false);
  const [category, setCategory] = useState({
    key: 'category',
    name: t('category'),
  });

  const { navigate }: NavigationProp<ParamListBase> = useNavigation();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleRegister = async (form: FormData) => {
    if (!transactionType) {
      return Alert.alert(t('register.typeAlert'));
    }
    if (category.key === 'category') {
      return Alert.alert(t('register.categoryAlert'));
    }

    const newTransaction = {
      id: String(uuid.v4()),
      name: form.name,
      amount: form.amount,
      type: transactionType,
      category: category.key,
      date: new Date(),
    };

    try {
      const getData = await AsyncStorage.getItem(dataKey);
      const currentData = getData ? JSON.parse(getData) : [];
      const dataFormatted = [newTransaction, ...currentData];
      // await AsyncStorage.removeItem(dataKey);
      await AsyncStorage.setItem(dataKey, JSON.stringify(dataFormatted));

      reset();
      setTransactionType('');
      setCategory({
        key: 'category',
        name: t('category'),
      });

      navigate(t('navigation.dashboard'));
    } catch (error) {
      console.error('screen:Register\nmethod:HandleRegister\nerror', error);
      Alert.alert(t('register.errorAlert'));
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={Keyboard.dismiss}
      containerStyle={{ flex: 1 }}
      style={{ flex: 1 }}>
      <Container testID="register-screen">
        <Header>
          <Title>{t('register.title')}</Title>
        </Header>
        <Form>
          <Fields>
            <InputForm
              testID="input-name"
              control={control}
              name="name"
              placeholder={t('register.input.name')}
              autoCorrect={false}
              error={errors?.name && t(`${errors?.name.message}`)}
            />
            <InputForm
              testID="input-amount"
              control={control}
              name="amount"
              placeholder={t('register.input.amount')}
              keyboardType="numeric"
              error={errors?.amount && t(`${errors?.amount.message}`)}
            />
            <TransactionType>
              <TransactionTypeButton
                testID="income-button"
                title={t('register.income')}
                type="up"
                onPress={() => setTransactionType('positive')}
                isActive={transactionType === 'positive'}
              />
              <TransactionTypeButton
                testID="outcome-button"
                title={t('register.outcome')}
                type="down"
                onPress={() => setTransactionType('negative')}
                isActive={transactionType === 'negative'}
              />
            </TransactionType>
            <CategorySelect
              testID="category-select"
              title={`${t(category.name)}`}
              onPress={() => setVisible(true)}
            />
          </Fields>
          <Button
            testID="register-button"
            title={t('register.button')}
            onPress={handleSubmit(handleRegister)}
          />
        </Form>

        <Modal visible={visible}>
          <CategorySelectScreen
            testID="categories-modal"
            category={category}
            setCategory={setCategory}
            closeSelectCategory={() => setVisible(false)}
          />
        </Modal>
      </Container>
    </TouchableWithoutFeedback>
  );
};

export { Register };
