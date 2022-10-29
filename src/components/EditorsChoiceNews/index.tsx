import PhotoNews from 'src/components/PhotoNews'
import * as Styled from 'src/components/EditorsChoiceNews/styles'
import { useEditorsChoiceNews } from 'src/components/EditorsChoiceNews/useEditorsChoiceNews'
import { isMobile } from 'src/helpers'

const ArrowCicleIcon = require('src/images/arrow-cicle-icon.png')

const EditorsChoiceNews = () => {
  const { news } = useEditorsChoiceNews()

  return (
    <Styled.EditorsChoiceNewsContainer>
      <Styled.EditorsChoiceNewsHeader>
        Вибір редакції
      </Styled.EditorsChoiceNewsHeader>
      <Styled.EditorsChoiceNewsGridContainer>
        {(isMobile() ? news.slice(0, 3) : news).map(item => (
          <PhotoNews
            key={item.id}
            image={item.image}
            date={item.date}
            text={item.text}
          />
        ))}
      </Styled.EditorsChoiceNewsGridContainer>
      {isMobile() && (
        <Styled.EditorsChoiceNewsButtonMore>
          <Styled.EditorsChoiceNewsButtonMoreIcon
            src={ArrowCicleIcon}
            alt="Arrow cicle icon"
          />
          <Styled.EditorsChoiceNewsButtonMoreText>
            Завантажити ще
          </Styled.EditorsChoiceNewsButtonMoreText>
        </Styled.EditorsChoiceNewsButtonMore>
      )}
    </Styled.EditorsChoiceNewsContainer>
  )
}

export default EditorsChoiceNews
