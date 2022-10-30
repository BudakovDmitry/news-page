import { Fonts } from 'src/types'
import styled from 'styled-components'
import { BREAKPOINTS } from 'src/constants'

export const RubricContainer = styled.div`
  background-color: #ffffff;
  border-radius: 12px;
  width: 100%;
  height: 950px;
  padding: 40px;
  margin-bottom: 40px;
  @media (max-width: ${BREAKPOINTS.small}px) {
    border-radius: 0;
    margin: 0;
    margin-bottom: 30px;
    height: 100%;
  }
`

export const RubricHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px;
`
export const RubricHeaderTitle = styled.h2`
  font-family: ${Fonts.bold};
  font-size: 32px;
  @media (max-width: ${BREAKPOINTS.small}px) {
    font-size: 26px;
  }
`

export const RubricHeaderLink = styled.p`
  color: #ff7534;
  cursor: pointer;
  @media (max-width: ${BREAKPOINTS.small}px) {
    font-size: 12px;
  }
`

export const RubricContentContainer = styled.div`
  display: flex;
  gap: 32px;
`

export const NewsWithPhotoContainer = styled.div`
  width: 70%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 60px 30px;
  grid-template-areas:
    'large large'
    '. .';
  @media (max-width: ${BREAKPOINTS.small}px) {
    display: flex;
    flex-direction: column;
  }
`

export const LargeNews = styled.div`
  grid-area: large;
`

export const RubricTextNewsContainer = styled.div``
export const RubricTextNewsHeader = styled.h4`
  color: #515151;
  font-family: ${Fonts.medium};
  font-size: 16px;
  padding-left: 10px;
  margin-bottom: 32px;
  text-transform: uppercase;
`
export const RubricTextNewsMoreContainer = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
`
export const RubricTextNewsMoreText = styled.p`
  margin-right: 20px;
`
export const RubricTextNewsMoreLink = styled.a`
  cursor: pointer;
`
export const RubricTextNewsMoreLinkImage = styled.img``
