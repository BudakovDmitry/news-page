import { Fonts } from 'src/types'
import styled from 'styled-components'
import {
  PhotoNewsContainerProps,
  PhotoNewsTextProps,
  PhotoNewsImageProps,
  PhotoNewsIconProps,
} from 'src/components/PhotoNews/types'

export const PhotoNewsContainer = styled.div<PhotoNewsContainerProps>`
  width: ${props => (props.large ? '640px' : '304px')};
  position: relative;
`

export const PhotoNewsImage = styled.img<PhotoNewsImageProps>`
  width: ${props => (props.large ? '604px' : '304px')};
  margin-bottom: 15px;
`

export const PhotoNewsDate = styled.p`
  color: #707070;
  text-align: start;
  text-transform: uppercase;
  margin-right: 20px;
`

export const PhotoNewsText = styled.p<PhotoNewsTextProps>`
  font-family: ${Fonts.demiBold};
  text-align: start;
  font-size: ${props => (props.large ? '32px' : '16px')};
  color: ${props => (props.color ? props.color : '#000000')};
`

export const PhotoNewsIcon = styled.img<PhotoNewsIconProps>`
  position: absolute;
  bottom: ${props => (props.large ? '250px' : '100px')};
  left: 10px;
  opacity: ${props => (props.large ? '1' : '0.5')};
  width: ${props => (props.large ? '40px' : '20px')};
`

export const NewsInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`

export const NewsType = styled.div`
  display: flex;
  align-items: center;
`

export const NewsTypeIcon = styled.img`
  margin-right: 15px;
`

export const NewsTypeDescription = styled.p`
  color: #979ea9;
`
