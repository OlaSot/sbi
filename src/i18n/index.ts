// src/i18n/index.ts
'use client';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEn from './locales/en/translation.json';
import translationDe from './locales/de/translation.json';
import translationRu from './locales/ru/translation.json';
import translationLt from './locales/lt/translation.json';
import navigationEn from './locales/en/navigation.json';
import navigationDe from './locales/de/navigation.json';
import navigationRu from './locales/ru/navigation.json';
import navigationLt from './locales/lt/navigation.json';

// Get initial language from URL or localStorage
const getInitialLanguage = () => {
  if (typeof window !== 'undefined') {
    // First try to get from URL
    const pathSegments = window.location.pathname.split('/');
    const locale = pathSegments[1];
    if (locale && ['en', 'de', 'ru', 'lt'].includes(locale)) {
      return locale;
    }
    
    // Then try localStorage
    const storedLang = localStorage.getItem('i18nextLng');
    if (storedLang && ['en', 'de', 'ru', 'lt'].includes(storedLang)) {
      return storedLang;
    }
  }
  return 'en';
};

// Initialize i18n
i18n
  .use(initReactI18next)
  .init({
    resources: {
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
    },
    lng: getInitialLanguage(),
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
    // Disable automatic language detection
    detection: {
      order: ['path'],
      lookupFromPathIndex: 0,
      caches: ['localStorage']
    }
  });

export default i18n;
