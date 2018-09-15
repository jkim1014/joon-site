import React, { Component } from 'react'
import { Background, Container, Header } from './styles'
import BackButton from '../../components/BackButton'

class HouseGrilles extends Component {
  render() {
    return (
      <Container>
        <Background />
        <BackButton />
        <Header>House Grilles</Header>
      </Container>
    )
  }
}

export default HouseGrilles
