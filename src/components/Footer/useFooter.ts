import { useSelector } from "react-redux"
import { FooterNavBlockType, NavItemType } from 'src/types'

type FooterNavItemsState = {
  footerNavItems: FooterNavBlockType[]
}

type NavItemsState = {
  navItems: NavItemType[]
}

export const useFooter = () => {
  const navBlocks = useSelector((state: FooterNavItemsState): FooterNavBlockType[] => state.footerNavItems)
  const navItems = useSelector((state: NavItemsState): NavItemType[] => state.navItems)

  return {
    navBlocks,
    navItems
  }
}