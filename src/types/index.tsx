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

export type StatisticsType = {
  id: number
  name: string
  value: string
  image: string
}

export type MainNewsType = {
  id: number
  news: string
  image: string
}

export type NewsType = {
  id: number
  time: string
  text: string
  info: string
  infoImage: string
  breaking: boolean
}

export type PhotoNewsType = {
  id: number
  image: string
  date: string
  text: string
}
