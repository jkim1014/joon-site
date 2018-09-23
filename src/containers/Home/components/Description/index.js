import React, { Component } from 'react'
import { Container, Header } from './styles'

class Description extends Component {
  render() {
    return (
      <Container>
        <Header>
          {
            'a Cambridge based (born in Korea, raised in Miami) software developer, jazz music enthusiast, and former baby.'
          }
        </Header>
      </Container>
    )
  }
}

export default Description
