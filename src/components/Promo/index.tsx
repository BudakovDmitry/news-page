import PromoItem from 'src/components/PromoItem'
import * as Styled from 'src/components/Promo/styles'
import PromoPreviewList from 'src/components/PromoPreviewList'
import { usePromo } from 'src/components/Promo/usePromo'

const Promo = () => {
  const { promos } = usePromo()

  return (
    <Styled.PromoContainer>
      <Styled.PromoHeaderContainer>
        <Styled.PromoHeaderTitle>Промо</Styled.PromoHeaderTitle>
        <Styled.PromoHeaderLink>Всі матеріали</Styled.PromoHeaderLink>
      </Styled.PromoHeaderContainer>
      <PromoItem />
      <PromoPreviewList promos={promos} />
    </Styled.PromoContainer>
  )
}

export default Promo
