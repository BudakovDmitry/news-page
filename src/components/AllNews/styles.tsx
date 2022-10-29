import { Fonts } from 'src/types'
import styled from 'styled-components'
import { AllNewsFilterButtonProps } from 'src/components/AllNews/types'
import { BREAKPOINTS } from 'src/constants'

export const AllNewsContainer = styled.div`
  background-color: #ffffff;
  padding: 30px 20px 20px 20px;
  border-radius: 12px;
  text-align: center;
  position: relative;
  @media (max-width: ${BREAKPOINTS.small}px) {
    border-radius: 0;
    margin: 0;
  }
`
export const AllNewsHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
`

export const AllNewsHeader = styled.h3`
  color: #000000;
  font-family: ${Fonts.demiBold};
`

export const AllNewsHeaderLink = styled.a`
  color: #000000;
  font-family: ${Fonts.demiBold};
  font-size: 14px;
  cursor: pointer;
  display: block;
  border-bottom: 1px solid #000000;
`

export const AllNewsFilterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 30px;
`

export const AllNewsFilterButton = styled.button<AllNewsFilterButtonProps>`
  color: ${props => (props.active ? '#ff7534' : '#919191')};
  font-family: ${Fonts.medium};
  border-radius: 4px;
  background: ${props => (props.active ? '#ffeae0' : 'none')};
  border: none;
  align-items: center;
  font-size: 16px;
  cursor: pointer;
  padding: 10px;
  &:hover {
    color: #ff7534;
  }
`

export const AllNewsButtonMore = styled.button`
  width: 80%;
  height: 38px;
  background-color: #ffffff;
  border: 1px solid #979ea9;
  border-radius: 4px;
  margin: 26px auto;
  font-size: 16px;
  font-family: ${Fonts.medium};
  cursor: pointer;
  color: #182840;
  &:hover {
    background-color: #ebebeb;
  }
`

export const AllNewsButtonMoreText = styled.span``

export const AllNewsButtonMoreIcon = styled.img`
  vertical-align: middle;
  margin-right: 10px;
`

export const GradientBox = styled.div`
  width: 100%;
  &:after {
    content: '';
    display: block;
    height: 10%;
    position: absolute;
    bottom: 90px;
    left: 2px;
    right: 2px;
    opacity: 1;
    background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0.8) 50%,
      rgba(251, 251, 251, 0) 100%
    );
    z-index: 200;
  }
`
