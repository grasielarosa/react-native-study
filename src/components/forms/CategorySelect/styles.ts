import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  background-color: ${({ theme }) => theme.colors.complementary};
  flex-direction: row;
  justify-content: space-between;
  padding: 18px 16px;
  border-radius: 5px;
`;

export const Category = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const Icon = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.textPrimary};
`;
