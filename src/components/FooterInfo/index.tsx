import * as Styled from 'src/components/FooterInfo/styles'
import { getCurrentYear } from 'src/utils'

const FooterInfo = () => {
  return (
    <Styled.FooterInfoContainer>
      <Styled.FooterInfoItem>
        {`© 2020-${getCurrentYear()}, ТОВ «Медіа Мережі»`}
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
