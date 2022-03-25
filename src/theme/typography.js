import {Dimensions, StyleSheet} from 'react-native';

const window = Dimensions.get('window');
const ratio = 0.002625;

export const typography = StyleSheet.create({
  h1: {
    fontFamily: 'Rubik-Medium',
    fontSize: window.width * ratio * 40,
    letterSpacing: -0.3,
  },
  sectionTitleBold: {
    fontFamily: 'Rubik-Bold',
    fontSize: window.width * ratio * 26,
    letterSpacing: -0.3,
  },
  sectionTitle: {
    fontFamily: 'Rubik-Medium',
    fontSize: window.width * ratio * 26,
    letterSpacing: -0.3,
  },
  nextTitle: {
    fontFamily: 'Rubik-Bold',
    fontSize: window.width * ratio * 24,
    lineHeight: window.width * ratio * 28,
    letterSpacing: -0.3,
  },
  h3: {
    fontFamily: 'Rubik-SemiBold',
    fontSize: window.width * ratio * 24,
    letterSpacing: -0.3,
  },
  exchangeCurrency: {
    fontFamily: 'Rubik-Medium',
    fontSize: window.width * ratio * 20,
    letterSpacing: -0.3,
  },
  exchangeInput: {
    fontFamily: 'Rubik-Light',
    fontSize: window.width * ratio * 20,
    letterSpacing: -0.3,
  },
  modalButtonTitle: {
    fontFamily: 'Rubik-Medium',
    fontSize: window.width * ratio * 21,
    letterSpacing: -0.3,
  },
  promoTitle: {
    fontFamily: 'Rubik-Bold',
    fontSize: window.width * ratio * 21,
    lineHeight: window.width * ratio * 22,
    letterSpacing: -0.3,
  },
  h4: {
    fontFamily: 'Rubik-Medium',
    fontSize: window.width * ratio * 20,
    letterSpacing: -0.3,
  },
  headerTitle: {
    fontFamily: 'Rubik-Regular',
    fontSize: window.width * ratio * 20,
    letterSpacing: -0.3,
  },
  cardTitle: {
    fontFamily: 'Rubik-Medium',
    fontSize: window.width * ratio * 18,
    letterSpacing: -0.3,
  },
  bodyLarge: {
    fontFamily: 'Rubik-Regular',
    fontSize: window.width * ratio * 18,
    letterSpacing: -0.3,
  },
  button: {
    fontFamily: 'Rubik-Bold',
    fontSize: window.width * ratio * 17,
    letterSpacing: -0.3,
  },
  body: {
    fontFamily: 'Rubik-Regular',
    fontSize: window.width * ratio * 16,
    letterSpacing: -0.3,
  },
  nextTitleSmall: {
    fontFamily: 'Rubik-Bold',
    fontSize: window.width * ratio * 15,
    letterSpacing: -0.3,
  },
  noteBold: {
    fontFamily: 'Rubik-Bold',
    fontSize: window.width * ratio * 14,
    letterSpacing: -0.3,
  },
  noteSemiBold: {
    fontFamily: 'Rubik-SemiBold',
    fontSize: window.width * ratio * 14,
    letterSpacing: -0.3,
  },
  note: {
    fontFamily: 'Rubik-Regular',
    fontSize: window.width * ratio * 14,
    letterSpacing: -0.3,
  },
  noteLight: {
    fontFamily: 'Rubik-Light',
    fontSize: window.width * ratio * 14,
    letterSpacing: -0.3,
  },
  smallNote: {
    fontFamily: 'Rubik-Regular',
    fontSize: window.width * ratio * 13,
    letterSpacing: -0.3,
  },
  sectionSubtitle: {
    fontFamily: 'Rubik-Regular',
    fontSize: window.width * ratio * 12,
    lineHeight: window.width * ratio * 18,
  },
  captionMedium: {
    fontFamily: 'Rubik-Medium',
    fontSize: window.width * ratio * 12,
    lineHeight: window.width * ratio * 13,
  },
  caption: {
    fontFamily: 'Rubik-Regular',
    fontSize: window.width * ratio * 12,
    letterSpacing: -0.3,
  },
  buttonTab: {
    fontFamily: 'Rubik-Regular',
    fontSize: window.width * ratio * 10,
  },
  copyright: {
    fontFamily: 'Rubik-Light',
    fontSize: window.width * ratio * 10,
    lineHeight: window.width * ratio * 15,
  },
});
