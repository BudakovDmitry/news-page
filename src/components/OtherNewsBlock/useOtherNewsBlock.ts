import { useSelector } from "react-redux"
import { RubricType } from 'src/types'

type RubricsState = {
  rubrics: RubricType[]
}

export const useOtherNewsBlock = () => {
  const rubrics = useSelector((state: RubricsState) => state.rubrics)

  return {
    rubrics
  }
}