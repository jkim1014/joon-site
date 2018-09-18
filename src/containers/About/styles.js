import styled from 'styled-components'
import { Flex } from 'grid-styled'

export const BigContainer = styled(Flex)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -8px;
`

export const Container = styled(Flex)`
  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.small.ceiling}) {
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

export const SmollContainer = styled(Flex)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 15vh;
`

export const Title = styled(Flex)`
  color: white;
  font-family: ${({ theme }) => theme.fonts.title.family};
  font-weight: ${({ theme }) => theme.fonts.title.weight};
  font-style: bold;
  font-size: 50px;
`

export const Title2 = styled(Flex)`
  color: black;
  font-family: ${({ theme }) => theme.fonts.title.family};
  font-weight: ${({ theme }) => theme.fonts.title.weight};
  font-style: bold;
  font-size: 40px;
  margin-bottom: 120px;
`

export const Content = styled(Flex)`
  color: black;
  font-family: ${({ theme }) => theme.fonts.content.family};
  font-weight: ${({ theme }) => theme.fonts.content.weight};
  font-size: 24px;
  margin-bottom: 50px;
`

export const Discover = styled(Flex)`
  color: white;
  font-family: ${({ theme }) => theme.fonts.content.family};
  font-weight: ${({ theme }) => theme.fonts.content.weight};
  font-style: italic;
  font-size: 20px;
`

export const TopHeader = styled(Flex)`
  flex-direction: column;
  height: 50vh;
  width: 100vw;
  background-color: #92b4f2;
  margin-left: -8px;
  margin-right: -8px;
  padding-top: 45px;
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

export const FunFacts = styled(Flex)`
  background-color: #f3f3f3;
  flex-direction: column;
  align-items: center;
  height: 30vh;
  width: 100vw;
  justify-content: center;
`

export const ImageContainer = styled(Flex)``

export const Image = styled.img``

export const WhatI = styled(Flex)``

export const Follow = styled(Flex)``
