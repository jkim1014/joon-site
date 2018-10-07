import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Container, NavItem, Background } from './styles'
import Harvard from '../../img/Harvard.png'
import HSA from '../../img/HSA.png'
import Jack from '../../img/Jack.png'
import Joyfull from '../../img/Joyfull.png'
import PineapplePair from '../../img/PineapplePair.png'
import HouseGrilles from '../../img/HouseGrilles.png'

const FindDisplay = number => {
  switch (number) {
    case 1:
      return Joyfull
    case 2:
      return HSA
    case 3:
      return PineapplePair
    case 4:
      return HouseGrilles
    case 5:
      return Jack
    case 6:
      return Harvard
    default:
      return null
  }
}

class ProjectCard extends Component {
  render() {
    const { title, num, display, firstColor, height, width } = this.props
    return (
      <Container
        firstColor={firstColor}
        onClick={() => this.props.history.push(`/project/${title}`)}
      >
        <Background src={FindDisplay(num)} width={width} height={height} />
        <NavItem purple="white" to={`/project/${title}`}>
          {display}
        </NavItem>
      </Container>
    )
  }
}

export default withRouter(ProjectCard)
