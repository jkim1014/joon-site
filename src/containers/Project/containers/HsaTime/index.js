import React, { Component } from 'react'
import { Background, Container, Header } from './styles'
import BackButton from '../../components/BackButton'

class HsaTime extends Component {
  render() {
    return (
      <Container>
        <Background />
        <BackButton />
        <Header>HSA Time</Header>
      </Container>
    )
  }
}

export default HsaTime
