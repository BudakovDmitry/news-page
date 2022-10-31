import * as Styled from 'src/components/FooterInfo/styles'

const FooterInfo = () => {
  return (
    <Styled.FooterInfoContainer>
      <Styled.FooterInfoItem>
        © 2020-2022, ТОВ «Медіа Мережі»
      </Styled.FooterInfoItem>
      <Styled.FooterInfoPoliticsContainer>
        <Styled.FooterInfoPolitic>
          Політика користувача
        </Styled.FooterInfoPolitic>
        <Styled.FooterInfoPolitic>
          Політика конфіденційності
        </Styled.FooterInfoPolitic>
        <Styled.FooterInfoPolitic>
          Політика конфіденційності
        </Styled.FooterInfoPolitic>
      </Styled.FooterInfoPoliticsContainer>
    </Styled.FooterInfoContainer>
  )
}

export default FooterInfo
