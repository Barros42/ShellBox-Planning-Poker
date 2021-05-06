import LocalStorageKeys from "../Consts/localStorageKeys"

const getSelectedLanguageFromStorage = (): string | null => {
  return localStorage.getItem(LocalStorageKeys.UserLanguage) || null
}

export { getSelectedLanguageFromStorage }