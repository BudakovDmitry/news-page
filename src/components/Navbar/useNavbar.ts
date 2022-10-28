import { useSelector } from 'react-redux'
import { usePage } from 'src/hooks/usePage'
import { NavbarSectionType, LanguageState } from 'src/types'
import { updateActiveSection } from 'src/redux/actions'

type NavbarState = {
  navbarSections: NavbarSectionType[]
}

export const useNavbar = () => {
  const sections = useSelector((state: NavbarState) => state.navbarSections)
  const language = useSelector((state: LanguageState) => state.language)
  const { dispatch } = usePage()

  const handleActiveSection = (section: NavbarSectionType) => {
    dispatch(
      updateActiveSection(section)
    )
  }

  return {
    sections,
    language,
    handleActiveSection
  }
}