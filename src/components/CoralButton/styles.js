/* eslint-disable no-nested-ternary */

import styled from 'styled-components'
import { Flex } from 'grid-styled'
import { Link } from 'react-router-dom'

export const StyledLink = styled(Link)`
  text-decoration: none;
`

export const Done = styled(Flex)`
  height: 50px;
  width: ${props => props.width};
  color: #92b4f2;
  border-radius: 4px;
  border: 1px solid #92b4f2;
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.navLink.family};
  font-weight: ${({ theme }) => theme.fonts.navLink.weight};
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-left: 27px;
  padding-right: 27px;
`

export const Button = styled(Flex)`
  height: 50px;
  width: ${props => props.width};
  background-color: ${props =>
    props.purple
      ? ({ theme }) => theme.colors.quaternary
      : props.disabled
        ? '#92b4f2'
        : ({ theme }) => theme.colors.tertiary};
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.navLink.family};
  font-weight: ${({ theme }) => theme.fonts.navLink.weight};
  border-radius: 4px;
  border: ${props => (props.purple ? '1px solid white' : '')};
  font-size: ${props => (props.big ? '22px' : '16px')};
  line-height: 24px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-left: 27px;
  padding-right: 27px;
  &:focus {
    outline: none;
  }
  &:hover {
    opacity: 0.8;
  }
`

export const Arrow = styled.img`
  width: ${props => (props.big ? '21px' : '16px')};
  height: ${props => (props.big ? '21px' : '16px')};
`
