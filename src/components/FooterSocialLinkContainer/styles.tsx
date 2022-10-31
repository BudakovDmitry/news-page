import { Fonts } from 'src/types'
import styled from 'styled-components'

export const FooterLinkContainer = styled.div``

export const SocialLinkContainerHeader = styled.h3`
  font-size: 24px;
  font-family: ${Fonts.demiBold};
  margin-bottom: 32px;
`

export const SocialLinkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`

export const Link = styled.a`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
`

export const LinkImage = styled.img``

export const LinkText = styled.p``
