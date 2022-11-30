import { createI18n } from 'vue-i18n';
import ko from './locales/ko.json';
import pt from './locales/pt.json';

const i18n = createI18n({
  locale: 'ko',
  legacy: false,
  allowComposition: true,
  fallbackLocale: 'en',
  silentFallbackWarn: true,
  messages: { ko, pt }
});
export default i18n;
