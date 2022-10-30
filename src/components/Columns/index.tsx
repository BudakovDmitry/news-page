import ColumnsItem from 'src/components/ColumnsItem'
import * as Styled from 'src/components/Columns/styles'

const Columns = () => {
  return (
    <Styled.ColumnsContainer>
      <Styled.ColumnsHeaderContainer>
        <Styled.ColumnsHeader>Колонки</Styled.ColumnsHeader>
        <Styled.ColumnsHeaderLink>Всі колонки</Styled.ColumnsHeaderLink>
      </Styled.ColumnsHeaderContainer>
      <ColumnsItem />
      <ColumnsItem />
      <ColumnsItem />
      <ColumnsItem />
    </Styled.ColumnsContainer>
  )
}

export default Columns
