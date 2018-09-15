import React, { Component } from 'react'
import { Container, Button } from './styles'

class BackButton extends Component {
  render() {
    return (
      <Container>
        <Button to="/">Back to Projects</Button>
      </Container>
    )
  }
}

export default BackButton
