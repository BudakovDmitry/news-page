import { Fonts } from 'src/types'
import styled from 'styled-components'
import { PhotoNewsContainerProps } from 'src/components/PhotoNews/types'

export const PhotoNewsContainer = styled.div<PhotoNewsContainerProps>`
  width: ${props => (props.large ? '640px' : '304px')};
`

export const PhotoNewsImage = styled.img`
  width: ${props => (props.large ? '604px' : '304px')};
  margin-bottom: 15px;
`

export const PhotoNewsDate = styled.p`
  color: #707070;
  margin-bottom: 15px;
  text-align: start;
`

export const PhotoNewsText = styled.p`
  font-family: ${Fonts.demiBold};
  text-align: start;
`
