import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import {
  NAMESPACES,
  FALLBACK_LANGUAGE,
  DEFAULT_NAMESPACE,
  type SupportedLang,
  type Namespace
} from './config.localization.service';
import { getEffectiveLanguage, getStoredLanguage } from './util.localization.service';

<<<<<<< HEAD
const isDev = import.meta.env.MODE === 'development';

const loadNamespace = async (lang: SupportedLang, ns: Namespace) => {
  try {
    const url = `/locales/${lang}/${ns}.json`;
    if (isDev) console.log('Fetching translation from:', url);

=======
const loadNamespace = async (lang: SupportedLang, ns: Namespace) => {
  try {
    const url = `/locales/${lang}/${ns}.json`;
    console.log('Fetching translation from:', url);
>>>>>>> 21d5e6f26547dcd89c2455a5082e1d1604b994fc
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const data = await response.json();
<<<<<<< HEAD
    if (isDev) console.log('Loaded data:', data);

    return data;
  } catch (error) {
    if (isDev) console.error(`Failed to load namespace "${ns}" for "${lang}"`, error);
=======
    console.log('Loaded data:', data);
    return data;
  } catch (error) {
    console.error(`Failed to load namespace "${ns}" for "${lang}"`, error);
>>>>>>> 21d5e6f26547dcd89c2455a5082e1d1604b994fc
    return {};
  }
};


const loadResources = async (lang: SupportedLang) => {
  const resources: Partial<Record<Namespace, any>> = {};
  for (const ns of NAMESPACES) {
    const data = await loadNamespace(lang, ns);
    resources[ns] = data;
  }
  return resources;
};

export const initI18n = async (initialLng: SupportedLang) => {
  const stored = getStoredLanguage();
  const lang = getEffectiveLanguage(stored);
  const loadedResources = await loadResources(lang);

  await i18n
    .use(initReactI18next)
    .init({
      lng: lang,
      fallbackLng: FALLBACK_LANGUAGE,
      defaultNS: DEFAULT_NAMESPACE,
      ns: NAMESPACES,
      resources: {
        [lang]: loadedResources,
      },
      interpolation: {
        escapeValue: false,
      },
      debug: import.meta.env.MODE === 'development',
      react: {
        useSuspense: false,
      },
    });
};

export const changeLanguageWithNamespaces = async (lang: SupportedLang) => {
  for (const ns of NAMESPACES) {
    if (!i18n.hasResourceBundle(lang, ns)) {
      const data = await loadNamespace(lang, ns);
      i18n.addResourceBundle(lang, ns, data, true, true);
    }
  }

  await i18n.changeLanguage(lang);
};

export default i18n;
