import React, { Component } from 'react'
import { Background, Container } from './styles'
import Joony from '../../../../img/joony.gif'

class Landing extends Component {
  render() {
    return (
      <Container>
        <Background src={Joony} />
      </Container>
    )
  }
}

export default Landing
