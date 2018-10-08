import React, { Component } from 'react'
import config from '../../config'
import Landing from './components/Landing'
import Description from './components/Description'
import ProjectContainer from './components/ProjectContainer'
import Navbar from '../../components/Navbar'
import Helmet from 'react-helmet'
import { Container, Projects, SmallContainer } from './styles'

class Home extends Component {
  componentDidMount() {
    if (this.props.location.state !== undefined) {
      if (this.props.location.state.project === 'home') {
        window.scrollTo(0, 0)
      } else if (this.props.location.state.project === 'project') {
        this.something.scrollIntoView()
        this.props.location.state = undefined
      }
    }
  }
  render() {
    return (
      <Container>
        <SmallContainer>
          <Helmet>
            <title>Home/Projects</title>
            <meta
              name="description"
              content="Home Page of my personal website"
            />
          </Helmet>
          <Navbar color="white" backCol="transparent" invert="invert(100%)" />
        </SmallContainer>
        <Landing />

        <Projects>
          <Description />
          <div
            ref={node => {
              this.something = node
            }}
            style={{ height: '33%' }}
          >
            <ProjectContainer projects={config.projects1} />
          </div>
          <ProjectContainer projects={config.projects2} />
        </Projects>
      </Container>
    )
  }
}

export default Home
