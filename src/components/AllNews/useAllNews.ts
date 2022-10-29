import { useState } from "react"
import { useSelector } from "react-redux"
import { NewsType } from 'src/types'

type AllNewsState = {
  allNews: NewsType[]
}

export const useAllNews = () => {
  const news = useSelector((state: AllNewsState) => state.allNews)

  return {
    news
  }
}