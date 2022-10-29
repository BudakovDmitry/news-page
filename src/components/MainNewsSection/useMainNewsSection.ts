import { useState } from "react"
import { useSelector } from "react-redux"
import { MainNewsType } from 'src/types'

type MainNewsState = {
  mainNews: MainNewsType[]
}

export const useMainNewsSection = () => {
  const [activeSlide, setActiveSlide] = useState(0)
  const news = useSelector((state: MainNewsState) => state.mainNews)

  const handleSwitchSlide = (slide: number) => {
    setActiveSlide(slide)
  }

  return {
    news,
    activeSlide,
    handleSwitchSlide
  }
}