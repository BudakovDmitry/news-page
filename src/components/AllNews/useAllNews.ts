import { useState } from "react"
import { useSelector } from "react-redux"
import { NewsType } from 'src/types'

type AllNewsState = {
  allNews: NewsType[]
}

export const useAllNews = () => {
  const news = useSelector((state: AllNewsState) => state.allNews)
  const [activeFilter, setActiveFilter] = useState(0)

  const handleChangeFilter = (id: number) => setActiveFilter(id)

  return {
    news,
    activeFilter,
    handleChangeFilter
  }
}