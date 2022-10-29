import { useFilter } from 'src/components/Filter/useFilter'
import * as Styled from 'src/components/Filter/styles'
import { FilterType } from 'src/types'

type FilterProps = {
  filterItems: FilterType[]
}

const Filter = ({ filterItems }: FilterProps) => {
  const { activeFilter, handleActiveFilter } = useFilter()

  return (
    <Styled.FilterContainer>
      {filterItems.map(filter => (
        <Styled.FilterButton
          key={filter.id}
          onClick={() => handleActiveFilter(filter.id)}
          active={activeFilter === filter.id}
        >
          {filter.name}
        </Styled.FilterButton>
      ))}
    </Styled.FilterContainer>
  )
}

export default Filter
