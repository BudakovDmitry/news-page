import RegionsNewsBlock from 'src/components/RegionsNewsBlock'
import * as Styled from 'src/components/RegionsNews/styles'
import { useRegionsNews } from 'src/components/RegionsNews/useRegionsNews'
import { isMobile } from 'src/helpers'
import Filter from 'src/components/Filter'
import { regionsNewsFilters } from 'src/components/RegionsNews/constants'

const RegionsNews = () => {
  const { news, activeFilter, handleChangeFilter } = useRegionsNews()

  return (
    <Styled.RegionsNewsContainer>
      <Styled.RegionsNewsHeader>
        <Styled.RegionsNewsTitle>Регіони</Styled.RegionsNewsTitle>
        <Styled.RegionsNewsHeaderLink>
          Всі новини розділу
        </Styled.RegionsNewsHeaderLink>
      </Styled.RegionsNewsHeader>
      {isMobile() && (
        <Filter
          filterItems={regionsNewsFilters}
          active={activeFilter}
          onChange={handleChangeFilter}
        />
      )}
      <Styled.RegionContainer>
        {news.map(item => (
          <RegionsNewsBlock
            key={item.id}
            region={item.region}
            news={item.news}
          />
        ))}
      </Styled.RegionContainer>
    </Styled.RegionsNewsContainer>
  )
}

export default RegionsNews
