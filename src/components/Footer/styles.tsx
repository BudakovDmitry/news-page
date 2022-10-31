import styled from 'styled-components'
import { BREAKPOINTS } from 'src/constants'

export const FooterContainer = styled.div`
  background-color: #ebebeb;
  height: 100%;
  border-top: 1px solid #dbdbdb;
  @media (max-width: ${BREAKPOINTS.small}px) {
    border: none;
  }
`

export const FooterContentContainer = styled.div`
  padding: 65px;
  @media (max-width: ${BREAKPOINTS.small}px) {
    padding: 0;
  }
`

export const FooterNavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 32px;
  @media (max-width: ${BREAKPOINTS.small}px) {
    flex-direction: column;
    text-align: center;
  }
`

export const FooterNavContainerBlock = styled.div``
