import { useState } from "react"
import { useSelector } from "react-redux"
import { NewsType } from 'src/types'

type AllNewsState = {
  allNews: NewsType[]
}

export const useAllNews = () => {
  const news = useSelector((state: AllNewsState): NewsType[] => state.allNews)
  const [activeFilter, setActiveFilter] = useState<number>(0)

  const handleChangeFilter = (id: number): void => setActiveFilter(id)

  return {
    news,
    activeFilter,
    handleChangeFilter
  }
}