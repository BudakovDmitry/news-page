import * as Styled from 'src/components/ColumnsItem/styles'

type ColumnsItemProps = {
  name: string
  avatar: string
  profession: string
  text: string
  date: string
}

const ColumnsItem = ({
  name = '',
  avatar = '',
  profession = '',
  text = '',
  date = '',
}: ColumnsItemProps) => {
  return (
    <Styled.ColumnsItemContainer>
      <Styled.Columnist>
        <Styled.ColumnistInfoPhoto src={require(`src/images/${avatar}`)} />
        <Styled.ColumnistInfo>
          <Styled.ColumnistInfoName>{name}</Styled.ColumnistInfoName>
          <Styled.ColumnistInfoProfession>
            {profession}
          </Styled.ColumnistInfoProfession>
        </Styled.ColumnistInfo>
      </Styled.Columnist>
      <Styled.ColumnsText>{text}</Styled.ColumnsText>
      <Styled.ColumnsDate>{date}</Styled.ColumnsDate>
    </Styled.ColumnsItemContainer>
  )
}

export default ColumnsItem
