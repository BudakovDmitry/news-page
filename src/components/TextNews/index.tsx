import * as Styled from 'src/components/TextNews/styles'

type NewsProps = {
  time: string
  text: string
  info?: string
  infoImage?: string
  breaking: boolean
}

const TextNews = ({
  time = '',
  text = '',
  info = '',
  infoImage = '',
  breaking = false,
}: NewsProps) => {
  return (
    <Styled.NewsContainer>
      {info || infoImage ? (
        <Styled.NewsInfoContainer>
          <Styled.NewsInfoImage
            src={require(`src/images/${infoImage}`)}
            alt="News icon"
          />
          <Styled.NewsInfoDescription breaking={breaking}>
            {info}
          </Styled.NewsInfoDescription>
        </Styled.NewsInfoContainer>
      ) : null}
      <Styled.NewsHours>{time}</Styled.NewsHours>
      <Styled.NewsText breaking={breaking}>{text}</Styled.NewsText>
    </Styled.NewsContainer>
  )
}

export default TextNews
