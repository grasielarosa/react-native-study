import React, { useState, useEffect } from 'react';
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

import {
  InputForm,
  Button,
  TransactionTypeButton,
  CategorySelect,
} from '../../components';

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
  name: Yup.string().required('campo nome é obrigatório'),
  amount: Yup.number()
    .typeError('informe um valor numérico')
    .positive('o valor não pode ser negatiovo')
    .required('campo preço é obrigatório'),
});

const Register = () => {
  const dataKey = '@gofinances:transactions';
  const [transactionType, setTransactionType] = useState('');
  const [visible, setVisible] = useState(false);
  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categoria',
  });

  // const navigation = useNavigation();
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
      return Alert.alert('Selecione o tipo da transação');
    }
    if (category.key === 'category') {
      return Alert.alert('Selecione uma categoria');
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

      await AsyncStorage.setItem(dataKey, JSON.stringify(dataFormatted));

      reset();
      setTransactionType('');
      setCategory({
        key: 'category',
        name: 'Categoria',
      });

      navigate('Listagem');
    } catch (error) {
      console.error('screen:Register\nmethod:HandleRegister\nerror', error);
      Alert.alert('Não foi possível salvar esta transação.');
    }
  };

  // useEffect(() => {
  //   // loadTransactions();
  //   const remove = async () => {
  //     await AsyncStorage.removeItem(dataKey);

  //   };
  //   remove();
  // }, []);

  return (
    <TouchableWithoutFeedback
      onPress={Keyboard.dismiss}
      containerStyle={{ flex: 1 }}
      style={{ flex: 1 }}>
      <Container>
        <Header>
          <Title>Cadastro</Title>
        </Header>
        <Form>
          <Fields>
            <InputForm
              control={control}
              name="name"
              placeholder="nome"
              autoCorrect={false}
              error={errors?.name && errors?.name.message}
            />
            <InputForm
              control={control}
              name="amount"
              placeholder="preço"
              keyboardType="numeric"
              error={errors?.amount && errors?.amount.message}
            />
            <TransactionType>
              <TransactionTypeButton
                title="income"
                type="up"
                onPress={() => setTransactionType('positive')}
                isActive={transactionType === 'positive'}
              />
              <TransactionTypeButton
                title="outcome"
                type="down"
                onPress={() => setTransactionType('negative')}
                isActive={transactionType === 'negative'}
              />
            </TransactionType>
            <CategorySelect
              title={category.name}
              onPress={() => setVisible(true)}
            />
          </Fields>
          <Button title="enviar" onPress={handleSubmit(handleRegister)} />
        </Form>

        <Modal visible={visible}>
          <CategorySelectScreen
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
