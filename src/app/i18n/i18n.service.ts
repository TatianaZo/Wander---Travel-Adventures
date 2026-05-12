import { Injectable, signal } from '@angular/core';
import { LANG_OPTIONS, LANG_STORAGE_KEY, Lang } from './i18n.types';
import { TRANSLATIONS } from './translations';

@Injectable({ providedIn: 'root' })
export class I18nService {
  readonly languages = LANG_OPTIONS;

  readonly language = signal<Lang>(this.readStoredLang());

  constructor() {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = this.language();
    }
  }

  t(key: string): string {
    const lang = this.language();
    const dict = TRANSLATIONS[lang] ?? TRANSLATIONS.en;
    return dict[key] ?? TRANSLATIONS.en[key] ?? key;
  }

  tDifficulty(min: number, max: number): string {
    const lo = Math.min(min, max);
    const hi = Math.max(min, max);
    if (lo === hi) {
      return this.t('difficulty.single').replaceAll('{{n}}', String(lo));
    }
    return this.t('difficulty.range').replaceAll('{{min}}', String(lo)).replaceAll('{{max}}', String(hi));
  }

  setLanguage(code: Lang): void {
    if (!TRANSLATIONS[code]) {
      return;
    }
    this.language.set(code);
    if (typeof document !== 'undefined') {
      document.documentElement.lang = code;
    }
    try {
      localStorage.setItem(LANG_STORAGE_KEY, code);
    } catch {
      /* ignore */
    }
  }

  private readStoredLang(): Lang {
    if (typeof localStorage === 'undefined') {
      return 'en';
    }
    try {
      const raw = localStorage.getItem(LANG_STORAGE_KEY) as Lang | null;
      if (raw && TRANSLATIONS[raw]) {
        return raw;
      }
    } catch {
      /* ignore */
    }
    return 'en';
  }
}
