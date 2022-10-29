import { Fonts } from 'src/types'
import styled from 'styled-components'

const backgroundImage = require('src/images/5.png')

export const VideoNewsBlock = styled.div`
  height: 780px;
  background: url(${backgroundImage}) 0 0 / cover no-repeat;
  position: relative;
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
`

export const VideoNewsBlockHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 25px;
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
`

export const MoreNewsLink = styled.a`
  margin-left: 20px;
  cursor: pointer;
`

export const MoreNewsLinkImage = styled.img``

export const VideoNewsContainer = styled.div`
  display: flex;
`

export const VideoNewsSmallContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 52px 32px;
  grid-template-areas:
    '. .'
    '. .';
`
