import styled from 'styled-components'
import { Flex } from 'grid-styled'

export const Container = styled(Flex)`
  flex-direction: row;
  width: 100vw;
  justify-content: space-evenly;
  align-items: center;
  color: #f3f3f3;
  height: 104vh;
`

export const Background = styled.img`
  border-radius: 0;
  height: 50vh;
  /* filter: invert(100%); */
`

export const Left = styled(Flex)`
  flex-direction: column;
  height: 30vh;
  justify-content: space-evenly;
  align-items: center;
`

export const Header = styled(Flex)`
  font-family: ${({ theme }) => theme.fonts.header.family};
  font-weight: ${({ theme }) => theme.fonts.header.weight};
  font-style: italic;
  text-align: center;
  font-size: 45px;
  letter-spacing: 0.6px;
`

export const SubHeader = styled(Flex)`
  font-family: ${({ theme }) => theme.fonts.header.family};
  font-weight: ${({ theme }) => theme.fonts.header.weight};
  font-style: bold;
  text-align: center;
  font-size: 65px;
  letter-spacing: 0.6px;
`
