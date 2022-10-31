import { useState } from 'react'

export const useFooterNavBlock = () => {
  const [shownNavItems, setShownNavItems] = useState(false)

  const handleShownNavItems = () => shownNavItems ? setShownNavItems(false) : setShownNavItems(true)

  return {
    shownNavItems,
    handleShownNavItems
  }
}