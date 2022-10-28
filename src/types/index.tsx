export enum Fonts {
  regular = 'TT Severs',
  bold = 'TT Severs Bold',
  italic = 'TT Severs Italic',
  medium = 'TT Severs Medium',
  demiBold = 'TT Severs DemiBold',
}

export type NavbarSectionType = {
  id: number
  sectionUa: string
  sectionRu: string
  hotRubric: boolean
  active: boolean
}

export type LanguageState = {
  language: string
}

export enum Language {
  UA = 'UA',
  RU = 'RU',
}
