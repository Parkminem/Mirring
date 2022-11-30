import { createI18n } from 'vue-i18n';

import ko from './locales/ko.json';
import pt from './locales/pt.json';
import en from './locales/en.json';
import id from './locales/id.json';

const i18n = createI18n({
  locale: 'id',
  legacy: false,
  allowComposition: true,
  fallbackLocale: 'en',
  silentFallbackWarn: true,
  messages: { ko, pt, en, id }
});
export default i18n;
