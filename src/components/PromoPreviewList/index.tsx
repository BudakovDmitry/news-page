import { isMobile } from 'src/helpers'
import PromoPreviewItem from 'src/components/PromoPreviewItem'
import * as Styled from 'src/components/PromoPreviewList/styles'

const MoreIcon = require('src/images/arrow-right-in-cicle.png')

const PromoPreviewList = () => {
  return (
    <Styled.PreviewListContainer>
      {!isMobile() ? (
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
      ) : (
        <>
          <PromoPreviewItem />
          <PromoPreviewItem />
          <PromoPreviewItem />
          <PromoPreviewItem />
        </>
      )}
    </Styled.PreviewListContainer>
  )
}

export default PromoPreviewList
