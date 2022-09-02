import React from 'react';
import { Alert } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { useAuth } from '../../hooks/auth';
import {
  Container,
  Header,
  TitleWrapper,
  Title,
  SignInTitle,
  Footer,
  FooterWrapper,
} from './styles';
import { SignInSocialButton } from '../../components';
import Logo from '../../assets/logo.svg';
import Apple from '../../assets/apple.svg';
import Google from '../../assets/google.svg';

const SignIn = () => {
  const { siginGoogle } = useAuth();

  const handleSigninGoogle = async () => {
    try {
      siginGoogle();
    } catch (error) {
      console.log(error);
      Alert.alert('');
    }
  };

  return (
    <Container>
      <Header>
        <TitleWrapper>
          <Logo width={RFValue(120)} height={RFValue(68)} />
          <Title>Controle suas finanças de forma muito simples</Title>
        </TitleWrapper>
        <SignInTitle>Faça seu login com uma das contas abaixo</SignInTitle>
      </Header>
      <Footer>
        <FooterWrapper>
          <SignInSocialButton
            title="Entrar com Google"
            onPress={handleSigninGoogle}
            svg={Google}
          />
          <SignInSocialButton title="Entrar com Apple" svg={Apple} />
        </FooterWrapper>
      </Footer>
    </Container>
  );
};

export { SignIn };
