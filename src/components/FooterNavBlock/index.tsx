import { FooterNavBlock, NavItemType } from 'src/types'
import * as Styled from 'src/components/FooterNavBlock/styles'
import { useFooterNavBlock } from 'src/components/FooterNavBlock/useFooterNavBlock'
import { isMobile } from 'src/helpers'

const ShownImage = require('src/images/arrow-bottom.png')
const HideImage = require('src/images/arrow-top.png')

type FooterNavBlockProps = {
  navBlock: FooterNavBlock
  titleUppercase?: boolean
}

const FooterNavBlock = ({
  navBlock,
  titleUppercase = false,
}: FooterNavBlockProps) => {
  const { shownNavItems, handleShownNavItems } = useFooterNavBlock()

  if (isMobile()) {
    return (
      <Styled.FooterNavBlockContainer>
        <Styled.TitleContainer>
          <Styled.FooterNavBlockTitle uppercase={titleUppercase}>
            {navBlock.title}
          </Styled.FooterNavBlockTitle>
          <Styled.ShownListItemButton onClick={handleShownNavItems}>
            {shownNavItems ? (
              <Styled.ShownListItemButtonImage
                src={HideImage}
                alt="Hide button"
              />
            ) : (
              <Styled.ShownListItemButtonImage
                src={ShownImage}
                alt="Shown button"
              />
            )}
          </Styled.ShownListItemButton>
        </Styled.TitleContainer>
        <Styled.FooterNavList>
          {shownNavItems &&
            navBlock.items.map(item => (
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
