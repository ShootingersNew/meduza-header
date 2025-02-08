import { createI18n } from 'vue-i18n';
const messages = {
};

const i18n = createI18n({
  locale: 'en', // default locale
  fallbackLocale: 'en',
  messages,
  legacy: false,
})

export type TMessages = keyof typeof messages;
export default i18n;
