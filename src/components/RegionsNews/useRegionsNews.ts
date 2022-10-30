import { useSelector } from "react-redux"
import { RegionsNewsType } from 'src/types'
import {useState} from 'react'

type RegionsNewsState = {
  regionsNews: RegionsNewsType[]
}

export const useRegionsNews = () => {
  const news = useSelector((state: RegionsNewsState) => state.regionsNews)

  const [activeFilter, setActiveFilter] = useState(0)

  const handleChangeFilter = (id: number) => setActiveFilter(id)

  return {
    news,
    activeFilter,
    handleChangeFilter
  }
}