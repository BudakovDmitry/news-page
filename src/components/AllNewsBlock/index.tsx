import EditorsChoiceNews from 'src/components/EditorsChoiceNews'
import AllNews from 'src/components/AllNews'
import * as Styled from 'src/components/AllNewsBlock/styles'

const AllNewsBlock = () => {
  return (
    <Styled.AllNewsBlockContainer>
      <Styled.AllNewsContainer>
        <AllNews />
      </Styled.AllNewsContainer>
      <Styled.EditorsChoiceNewsContainer>
        <EditorsChoiceNews />
      </Styled.EditorsChoiceNewsContainer>
      <Styled.RegionsNewsContainer></Styled.RegionsNewsContainer>
    </Styled.AllNewsBlockContainer>
  )
}

export default AllNewsBlock
