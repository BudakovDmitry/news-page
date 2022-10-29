import { useAllNews } from 'src/components/AllNews/useAllNews'
import * as Styled from 'src/components/AllNews/styles'
import NewsList from 'src/components/NewsList'

const ArrowCicleIcon = require('src/images/arrow-cicle-icon.png')

const AllNews = () => {
  const { activeFilter, handleActiveFilter, news } = useAllNews()

  return (
    <Styled.AllNewsContainer>
      <Styled.AllNewsHeaderContainer>
        <Styled.AllNewsHeader>Всі новини</Styled.AllNewsHeader>
        <Styled.AllNewsHeaderLink>Архів</Styled.AllNewsHeaderLink>
      </Styled.AllNewsHeaderContainer>
      <Styled.AllNewsFilterContainer>
        <Styled.AllNewsFilterButton
          onClick={() => handleActiveFilter(0)}
          active={activeFilter === 0}
        >
          Всі
        </Styled.AllNewsFilterButton>
        <Styled.AllNewsFilterButton
          onClick={() => handleActiveFilter(1)}
          active={activeFilter === 1}
        >
          Новини
        </Styled.AllNewsFilterButton>
        <Styled.AllNewsFilterButton
          onClick={() => handleActiveFilter(2)}
          active={activeFilter === 2}
        >
          Статті
        </Styled.AllNewsFilterButton>
      </Styled.AllNewsFilterContainer>
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
