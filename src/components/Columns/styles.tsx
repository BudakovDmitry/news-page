import styled from 'styled-components'
import { Fonts } from 'src/types'

export const ColumnsContainer = styled.div`
  background-color: #ffffff;
  padding: 30px 20px 20px 20px;
  border-radius: 12px;
  max-width: 304px;
`

export const ColumnsHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
`

export const ColumnsHeader = styled.h3`
  color: #000000;
  font-family: ${Fonts.demiBold};
`

export const ColumnsHeaderLink = styled.a`
  color: #ff7534;
  font-family: ${Fonts.demiBold};
  font-size: 14px;
  cursor: pointer;
  display: block;
`
