import { useCallback, useEffect, useState } from 'react';
import i18n, { changeLanguageWithNamespaces } from '@/services/localization/index.localization.service';
import { localStorageUtil } from '@/utils/storage.util';
import type { LanguageSetting, SupportedLang } from '@/types';
import { getEffectiveLanguage, getStoredLanguage } from '@/services/localization/util.localization.service';

const STORAGE_KEY = 'language';
const DEFAULT_LANGUAGE: SupportedLang = 'en';
const SUPPORTED_LANGUAGES: SupportedLang[] = ['en', 'tr'];

export const useLanguage = () => {
    const [currentLanguage, setCurrentLanguage] = useState<SupportedLang>(DEFAULT_LANGUAGE);

    const detectBrowserLanguage = useCallback((): SupportedLang => {
        const langs = navigator.languages?.length ? navigator.languages : [navigator.language];
        for (const lang of langs) {
            const base = lang.split('-')[0].toLowerCase();
            if (SUPPORTED_LANGUAGES.includes(base as SupportedLang)) {
                return base as SupportedLang;
            }
        }
        return DEFAULT_LANGUAGE;
    }, []);

    const changeLanguage = useCallback(
        async (lang: LanguageSetting) => {
            let targetLang: SupportedLang;

            if (lang === 'system') {
                targetLang = detectBrowserLanguage();
                localStorageUtil.set(STORAGE_KEY, 'system');
            } else if (SUPPORTED_LANGUAGES.includes(lang)) {
                targetLang = lang;
                localStorageUtil.set(STORAGE_KEY, lang);
            } else {
                console.warn(`Unsupported language: ${lang}`);
                return;
            }

            try {
                await changeLanguageWithNamespaces(targetLang);
                setCurrentLanguage(targetLang);
            } catch (err) {
                console.error(`Language switch failed: ${targetLang}`, err);
            }
        },
        [detectBrowserLanguage]
    );

    const toggleLanguage = async () => {
        const current = getEffectiveLanguage(getStoredLanguage());
        const next: SupportedLang = current === 'en' ? 'tr' : 'en';
        await changeLanguage(next);
    };

    useEffect(() => {
        (async () => {
            const stored = getStoredLanguage();
            const effectiveLang = getEffectiveLanguage(stored);

            if (i18n.language !== effectiveLang) {
                await i18n.changeLanguage(effectiveLang);
            }

            setCurrentLanguage(effectiveLang);
        })();
    }, [getStoredLanguage, getEffectiveLanguage, detectBrowserLanguage]);


    return {
        changeLanguage,
        toggleLanguage,
        getUserLanguage: getStoredLanguage,
        getEffectiveLanguage,
        currentLanguage
    };
};
