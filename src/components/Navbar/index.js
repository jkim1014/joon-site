/* eslint-disable react/jsx-curly-brace-presence */
import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'

//  import HamburgerMenu from './components/Hamburger'

import {
  Container,
  JoonLogo,
  NavItem,
  NavItems,
  ScrollItem,
  Wrapper

  //  Mobile
} from './styles'
import Logo from '../../img/JoonLogo.png'
// import theme from '../../theme'

// const logoBreakpoint = parseInt(theme.breakpoints.medium.floor, 10)

class NavigationBar extends Component {
  constructor(props) {
    super(props)
    this.state = { width: 0, height: 0 }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
  }

  componentDidMount() {
    this.updateWindowDimensions()
    window.addEventListener('resize', this.updateWindowDimensions)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions)
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight })
  }

  render() {
    const DesktopTabs = () => (
      <NavItems>
        <NavItem purple={this.props.color} to="/">
          Home
        </NavItem>
        <ScrollItem
          purple={this.props.color}
          onClick={() => {
            this.props.history.push({
              pathname: '/',
              state: { project: 'project' }
            })
          }}
        >
          Projects
        </ScrollItem>
        <NavItem purple={this.props.color} to="/about">
          About Me
        </NavItem>
        <NavItem purple={this.props.color} to="/contact">
          Contact
        </NavItem>
      </NavItems>
    )
    return (
      <Wrapper>
        {/* <Mobile>
          <HamburgerMenu purple={this.props.color} />
        </Mobile> */}
        <Container backCol={this.props.backCol}>
          <NavLink to="/">
            <JoonLogo src={Logo} alt="logo" invert={this.props.invert} />
          </NavLink>
          <DesktopTabs />
        </Container>
      </Wrapper>
    )
  }
}

export default withRouter(NavigationBar)
