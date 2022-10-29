import styled from 'styled-components'
import { Fonts } from 'src/types'

export const RegionsNewsContainer = styled.div``

export const RegionsNewsHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 32px;
`

export const RegionsNewsTitle = styled.h2`
  font-family: ${Fonts.bold};
  font-size: 32px;
  margin-right: auto;
`

export const RegionsNewsHeaderLink = styled.a`
  color: #ff7534;
  cursor: pointer;
`

export const RegionsNewsGridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 52px 32px;
  grid-template-areas: '. . .';
`
