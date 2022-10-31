import { useSelector } from "react-redux"
import { ColumnistType } from 'src/types'

type ColumnistsState = {
  columnists: ColumnistType[]
}

export const useColumns = () => {
  const columnists = useSelector((state: ColumnistsState): ColumnistType[] => state.columnists)

  return {
    columnists
  }
}