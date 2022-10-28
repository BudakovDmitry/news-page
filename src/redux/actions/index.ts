import { NavbarSectionType } from 'src/types'

export const updateActiveSection = (section: NavbarSectionType) => {
  return {
    type: 'UPDATE_ACTIVE_SECTION',
    payload: section,
  }
}

