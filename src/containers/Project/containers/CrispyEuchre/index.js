import React, { Component } from 'react'
import { Background, Container, Header } from './styles'
import BackButton from '../../components/BackButton'

class CrispyEuchre extends Component {
  render() {
    return (
      <Container>
        <Background />
        <BackButton />
        <Header>Crispy Euchre</Header>
      </Container>
    )
  }
}

export default CrispyEuchre
