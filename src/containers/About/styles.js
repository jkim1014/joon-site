import styled from 'styled-components'
import { Flex } from 'grid-styled'

export const BigContainer = styled(Flex)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -8px;
`

export const Container = styled(Flex)`
  height: 150vh;
  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.small.ceiling}) {
    padding-bottom: 100px;
    justify-content: space-between;
    flex-direction: column;
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
  margin-bottom: 70px;
`

export const Line = styled.div`
  background-color: #6f6f6f;
  height: 1px;
  margin-top: 20px;
  margin-bottom: 60px;
  width: 44%;
`

export const Writing = styled(Flex)`
  color: #6f6f6f;
  font-family: ${({ theme }) => theme.fonts.content.family};
  font-weight: 'light';
  font-size: 16px;
  line-height: 32px;
  padding-left: 28%;
  padding-right: 28%;
  padding-bottom: 50px;
`

export const Content = styled(Flex)`
  color: #6f6f6f;
  font-family: ${({ theme }) => theme.fonts.content.family};
  font-weight: ${({ theme }) => theme.fonts.content.weight};
  font-size: 24px;
  text-align: center;
  margin-bottom: 50px;
  padding-left: 33%;
  padding-right: 33%;
  line-height: 48px;
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
  height: 50vh;
  width: 100vw;
  justify-content: center;
  padding-top: 5vh;
`

export const ImageContainer = styled(Flex)``

export const Image = styled.img``

export const WhatI = styled(Flex)`
  flex-direction: column;
  background-color: #f3f3f3;
  justify-content: space-evenly;
  align-items: center;
  padding-top: 8vh;
  padding-bottom: 8vh;
`

export const Box = styled(Flex)`
  width: 100px;
  height: 50px;
  border-color: black;
  border-style: solid;
  border-width: 1px;
  background-color: transparent;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 40px;
  &:hover {
    background-color: black;
  }
`

export const Resume = styled.a`
  text-decoration: none;
  color: black;
  border-color: black;
  justify-content: center;
  font-family: ${({ theme }) => theme.fonts.content.family};
  font-weight: ${({ theme }) => theme.fonts.content.weight};
  align-items: center;
  &:hover {
    color: white;
  }
`

export const Follow = styled(Flex)`
  justify-content: space-between;
  width: 10%;
`
