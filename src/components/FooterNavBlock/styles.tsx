import styled from 'styled-components'
import { Fonts } from 'src/types'
import { FooterNavBlockTitleProps } from 'src/components/FooterNavBlock/types'
import { BREAKPOINTS } from 'src/constants'

export const FooterNavBlockContainer = styled.div`
  margin-bottom: 30px;
  @media (max-width: ${BREAKPOINTS.small}px) {
    margin: 0 20px 30px 20px;
    border-bottom: 1px solid #dbdbdb;
  }
`

export const FooterNavBlockTitle = styled.a<FooterNavBlockTitleProps>`
  font-family: ${Fonts.demiBold};
  font-size: 16px;
  margin-bottom: 10px;
  cursor: pointer;
  display: block;
  text-transform: ${props => props.uppercase && 'uppercase'};
`

export const FooterNavList = styled.ul``

export const FooterNavListItem = styled.li`
  list-style-type: none;
  margin-bottom: 10px;
  font-size: 14px;
`

export const FooterNavListItemLink = styled.a`
  color: #515151;
  cursor: pointer;
`
