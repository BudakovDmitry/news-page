import { useSelector } from "react-redux"
import { SocialLinkType } from "src/types"

type SocialLinksState = {
  socialLinks: SocialLinkType[] 
}

export const useFooterSocialLinkContainer = () => {
  const socialLinks = useSelector((state: SocialLinksState) => state.socialLinks)

  return {
    socialLinks
  }
}