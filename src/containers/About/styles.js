import styled from 'styled-components'
import { Flex } from 'grid-styled'

export const BigContainer = styled(Flex)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 36px;
  margin-left: -7px;
`

export const Container = styled(Flex)`
  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.small.ceiling}) {
    padding-left: 148px;
    padding-top: 200px;
    padding-bottom: 100px;
    justify-content: space-between;
    flex-direction: row;
  }
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.small.floor}) {
    width: 100%;
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 80px;
    padding-right: 30px;
    padding-left: 30px;
    padding-bottom: 43px;
  }
`
