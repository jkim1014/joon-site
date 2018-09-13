import styled from 'styled-components'
import { Flex } from 'grid-styled'

export const Container = styled(Flex)``

export const Text = styled(Flex)`
  font-family: ${({ theme }) => theme.fonts.title.family};
  font-weight: ${({ theme }) => theme.fonts.title.weight};
  font-size: 14px;
  color: black;
  padding-top: 10px;
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobile.floor}) {
    font-size: 14px;
    padding-top: 20px;
  }
`
