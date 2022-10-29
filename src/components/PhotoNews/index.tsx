import * as Styled from 'src/components/PhotoNews/styles'

type PhotoNewsProps = {
  image: string
  date: string
  text: string
  large?: boolean
}

const PhotoNews = ({
  image = '',
  date = '',
  text = '',
  large = false,
}: PhotoNewsProps) => {
  return (
    <Styled.PhotoNewsContainer large={large}>
      <Styled.PhotoNewsImage
        src={require(`src/images/${image}`)}
        alt={image}
        large={large}
      />
      <Styled.PhotoNewsDate>{date}</Styled.PhotoNewsDate>
      <Styled.PhotoNewsText>{text}</Styled.PhotoNewsText>
    </Styled.PhotoNewsContainer>
  )
}

export default PhotoNews
