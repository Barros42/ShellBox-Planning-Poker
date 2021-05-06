import Dictionary from 'Core/Dictionary'
import { setSelectedLanguageFromStorage } from 'Helpers'
import Navigator, { NavigatorLanguage } from 'Helpers/Navigator'
import React from 'react'
import { useState } from 'react'
import './index.css'

const LanguageSelector = () => {

  const [defaultMainLanguage] = useState<string>(Navigator.getLanguague())

  const loadFlags = (): JSX.Element[] => {
    let allLanguages = Object.values(NavigatorLanguage).map(key => key)
    allLanguages = allLanguages.filter(lang => lang !== defaultMainLanguage)
    return allLanguages.map(lang => <div key={lang}  onClick={e=> setCustomLanguage(lang)} className={`language-flag language-flag-${lang}`}></div>)
  }

  const setCustomLanguage = (lang: string): void  =>{
    setSelectedLanguageFromStorage(lang)
    window.location.reload()
  }

  return(
    <div id='shell-flag-language' title={Dictionary.changeDefaultLanguage}  className={`language-flag-${defaultMainLanguage}`}>
      <div id="shell-flags-list">
        { loadFlags() }
      </div>
    </div>
  )
}

export default LanguageSelector