import { useState } from 'react'

export const useRubric = () => {
  const [activeFilter, setActiveFilter] = useState(0)

  const handleChangeFilter = (id: number) => setActiveFilter(id)

  return {
    activeFilter,
    handleChangeFilter
  }
}