import styled from 'styled-components'

export const PreviewListContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  width: 950px;
  position: relative;
`

export const GradientBox = styled.div`
  width: 30px;

  &:after {
    content: '';
    display: block;
    height: 140px;
    width: 150px;
    position: absolute;
    top: 0px;
    right: -40px;
    opacity: 1;
    background: linear-gradient(
      270deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0.8) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    z-index: 200;
  }
`

export const PreviewsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  width: 950px;
  overflow-x: scroll;
`

export const MoreLink = styled.a`
  position: absolute;
  right: -70px;
  top: 35px;
  z-index: 300;
  cursor: pointer;
`

export const MoreLinkIcon = styled.img``
