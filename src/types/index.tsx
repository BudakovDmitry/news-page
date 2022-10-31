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
  type: string
  typeIcon: string
}

export type DateNewsType = {
  id: number
  date: string
  news: NewsType[]
}

export type RegionsNewsType = {
  id: number
  region: string
  date: string
  news: DateNewsType[]
}

export type FilterType = {
  id: number
  name: string
}

export type ColumnType = {
  id: number
  text: string
  date: string
}

export type ColumnistType = {
  id: number
  name: string
  profession: string
  avatar: string
  column: ColumnType[]
}

export type RubricNewsType = {
  mainLargeNews: PhotoNewsType[]
  mainSmallNews: PhotoNewsType[]
  textNews: NewsType[]
}

export type RubricType = {
  id: number
  title: string
  news: RubricNewsType
}

export type PromoType = {
  id: number
  date: string
  text: string
}

export type FooterNavItem = {
  id: number
  name: string
}

export type FooterNavBlock = {
  id: number
  title: string
  items: FooterNavItem[]
}

export type SocialLinkType = {
  id: number
  name: string
  icon: string
}
