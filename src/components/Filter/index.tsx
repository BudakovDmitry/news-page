import * as Styled from 'src/components/Filter/styles'
import { FilterType } from 'src/types'

type FilterProps = {
  filterItems: FilterType[]
  active?: number
  onChange?: (id: number) => void
}

const Filter = ({ filterItems, active, onChange = () => {} }: FilterProps) => {
  return (
    <Styled.FilterContainer>
      {filterItems.map(filter => (
        <Styled.FilterButton
          key={filter.id}
          onClick={() => {
            onChange(filter.id)
          }}
          active={active === filter.id}
        >
          {filter.name}
        </Styled.FilterButton>
      ))}
    </Styled.FilterContainer>
  )
}

export default Filter
