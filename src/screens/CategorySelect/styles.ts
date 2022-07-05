import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

interface CategoryProps {
  isActive: boolean;
}

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.body};
`;

export const Header = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  height: ${RFValue(113)}px;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 19px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${RFValue(18)}px;
  font-weight: 600;
`;

export const Category = styled.TouchableOpacity<CategoryProps>`
  width: 100%;
  padding: ${RFValue(15)}px;
  flex-direction: row;
  align-items: center;

  background-color: ${({ isActive, theme }) =>
    isActive ? theme.colors.secondary : theme.colors.body};
`;

export const Icon = styled.Text`
  font-size: ${RFValue(14)}px;
  margin-right: 16px;
`;

export const Separator = styled.View`
  height: 0.8px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const Name = styled.Text`
  font-size: ${RFValue(14)}px;
`;

export const Footer = styled.View`
  width: 100%;
  padding: 24px;
`;
