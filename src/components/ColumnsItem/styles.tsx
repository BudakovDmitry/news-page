import { Fonts } from 'src/types'
import styled from 'styled-components'
import { BREAKPOINTS } from 'src/constants'

export const ColumnsItemContainer = styled.div`
  border-bottom: 1px solid #ebebeb;
  text-align: start;
  @media (max-width: ${BREAKPOINTS.small}px) {
    background: #ffffff;
    margin-right: 30px;
    padding: 20px 30px;
    border-radius: 8px;
    position: relative;
  }
`

export const Columnist = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`

export const ColumnistInfo = styled.div``

export const ColumnistInfoPhoto = styled.img`
  margin-right: 20px;
`

export const ColumnistInfoName = styled.p`
  font-size: 16px;
  font-family: ${Fonts.medium};
  margin-bottom: 10px;
`

export const ColumnistInfoProfession = styled.p`
  color: #707070;
  text-transform: uppercase;
  font-size: 12px;
`

export const ColumnsText = styled.p`
  color: #182840;
  font-family: ${Fonts.demiBold};
  font-size: 16px;
  margin-bottom: 20px;
  @media (max-width: ${BREAKPOINTS.small}px) {
    margin-bottom: 40px;
  }
`

export const ColumnsDate = styled.p`
  color: #707070;
  font-size: 12px;
  margin-bottom: 30px;
  text-transform: uppercase;
  @media (max-width: ${BREAKPOINTS.small}px) {
    position: absolute;
    bottom: 0px;
    left: 30px;
  }
`
