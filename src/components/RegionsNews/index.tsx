import RegionsNewsBlock from 'src/components/RegionsNewsBlock'
import * as Styled from 'src/components/RegionsNews/styles'
import { useRegionsNews } from 'src/components/RegionsNews/useRegionsNews'

const RegionsNews = () => {
  const { news } = useRegionsNews()

  console.log('news', news)

  return (
    <Styled.RegionsNewsContainer>
      <Styled.RegionsNewsHeader>
        <Styled.RegionsNewsTitle>Регіони</Styled.RegionsNewsTitle>
        <Styled.RegionsNewsHeaderLink>
          Всі новини розділу
        </Styled.RegionsNewsHeaderLink>
      </Styled.RegionsNewsHeader>
      <Styled.RegionsNewsGridContainer>
        {news.map(item => (
          <RegionsNewsBlock
            key={item.id}
            region={item.region}
            news={item.news}
          />
        ))}
      </Styled.RegionsNewsGridContainer>
    </Styled.RegionsNewsContainer>
  )
}

export default RegionsNews
