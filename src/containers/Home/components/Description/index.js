import React, { Component } from 'react'
import { Container, Header } from './styles'

class Description extends Component {
  render() {
    return (
      <Container>
        <Header>
          {
            'I am a Cambridge, MA based (born in Korea, raised in Miami) software developer and a jazz music enthusiast. I am a experimentalist at heart - I learn by doing and I apply qunatitative steps to make this world a more beautiful place.'
          }
        </Header>
      </Container>
    )
  }
}

export default Description
