import styled from 'styled-components'
import { BREAKPOINTS } from 'src/constants'

export const FooterInfoContainer = styled.div`
  border-top: 1px solid #dbdbdb;
  text-align: center;
  padding: 65px;
`

export const FooterInfoItem = styled.p`
  margin-bottom: 30px;
  color: #515151;
  text-transform: uppercase;
`

export const FooterInfoPoliticsContainer = styled.div`
  display: flex;
  gap: 32px;
  justify-content: center;
  @media (max-width: ${BREAKPOINTS.small}px) {
    flex-direction: column;
  }
`

export const FooterInfoPolitic = styled.a`
  color: #919191;
  cursor: pointer;
`
