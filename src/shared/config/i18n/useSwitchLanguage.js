import appBInstance from './i18n'

const useSwitchLanguage = () => {
  return (languageId) => (appBInstance.global.locale = languageId)
}

export default useSwitchLanguage
