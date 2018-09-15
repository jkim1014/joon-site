import React, { Component } from 'react'
import { Background, Container, Header } from './styles'
import BackButton from '../../components/BackButton'

class Joyfull extends Component {
  render() {
    return (
      <Container>
        <Background />
        <BackButton />
        <Header>Joyfull</Header>
      </Container>
    )
  }
}

export default Joyfull
