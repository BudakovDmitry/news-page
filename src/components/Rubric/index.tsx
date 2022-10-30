import Filter from 'src/components/Filter'
import NewsList from 'src/components/NewsList'
import PhotoNews from 'src/components/PhotoNews'
import * as Styled from 'src/components/Rubric/styles'
import { RubricType } from 'src/types'
import { rubricFilterItems } from 'src/components/Rubric/constants'
import { isMobile } from 'src/helpers'
import { useRubric } from 'src/components/Rubric/useRubric'

type RubricProps = {
  rubric: RubricType
}

const Rubric = ({ rubric }: RubricProps) => {
  const { activeFilter, handleChangeFilter } = useRubric()

  return (
    <Styled.RubricContainer>
      <Styled.RubricHeaderContainer>
        <Styled.RubricHeaderTitle>{rubric.title}</Styled.RubricHeaderTitle>
        <Styled.RubricHeaderLink>Всі новини розділу</Styled.RubricHeaderLink>
      </Styled.RubricHeaderContainer>
      {isMobile() && (
        <Filter
          filterItems={rubricFilterItems}
          active={activeFilter}
          onChange={handleChangeFilter}
        />
      )}
      <Styled.RubricContentContainer>
        {!isMobile() ||
          (activeFilter === 1 && (
            <Styled.NewsWithPhotoContainer>
              <Styled.LargeNews>
                <PhotoNews
                  large={!isMobile() ? true : false}
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
          ))}
        {!isMobile() ||
          (activeFilter === 0 && (
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
          ))}
      </Styled.RubricContentContainer>
      {isMobile() && activeFilter !== 0 && (
        <Styled.RubricTextNewsMoreContainer>
          <Styled.RubricTextNewsMoreText>Більше</Styled.RubricTextNewsMoreText>
          <Styled.RubricTextNewsMoreLink>
            <Styled.RubricTextNewsMoreLinkImage
              src={require('src/images/arrow-black-icon.png')}
              alt="arrow-right"
            />
          </Styled.RubricTextNewsMoreLink>
        </Styled.RubricTextNewsMoreContainer>
      )}
    </Styled.RubricContainer>
  )
}

export default Rubric
