import { NewsType } from 'src/types'

export const isMobile = (): boolean =>
  !!navigator.userAgent.match(
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i,
  )

export const slicedRegionsNewsByDate = (
  items: NewsType[],
  amountDate: number,
) => {
  const amountSlice = 4 / amountDate
  return items.slice(0, amountSlice)
}
