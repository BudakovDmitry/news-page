import * as Styled from 'src/components/Navbar/styles'

const FireIcon = require('src/images/fire-icon.png')
const DotLiveIcon = require('src/images/dot-live-icon.png')

const Navbar = () => {
  return (
    <Styled.NavbarContainer>
      <Styled.NavbarItem>
        <Styled.NavbarFireIcon src={FireIcon} alt="fire-icon" />
        війна
      </Styled.NavbarItem>
      <Styled.NavbarItem>новини</Styled.NavbarItem>
      <Styled.NavbarItem>політика</Styled.NavbarItem>
      <Styled.NavbarItem>економіка</Styled.NavbarItem>
      <Styled.NavbarItem>суспільство</Styled.NavbarItem>
      <Styled.NavbarItem>погляди</Styled.NavbarItem>
      <Styled.NavbarItem>світ</Styled.NavbarItem>
      <Styled.NavbarItem>
        <Styled.NavbarLiveIcon src={DotLiveIcon} alt="dot-live-icon" />
        LIVE
      </Styled.NavbarItem>
    </Styled.NavbarContainer>
  )
}

export default Navbar
