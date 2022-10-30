import { Fonts } from 'src/types'
import styled from 'styled-components'
import { BREAKPOINTS } from 'src/constants'

const backgroundImage = require('src/images/5.png')

export const VideoNewsBlock = styled.div`
  height: 780px;
  background: url(${backgroundImage}) 0 0 / cover no-repeat;
  position: relative;
  @media (max-width: ${BREAKPOINTS.small}px) {
    background: linear-gradient(
      180deg,
      rgba(21, 35, 56, 0.5) 0%,
      rgba(24, 40, 64, 0.95) 100%
    );
    width: 100%;
    height: 1800px;
  }
`

export const GradientBox = styled.div`
  width: 100%;
  &:after {
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    bottom: 0px;
    left: 0px;
    right: 0px;
    background: linear-gradient(
      180deg,
      rgba(21, 35, 56, 0.5) 0%,
      rgba(24, 40, 64, 0.95) 100%
    );
    z-index: 1;
  }
`

export const VideoNewsBlockContainer = styled.div`
  width: 1360px;
  padding: 60px 40px;
  position: absolute;
  z-index: 2;
  @media (max-width: ${BREAKPOINTS.small}px) {
    width: 100%;
    padding: 60px 0;
    text-align: center;
  }
`

export const VideoNewsBlockHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 25px;
  @media (max-width: ${BREAKPOINTS.small}px) {
    padding: 0 30px;
  }
`

export const VideoNewsBlockTitle = styled.h2`
  color: #ffffff;
  font-family: ${Fonts.bold};
  font-size: 32px;
`
export const VideoNewsBlockHeaderMoreNews = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`

export const MoreNewsText = styled.p`
  color: #ffffff;
  @media (max-width: ${BREAKPOINTS.small}px) {
    color: #ff7534;
  }
`

export const MoreNewsLink = styled.a`
  margin-left: 20px;
  cursor: pointer;
  @media (max-width: ${BREAKPOINTS.small}px) {
    display: none;
  }
`

export const MoreNewsLinkImage = styled.img``

export const VideoNewsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: ${BREAKPOINTS.small}px) {
    flex-direction: column;
    gap: 52px;
    align-items: center;
    margin-bottom: 50px;
  }
`

export const VideoNewsSmallContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 52px 32px;
  grid-template-areas:
    '. .'
    '. .';
  @media (max-width: ${BREAKPOINTS.small}px) {
    display: flex;
    flex-direction: column;
  }
`

export const VideoNewsMoreButton = styled.button`
  width: 82%;
  height: 38px;
  background: none;
  border: 1px solid #ffffff;
  color: #ffffff;
  border-radius: 4px;
`
