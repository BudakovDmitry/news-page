import FooterNavBlock from 'src/components/FooterNavBlock'
import * as Styled from 'src/components/Footer/styles'
import { useFooter } from 'src/components/Footer/useFooter'
import FooterSocialLinkContainer from 'src/components/FooterSocialLinkContainer'
import FooterInfo from 'src/components/FooterInfo'
import FooterNavItem from 'src/components/FooterNavItem'
import { FooterNavBlockType, NavItemType } from 'src/types'

const Footer = () => {
  const { navBlocks, navItems } = useFooter()

  return (
    <Styled.FooterContainer>
      <Styled.FooterContentContainer>
        <Styled.FooterNavContainer>
          <Styled.FooterNavContainerBlock>
            {navBlocks.slice(0, 4).map((block: FooterNavBlockType) => (
              <FooterNavBlock key={block.id} navBlock={block} />
            ))}
          </Styled.FooterNavContainerBlock>
          <Styled.FooterNavContainerBlock>
            {navBlocks.slice(4, 6).map((block: FooterNavBlockType) => (
              <FooterNavBlock key={block.id} navBlock={block} />
            ))}
          </Styled.FooterNavContainerBlock>
          <Styled.FooterNavContainerBlock>
            {navBlocks.slice(6, 8).map((block: FooterNavBlockType) => (
              <FooterNavBlock key={block.id} navBlock={block} />
            ))}
          </Styled.FooterNavContainerBlock>
          <Styled.FooterNavContainerBlock>
            {navBlocks.slice(8, 10).map((block: FooterNavBlockType) => (
              <FooterNavBlock key={block.id} navBlock={block} />
            ))}
          </Styled.FooterNavContainerBlock>
          <Styled.FooterNavContainerBlock>
            {navBlocks.slice(10, 12).map((block: FooterNavBlockType) => (
              <FooterNavBlock key={block.id} navBlock={block} />
            ))}
          </Styled.FooterNavContainerBlock>
          <Styled.FooterNavContainerBlock>
            {navItems.map((item: NavItemType) => (
              <FooterNavItem key={item.id} item={item} />
            ))}
          </Styled.FooterNavContainerBlock>
        </Styled.FooterNavContainer>
        <FooterSocialLinkContainer />
      </Styled.FooterContentContainer>
      <FooterInfo />
    </Styled.FooterContainer>
  )
}

export default Footer
