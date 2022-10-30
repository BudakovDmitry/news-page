import PromoPreviewItem from 'src/components/PromoPreviewItem'
import * as Styled from 'src/components/PromoPreviewList/styles'

const MoreIcon = require('src/images/arrow-right-in-cicle.png')

const PromoPreviewList = () => {
  return (
    <Styled.PreviewListContainer>
      <Styled.GradientBox>
        <Styled.PreviewsContainer>
          <PromoPreviewItem />
          <PromoPreviewItem />
          <PromoPreviewItem />
          <PromoPreviewItem />
        </Styled.PreviewsContainer>
        <Styled.MoreLink>
          <Styled.MoreLinkIcon src={MoreIcon} alt="MoreLink" />
        </Styled.MoreLink>
      </Styled.GradientBox>
    </Styled.PreviewListContainer>
  )
}

export default PromoPreviewList
