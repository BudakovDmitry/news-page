import styled from 'styled-components'
import { Fonts } from 'src/types'
import { BREAKPOINTS } from 'src/constants'

export const FooterNavItemContainer = styled.div`
  margin-bottom: 30px;
  @media (max-width: ${BREAKPOINTS.small}px) {
    margin: 0 20px 30px 20px;
  }
`

export const FooterNavItemTitle = styled.a`
  font-family: ${Fonts.demiBold};
  font-size: 16px;
  margin-bottom: 10px;
  cursor: pointer;
  display: block;
  text-transform: uppercase;
`
