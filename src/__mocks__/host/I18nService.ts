export default {
  getCurrentLocale: (): string => 'en',
  getAvailableLocales: (): string[] => ['en', 'ru'],
  changeLocale: (locale: string): void => {},
  isLocaleAvailable: (locale: string): boolean => true,
  addLocale: (locale: string, translations: Record<string, object>): void => {},
  t: (key: string, locale?: string): string => key,
};
