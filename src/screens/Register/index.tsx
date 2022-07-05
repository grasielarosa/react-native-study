import React, { useState } from 'react';
import { Modal, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

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
  const [transactionType, setTransactionType] = useState('');
  const [visible, setVisible] = useState(false);
  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categoria',
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleRegister = (form: FormData) => {
    if (!transactionType) {
      return Alert.alert('Selecione o tipo da transação');
    }
    if (category.key === 'category') {
      return Alert.alert('Selecione uma categoria');
    }

    const data = {
      name: form.name,
      amount: form.amount,
      transactionType,
      category: category.key,
    };
    console.log(data);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
                onPress={() => setTransactionType('up')}
                isActive={transactionType === 'up'}
              />
              <TransactionTypeButton
                title="outcome"
                type="down"
                onPress={() => setTransactionType('down')}
                isActive={transactionType === 'down'}
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
