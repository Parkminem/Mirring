import { createI18n } from 'vue-i18n';
import en from './locales/en.json';
import id from './locales/id.json';

const i18n = createI18n({
  locale: 'ko',
  legacy: false,
  allowComposition: true,
  fallbackLocale: 'en',
  silentFallbackWarn: true
});
export default i18n;
