import { useSelector } from "react-redux"
import { VideoNewsType } from 'src/types'

type VideoNewsState = {
  videoNews: VideoNewsType[]
}

export const useVideoNewsBlock = () => {
  const videoNews = useSelector((state: VideoNewsState): VideoNewsType[] => state.videoNews)

  return {
    videoNews
  }
}