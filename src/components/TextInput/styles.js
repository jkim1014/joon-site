/* eslint-disable import/prefer-default-export */

import styled from 'styled-components'
import { Flex } from 'grid-styled'

export const Container = styled(Flex)`
  background-color: white;
  height: ${props => props.height};
  width: ${props => props.width};
  border: ${props =>
    props.active === 'true'
      ? `solid 1px ${props.theme.colors.tertiary}`
      : `solid 1px #C4C4C4`};
  border-radius: 4px;
  padding-left: 12px;
  padding-right: 10px;
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobile.floor}) {
    margin-bottom: 15px;
    width: 100%;
    height: ${props => props.height};
    padding-left: 1px;
  }
`
export const Wrapper = styled(Flex)``

export const TextArea = styled.textarea`
  font-family: ${({ theme }) => theme.fonts.title.family};
  font-weight: ${({ theme }) => theme.fonts.content.weight};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.fontPrimary};
  border-width: 0px;
  outline-width: 0px;
  resize: none;
  width: 100%;
  margin-top: 16px;
  &:focus {
    outline: none;
  }
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobile.floor}) {
    /* font-size: 14px; */
    padding-left: 15px;
  }
`
export const Input = styled.input`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.fontPrimary};
  font-family: ${({ theme }) => theme.fonts.title.family};
  font-weight: ${({ theme }) => theme.fonts.content.weight};
  width: 100%;
  border-width: 0;
  outline-width: 0;
  &:focus {
    outline: none;
  }
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobile.floor}) {
    /* font-size: 14px; */
    padding-left: 15px;
  }
`
