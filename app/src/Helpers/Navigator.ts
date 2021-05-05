export enum NavigatorLanguage {
  PT_BR = 'pt-BR',
  ES_AR = 'es-AR',
  EN_US = 'en-US'
}

export default class Navigator {
  static getLanguague(): NavigatorLanguage {
    return navigator.language as NavigatorLanguage || NavigatorLanguage.EN_US
  }
}