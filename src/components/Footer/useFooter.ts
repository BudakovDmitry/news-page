import { useSelector } from "react-redux"
import { FooterNavBlock, NavItemType } from 'src/types'

type FooterNavItemsState = {
  footerNavItems: FooterNavBlock[]
}

type NavItemsState = {
  navItems: NavItemType[]
}

export const useFooter = () => {
  const navBlocks = useSelector((state: FooterNavItemsState) => state.footerNavItems)
  const navItems = useSelector((state: NavItemsState) => state.navItems)

  return {
    navBlocks,
    navItems
  }
}