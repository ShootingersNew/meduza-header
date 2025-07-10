export function useI18n() {
  return {
    t: (key: string) => key,
    locale: 'en',
    availableLocales: ['en', 'ru'],
    setLocale: () => {},
  };
}
