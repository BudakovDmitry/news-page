import PhotoNews from 'src/components/PhotoNews'
import * as Styled from 'src/components/VideoNewsBlock/styles'

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
              large={true}
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
        </Styled.VideoNewsBlockContainer>
      </Styled.GradientBox>
    </Styled.VideoNewsBlock>
  )
}

export default VideoNewsBlock
