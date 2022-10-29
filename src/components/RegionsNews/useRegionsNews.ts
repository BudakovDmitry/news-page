import { useSelector } from "react-redux"
import { RegionsNewsType } from 'src/types'

type RegionsNewsState = {
  regionsNews: RegionsNewsType[]
}

export const useRegionsNews = () => {
  const news = useSelector((state: RegionsNewsState) => state.regionsNews)

  return {
    news
  }
}