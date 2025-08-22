import { localStorageUtil } from '@/utils/storage.util';
import { FALLBACK_LANGUAGE, SUPPORTED_LANGUAGES } from '@/services/localization/config.localization.service';
import type { SupportedLang, LanguageSetting } from '@/types';

export const getStoredLanguage = (): LanguageSetting => {
  const stored = localStorageUtil.get("language");
  if (!stored) return 'system';
  return SUPPORTED_LANGUAGES.includes(stored as SupportedLang) || stored === 'system'
    ? (stored as LanguageSetting)
    : 'system';
};

export const getEffectiveLanguage = (lang: LanguageSetting): SupportedLang => {
  if (lang === 'system') {
    const browserLang = navigator.language.split('-')[0];
    return SUPPORTED_LANGUAGES.includes(browserLang as SupportedLang)
      ? (browserLang as SupportedLang)
      : FALLBACK_LANGUAGE;
  }
  return lang;
};
