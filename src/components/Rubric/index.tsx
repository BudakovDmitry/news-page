import NewsList from 'src/components/NewsList'
import PhotoNews from 'src/components/PhotoNews'
import * as Styled from 'src/components/Rubric/styles'
import { RubricType } from 'src/types'

type RubricProps = {
  rubric: RubricType
}

const Rubric = ({ rubric }: RubricProps) => {
  return (
    <Styled.RubricContainer>
      <Styled.RubricHeaderContainer>
        <Styled.RubricHeaderTitle>{rubric.title}</Styled.RubricHeaderTitle>
        <Styled.RubricHeaderLink>Всі новини розділу</Styled.RubricHeaderLink>
      </Styled.RubricHeaderContainer>
      <Styled.RubricContentContainer>
        <Styled.NewsWithPhotoContainer>
          <Styled.LargeNews>
            <PhotoNews
              large={true}
              image={rubric.news.mainLargeNews[0].image}
              date={rubric.news.mainLargeNews[0].date}
              text={rubric.news.mainLargeNews[0].text}
              type={rubric.news.mainLargeNews[0].type}
              typeIcon={rubric.news.mainLargeNews[0].typeIcon}
            />
          </Styled.LargeNews>
          {rubric.news.mainSmallNews.map(news => (
            <PhotoNews
              key={news.id}
              image={news.image}
              date={news.date}
              text={news.text}
            />
          ))}
        </Styled.NewsWithPhotoContainer>
        <Styled.RubricTextNewsContainer>
          <Styled.RubricTextNewsHeader>
            Новини розділу
          </Styled.RubricTextNewsHeader>
          <NewsList news={rubric.news.textNews.slice(0, 5)} />
          <Styled.RubricTextNewsMoreContainer>
            <Styled.RubricTextNewsMoreText>
              Більше
            </Styled.RubricTextNewsMoreText>
            <Styled.RubricTextNewsMoreLink>
              <Styled.RubricTextNewsMoreLinkImage
                src={require('src/images/arrow-black-icon.png')}
                alt="arrow-right"
              />
            </Styled.RubricTextNewsMoreLink>
          </Styled.RubricTextNewsMoreContainer>
        </Styled.RubricTextNewsContainer>
      </Styled.RubricContentContainer>
    </Styled.RubricContainer>
  )
}

export default Rubric
