import FooterNavBlock from 'src/components/FooterNavBlock'
import * as Styled from 'src/components/Footer/styles'
import { useFooter } from 'src/components/Footer/useFooter'
import FooterSocialLinkContainer from 'src/components/FooterSocialLinkContainer'

const Footer = () => {
  const { navBlocks } = useFooter()

  console.log(navBlocks)

  return (
    <Styled.FooterContainer>
      <Styled.FooterNavContainer>
        <Styled.FooterNavContainerBlock>
          {navBlocks.slice(0, 4).map(block => (
            <FooterNavBlock key={block.id} navBlock={block} />
          ))}
        </Styled.FooterNavContainerBlock>
        <Styled.FooterNavContainerBlock>
          {navBlocks.slice(4, 6).map(block => (
            <FooterNavBlock key={block.id} navBlock={block} />
          ))}
        </Styled.FooterNavContainerBlock>
        <Styled.FooterNavContainerBlock>
          {navBlocks.slice(6, 8).map(block => (
            <FooterNavBlock key={block.id} navBlock={block} />
          ))}
        </Styled.FooterNavContainerBlock>
        <Styled.FooterNavContainerBlock>
          {navBlocks.slice(8, 10).map(block => (
            <FooterNavBlock key={block.id} navBlock={block} />
          ))}
        </Styled.FooterNavContainerBlock>
        <Styled.FooterNavContainerBlock>
          {navBlocks.slice(10, 12).map(block => (
            <FooterNavBlock key={block.id} navBlock={block} />
          ))}
        </Styled.FooterNavContainerBlock>
        <Styled.FooterNavContainerBlock>
          {navBlocks.slice(12, 17).map(block => (
            <FooterNavBlock
              key={block.id}
              navBlock={block}
              titleUppercase={true}
            />
          ))}
        </Styled.FooterNavContainerBlock>
      </Styled.FooterNavContainer>
      <FooterSocialLinkContainer />
    </Styled.FooterContainer>
  )
}

export default Footer
