import { useSelector } from "react-redux"
import { FooterNavBlock } from 'src/types'

type FooterNavItemsState = {
  footerNavItems: FooterNavBlock[]
}

export const useFooter = () => {
  const navBlocks = useSelector((state: FooterNavItemsState) => state.footerNavItems)

  return {
    navBlocks
  }
}