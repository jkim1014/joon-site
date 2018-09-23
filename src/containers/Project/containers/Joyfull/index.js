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
  Image,
  ImageContainerHeader,
  RightArrow,
  ArrowCapt
} from './styles'
import Helmet from 'react-helmet'
import BackButton from '../../../../components/LinkButton'
import Navbar from '../../../../components/Navbar'
import j1 from './img/j1.png'
import j2 from './img/j2.png'
import j3 from './img/j3.png'
import j4 from './img/j4.png'
import j5 from './img/j5.png'
import j6 from './img/j6.png'
import j7 from './img/j7.png'
import j8 from './img/j8.png'
import j9 from './img/j9.png'
import j10 from './img/j10.png'
import j11 from './img/j11.png'
import j12 from './img/j12.png'
import Arrow from '../../../../img/RightArrow.png'

class Joyfull extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <BigContainer>
        <Navbar backCol="white" />
        <Helmet>
          <title>Joyfull</title>
          <meta name="description" content="Project!" />
        </Helmet>
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
          <RightArrow
            src={Arrow}
            onClick={() => this.props.history.push('/project/hsatime')}
          />
          <ArrowCapt>Next</ArrowCapt>
          <ImageContainerHeader>
            Here is an exmaple of a user flow for &#39;Creating&#39; a campaign
          </ImageContainerHeader>
          <ImageContainer>
            <Image src={j9} />
            <Image src={j10} />
            <Image src={j11} />
            <Image src={j12} />
          </ImageContainer>
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
          <ImageContainerHeader>
            Here is an exmaple of a user flow for &#39;Managing&#39; a campaign
          </ImageContainerHeader>
          <ImageContainer>
            <Image src={j5} />
            <Image src={j6} />
            <Image src={j7} />
            <Image src={j8} />
          </ImageContainer>
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
          <ImageContainerHeader>
            Here are examples of a user flow for &#39;Giving&#39; to a campaign
          </ImageContainerHeader>
          <ImageContainer>
            <Image src={j1} />
            <Image src={j2} />
            <Image src={j3} />
            <Image src={j4} />
          </ImageContainer>
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
