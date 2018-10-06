/* eslint-disable import/prefer-default-export */

import styled from 'styled-components'
import { Flex } from 'grid-styled'
import { NavLink } from 'react-router-dom'
import React from 'react'

export const Container = styled(Flex)`
  flex: 1;
  flex-direction: row;
  background-color: ${props => props.backCol};
`
export const Wrapper = styled(Flex)`
  width: 100%;
  height: 50px;
  margin-top: 10px;
  /* @media only screen and (max-width: ${({ theme }) =>
    theme.breakpoints.medium.floor}) {
    position: absolute;
    margin-top: 10px;
  } */
`
export const Picture = styled.img`
  width: 15px;
  height: 19px;
  padding-top: 18px;
  padding-left: 25px;
`

const StyledNavLink = styled(NavLink)`
  font-family: ${({ theme }) => theme.fonts.navLink.family};
  font-weight: ${({ theme }) => theme.fonts.navLink.weight};
  font-size: 16px;
  letter-spacing: 0.6px;
  padding-top: 5px;
  &:hover {
    border-bottom: ${({ theme, purple }) =>
      `2px solid ${purple ? '#fff' : theme.colors.tertiary}`};
  }
  /* Home shouldn't have underline */
  &.active {
    border-bottom: ${({ theme, purple, to }) =>
      to === '/' ? '' : `2px solid ${purple ? '#fff' : theme.colors.tertiary}`};
  }
  padding-top: 19px;
  margin-right: 66px;
  text-decoration: none;
  color: ${props => (props.purple ? '#fff' : '#000')};
`

export const NavItem = props => (
  <StyledNavLink {...props} activeClassName="active" />
)

export const NavItems = styled(Flex)`
  z-index: 100;
  justify-content: flex-end;
  width: 80%;
  align-self: right;
  /* @media only screen and (max-width: ${({ theme }) =>
    theme.breakpoints.medium.floor}) {
    display: none;
  } */
`

export const JoonLogo = styled.img`
  padding-top: 2px;
  align-self: center;
  margin-left: 120px;
  filter: ${props => props.invert};
  width: 10vh;
  height: 10vh;
  /* @media only screen and (max-width: ${({ theme }) =>
    theme.breakpoints.medium.floor}) {
    width: 26px;
    height: 26px;
    padding-top: 0px;
    margin-left: 20px;
    padding-top: 0px;
    margin-top: -15px;
  } */
`

export const Mobile = styled(Flex)`
  /* @media only screen and (min-width: ${({ theme }) =>
    theme.breakpoints.medium.ceiling}) {
    display: none;
  } */
`
