import { Fonts } from 'src/types'
import styled from 'styled-components'
import {
  NewsInfoDescriptionProps,
  NewsTextProps,
} from 'src/components/TextNews/types'

export const NewsContainer = styled.div`
  padding: 20px 10px;
  border-bottom: 1px solid #ebebeb;
  text-align: start;
`

export const NewsHours = styled.p`
  color: #707070;
  display: inline;
  margin-right: 10px;
`

export const NewsText = styled.p<NewsTextProps>`
  font-family: ${props => (props.breaking ? Fonts.demiBold : Fonts.medium)};
  line-height: 140%;
  color: #182840;
  font-size: 16px;
  display: inline;
`

export const NewsInfoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`

export const NewsInfoImage = styled.img`
  margin-right: 10px;
`

export const NewsInfoDescription = styled.p<NewsInfoDescriptionProps>`
  color: ${props => (props.breaking ? '#FF7534' : '#979ea9')};
  font-size: 14px;
  font-family: ${Fonts.demiBold};
`
