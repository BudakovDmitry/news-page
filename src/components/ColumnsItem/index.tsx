import * as Styled from 'src/components/ColumnsItem/styles'

const ColumnsItem = () => {
  return (
    <Styled.ColumnsItemContainer>
      <Styled.Columnist>
        <Styled.ColumnistInfoPhoto src={require('src/images/avatar-1.png')} />
        <Styled.ColumnistInfo>
          <Styled.ColumnistInfoName>Юлія Стахівська</Styled.ColumnistInfoName>
          <Styled.ColumnistInfoProfession>
            письменниця
          </Styled.ColumnistInfoProfession>
        </Styled.ColumnistInfo>
      </Styled.Columnist>
      <Styled.ColumnsText>
        Жінок в часи небезпеки приваблюють сильні чоловіки
      </Styled.ColumnsText>
      <Styled.ColumnsDate>04 серпня 15:15</Styled.ColumnsDate>
    </Styled.ColumnsItemContainer>
  )
}

export default ColumnsItem
