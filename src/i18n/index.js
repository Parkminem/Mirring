import { createI18n } from 'vue-i18n';

import kr from './locales/kr.json';
import pt from './locales/pt.json';
import en from './locales/en.json';
import id from './locales/id.json';

const i18n = createI18n({
  locale: localStorage.getItem('locale') ?? 'kr',
  legacy: false,
  allowComposition: true,
  fallbackLocale: 'en',
  silentFallbackWarn: true,
  messages: { kr, pt, en, id }
});
export default i18n;
