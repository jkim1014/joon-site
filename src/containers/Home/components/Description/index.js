import React, { Component } from 'react'
import { Container, Header } from './styles'

class Description extends Component {
  render() {
    return (
      <Container>
        <Header>
          {
            'A Cambridge based (born in Korea, raised in Miami) software developer and a jazz music enthusiast. I am looking to make this world a more beautiful place.'
          }
        </Header>
      </Container>
    )
  }
}

export default Description
