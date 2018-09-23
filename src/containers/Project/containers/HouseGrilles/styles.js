import styled from 'styled-components'
import { Flex } from 'grid-styled'

export const BigContainer = styled(Flex)`
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-top: 36px;
  margin-left: -7px;
`

export const Container = styled(Flex)`
  flex-direction: column;
  align-items: flex-start;
  padding-top: 100px;
  width: 90%;
  padding-left: 15%;
  padding-right: 5%;
  padding-bottom: 5%;
`

export const RightArrow = styled.img`
  position: fixed;
  width: 4%;
  height: 8%;
  right: 3vw;
  top: 40vh;
  &:hover {
    opacity: 0.8;
  }
`

export const LeftArrow = styled.img`
  position: fixed;
  width: 4%;
  height: 8%;
  left: 3vw;
  top: 40vh;
  &:hover {
    opacity: 0.8;
  }
`

export const RightArrowCapt = styled(Flex)`
  position: fixed;
  font-family: ${({ theme }) => theme.fonts.content.family};
  font-weight: ${({ theme }) => theme.fonts.content.weight};
  font-size: 100%;
  right: 4.5vw;
  top: 48vh;
`

export const LeftArrowCapt = styled(Flex)`
  position: fixed;
  font-family: ${({ theme }) => theme.fonts.content.family};
  font-weight: ${({ theme }) => theme.fonts.content.weight};
  font-size: 100%;
  left: 3.8vw;
  text-align: center;
  top: 48vh;
`

export const Header = styled(Flex)`
  color: #2e57a1;
  font-family: ${({ theme }) => theme.fonts.header.family};
  font-weight: ${({ theme }) => theme.fonts.header.weight};
  font-size: 75px;
  padding-bottom: 50px;
  padding-top: 40px;
`

export const SubHeading = styled(Flex)`
  color: black;
  font-family: ${({ theme }) => theme.fonts.title.family};
  font-weight: ${({ theme }) => theme.fonts.title.weight};
  font-size: 30px;
  padding-bottom: 20px;
  padding-top: 20px;
`

export const BodyText = styled(Flex)`
  color: black;
  font-family: ${({ theme }) => theme.fonts.content.family};
  font-weight: ${({ theme }) => theme.fonts.content.weight};
  font-size: 16px;
  line-height: 40px;
`

export const Role = styled(Flex)`
  color: #2e57a1;
  font-family: ${({ theme }) => theme.fonts.header.family};
  font-weight: ${({ theme }) => theme.fonts.header.weight};
  font-size: 45px;
  padding-top: 30px;
  padding-bottom: 20px;
`

export const Technology = styled(Flex)`
  color: #2e57a1;
  font-family: ${({ theme }) => theme.fonts.header.family};
  font-weight: ${({ theme }) => theme.fonts.header.weight};
  font-size: 45px;
  padding-top: 10px;
  padding-bottom: 20px;
`

export const Image = styled.img`
  width: 20%;
  height: 80%;
`

export const ImageContainer = styled(Flex)`
  width: 100%;
  justify-content: space-evenly;
  padding-bottom: 30px;
  padding-top: 30px;
`

export const ImageContainerHeader = styled(Flex)`
  color: #6f6f6f;
  align-self: center;
  padding: 30px;
  font-family: ${({ theme }) => theme.fonts.header.family};
  font-weight: ${({ theme }) => theme.fonts.header.weight};
  font-size: 12px;
`
