import React, { Component } from 'react'
import { Background, Container, Header } from './styles'

class Landing extends Component {
  render() {
    return (
      <Container>
        <Background />
        <Header>Joon Website</Header>
      </Container>
    )
  }
}

export default Landing
