import styled from 'styled-components'
import { Flex } from 'grid-styled'
import { NavLink } from 'react-router-dom'
import React from 'react'

export const Container = styled(Flex)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 33.33%;
  height: 100%;
  background-color: ${props => props.firstColor};
  &:hover {
    opacity: 0.8;
  }
`

const StyledNavLink = styled(NavLink)`
  font-family: ${({ theme }) => theme.fonts.header.family};
  font-weight: ${({ theme }) => theme.fonts.header.weight};
  font-size: 150%;
  letter-spacing: 0.6px;
  text-align: center;
  &.active {
    border-bottom: ${({ theme, purple, to }) =>
      to === '/' ? '' : `2px solid ${purple ? '#fff' : theme.colors.tertiary}`};
  }
  padding-top: 19px;
  padding-bottom: 10px;
  text-decoration: none;
  color: ${props => (props.purple ? '#fff' : '#000')};
`

export const NavItem = props => (
  <StyledNavLink {...props} activeClassName="active" />
)

export const Background = styled.img`
  height: ${props => props.height};
  width: ${props => props.width};
`
