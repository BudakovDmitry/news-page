import ColumnsItem from 'src/components/ColumnsItem'
import * as Styled from 'src/components/Columns/styles'
import { useColumns } from 'src/components/Columns/useColumns'
import { ColumnistType } from 'src/types'

const Columns = () => {
  const { columnists } = useColumns()

  return (
    <Styled.ColumnsContainer>
      <Styled.ColumnsHeaderContainer>
        <Styled.ColumnsHeader>Колонки</Styled.ColumnsHeader>
        <Styled.ColumnsHeaderLink>Всі колонки</Styled.ColumnsHeaderLink>
      </Styled.ColumnsHeaderContainer>
      <Styled.ColumnistsContainer>
        {columnists.map((columnist: ColumnistType) => (
          <ColumnsItem
            key={columnist.id}
            name={columnist.name}
            avatar={columnist.avatar}
            profession={columnist.profession}
            text={columnist.column[0].text}
            date={columnist.column[0].date}
          />
        ))}
      </Styled.ColumnistsContainer>
      <Styled.AllColumnsButton>Всі колонки</Styled.AllColumnsButton>
    </Styled.ColumnsContainer>
  )
}

export default Columns
