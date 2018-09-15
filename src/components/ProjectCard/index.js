import React, { Component } from 'react'
import { Container, NavItem } from './styles'

class ProjectCard extends Component {
  render() {
    const { title, display, thumbNail, firstColor, secondColor } = this.props
    return (
      <Container>
        <NavItem purple="white" to={`/project/${title}`}>
          {display}
          {thumbNail}
          {firstColor}
          {secondColor}
        </NavItem>
      </Container>
    )
  }
}

export default ProjectCard
