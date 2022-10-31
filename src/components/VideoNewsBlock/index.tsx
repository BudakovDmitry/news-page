import { useVideoNewsBlock } from 'src/components/VideoNewsBlock/useVideoNewsBlock'
import PhotoNews from 'src/components/PhotoNews'
import * as Styled from 'src/components/VideoNewsBlock/styles'
import { isMobile } from 'src/helpers'
import { VideoNewsType } from 'src/types'

const ArrowRight = require('src/images/arrow-white-icon.png')

const VideoNewsBlock = () => {
  const { videoNews } = useVideoNewsBlock()

  return (
    <Styled.VideoNewsBlock>
      <Styled.GradientBox>
        <Styled.VideoNewsBlockContainer>
          <Styled.VideoNewsBlockHeader>
            <Styled.VideoNewsBlockTitle>Відео</Styled.VideoNewsBlockTitle>
            <Styled.VideoNewsBlockHeaderMoreNews>
              <Styled.MoreNewsText>Більше новин</Styled.MoreNewsText>
              <Styled.MoreNewsLink>
                <Styled.MoreNewsLinkImage src={ArrowRight} alt="Arrow-right" />
              </Styled.MoreNewsLink>
            </Styled.VideoNewsBlockHeaderMoreNews>
          </Styled.VideoNewsBlockHeader>
          <Styled.VideoNewsContainer>
            {videoNews.slice(0, 1).map((news: VideoNewsType) => (
              <PhotoNews
                key={news.id}
                image={news.image}
                date={news.date}
                text={news.text}
                large={!isMobile()}
                colorText="#ffffff"
                icon={require('src/images/play-icon.png')}
              />
            ))}
            <Styled.VideoNewsSmallContainer>
              {videoNews.slice(1).map((news: VideoNewsType) => (
                <PhotoNews
                  key={news.id}
                  image={news.image}
                  date={news.date}
                  text={news.text}
                  colorText="#ffffff"
                  icon={require('src/images/play-icon.png')}
                />
              ))}
            </Styled.VideoNewsSmallContainer>
          </Styled.VideoNewsContainer>
          {isMobile() && (
            <Styled.VideoNewsMoreButton>Більше</Styled.VideoNewsMoreButton>
          )}
        </Styled.VideoNewsBlockContainer>
      </Styled.GradientBox>
    </Styled.VideoNewsBlock>
  )
}

export default VideoNewsBlock
