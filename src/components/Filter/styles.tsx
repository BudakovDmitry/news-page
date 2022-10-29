import styled from 'styled-components'
import { Fonts } from 'src/types'
import { FilterButtonProps } from 'src/components/Filter/types'

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 30px;
`

export const FilterButton = styled.button<FilterButtonProps>`
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
