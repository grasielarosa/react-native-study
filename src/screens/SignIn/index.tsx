import React, { useState } from 'react';
import { ActivityIndicator, Alert, Platform} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';

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
  const [isLoading, setisLoading] = useState(false);
  const theme = useTheme();

  const handleSigninGoogle = async () => {
    try {
      setisLoading(true);
      return await siginGoogle();
    } catch (error) {
      console.log(error);
      Alert.alert('');
      setisLoading(false);
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
            enabled={!isLoading}
            svg={Google}
          />
          {Platform.OS === 'ios' && (
            <SignInSocialButton title="Entrar com Apple" svg={Apple} />
          )}
        </FooterWrapper>
        {isLoading && (
          <ActivityIndicator
            size="small"
            color={theme.colors.primary}
            style={{ marginTop: 15 }}
          />
        )}
      </Footer>
    </Container>
  );
};

export { SignIn };
