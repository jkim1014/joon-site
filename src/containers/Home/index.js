import React, { Component } from 'react'
import config from '../../config'
import Landing from './components/Landing'
import ProjectContainer from './components/ProjectContainer'
import { Container } from './styles'

class Home extends Component {
  render() {
    return (
      <Container>
        <div>Hello World!</div>
        <Landing />
        <ProjectContainer projects={config.projects1} />
      </Container>
    )
  }
}

export default Home
