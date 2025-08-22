import { type ReactNode, createContext, useContext } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import type { LanguageContextProps } from '@/types';

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const language = useLanguage();

  return (
    <LanguageContext.Provider value={language}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguageContext = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguageContext must be used inside <LanguageProvider>');
  return ctx;
};
