import { NavbarSectionType, Language } from 'src/types'

export const updateActiveSection = (section: NavbarSectionType) => {
  return {
    type: 'UPDATE_ACTIVE_SECTION',
    payload: section,
  }
}

export const switchLang = (lang: string) => {
  return {
    type: 'SWITCH_LANG',
    payload: lang
  }
}

