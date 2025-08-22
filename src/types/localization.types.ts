export type SupportedLang = 'en' | 'tr';
export type LanguageSetting = SupportedLang | 'system';

export interface LanguageContextProps {
  changeLanguage: (lang: LanguageSetting) => void;
  getUserLanguage: () => LanguageSetting;
  getEffectiveLanguage: (lang: LanguageSetting) => SupportedLang;
  currentLanguage: SupportedLang;
}