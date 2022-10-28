import { Fonts } from 'src/types'
import styled from 'styled-components'
import { StatisticsLineContainerItemsProps } from 'src/components/StatisticsLine/types'

export const StatisticsLineContainer = styled.div`
  padding: 10px 40px;
  height: 10px;
  display: flex;
  align-items: center;
  gap: 40px;
  background-color: #121b30;
  position: relative;
  overflow-x: hidden;
`
export const StatisticsLineHeaderContainer = styled.div`
  height: 28px;
  width: 120px;
  position: absolute;
  left: 0px;
  top: 0px;
  padding-left: 40px;
  background-color: #121b30;
  display: flex;
  align-items: center;
  z-index: 100;
`

export const StatisticsLineHeader = styled.h3`
  color: #ffffff;
  font-size: 14px;
  font-family: ${Fonts.demiBold};
`

export const StatisticsLineContainerItems = styled.div<StatisticsLineContainerItemsProps>`
  display: flex;
  align-items: center;
  transform: ${props => `translate(${props.translate}px)`};
  transition: transform 5s;
  gap: 30px;
  overflow-x: scroll;
`

export const StatisticsLineContainerItem = styled.div`
  display: flex;
  align-items: center;
`

export const StatisticsLineItem = styled.p`
  color: #ebebeb;
  font-size: 14px;
  font-family: ${Fonts.regular};
`
export const StatisticsLineItemImage = styled.img`
  margin: 10px;
`

export const StatisticsLineItemValue = styled.span`
  margin-left: 5px;
  color: #ff7534;
  font-size: 16px;
  font-family: ${Fonts.medium};
`
