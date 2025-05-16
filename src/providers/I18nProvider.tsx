'use client';

import { I18nextProvider } from 'react-i18next';
import i18n from '@/i18n';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export const I18nProvider = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  useEffect(() => {
    // Get the current language from the URL path
    const pathSegments = pathname.split('/');
    const currentLocale = pathSegments[1];
    
    // Only change language if it's different from current and valid
    if (currentLocale && 
        ['en', 'de', 'ru', 'lt'].includes(currentLocale) && 
        currentLocale !== currentLanguage) {
      i18n.changeLanguage(currentLocale);
      setCurrentLanguage(currentLocale);
      // Persist the language selection
      localStorage.setItem('i18nextLng', currentLocale);
    }
    
    setMounted(true);
  }, [pathname, currentLanguage]);

  // Add language change listener
  useEffect(() => {
    const handleLanguageChange = (lng: string) => {
      setCurrentLanguage(lng);
    };

    i18n.on('languageChanged', handleLanguageChange);

    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, []);

  // Don't render anything until mounted to prevent hydration mismatch
  if (!mounted) {
    return null;
  }

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};
