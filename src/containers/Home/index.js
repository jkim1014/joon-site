import React, { Component } from 'react'
import config from '../../config'
import Landing from './components/Landing'
import Description from './components/Description'
import ProjectContainer from './components/ProjectContainer'
import Navbar from '../../components/Navbar'
import Helmet from 'react-helmet'
import { Container, Projects } from './styles'

class Home extends Component {
  render() {
    return (
      <Container>
        <Navbar color="white" backCol="#92b4f2" invert="invert(100%)" />
        <Helmet>
          <title>Home/Projects</title>
          <meta name="description" content="Home Page of my personal website" />
        </Helmet>
        <Landing />
        <Projects>
          <Description />
          <ProjectContainer projects={config.projects1} />
          <ProjectContainer projects={config.projects2} />
        </Projects>
      </Container>
    )
  }
}

export default Home
