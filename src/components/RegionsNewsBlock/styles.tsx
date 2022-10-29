import { Fonts } from 'src/types'
import styled from 'styled-components'

export const RegionsNewsBlockContainer = styled.div`
  background-color: #ffffff;
  padding: 20px 10px 48px 10px;
  border-radius: 12px;
  position: relative;
`

export const RegionsNewsBlockTitle = styled.h3`
  font-family: ${Fonts.demiBold};
  font-size: 24px;
  margin-bottom: 20px;
  margin-left: 10px;
`

export const RegionsNewsMoreNewsContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-left: 10px;
`

export const RegionsNewsMoreNewsText = styled.p`
  margin-right: 20px;
  color: #182840;
`

export const RegionsNewsMoreNewsLink = styled.a`
  cursor: pointer;
`

export const RegionsNewsMoreNewsImage = styled.img``

export const RegionsNewsDate = styled.p`
  color: #f3560c;
  margin-left: 10px;
`

export const RegionsNewsDateBlock = styled.div`
  margin-bottom: 20px;
`
