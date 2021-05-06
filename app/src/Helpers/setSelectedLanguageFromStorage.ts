import LocalStorageKeys from "../Consts/localStorageKeys"

const setSelectedLanguageFromStorage = (selectedLanguage: string): void => {
  return localStorage.setItem(LocalStorageKeys.UserLanguage, selectedLanguage)
}

export { setSelectedLanguageFromStorage }