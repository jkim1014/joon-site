import React, { Component } from 'react'
import {
  Container,
  Column,
  Text,
  Row,
  TextLink,
  Label,
  RightColumn,
  StyledExternalLink
} from './styles'

class Footer extends Component {
  render() {
    return (
      <Container>
        <Column>
          <Text>joon.young1014@gmail.com</Text>
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
          <Label>© 2018 Joon Kim</Label>
        </RightColumn>
      </Container>
    )
  }
}

export default Footer
