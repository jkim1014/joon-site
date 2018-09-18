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
  padding-left: 7%;
  padding-right: 7%;
  padding-bottom: 5%;
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

export const Image = styled.img``

export const ImageContainer = styled(Flex)``

export const ImageCaption = styled(Flex)``

export const ImageContainerHeader = styled(Flex)``
