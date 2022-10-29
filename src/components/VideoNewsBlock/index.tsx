import PhotoNews from 'src/components/PhotoNews'
import * as Styled from 'src/components/VideoNewsBlock/styles'
import { isMobile } from 'src/helpers'

const ArrowRight = require('src/images/arrow-white-icon.png')

const VideoNewsBlock = () => {
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
            <PhotoNews
              image="5.png"
              date="05 серпня 11:00"
              text='"Це не Джошуа": Усик розповів, кого вважає своїм головним суперником'
              large={!isMobile()}
              colorText="#ffffff"
              icon={require('src/images/play-icon.png')}
            />
            <Styled.VideoNewsSmallContainer>
              <PhotoNews
                image="5.png"
                date="05 серпня 11:00"
                text='"Це не Джошуа": Усик розповів, кого вважає своїм головним суперником'
                colorText="#ffffff"
                icon={require('src/images/play-icon.png')}
              />
              <PhotoNews
                image="5.png"
                date="05 серпня 11:00"
                text='"Це не Джошуа": Усик розповів, кого вважає своїм головним суперником'
                colorText="#ffffff"
                icon={require('src/images/play-icon.png')}
              />
              <PhotoNews
                image="5.png"
                date="05 серпня 11:00"
                text='"Це не Джошуа": Усик розповів, кого вважає своїм головним суперником'
                colorText="#ffffff"
                icon={require('src/images/play-icon.png')}
              />
              <PhotoNews
                image="5.png"
                date="05 серпня 11:00"
                text='"Це не Джошуа": Усик розповів, кого вважає своїм головним суперником'
                colorText="#ffffff"
                icon={require('src/images/play-icon.png')}
              />
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
