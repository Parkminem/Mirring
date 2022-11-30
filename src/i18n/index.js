import { createI18n } from 'vue-i18n';

const modules = import.meta.glob(`./locales/en/views/*.json`);

const i18n = createI18n({
  locale: 'ko',
  legacy: false,
  allowComposition: true,
  fallbackLocale: 'en',
  silentFallbackWarn: true
});
export default i18n;
