declare module "host/NavigationService" {
  const NavigationService: {
    navigate: (location: RouteLocationRaw) => void;
    replace: (location: RouteLocationRaw) => void;
    goBack: () => void;
    getCurrentPath: () => string;
    isRouterAvailable: () => boolean;
    getQuery: () => Record<string, string>;
  };
  export default NavigationService;
}
declare module "host/I18nService" {
  const I18nService: {
    getCurrentLocale: () => string;
    getAvailableLocales: () => string[];
    changeLocale: (locale: string) => void;
    isLocaleAvailable: (locale: string) => boolean;
    addLocale: (locale: string, translations: Record<string, object>) => void;
    addLocales: (locales: Record<string, Record<string, object>>) => void;
    t: (ket: string, locale?: string) => string;
  };
  export default I18nService;
}

declare module "host/useCustomRoute" {
  const useCustomRoute:() => ComputedRef<RouteLocationNormalizedLoaded | undefined>;
  export default useCustomRoute;
}
