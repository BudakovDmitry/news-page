import NavbarSections from 'src/json/NavbarSections.json'
import Statistics from 'src/json/Statistics.json'
import MainNews from 'src/json/MainNews.json'
import AllNews from 'src/json/AllNews.json'
import VideoNews from 'src/json/VideoNews.json'
import AllPhotoNews from 'src/json/AllPhotoNews.json'
import RegionsNews from 'src/json/RegionsNews.json'
import Columnists from 'src/json/Columnists.json'
import Rubrics from 'src/json/Rubrics.json'
import Promos from 'src/json/Promos.json'
import FooterNavItems from 'src/json/FooterNavItems.json'
import NavItems from 'src/json/NavItems.json'
import SocialLinks from 'src/json/SocialLinks.json'
import { Language } from 'src/types'

const initialState = {
  navbarSections: NavbarSections,
  language: Language.UA,
  statistics: Statistics,
  mainNews: MainNews,
  allNews: AllNews,
  videoNews: VideoNews,
  allPhotoNews: AllPhotoNews,
  regionsNews: RegionsNews,
  columnists: Columnists,
  rubrics: Rubrics,
  promos: Promos,
  footerNavItems: FooterNavItems,
  navItems: NavItems,
  socialLinks: SocialLinks
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_ACTIVE_SECTION':
      return {
        ...state,
        navbarSections: state.navbarSections.map(section => {
        if (section.active === true) {
          return { 
            ...section,
            active: false
          }
        }
        if (section.id === action.payload.id) {
          return { 
            ...section,
            active: true
          }
        }
        return section
      })
    }
    default:
      return state
  }
}

export default reducer
