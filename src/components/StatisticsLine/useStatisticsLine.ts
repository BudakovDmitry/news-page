import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { StatisticsType } from 'src/types'
import { isMobile } from 'src/helpers'
import {DEFAULT_TRANSLATE, DESKTOP_TRANSLATE, MOBILE_TRANSLATE} from 'src/components/StatisticsLine/constants'

type StatisticsState = {
  statistics: StatisticsType[]
}


export const useStatisticsLine = () => {

  console.log(navigator.userAgent)
  const statistics = useSelector((state: StatisticsState) => state.statistics)
  const [translate, setTranslate] = useState<number>(DEFAULT_TRANSLATE)
  const getValueTranslate = (): number => isMobile() ? MOBILE_TRANSLATE : DESKTOP_TRANSLATE

  useEffect(() => {
    setTranslate(prevState => prevState - getValueTranslate())
  }, [])

  setTimeout(() => {
    setTranslate(prevState => translate === DEFAULT_TRANSLATE ? prevState - getValueTranslate() : prevState + getValueTranslate())
  }, isMobile() ? 20000 : 6000)


  return {
    statistics,
    translate
  }
}