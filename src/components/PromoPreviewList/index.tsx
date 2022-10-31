import { isMobile } from 'src/helpers'
import PromoPreviewItem from 'src/components/PromoPreviewItem'
import * as Styled from 'src/components/PromoPreviewList/styles'
import { PromoType } from 'src/types'

const MoreIcon = require('src/images/arrow-right-in-cicle.png')

type PromoPreviewListProps = {
  promos: PromoType[]
}

const PromoPreviewList = ({ promos }: PromoPreviewListProps) => {
  return (
    <Styled.PreviewListContainer>
      {!isMobile() ? (
        <Styled.GradientBox>
          <Styled.PreviewsContainer>
            {promos.map(promo => (
              <PromoPreviewItem
                key={promo.id}
                date={promo.date}
                text={promo.text}
              />
            ))}
          </Styled.PreviewsContainer>
          <Styled.MoreLink>
            <Styled.MoreLinkIcon src={MoreIcon} alt="MoreLink" />
          </Styled.MoreLink>
        </Styled.GradientBox>
      ) : (
        <>
          {promos.map(promo => (
            <PromoPreviewItem
              key={promo.id}
              date={promo.date}
              text={promo.text}
            />
          ))}
        </>
      )}
    </Styled.PreviewListContainer>
  )
}

export default PromoPreviewList
