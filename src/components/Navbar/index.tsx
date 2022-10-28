import { useNavbar } from 'src/components/Navbar/useNavbar'
import * as Styled from 'src/components/Navbar/styles'

import { Language } from 'src/types'

const FireIcon = require('src/images/fire-icon.png')
const DotLiveIcon = require('src/images/dot-live-icon.png')

const Navbar = () => {
  const { sections, language, handleActiveSection } = useNavbar()

  return (
    <Styled.NavbarContainer>
      {sections.map(section => (
        <Styled.NavbarItem
          key={section.id}
          active={section.active}
          onClick={() => handleActiveSection(section)}
        >
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
