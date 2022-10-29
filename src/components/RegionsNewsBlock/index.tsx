import TextNews from 'src/components/TextNews'
import * as Styled from 'src/components/RegionsNewsBlock/styles'
import { DateNewsType } from 'src/types'
import { slicedRegionsNewsByDate } from 'src/helpers'

const ArrowRight = require('src/images/arrow-black-icon.png')

type RegionsNewsBlockProps = {
  news: DateNewsType[]
  region: string
}

const RegionsNewsBlock = ({
  news = [],
  region = '',
}: RegionsNewsBlockProps) => {
  return (
    <Styled.RegionsNewsBlockContainer>
      <Styled.RegionsNewsBlockTitle>{region}</Styled.RegionsNewsBlockTitle>
      {news.map(item => (
        <Styled.RegionsNewsDateBlock key={item.id}>
          <Styled.RegionsNewsDate>{item.date}</Styled.RegionsNewsDate>
          {slicedRegionsNewsByDate(item.news, news.length).map(item => (
            <TextNews
              key={item.id}
              time={item.time}
              text={item.text}
              breaking={item.breaking}
              info={item.info}
              infoImage={item.infoImage}
            />
          ))}
        </Styled.RegionsNewsDateBlock>
      ))}
      <Styled.RegionsNewsMoreNewsContainer>
        <Styled.RegionsNewsMoreNewsText>
          Більше новин
        </Styled.RegionsNewsMoreNewsText>
        <Styled.RegionsNewsMoreNewsLink>
          <Styled.RegionsNewsMoreNewsImage
            src={ArrowRight}
            alt="arrow-right-icon"
          />
        </Styled.RegionsNewsMoreNewsLink>
      </Styled.RegionsNewsMoreNewsContainer>
    </Styled.RegionsNewsBlockContainer>
  )
}

export default RegionsNewsBlock
