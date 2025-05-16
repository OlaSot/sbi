// i18n/getDictionary.ts
import "server-only";

const dictionaries = {
  en: {
    navigation: () => import("@/i18n/locales/en/navigation.json").then((module) => module.default),
    translation: () => import("@/i18n/locales/en/translation.json").then((module) => module.default),
  },
  de: {
    navigation: () => import("@/i18n/locales/de/navigation.json").then((module) => module.default),
    translation: () => import("@/i18n/locales/de/translation.json").then((module) => module.default),
  },
  ru: {
    navigation: () => import("@/i18n/locales/ru/navigation.json").then((module) => module.default),
    translation: () => import("@/i18n/locales/ru/translation.json").then((module) => module.default),
  },
  lt: {
    navigation: () => import("@/i18n/locales/lt/navigation.json").then((module) => module.default),
    translation: () => import("@/i18n/locales/lt/translation.json").then((module) => module.default),
  },
};

export const getDictionary = async (locale: string) => {
  try {
    const dictConfig = dictionaries[locale as keyof typeof dictionaries];
    if (!dictConfig) {
      console.warn(`Locale ${locale} not found, falling back to 'en'`);
      return await combineDictionaries("en");
    }

    return await combineDictionaries(locale);
  } catch (error) {
    console.error(`Error loading dictionary for ${locale}:`, error);
    return await combineDictionaries("en"); // Fallback в случае ошибки
  }
};

async function combineDictionaries(locale: string) {
  const [navigation, translation] = await Promise.all([
    dictionaries[locale as keyof typeof dictionaries].navigation(),
    dictionaries[locale as keyof typeof dictionaries].translation(),
  ]);

  console.log(`Loaded navigation for ${locale}:`, navigation); // Отладка
  console.log(`Loaded translation for ${locale}:`, translation); // Отладка

  // Явно задаем navigation из navigation.json
  return {
    ...translation, // Сначала берем все из translation.json
    navigation,     // Затем добавляем navigation из navigation.json, перезаписывая translation.navigation
  };
}