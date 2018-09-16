import React, { Component } from 'react'
import { Container, Header } from './styles'
import BackButton from '../../../../components/LinkButton'

class CrispyEuchre extends Component {
  render() {
    return (
      <Container>
        <BackButton to="/" text="BACK TO HOME/PROJECTS" />
        <Header>Crispy Euchre</Header>
      </Container>
    )
  }
}

export default CrispyEuchre
