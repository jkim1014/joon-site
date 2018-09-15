import React, { Component } from 'react'
import { Background, Container, Header } from './styles'
import BackButton from '../../components/BackButton'

class PineapplePair extends Component {
  render() {
    return (
      <Container>
        <Background />
        <BackButton />
        <Header>PineapplePair</Header>
      </Container>
    )
  }
}

export default PineapplePair
