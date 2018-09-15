import styled from 'styled-components'
import { Flex } from 'grid-styled'
import { NavLink } from 'react-router-dom'
import React from 'react'

export const Container = styled(Flex)``

const StyledNavLink = styled(NavLink)`
  font-family: ${({ theme }) => theme.fonts.header.family};
  font-weight: ${({ theme }) => theme.fonts.header.weight};
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
