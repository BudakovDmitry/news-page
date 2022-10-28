import { Fonts } from 'src/types'
import styled from 'styled-components'
import { BREAKPOINTS } from 'src/constants'

export const NavbarContainer = styled.div`
  padding: 20px 40px;
  height: 40px;
  display: flex;
  align-items: center;
  gap: 40px;
  @media (max-width: ${BREAKPOINTS.small}px) {
    padding: 20px 20px;
    overflow-x: scroll;
    gap: 20px;
  }
`

export const NavbarItem = styled.a`
  text-transform: uppercase;
  font-family: ${Fonts.demiBold};
  display: flex;
  align-items: center;
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
