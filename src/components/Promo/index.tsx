import PromoItem from 'src/components/PromoItem'
import * as Styled from 'src/components/Promo/styles'
import PromoPreviewList from 'src/components/PromoPreviewList'

const Promo = () => {
  return (
    <Styled.PromoContainer>
      <Styled.PromoHeaderContainer>
        <Styled.PromoHeaderTitle>Промо</Styled.PromoHeaderTitle>
        <Styled.PromoHeaderLink>Всі матеріали</Styled.PromoHeaderLink>
      </Styled.PromoHeaderContainer>
      <PromoItem />
      <PromoPreviewList />
    </Styled.PromoContainer>
  )
}

export default Promo
