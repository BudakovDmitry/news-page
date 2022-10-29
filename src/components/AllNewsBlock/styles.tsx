import styled from 'styled-components'
import { BREAKPOINTS } from 'src/constants'

export const AllNewsBlockContainer = styled.div`
  height: 1500px;
  padding: 40px 40px;
  background-color: #ebebeb;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 1fr 3fr;
  gap: 52px 32px;
  grid-auto-flow: row;
  grid-template-areas:
    'all-news editors-сhoice'
    'all-news regions';
  @media (max-width: ${BREAKPOINTS.small}px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    padding: 0;
    width: 100%;
    gap: 0;
  }
`
export const AllNewsContainer = styled.div`
  grid-area: all-news;
`

export const EditorsChoiceNewsContainer = styled.div`
  grid-area: editors-сhoice;
`

export const RegionsNewsContainer = styled.div`
  grid-area: regions;
`
