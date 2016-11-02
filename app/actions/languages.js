/*
 * Global language setting.
 */

export const SET_LANGUAGE = 'SET_LANGUAGE'
export const EN_US = 'EN_US'
export const ZH_CN = 'ZH_CN'

export const LANGUAGES = [
  {
    name: 'English',
    key: EN_US
  },
  {
    name: '中文',
    key: ZH_CN
  }
]

export const setLanguage = (language) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    language
  }
}
