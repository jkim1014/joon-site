/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'
import { Flex } from 'grid-styled'

export const Container = styled(Flex)`
  flex-direction: column;
  height: 280vh;

  margin-top: -10px;
  margin-bottom: 0;
  justify-content: center;
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

export const SmallContainer = styled(Flex)`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 37px;
  padding-bottom: 100px;
`

export const Projects = styled(Flex)`
  flex-direction: column;
  height: 500vh;
  width: 100%;
`
