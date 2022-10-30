import * as Styled from 'src/components/PromoItem/styles'

const PromoItem = () => {
  return (
    <Styled.PromoItemContainer>
      <Styled.PromoImage src={require('src/images/4.png')} alt="PromoImage" />
      <Styled.PromoContent>
        <Styled.PromoContentInfo>
          <Styled.PromoContentDate>05 серпня 11:00</Styled.PromoContentDate>
          <Styled.PromoContentType>
            <Styled.PromoContentTypeIcon
              src={require('src/images/megaphone-icon.png')}
              alt="Promo"
            />
            <Styled.PromoContentTypeText>Промо</Styled.PromoContentTypeText>
          </Styled.PromoContentType>
        </Styled.PromoContentInfo>
        <Styled.PromoText>
          Акція! Телевізори Samsung з вигодою та в оплату частинами до 12
          платежів
        </Styled.PromoText>
      </Styled.PromoContent>
    </Styled.PromoItemContainer>
  )
}

export default PromoItem
