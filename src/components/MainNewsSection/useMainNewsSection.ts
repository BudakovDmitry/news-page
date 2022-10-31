import { useState } from "react"
import { useSelector } from "react-redux"
import { MainNewsType } from 'src/types'

type MainNewsState = {
  mainNews: MainNewsType[]
}

export const useMainNewsSection = () => {
  const [activeSlide, setActiveSlide] = useState<number>(0)
  const news = useSelector((state: MainNewsState): MainNewsType[] => state.mainNews)

  const handleSwitchSlide = (slide: number): void => setActiveSlide(slide)

  return {
    news,
    activeSlide,
    handleSwitchSlide
  }
}