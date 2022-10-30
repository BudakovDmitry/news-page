import styled from 'styled-components'
import { BREAKPOINTS } from 'src/constants'

export const OtherNewsBlockContainer = styled.div`
  height: 100%;
  padding: 40px 40px;
  background-color: #ebebeb;
  @media (max-width: ${BREAKPOINTS.small}px) {
    padding: 40px 0 40px 40px;
  }
`
