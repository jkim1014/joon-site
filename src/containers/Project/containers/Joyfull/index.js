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

class Joyfull extends Component {
  render() {
    return (
      <BigContainer>
        <Navbar backCol="white" />
        <Container>
          <BackButton to="/" text="Back to Home/Projects" />
          <Header>Joyfull</Header>
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
          <BodyText>
            To kickoff the engineering process, I received the designs created
            by the clients, took note of all the features. I then analyzed what
            types of data must be stored and which data models were necessary.
            It was clear that the most important exchange of data occurred
            between
          </BodyText>
          <BodyText>1. Users</BodyText>
          <BodyText>2. Campaigns</BodyText>
          <BodyText>3. Gifts.</BodyText>
          <BodyText>
            Everything else heavily depended on the accuracy, capability, and
            flexibility of these three main models. For example, home cooked
            meals and flowers fell under gifts. We also had to consider which
            payment and emailing APIs were best suited for the scale of Joyfull
            - Stripe and Mailgun APIs were deemed accurate and appealing to use
            for this project.
          </BodyText>
          <SubHeading>Frontend</SubHeading>
          <BodyText>
            To practice agile development practices to develop efficiently and
            productively, the frontend development started before backened
            development was finished. As a team of three consisting of two other
            developers on the frontend and me, we put our emphasis on using
            redux properly to pass down local storage information through
            various routes easily as well as on making sure that the designs
            handed off to us by the clients were properly and accurately
            implemented; especially more so as the end product was to a
            mobile-optimized web application.
          </BodyText>
          <Technology>Technology</Technology>
          <SubHeading>Backend</SubHeading>
          <BodyText>1. PostgreSQL</BodyText>
          <BodyText>2. Node.js</BodyText>
          <BodyText>3. Express</BodyText>
          <BodyText>4. GraphQL</BodyText>
          <BodyText>5. Objection.js / Knex.js</BodyText>
          <SubHeading>Frontend</SubHeading>
          <BodyText>1. React</BodyText>
          <BodyText>2. Redux</BodyText>
          <BodyText>3. Apollo Client</BodyText>
          <BodyText>4. Styled-Components.js</BodyText>
          <ImageContainerHeader>Header</ImageContainerHeader>
          <ImageContainer />
          <BodyText>
            I continued to help build and manage this project through its
            completion, guiding major development decisions and priorities
            around earlier user insights. The project was handed over to the
            clients late September of 2018.
          </BodyText>
        </Container>
      </BigContainer>
    )
  }
}

export default Joyfull
