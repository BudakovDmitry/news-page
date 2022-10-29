import { Fonts } from 'src/types'
import styled from 'styled-components'
import {
  MainNewsSectionContainerProps,
  MainNewsSwitchButtonProps,
} from 'src/components/MainNewsSection/types'
import { BREAKPOINTS } from 'src/constants'

export const MainNewsSectionContainer = styled.div<MainNewsSectionContainerProps>`
  height: 654px;
  padding: 20px 40px;
  position: relative;
  background: ${props =>
    `url(${require(`src/images/${props.background}`)}) 0 0 / cover no-repeat`};
  @media (max-width: ${BREAKPOINTS.small}px) {
    overflow: hidden;
    height: 550px;
    background: ${props =>
      `url(${require(`src/images/${props.background}`)})  -600px 0/cover no-repeat`};
  }
`

export const MainNewsSectionContentContainer = styled.div`
  position: absolute;
  bottom: 50px;
  left: 0;
  padding: 0 40px;
  @media (max-width: ${BREAKPOINTS.small}px) {
    width: 100%;
    bottom: 50px;
    left: 0;
    padding: 0 20px;
  }
`

export const MainNewsSectionHeader = styled.h2`
  font-family: ${Fonts.bold};
  color: #ffffff;
  width: 60%;
  font-size: 40px;
  margin-bottom: 24px;
  @media (max-width: ${BREAKPOINTS.small}px) {
    font-size: 24px;
    width: 100%;
  }
`

export const MainNewsSwitchContainer = styled.div`
  display: flex;
  align-items: center;
  width: 150px;
  justify-content: space-between;
  margin-bottom: 24px;
  @media (max-width: ${BREAKPOINTS.small}px) {
    display: none;
  }
`

export const MainNewsSwitchButton = styled.button<MainNewsSwitchButtonProps>`
  background: none;
  border: none;
  cursor: ${props => props.disabled && 'pointer'};
  opacity: ${props => (!props.disabled ? '0.5' : '1')};
`

export const MainNewsSwitchButtonImage = styled.img``

export const MainNewsSwitchAmountNews = styled.p`
  color: #ffffff;
`

export const MainNewsSliderNewsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: ${BREAKPOINTS.small}px) {
    overflow-x: scroll;
  }
`

export const MainNewsSliderNewsItem = styled.div`
  background-color: rgba(255%, 255%, 255%, 32%);
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  padding: 8px 16px 8px 8px;
  cursor: pointer;
  @media (max-width: ${BREAKPOINTS.small}px) {
    margin-right: 20px;
  }
`

export const MainNewsSliderNewsItemImage = styled.img`
  border-radius: 4px;
  width: 80px;
  object-fit: cover;
  margin-right: 10px;
  @media (max-width: ${BREAKPOINTS.small}px) {
    width: 80px;
  }
`

export const MainNewsSliderNewsItemText = styled.p`
  color: #ffffff;
  font-family: ${Fonts.demiBold};
  width: 170px;
  line-height: 140%;
  font-size: 16px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  overflow: hidden;
  -webkit-box-orient: vertical;
`
