import React, { Component } from 'react'
import config from '../../config'
import Landing from './components/Landing'
import Description from './components/Description'
import ProjectContainer from './components/ProjectContainer'
import Navbar from '../../components/Navbar'
import { Container } from './styles'

class Home extends Component {
  render() {
    return (
      <Container>
        <Navbar color="white" backCol="#92b4f2" />
        <Landing />
        <Description />
        <ProjectContainer projects={config.projects1} />
        <ProjectContainer projects={config.projects2} />
      </Container>
    )
  }
}

export default Home
