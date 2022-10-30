import { Fonts } from 'src/types'
import styled from 'styled-components'

export const ColumnsItemContainer = styled.div`
  border-bottom: 1px solid #ebebeb;
`

export const Columnist = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
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
  margin-bottom: 30px;
`

export const ColumnsDate = styled.p`
  color: #707070;
  font-size: 12px;
  margin-bottom: 30px;
  text-transform: uppercase;
`
