import { useSelector } from "react-redux"
import { ColumnistType } from 'src/types'

type ColumnistsState = {
  columnists: ColumnistType[]
}

export const useColumns = () => {
  const columnists = useSelector((state: ColumnistsState) => state.columnists)

  return {
    columnists
  }
}