export const isMobile = (): boolean =>
  !!navigator.userAgent.match(
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i,
  )
