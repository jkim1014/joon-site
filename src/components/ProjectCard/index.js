import React, { Component } from 'react'
import { Container, Text } from './styles'

class ProjectCard extends Component {
  render() {
    const { title, thumbNail, firstColor, secondColor } = this.props
    return (
      <Container>
        <Text>{title}</Text>
        <Text>{firstColor}</Text>
        <Text>{thumbNail}</Text>
        <Text>{secondColor}</Text>
      </Container>
    )
  }
}

export default ProjectCard
