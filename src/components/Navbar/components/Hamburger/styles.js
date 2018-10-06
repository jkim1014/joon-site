import styled from 'styled-components'
import { Flex } from 'grid-styled'
import { NavLink } from 'react-router-dom'
import React from 'react'

export const StyledNavLink = styled(NavLink)`
  font-family: ${({ theme }) => theme.fonts.navLink.family};
  font-weight: ${({ theme }) => theme.fonts.navLink.weight};
  font-size: 3vh;
  line-height: 6vh;
  color: 'black';
  &:hover {
    color: ${({ theme }) => theme.colors.tertiary};
  }
  /* Home shouldn't have underline */

  padding-top: 22px;
  text-decoration: none;
`

export const View = styled(Flex)`
  flex: 1;
`

export const Item = props => (
  <StyledNavLink {...props} activeClassName="active" />
)

export const BurgerStyles = {
  bmBurgerButton: {
    width: '26px',
    height: '22px'
  },
  bmCrossButton: {
    height: '26px',
    width: '26px'
  },
  bmMenu: { background: 'rgba(255, 255, 255, 0)' },
  bmMorphShape: { fill: '#373a47' },
  bmItemList: {
    textAlign: 'right',
    marginRight: '30px',
    marginTop: '67px'
  },
  bmOverlay: {
    background: 'rgba(255, 255, 255, 0.9)',
    marginTop: '-50px',
    height: '200%'
  }
}
