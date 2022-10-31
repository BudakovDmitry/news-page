import { FooterNavBlock } from 'src/types'
import * as Styled from 'src/components/FooterNavBlock/styles'

type FooterNavBlockProps = {
  navBlock: FooterNavBlock
  titleUppercase?: boolean
}

const FooterNavBlock = ({
  navBlock,
  titleUppercase = false,
}: FooterNavBlockProps) => {
  return (
    <Styled.FooterNavBlockContainer>
      <Styled.FooterNavBlockTitle uppercase={titleUppercase}>
        {navBlock.title}
      </Styled.FooterNavBlockTitle>
      <Styled.FooterNavList>
        {navBlock.items.map(item => (
          <Styled.FooterNavListItem key={item.id}>
            <Styled.FooterNavListItemLink>
              {item.name}
            </Styled.FooterNavListItemLink>
          </Styled.FooterNavListItem>
        ))}
      </Styled.FooterNavList>
    </Styled.FooterNavBlockContainer>
  )
}

export default FooterNavBlock
