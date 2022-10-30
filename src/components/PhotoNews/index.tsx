import * as Styled from 'src/components/PhotoNews/styles'

type PhotoNewsProps = {
  image: string
  date: string
  text: string
  large?: boolean
  colorText?: string
  icon?: string
  type?: string
  typeIcon?: string
}

const PhotoNews = ({
  image = '',
  date = '',
  text = '',
  large = false,
  colorText = '',
  icon = '',
  type = '',
  typeIcon = '',
}: PhotoNewsProps) => {
  return (
    <Styled.PhotoNewsContainer large={large}>
      <Styled.PhotoNewsImage
        src={require(`src/images/${image}`)}
        alt={image}
        large={large}
      />
      <Styled.NewsInfo>
        <Styled.PhotoNewsDate>{date}</Styled.PhotoNewsDate>
        {type && (
          <Styled.NewsType>
            <Styled.NewsTypeIcon src={require(`src/images/${typeIcon}`)} />
            <Styled.NewsTypeDescription>{type}</Styled.NewsTypeDescription>
          </Styled.NewsType>
        )}
      </Styled.NewsInfo>

      <Styled.PhotoNewsText color={colorText} large={large}>
        {text}
      </Styled.PhotoNewsText>
      {icon && <Styled.PhotoNewsIcon large={large} src={icon} alt="icon" />}
    </Styled.PhotoNewsContainer>
  )
}

export default PhotoNews
