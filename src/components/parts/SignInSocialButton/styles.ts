import { RFValue } from 'react-native-responsive-fontsize';
import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Button = styled(RectButton)`
  height: ${RFValue(56)}px;
  background-color: ${({ theme }) => theme.colors.complementary};
  border-radius: 5px;
  align-items: center;
  flex-direction: row;
  margin-bottom: 16px;
`;

export const ImageContainer = styled.View`
  height: 70%;
  justify-content: center;
  align-items: center;
  padding: ${RFValue(16)}px;
  border-color: ${({ theme }) => theme.colors.textPrimary};
  border-right-width: 0.5px;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.textPrimary};
  flex: 1;
  text-align: center;

  font-weight: 500;
  font-size: ${RFValue(14)}px;
`;
