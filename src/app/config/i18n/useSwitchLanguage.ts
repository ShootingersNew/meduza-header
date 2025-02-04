import i18n, { type TMessages } from './i18n'

const useSwitchLanguage = () => {
  return (languageId: TMessages) => (i18n.global.locale = languageId)
}

export default useSwitchLanguage
