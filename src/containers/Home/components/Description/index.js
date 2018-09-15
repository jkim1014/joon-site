import React, { Component } from 'react'
import { Container, Header } from './styles'

class Description extends Component {
  render() {
    return (
      <Container>
        <Header>
          {
            "Hi, I'm Joon Kim - a Cambridge based (born in Korea, raised in Miami) software engineer and former baby."
          }
        </Header>
      </Container>
    )
  }
}

export default Description
