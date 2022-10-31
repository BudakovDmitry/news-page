import { useSelector } from "react-redux"
import { PromoType } from 'src/types'

type PromosState = {
  promos: PromoType[]
}

export const usePromo = () => {
  const promos = useSelector((state: PromosState): PromoType[] => state.promos)
  
  return {
    promos
  }
}