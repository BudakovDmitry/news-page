import { Fonts } from 'src/types'
import styled from 'styled-components'
import { BREAKPOINTS } from 'src/constants'
import { NavbarItemProps } from 'src/components/Navbar/types'

export const NavbarContainer = styled.div`
  padding: 20px 40px;
  height: 20px;
  display: flex;
  align-items: center;
  gap: 40px;
  @media (max-width: ${BREAKPOINTS.small}px) {
    padding: 20px 20px;
    overflow-x: scroll;
    gap: 20px;
  }
`

export const NavbarItem = styled.a<NavbarItemProps>`
  text-transform: uppercase;
  font-family: ${Fonts.demiBold};
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${props => (props.active ? '#FF7534' : '#182840')};
  &:last-child {
    margin-left: auto;
  }
`

export const NavbarFireIcon = styled.img`
  margin-right: 8px;
  padding-bottom: 5px;
`

export const NavbarLiveIcon = styled.img`
  margin-right: 10px;
  padding-bottom: 4px;
`
