import * as Styled from 'src/components/PromoPreviewItem/styles'

type PromoPreviewItemProps = {
  date: string
  text: string
}

const PromoPreviewItem = ({ date = '', text = '' }: PromoPreviewItemProps) => {
  return (
    <Styled.PromoPreviewItemContainer>
      <Styled.PromoPreviewItemDate>{date}</Styled.PromoPreviewItemDate>
      <Styled.PromoPreviewItemText>{text}</Styled.PromoPreviewItemText>
    </Styled.PromoPreviewItemContainer>
  )
}

export default PromoPreviewItem
