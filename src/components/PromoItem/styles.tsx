import styled from 'styled-components'
import { BREAKPOINTS } from 'src/constants'
import { Fonts } from 'src/types'

export const PromoItemContainer = styled.div`
  display: flex;
  gap: 30px;
  margin-bottom: 24px;
  @media (max-width: ${BREAKPOINTS.small}px) {
    flex-direction: column;
  }
`

export const PromoImage = styled.img``

export const PromoContent = styled.div`
  width: 550px;
  @media (max-width: ${BREAKPOINTS.small}px) {
    width: 300px;
  }
`

export const PromoContentInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`

export const PromoContentDate = styled.p`
  margin-right: 20px;
  text-transform: uppercase;
  color: #707070;
  font-size: 12px;
`

export const PromoContentType = styled.div`
  display: flex;
  align-items: center;
`

export const PromoContentTypeIcon = styled.img`
  margin-right: 10px;
  margin-top: -3px;
`

export const PromoContentTypeText = styled.p`
  color: #979ea9;
  font-family: ${Fonts.demiBold};
  font-size: 14px;
`

export const PromoText = styled.h3`
  color: #182840;
  font-size: 32px;
  font-family: ${Fonts.demiBold};
  @media (max-width: ${BREAKPOINTS.small}px) {
    width: 300px;
    font-size: 24px;
    margin: 0;
  }
`
