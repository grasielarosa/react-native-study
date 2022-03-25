import {DarkTheme} from '@react-navigation/native';

export default theme = {
  dark: {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      primary: '#00BA82',
      secondary: '#F2843F',
      background: '#00011D',
      card: '#0C2043',
      header: '#021635',
      headerSecondary: '#163159',
      notification: '#021635',
      tabShadow: '#0004',
      tabBorder: '#4C4D61',
      walletCard: '#172A4C',
      miniCard: '#FAF9F80D',
      summaryCard: '#001334',
      selected: '#111236',

      cyanButton: '#00A5C9',
      cyanButtonPressed: '#0288A5',

      greenButton: '#00BA82',
      greenButtonPressed: '#00947B',

      disabledButton: '#49576D',
      disabledButtonPressed: '#1B2D49',

      inputBackground: '#FFFFFF1A',
      coinListBackground: '#243655',

      marketsChartShadow: '#F8A986',
      chartLines: '#939393',

      modalButton: '#172A4C',
      modalLine: '#FFFFFF80',
      iconFaded: '#B9C1D9B2',

      text: '#FAF9F8',
      textSecondary: '#B9C1D9',
      textBlue: '#E1F0F6',
      textDark: '#565656',
      textFaded: '#FFFFFFB2',
      textLight: '#F9F9F9',
      textButton: '#FFFFFF',
      textTerms: '#000000',
    },
  },
};
