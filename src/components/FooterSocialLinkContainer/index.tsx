import { useFooterSocialLinkContainer } from 'src/components/FooterSocialLinkContainer/useFooterSocialLinkContainer'
import * as Styled from 'src/components/FooterSocialLinkContainer/styles'
import { SocialLinkType } from 'src/types'

const FooterSocialLinkContainer = () => {
  const { socialLinks } = useFooterSocialLinkContainer()

  return (
    <Styled.FooterLinkContainer>
      <Styled.SocialLinkContainerHeader>
        Новини у зручному форматі
      </Styled.SocialLinkContainerHeader>
      <Styled.SocialLinkContainer>
        {socialLinks.map((link: SocialLinkType) => (
          <Styled.Link key={link.id}>
            <Styled.LinkImage src={require(`src/images/${link.icon}`)} />
            <Styled.LinkText>{link.name}</Styled.LinkText>
          </Styled.Link>
        ))}
      </Styled.SocialLinkContainer>
    </Styled.FooterLinkContainer>
  )
}

export default FooterSocialLinkContainer
