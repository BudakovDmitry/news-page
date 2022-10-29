import * as Styled from 'src/components/PhotoNews/styles'

type PhotoNewsProps = {
  image: string
  date: string
  text: string
  large?: boolean
  colorText?: string
  icon?: string
}

const PhotoNews = ({
  image = '',
  date = '',
  text = '',
  large = false,
  colorText = '',
  icon = '',
}: PhotoNewsProps) => {
  return (
    <Styled.PhotoNewsContainer large={large}>
      <Styled.PhotoNewsImage
        src={require(`src/images/${image}`)}
        alt={image}
        large={large}
      />
      <Styled.PhotoNewsDate>{date}</Styled.PhotoNewsDate>
      <Styled.PhotoNewsText color={colorText} large={large}>
        {text}
      </Styled.PhotoNewsText>
      {icon && <Styled.PhotoNewsIcon large={large} src={icon} alt="icon" />}
    </Styled.PhotoNewsContainer>
  )
}

export default PhotoNews
