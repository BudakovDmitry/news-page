import { useState } from 'react'

export const useFooterNavBlock = () => {
  const [shownNavItems, setShownNavItems] = useState<boolean>(false)

  const handleShownNavItems = (): void => shownNavItems ? setShownNavItems(false) : setShownNavItems(true)

  return {
    shownNavItems,
    handleShownNavItems
  }
}