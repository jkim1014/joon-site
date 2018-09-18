import React, { Component } from 'react'
import {
  Container,
  Column,
  Row,
  TextLink,
  Label,
  RightColumn,
  StyledExternalLink,
  JoonLogo
} from './styles'
import Logo from '../../img/JoonLogo.png'
import { NavLink } from 'react-router-dom'

class Footer extends Component {
  render() {
    return (
      <Container>
        <Column>
          <NavLink to="/">
            <JoonLogo src={Logo} alt="logo" invert={this.props.invert} />
          </NavLink>
        </Column>
        <RightColumn>
          <Row>
            <TextLink to="/">Home/Projects</TextLink>
            <StyledExternalLink
              href="https://github.com/jkim1014"
              target="_blank"
            >
              Github
            </StyledExternalLink>
            <TextLink to="/about">About</TextLink>
            <TextLink to="/contact">Contact</TextLink>
          </Row>
          <Label>Make from scratch by Joon Kim</Label>
        </RightColumn>
      </Container>
    )
  }
}

export default Footer
