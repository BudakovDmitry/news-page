import Columns from 'src/components/Columns'
import * as Styled from 'src/components/OtherNewsBlock/styles'
import Rubric from 'src/components/Rubric'

const OtherNewsBlock = () => {
  return (
    <Styled.OtherNewsBlockContainer>
      <Columns />
      <Styled.RubricsContainer>
        <Rubric />
        <Rubric />
      </Styled.RubricsContainer>
    </Styled.OtherNewsBlockContainer>
  )
}

export default OtherNewsBlock
