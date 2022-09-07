import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './src/translations/en.js';
import es from './src/translations/es.js';
import pt from './src/translations/pt.js';

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  fallbackLng: 'es',
  resources: {
    en: { translation: en },
    es: { translation: es },
    pt: { translation: pt },
  },
  react: {
    useSuspense: false,
  },
  interpolation: {
    escapeValue: false,
  },
});
