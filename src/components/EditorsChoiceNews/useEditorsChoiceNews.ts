import { useSelector } from "react-redux"
import { PhotoNewsType } from 'src/types'

type AllPhotoNewsState = {
  allPhotoNews: PhotoNewsType[]
}

export const useEditorsChoiceNews = () => {

  const news = useSelector((state: AllPhotoNewsState): PhotoNewsType[] => state.allPhotoNews)

  return {
    news
  }
}