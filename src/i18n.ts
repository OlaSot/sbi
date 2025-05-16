import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEn from './i18n/locales/en/translation.json';
import navigationEn from './i18n/locales/en/navigation.json';
import translationDe from './i18n/locales/de/translation.json';
import navigationDe from './i18n/locales/de/navigation.json';
import translationRu from './i18n/locales/ru/translation.json';
import navigationRu from './i18n/locales/ru/navigation.json';
import translationLt from './i18n/locales/lt/translation.json';
import navigationLt from './i18n/locales/lt/navigation.json';

// Include all necessary resources upfront to avoid lazy loading issues
const resources = {
  en: { 
    translation: translationEn,
    navigation: navigationEn
  },
  de: {
    translation: translationDe,
    navigation: navigationDe
  },
  ru: {
    translation: translationRu,
    navigation: navigationRu
  },
  lt: {
    translation: translationLt,
    navigation: navigationLt
  }
};

// Get initial language from URL or default to 'en'
const getInitialLanguage = () => {
  if (typeof window !== 'undefined') {
    const pathSegments = window.location.pathname.split('/');
    const locale = pathSegments[1];
    if (locale && ['en', 'de', 'ru', 'lt'].includes(locale)) {
      return locale;
    }
  }
  return 'en';
};

// Initialize i18n
i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: getInitialLanguage(), // Use the language from URL
    fallbackLng: 'en',
    supportedLngs: ['en', 'de', 'ru', 'lt'],
    react: { 
      useSuspense: false,
      bindI18n: 'loaded languageChanged',
      bindI18nStore: 'added',
      transEmptyNodeValue: '',
      transSupportBasicHtmlNodes: true,
      transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p'],
      defaultTransParent: 'div'
    },
    interpolation: {
      escapeValue: false,
    },
    ns: ['translation', 'navigation'],
    defaultNS: 'translation',
    initImmediate: false,
    // Disable language detection on the client side
    detection: {
      order: ['path'],
      lookupFromPathIndex: 0,
      caches: []
    }
  });

export default i18n;
