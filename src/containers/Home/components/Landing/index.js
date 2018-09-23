import React, { Component } from 'react'
import { Background, Container, Header, SubHeader, Left } from './styles'
import MySketch from '../../../../img/Sketch.png'

class Landing extends Component {
  render() {
    return (
      <Container>
        <Background src={MySketch} />
        <Left>
          <Header>Hey, I&#39;m</Header>
          <SubHeader>- Joon Kim -</SubHeader>
        </Left>
      </Container>
    )
  }
}

export default Landing
