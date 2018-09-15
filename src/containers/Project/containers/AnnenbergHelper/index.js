import React, { Component } from 'react'
import { Background, Container, Header } from './styles'
import BackButton from '../../components/BackButton'

class AnnenbergHelper extends Component {
  render() {
    return (
      <Container>
        <Background />
        <BackButton />
        <Header>Annenberg Helper</Header>
      </Container>
    )
  }
}

export default AnnenbergHelper
