import * as Styled from 'src/components/Navbar/styles'
import { useSelector } from 'react-redux'
import { NavbarSectionType, LanguageState, Language } from 'src/types'

const FireIcon = require('src/images/fire-icon.png')
const DotLiveIcon = require('src/images/dot-live-icon.png')

type NavbarState = {
  navbarSections: NavbarSectionType[]
}

const Navbar = () => {
  const sections = useSelector((state: NavbarState) => state.navbarSections)
  const language = useSelector((state: LanguageState) => state.language)

  return (
    <Styled.NavbarContainer>
      {sections.map(section => (
        <Styled.NavbarItem key={section.id} active={section.active}>
          {section.hotRubric ? (
            <Styled.NavbarFireIcon src={FireIcon} alt="fire-icon" />
          ) : sections.length - 1 === section.id ? (
            <Styled.NavbarLiveIcon src={DotLiveIcon} alt="dot-live-icon" />
          ) : null}
          {language === Language.UA ? section.sectionUa : section.sectionRu}
        </Styled.NavbarItem>
      ))}
    </Styled.NavbarContainer>
  )
}

export default Navbar
