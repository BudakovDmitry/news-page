import { useState } from 'react'

export const useRubric = () => {
  const [activeFilter, setActiveFilter] = useState<number>(0)

  const handleChangeFilter = (id: number): void => setActiveFilter(id)

  return {
    activeFilter,
    handleChangeFilter
  }
}