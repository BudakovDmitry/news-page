import { useState } from "react"

export const useFilter = () => {
  const [activeFilter, setActiveFilter] = useState(0)

  const handleActiveFilter = (index: number) => setActiveFilter(index)

  return {
    activeFilter,
    handleActiveFilter
  }
}