import React, { Component } from 'react'
import Navbar from '../../components/Navbar'
import { BigContainer, Container } from './styles'

class About extends Component {
  render() {
    return (
      <BigContainer>
        <Navbar backCol="white" />
        <Container>About Me!</Container>
      </BigContainer>
    )
  }
}

export default About
