import LocalStorageKeys from "../Consts/localStorageKeys"

const setSelectedLanguageFromStorage = (selectedLanguage: string): void => {
  const encodedLanguage = Buffer.from(selectedLanguage).toString('base64')
  return localStorage.setItem(LocalStorageKeys.UserLanguage, encodedLanguage)
}

export { setSelectedLanguageFromStorage }