export type Namespace = 'common' | 'pages' | 'layout';
export type SupportedLang = 'en' | 'tr';

export const DEFAULT_NAMESPACE: Namespace = 'common';
export const FALLBACK_LANGUAGE: SupportedLang = 'tr';

export const NAMESPACES: Namespace[] = [
  'common', 'layout', 'pages'
]

export const SUPPORTED_LANGUAGES: SupportedLang[] = ['tr', 'en'];
