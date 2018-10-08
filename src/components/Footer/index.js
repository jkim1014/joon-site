import React, { Component } from 'react'
import {
  Container,
  Column,
  Row,
  TextLink,
  ScrollItem,
  Label,
  RightColumn,
  StyledExternalLink,
  JoonLogo
} from './styles'
import Logo from '../../img/JoonLogo.png'
import { NavLink, withRouter } from 'react-router-dom'

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
            <TextLink to="/">Home</TextLink>
            <ScrollItem
              onClick={() => {
                this.props.history.push({
                  pathname: '/',
                  state: { project: 'project' }
                })
              }}
            >
              Projects
            </ScrollItem>
            <StyledExternalLink
              href="https://github.com/jkim1014"
              target="_blank"
            >
              Github
            </StyledExternalLink>
            <TextLink to="/about">About</TextLink>
            <TextLink to="/contact">Contact</TextLink>
          </Row>
          <Label>Make from scratch using React by Joon Kim</Label>
        </RightColumn>
      </Container>
    )
  }
}

export default withRouter(Footer)
