import React, { Component } from 'react'
import {
  Container,
  Header,
  SubHeading,
  BigContainer,
  BodyText,
  Role,
  Technology,
  ImageContainer,
  ImageContainerHeader
} from './styles'
import BackButton from '../../../../components/LinkButton'
import Navbar from '../../../../components/Navbar'

class CrispyEuchre extends Component {
  render() {
    return (
      <BigContainer>
        <Navbar backCol="white" />
        <Container>
          <BackButton to="/" text="Back to Home/Projects" />
          <Header>Crispy Euchre</Header>
          <BodyText>
            In July 2018, DEV, the development agency of Harvard Student
            Agencies, was approached by a team of two hoping to launch a
            platform to spread the joy of giving and sharing food. The team
            introduced the idea of Joyfull: a two-way platform through which
            &#34;promoters&#34; could create meal-campaigns to which
            &#34;patrons&#34; could donate meals, flowers, and money for pre-set
            meals to. Derived from one of the founders&#39; story of wanting to
            create a GoFundMe of meals to support his sister, the team of two
            wanted an application which could make the action of giving food as
            easy as clicking a few buttons. I was absolutely thrilled to
            commence work on engineering fronts.
          </BodyText>
          <Role>Role</Role>
          <SubHeading>Backend</SubHeading>
          <BodyText />
          <SubHeading>Frontend</SubHeading>
          <BodyText />
          <Technology>Technology</Technology>
          <ImageContainerHeader>Header</ImageContainerHeader>
          <ImageContainer />
          <BodyText />
        </Container>
      </BigContainer>
    )
  }
}

export default CrispyEuchre
