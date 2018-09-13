/* eslint-disable import/prefer-default-export */
import React from 'react'
import styled from 'styled-components'
import { Flex } from 'grid-styled'
import { NavLink } from 'react-router-dom'

export const Container = styled(Flex)`
  height: 194px;
  background-color: #f5f5f5;
  flex-direction: row;
  padding-left: 79px;
  padding-top: 41px;
  padding-right: 43px;
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
export const Logo = styled.img`
  height: 19px;
  width: 75px;
  padding-bottom: 5px;
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobile.floor}) {
    height: 23px;
    width: 94px;
  }
`
export const Column = styled(Flex)`
  flex-direction: column;
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobile.floor}) {
    align-content: center;
    align-items: center;
    text-align: center;
    justify-content: center;
    width: 100%;
  }
`
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
export const Row = styled(Flex)`
  flex-direction: row;
  width: 600px;
  justify-content: space-between;
  padding-right: 43px;
  flex-wrap: wrap;
`

export const StyledExternalLink = styled.a`
  font-family: ${({ theme }) => theme.fonts.title.family};
  font-weight: ${({ theme }) => theme.fonts.title.weight};
  font-size: 16px;
  padding-top: 10px;
  padding-bottom: 10px;
  text-decoration: none;
  color: #000;
`

const StyledLink = styled(NavLink)`
  font-family: ${({ theme }) => theme.fonts.title.family};
  font-weight: ${({ theme }) => theme.fonts.title.weight};
  font-size: 16px;
  padding-top: 10px;
  padding-bottom: 10px;
  text-decoration: none;
  color: #000;
`

export const TextLink = props => (
  <StyledLink {...props} activeClassName="active" />
)

export const Label = styled(Flex)`
  font-family: ${({ theme }) => theme.fonts.title.family};
  font-weight: ${({ theme }) => theme.fonts.title.weight};
  color: #828282;
  align-self: flex-end;
  padding-bottom: 40px;
  padding-right: 48px;
`
export const RightColumn = styled(Flex)`
  flex-direction: column;
  justify-content: space-between;
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobile.floor}) {
    display: none;
  }
`
export const LabelMobile = styled(Flex)`
  font-family: ${({ theme }) => theme.fonts.title.family};
  font-weight: ${({ theme }) => theme.fonts.title.weight};
  color: #828282;
  padding-bottom: 40px;
  padding-top: 20px;
  font-size: 12px;
  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.mobile.ceiling}) {
    display: none;
  }
`
