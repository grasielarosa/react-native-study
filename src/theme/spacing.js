import {Dimensions} from 'react-native';

const window = Dimensions.get('window');

export const spacing = {
  xxs: window.width * 0.005,
  xs: window.width * 0.015,
  s: window.width * 0.02,
  m: window.width * 0.025,
  l: window.width * 0.03,
  xl: window.width * 0.04,
};
