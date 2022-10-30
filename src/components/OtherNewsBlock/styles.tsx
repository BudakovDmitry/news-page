import styled from 'styled-components'
import { BREAKPOINTS } from 'src/constants'

export const OtherNewsBlockContainer = styled.div`
  height: 100%;
  padding: 40px 40px;
  background-color: #ebebeb;
  display: flex;
  gap: 32px;
  @media (max-width: ${BREAKPOINTS.small}px) {
    padding: 40px 0 40px 0;
    display: block;
    flex-direction: column;
  }
`

export const RubricsContainer = styled.div`
  margin-right: 80px;
`
