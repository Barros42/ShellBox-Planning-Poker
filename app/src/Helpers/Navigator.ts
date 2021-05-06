export enum NavigatorLanguage {
  PT_BR = 'pt',
  ES_AR = 'es',
  EN_US = 'en'
}

export default class Navigator {
  static getLanguague(): NavigatorLanguage {
    let mainLanguage = NavigatorLanguage.EN_US
    try {
      const defaultLanguage = navigator.language as NavigatorLanguage || NavigatorLanguage.EN_US
      mainLanguage = defaultLanguage.split('-')[0] as NavigatorLanguage
    } catch (error) {
      console.log(`NavigatorLanguage :: getLanguage :: ${error}`)
    }
    return mainLanguage as NavigatorLanguage
  }
}