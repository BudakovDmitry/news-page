import { useState } from "react"
import { useSelector } from "react-redux"
import { NewsType } from 'src/types'

type AllNewsState = {
  allNews: NewsType[]
}

export const useAllNews = () => {
  const [activeFilter, setActiveFilter] = useState(0)
  const news = useSelector((state: AllNewsState) => state.allNews)

  const handleActiveFilter = (index: number) => setActiveFilter(index)

  return {
    activeFilter,
    handleActiveFilter,
    news
  }
}