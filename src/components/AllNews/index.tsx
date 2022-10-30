import { useAllNews } from 'src/components/AllNews/useAllNews'
import * as Styled from 'src/components/AllNews/styles'
import NewsList from 'src/components/NewsList'
import { allNewsFilters } from 'src/components/AllNews/constants'
import Filter from 'src/components/Filter'

const ArrowCicleIcon = require('src/images/arrow-cicle-icon.png')

const AllNews = () => {
  const { news, activeFilter, handleChangeFilter } = useAllNews()

  return (
    <Styled.AllNewsContainer>
      <Styled.AllNewsHeaderContainer>
        <Styled.AllNewsHeader>Всі новини</Styled.AllNewsHeader>
        <Styled.AllNewsHeaderLink>Архів</Styled.AllNewsHeaderLink>
      </Styled.AllNewsHeaderContainer>
      <Filter
        filterItems={allNewsFilters}
        active={activeFilter}
        onChange={handleChangeFilter}
      />
      <Styled.GradientBox>
        <NewsList news={news} />
      </Styled.GradientBox>
      <Styled.AllNewsButtonMore>
        <Styled.AllNewsButtonMoreIcon
          src={ArrowCicleIcon}
          alt="Arrow cicle icon"
        />
        <Styled.AllNewsButtonMoreText>
          Завантажити ще
        </Styled.AllNewsButtonMoreText>
      </Styled.AllNewsButtonMore>
    </Styled.AllNewsContainer>
  )
}

export default AllNews
