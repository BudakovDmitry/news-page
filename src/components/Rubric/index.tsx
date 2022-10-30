import NewsList from 'src/components/NewsList'
import PhotoNews from 'src/components/PhotoNews'
import * as Styled from 'src/components/Rubric/styles'
import { useAllNews } from 'src/components/AllNews/useAllNews'

const Rubric = () => {
  const { news } = useAllNews()
  return (
    <Styled.RubricContainer>
      <Styled.RubricHeaderContainer>
        <Styled.RubricHeaderTitle>Політика</Styled.RubricHeaderTitle>
        <Styled.RubricHeaderLink>Всі новини розділу</Styled.RubricHeaderLink>
      </Styled.RubricHeaderContainer>
      <Styled.RubricContentContainer>
        <Styled.NewsWithPhotoContainer>
          <Styled.LargeNews>
            <PhotoNews
              large={true}
              image="2.png"
              date="05 january 2022"
              text='У "Слузі" пояснили, чому в росії знову заговорили про переговори з Україною.'
            />
          </Styled.LargeNews>
          <PhotoNews
            image="2.png"
            date="05 january 2022"
            text='У "Слузі" пояснили, чому в росії знову заговорили про переговори з Україною.'
          />
          <PhotoNews
            image="2.png"
            date="05 january 2022"
            text='У "Слузі" пояснили, чому в росії знову заговорили про переговори з Україною.'
          />
        </Styled.NewsWithPhotoContainer>
        <Styled.RubricTextNewsContainer>
          <Styled.RubricTextNewsHeader>
            Новини розділу
          </Styled.RubricTextNewsHeader>
          <NewsList news={news.slice(0, 5)} />
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
