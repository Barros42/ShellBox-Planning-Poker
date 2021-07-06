import LocalStorageKeys from "../Consts/localStorageKeys"

const getSelectedLanguageFromStorage = (): string | null => {
  const encodedLanguage = localStorage.getItem(LocalStorageKeys.UserLanguage) || null

  if(!encodedLanguage){
    return null
  }

  const language = Buffer.from(encodedLanguage, 'base64').toString()

  return language

}

export { getSelectedLanguageFromStorage }