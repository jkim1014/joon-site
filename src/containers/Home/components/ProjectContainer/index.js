import React, { Component } from 'react'
import { Container } from './styles'
import ProjectCard from '../../../../components/ProjectCard'

class ProjectContainer extends Component {
  render() {
    const { projects } = this.props
    return (
      <Container>
        {projects.map(project => (
          <ProjectCard
            title={project.title}
            display={project.display}
            thumbNail={project.thumbNail}
            firstColor={project.firstColor}
            secondColor={project.secondColor}
          />
        ))}
      </Container>
    )
  }
}

export default ProjectContainer
