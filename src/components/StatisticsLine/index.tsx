import { useStatisticsLine } from 'src/components/StatisticsLine/useStatisticsLine'
import * as Styled from 'src/components/StatisticsLine/styles'

const StatisticsLine = () => {
  const { statistics, translate } = useStatisticsLine()

  return (
    <Styled.StatisticsLineContainer>
      <Styled.StatisticsLineHeaderContainer>
        <Styled.StatisticsLineHeader>
          131 день війни:
        </Styled.StatisticsLineHeader>
      </Styled.StatisticsLineHeaderContainer>
      <Styled.StatisticsLineContainerItems translate={translate}>
        {statistics.map(item => (
          <Styled.StatisticsLineContainerItem key={item.id}>
            <Styled.StatisticsLineItemImage
              src={require(`src/images/${item.image}`)}
              alt={item.name}
            />
            <Styled.StatisticsLineItem>
              {item.name}
              <Styled.StatisticsLineItemValue>
                {item.value}
              </Styled.StatisticsLineItemValue>
            </Styled.StatisticsLineItem>
          </Styled.StatisticsLineContainerItem>
        ))}
      </Styled.StatisticsLineContainerItems>
    </Styled.StatisticsLineContainer>
  )
}

export default StatisticsLine
