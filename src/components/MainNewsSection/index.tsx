import { useMainNewsSection } from 'src/components/MainNewsSection/useMainNewsSection'
import * as Styled from 'src/components/MainNewsSection/styles'
import { MainNewsType } from 'src/types'

const ArrowLeft = require('src/images/arrow-left.png')
const ArrowRight = require('src/images/arrow-right.png')

const MainNewsSection = () => {
  const { news, activeSlide, handleSwitchSlide } = useMainNewsSection()

  return (
    <Styled.MainNewsSectionContainer background={news[activeSlide].image}>
      <Styled.MainNewsSectionContentContainer>
        <Styled.MainNewsSectionHeader>
          {news[activeSlide].news}
        </Styled.MainNewsSectionHeader>
        <Styled.MainNewsSwitchContainer>
          <Styled.MainNewsSwitchButton disabled={activeSlide > 0}>
            <Styled.MainNewsSwitchButtonImage
              src={ArrowLeft}
              alt="arrow-left"
              onClick={() =>
                activeSlide > 0 && handleSwitchSlide(activeSlide - 1)
              }
            />
          </Styled.MainNewsSwitchButton>
          <Styled.MainNewsSwitchAmountNews>
            {`${activeSlide + 1} / ${news.length}`}
          </Styled.MainNewsSwitchAmountNews>
          <Styled.MainNewsSwitchButton disabled={activeSlide < news.length - 1}>
            <Styled.MainNewsSwitchButtonImage
              src={ArrowRight}
              alt="arrow-right"
              onClick={() =>
                activeSlide < news.length - 1 &&
                handleSwitchSlide(activeSlide + 1)
              }
            />
          </Styled.MainNewsSwitchButton>
        </Styled.MainNewsSwitchContainer>
        <Styled.MainNewsSliderNewsContainer>
          {news.map((item: MainNewsType, index: number) => (
            <Styled.MainNewsSliderNewsItem
              key={item.id}
              onClick={() => handleSwitchSlide(index)}
            >
              <Styled.MainNewsSliderNewsItemImage
                src={require(`src/images/${item.image}`)}
                alt="news-image"
              />
              <Styled.MainNewsSliderNewsItemText>
                {item.news}
              </Styled.MainNewsSliderNewsItemText>
            </Styled.MainNewsSliderNewsItem>
          ))}
        </Styled.MainNewsSliderNewsContainer>
      </Styled.MainNewsSectionContentContainer>
    </Styled.MainNewsSectionContainer>
  )
}

export default MainNewsSection
