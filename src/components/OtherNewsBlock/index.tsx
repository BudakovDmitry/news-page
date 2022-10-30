import { useOtherNewsBlock } from 'src/components/OtherNewsBlock/useOtherNewsBlock'
import Columns from 'src/components/Columns'
import * as Styled from 'src/components/OtherNewsBlock/styles'
import Rubric from 'src/components/Rubric'
import Promo from 'src/components/Promo'

const OtherNewsBlock = () => {
  const { rubrics } = useOtherNewsBlock()

  return (
    <Styled.OtherNewsBlockContainer>
      <Columns />
      <Styled.RubricsContainer>
        <Rubric rubric={rubrics[0]} />
        <Promo />
        <Rubric rubric={rubrics[1]} />
        <Rubric rubric={rubrics[2]} />
      </Styled.RubricsContainer>
    </Styled.OtherNewsBlockContainer>
  )
}

export default OtherNewsBlock
