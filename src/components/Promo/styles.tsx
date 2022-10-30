import styled from 'styled-components'
import { BREAKPOINTS } from 'src/constants'
import { Fonts } from 'src/types'

export const PromoContainer = styled.div`
  background-color: #ffffff;
  border-radius: 12px;
  width: 100%;
  height: 408px;
  padding: 40px;
  margin-bottom: 40px;
  @media (max-width: ${BREAKPOINTS.small}px) {
    border-radius: 0;
    margin: 0;
    margin-bottom: 30px;
    height: 100%;
  }
`

export const PromoHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px;
`
export const PromoHeaderTitle = styled.h2`
  font-family: ${Fonts.bold};
  font-size: 32px;
  @media (max-width: ${BREAKPOINTS.small}px) {
    font-size: 26px;
  }
`

export const PromoHeaderLink = styled.p`
  color: #ff7534;
  cursor: pointer;
  @media (max-width: ${BREAKPOINTS.small}px) {
    font-size: 12px;
  }
`
