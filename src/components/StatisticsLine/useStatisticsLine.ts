import { useState } from "react"
import { useSelector } from "react-redux"
import { StatisticsType } from 'src/types'

type StatisticsState = {
  statistics: StatisticsType[]
}


export const useStatisticsLine = () => {
  const statistics = useSelector((state: StatisticsState) => state.statistics)
  const [translate, setTranslate] = useState<number>(150)

  setTimeout(() => {
    setTranslate(prevState => translate === 150 ? prevState - 150 : prevState + 150)
  }, 5000)

  return {
    statistics,
    translate
  }
}