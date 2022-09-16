import React, { useState } from 'react';
import { ActivityIndicator, Alert, Platform } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();

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
    <Container testID="login-screen">
      <Header>
        <TitleWrapper>
          <Logo width={RFValue(120)} height={RFValue(68)} />
          <Title>{t('signin.title')}</Title>
        </TitleWrapper>
        <SignInTitle>{t('signin.subtitle')}</SignInTitle>
      </Header>
      <Footer>
        <FooterWrapper>
          <SignInSocialButton
            testID="login-button"
            title={t('signin.buttonGoogle')}
            onPress={handleSigninGoogle}
            enabled={!isLoading}
            svg={Google}
          />
          {/* {Platform.OS === 'ios' && ( */}
          <SignInSocialButton title={t('signin.buttonApple')} svg={Apple} />
          {/* )} */}
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
