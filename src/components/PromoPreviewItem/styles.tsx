import styled from 'styled-components'
import { BREAKPOINTS } from 'src/constants'

export const PromoPreviewItemContainer = styled.div`
  height: 105px;
  min-width: 304px;
  border-radius: 8px;
  padding: 16px;
  background-color: #f6f6f6;
  @media (max-width: ${BREAKPOINTS.small}px) {
    min-width: 250px;
  }
`

export const PromoPreviewItemDate = styled.p`
  margin-bottom: 20px;
  color: #707070;
  text-transform: uppercase;
  font-size: 12px;
`

export const PromoPreviewItemText = styled.p`
  color: #182840;
  line-height: 180%;
  font-size: 16px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  overflow: hidden;
  -webkit-box-orient: vertical;
`
