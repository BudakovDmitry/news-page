import { NewsType } from 'src/types'
import TextNews from 'src/components/TextNews'
import * as Styled from 'src/components/NewsList/styles'

type NewsListProps = {
  news: NewsType[]
}

const NewsList = ({ news = [] }: NewsListProps) => {
  return (
    <Styled.NewsListContainer>
      {news.map((item: NewsType) => (
        <TextNews
          key={item.id}
          time={item.time}
          text={item.text}
          breaking={item.breaking}
          info={item.info}
          infoImage={item.infoImage}
        />
      ))}
    </Styled.NewsListContainer>
  )
}

export default NewsList
