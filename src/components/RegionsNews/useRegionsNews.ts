import { useSelector } from "react-redux"
import { RegionsNewsType } from 'src/types'
import {useState} from 'react'

type RegionsNewsState = {
  regionsNews: RegionsNewsType[]
}

export const useRegionsNews = () => {
  const news = useSelector((state: RegionsNewsState): RegionsNewsType[] => state.regionsNews)

  const [activeFilter, setActiveFilter] = useState<number>(0)

  const handleChangeFilter = (id: number): void => setActiveFilter(id)

  return {
    news,
    activeFilter,
    handleChangeFilter
  }
}