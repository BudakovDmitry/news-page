import styled from 'styled-components'
import { Fonts } from 'src/types'
import { BREAKPOINTS } from 'src/constants'

export const ColumnsContainer = styled.div`
  background-color: #ffffff;
  padding: 30px 20px 20px 20px;
  border-radius: 12px;
  max-width: 304px;
  text-align: center;
  @media (max-width: ${BREAKPOINTS.small}px) {
    background: none;
    padding: 10px 0 10px 10px;
    max-width: 100%;
  }
`

export const ColumnistsContainer = styled.div`
  @media (max-width: ${BREAKPOINTS.small}px) {
    display: flex;
    justify-content: space-between;
    overflow: scroll;
    gap: 10px;
  }
`

export const ColumnsHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
`

export const ColumnsHeader = styled.h3`
  color: #000000;
  font-family: ${Fonts.demiBold};
`

export const ColumnsHeaderLink = styled.a`
  color: #ff7534;
  font-family: ${Fonts.demiBold};
  font-size: 14px;
  cursor: pointer;
  display: block;
  @media (max-width: ${BREAKPOINTS.small}px) {
    margin-right: 20px;
  }
`

export const AllColumnsButton = styled.button`
  width: 90%;
  background: none;
  color: #000000;
  border: 1px solid #000000;
  border-radius: 4px;
  height: 36px;
  font-size: 16px;
  margin-top: 20px;
  cursor: pointer;
  &:hover {
    background-color: #ebebeb;
  }
  @media (max-width: ${BREAKPOINTS.small}px) {
    display: none;
  }
`
