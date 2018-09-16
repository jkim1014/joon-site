import styled from 'styled-components'
import { Flex } from 'grid-styled'
import { Link } from 'react-router-dom'

export const StyledLink = styled(Link)`
  text-decoration: none;
`

export const Button = styled(Flex)`
  height: 24px;
  justify-content: center;
  flex-direction: 'row';
  justify-content: 'flex-start';
  &:focus {
    outline: none;
  }
  &:hover {
    opacity: 0.8;
    font-style: none;
  }
`
export const Text = styled(Flex)`
  color: #ff6060;
  font-family: ${({ theme }) => theme.fonts.title.family};
  font-weight: ${({ theme }) => theme.fonts.title.weight};
  font-size: 18px;
  line-height: 18px;
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobile.floor}) {
    font-size: ${props => (props.back ? '14px' : '18px')};
  }
`

export const Arrow = styled.img`
  margin-left: ${props => (props.back ? 'initial' : '10px')};
  margin-right: ${props => (props.back ? '10px' : 'initial')};
  width: 16px;
  height: 16px;
`
