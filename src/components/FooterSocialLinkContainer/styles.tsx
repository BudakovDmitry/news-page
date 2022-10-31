import { Fonts } from 'src/types'
import styled from 'styled-components'
import { BREAKPOINTS } from 'src/constants'

export const FooterLinkContainer = styled.div`
  @media (max-width: ${BREAKPOINTS.small}px) {
    flex-direction: column;
    text-align: center;
  }
`

export const SocialLinkContainerHeader = styled.h3`
  font-size: 24px;
  font-family: ${Fonts.demiBold};
  margin-bottom: 32px;
`

export const SocialLinkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  @media (max-width: ${BREAKPOINTS.small}px) {
    padding: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 22px 10px;
    grid-template-areas:
      '. .'
      '. .'
      '. .';
    margin-bottom: 20px;
  }
`

export const Link = styled.a`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
`

export const LinkImage = styled.img``

export const LinkText = styled.p``
