export type Lang = 'en' | 'ru' | 'it' | 'de' | 'fr';

export const LANG_STORAGE_KEY = 'wander-lang';

export const LANG_OPTIONS: { code: Lang }[] = [
  { code: 'en' },
  { code: 'ru' },
  { code: 'it' },
  { code: 'de' },
  { code: 'fr' }
];
