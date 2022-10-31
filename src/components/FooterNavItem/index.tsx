import { NavItemType } from 'src/types'
import * as Styled from 'src/components/FooterNavItem/styles'

type FooterNavItemProps = {
  item: NavItemType
  titleUppercase?: boolean
}

const FooterNavItem = ({
  titleUppercase = false,
  item,
}: FooterNavItemProps) => {
  return (
    <Styled.FooterNavItemContainer>
      <Styled.FooterNavItemTitle uppercase={titleUppercase}>
        {item.title}
      </Styled.FooterNavItemTitle>
    </Styled.FooterNavItemContainer>
  )
}

export default FooterNavItem
