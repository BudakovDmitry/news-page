import { Fonts } from 'src/types'
import styled from 'styled-components'
import { BREAKPOINTS } from 'src/constants'

export const EditorsChoiceNewsContainer = styled.div`
  @media (max-width: ${BREAKPOINTS.small}px) {
    text-align: center;
  }
`

export const EditorsChoiceNewsHeader = styled.h2`
  font-size: 32px;
  font-family: ${Fonts.bold};
  margin-bottom: 32px;
  @media (max-width: ${BREAKPOINTS.small}px) {
    padding: 40px 0 0 40px;
    text-align: start;
  }
`

export const EditorsChoiceNewsGridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 52px 32px;
  grid-template-areas:
    '. . .'
    '. . .';
  @media (max-width: ${BREAKPOINTS.small}px) {
    padding: 0;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const EditorsChoiceNewsButtonMore = styled.button`
  width: 80%;
  height: 38px;
  background-color: #ffffff;
  border: 1px solid #979ea9;
  border-radius: 4px;
  margin: 20px auto;
  font-size: 16px;
  font-family: ${Fonts.medium};
  cursor: pointer;
  color: #182840;
  &:hover {
    background-color: #ebebeb;
  }
`

export const EditorsChoiceNewsButtonMoreText = styled.span``

export const EditorsChoiceNewsButtonMoreIcon = styled.img`
  vertical-align: middle;
  margin-right: 10px;
`
