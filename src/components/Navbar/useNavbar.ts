import { useSelector } from 'react-redux'
import { usePage } from 'src/hooks/usePage'
import { NavbarSectionType, LanguageState } from 'src/types'
import { updateActiveSection } from 'src/redux/actions'

type NavbarState = {
  navbarSections: NavbarSectionType[]
}

export const useNavbar = () => {
  const sections = useSelector((state: NavbarState): NavbarSectionType[] => state.navbarSections)
  const language = useSelector((state: LanguageState): string => state.language)
  const { dispatch } = usePage()

  const handleActiveSection = (section: NavbarSectionType): void => {
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