import styled from 'styled-components'
import { Fonts } from 'src/types'
import { BREAKPOINTS } from 'src/constants'

export const HeaderContainer = styled.div`
  width: 100%;
  padding: 24px 40px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  border-bottom: 1px solid #e8e8e8;
  @media (max-width: ${BREAKPOINTS.small}px) {
    padding: 20px 20px;
  }
`

export const HeaderButtonMenuIcon = styled.img`
  margin-right: 8px;
`

export const HeaderButtonMenu = styled.button`
  border-radius: 4px;
  background-color: #f6f6f6;
  border: none;
  padding: 8px 12px;
  font-family: ${Fonts.medium};
  margin-right: 30px;
  cursor: pointer;
  display: flex;
  @media (max-width: ${BREAKPOINTS.small}px) {
    margin-right: auto;
  }
`

export const HeaderNavCityList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: auto;
  width: 150px;
  @media (max-width: ${BREAKPOINTS.small}px) {
    display: none;
  }
`

export const HeaderNavCity = styled.li`
  list-style-type: none;
  font-family: ${Fonts.demiBold};
  font-size: 14px;
  color: #2d2d2d;
  cursor: pointer;
  align-items: center;
`

export const HeaderNavCityLink = styled.a``

export const HeaderSearchInputContainer = styled.div`
  position: relative;
  margin-right: 38px;
  @media (max-width: ${BREAKPOINTS.small}px) {
    display: none;
  }
`

export const HeaderSearchInputIcon = styled.img`
  position: absolute;
  left: 20px;
  top: 10px;
`

export const HeaderSearchInput = styled.input`
  width: 272px;
  height: 37px;
  border-radius: 68px;
  background-color: #f6f6f6;
  border: none;
  padding-left: 50px;
  &::placeholder {
    font-size: 14px;
    color: #b0b0b0;
  }
`

export const HeaderSocialLinkList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  margin-right: 30px;
  @media (max-width: ${BREAKPOINTS.small}px) {
    display: none;
  }
`

export const HeaderSocialLink = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;
`

export const HeaderSocialLinkIcon = styled.img`
  max-width: 22px;
`

export const HeaderLineIcon = styled.img`
  max-width: 20px;
  margin-right: 30px;
  @media (max-width: ${BREAKPOINTS.small}px) {
    display: none;
  }
`

export const HeaderLangList = styled.ul`
  display: flex;
  align-items: center;
`

export const HeaderLangListItem = styled.li`
  list-style-type: none;
  text-transform: uppercase;
  color: #b0b0b0;
  cursor: pointer;
  font-family: ${Fonts.medium};
  &:hover {
    color: #2d2d2d;
  }
  &:active {
    color: #2d2d2d;
  }
  &:first-child {
    margin-right: 16px;
  }
`
