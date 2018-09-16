/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'
import { Flex } from 'grid-styled'

export const Container = styled(Flex)`
  flex-direction: column;
  height: 200vh;
  background-color: #92b4f2;
  margin-top: -8px;
  margin-left: -8px;
  margin-right: -8px;
  padding-left: 0px;
  padding-top: 45px;
  padding-right: 0px;
  justify-content: space-between;
  align-self: flex-end;
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobile.floor}) {
    width: 100%;
    height: 100%;
    justify-content: center;
    align-self: center;
    padding-top: 40px;
    padding-left: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
  }
`

export const Projects = styled(Flex)`
  flex-direction: column;
  height: 96%;
  width: 100%;
`
