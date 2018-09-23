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
  LeftArrow,
  LeftArrowCapt,
  RightArrow,
  RightArrowCapt
} from './styles'
import Helmet from 'react-helmet'
import BackButton from '../../../../components/LinkButton'
import Navbar from '../../../../components/Navbar'
import RArrow from '../../../../img/RightArrow.png'
import LArrow from '../../../../img/LeftArrow.png'
import Assign from './gif/Assign.gif'
import Create from './gif/Create.gif'
import Verifying from './gif/Verifying.gif'
import Completing from './gif/Completing.gif'

class HsaTime extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <BigContainer>
        <Navbar backCol="white" />
        <Helmet>
          <title>HSA Time</title>
          <meta name="description" content="Project!" />
        </Helmet>
        <Container>
          <BackButton to="/" text="Back to Home/Projects" />
          <Header>HSA Time Tracker</Header>
          <BodyText>
            HSA Time Tracker was a project brought up to me and my team by the
            president of Harvard Student Agencies, a 500+ employees non-profit
            company. The problem he needed to solve was logging hours worked by
            part time employees. The current solution was a loose leaf of paper
            that employees would sign in and sign out of every day. Not only was
            this a risky way of keeping track of pay, it was inaccurate and
            managers had no real way of verifying work done by part time
            employees. a simple, intuitive, easy to use application to assign
            tasks and shifts to part time employees. He deemed many time
            tracking softwares were outdated, too complicated, and expensive.
          </BodyText>
          <BodyText>
            With the understanding that the product needed to be delivered with
            a short deadline, the client and I met several times to narrow down
            what is essential functionalities so that we can best save time
            while delivering a premium product. These were the features I
            emphasized while thinking about the architecture of the application.
          </BodyText>
          <BodyText>
            1. Easy to use. I wanted logging time for employees to be as easy as
            unlocking their mobile device to start and finish their logging with
            less than 10 taps.
          </BodyText>
          <BodyText>
            2. Accuracy of data. With legal issues at hand, the application
            could not afford to produce even a second of inaccuracy when logging
            time.
          </BodyText>
          <BodyText>
            3. Management of data by managers. We thought that it would be smart
            to give company managers the ability to verify logged hours or
            change the logged hours based on what was reported.
          </BodyText>
          <BodyText>
            4. Ease of exporting data. How nice would it be to export a .csv
            file of all the time logged for each week and import it to the
            payroll system!
          </BodyText>
          <LeftArrow
            src={LArrow}
            onClick={() => this.props.history.push('/project/joyfull')}
          />
          <LeftArrowCapt>Previous</LeftArrowCapt>
          <RightArrow
            src={RArrow}
            onClick={() => this.props.history.push('/project/pineapplepair')}
          />
          <RightArrowCapt>Next</RightArrowCapt>
          <Role>Role</Role>
          <SubHeading>Product Manager</SubHeading>
          <BodyText>
            As a PM in the first project for many of our new employees at DEV,
            my role had become more than simply putting the project together.
            Guiding the engineers to the right resources to succeed in DEV&#39;s
            stack while recognizing each team member&#39;s specialties were two
            tasks I wanted to get right. The list below highlights what I
            prioritized during the project.
          </BodyText>
          <BodyText>1. Most Suitable Product Architecture</BodyText>
          <BodyText>2. Training/Onboarding</BodyText>
          <BodyText>3. Issue Assignment and Progress Management</BodyText>
          <ImageContainerHeader>
            Here is an exmaple of a user flow for managers &#39;Creating&#39; a
            task
          </ImageContainerHeader>
          <ImageContainer>
            <Image src={Create} />
          </ImageContainer>
          <SubHeading>Backend</SubHeading>
          <BodyText>
            To best guide engineers towards the right resources during
            onboarding, I built out typdefs for GraphQL schema and implemented
            backend models necessary for this project. Our data structures
            reflected our efforts to cleverly store important meta data related
            these two models.
          </BodyText>
          <BodyText>1. Users</BodyText>
          <BodyText>2. Tasks</BodyText>
          <BodyText>
            Everything else heavily depended on the accuracy, capability, and
            flexibility of these two main models.
          </BodyText>
          <SubHeading>Frontend</SubHeading>
          <BodyText>
            This was the first project in which theme provider and a root file
            for consistent styling references were injected. Many inputs and
            dropdowns were built with simplicity in mind to further promote easy
            UI experience for the two types of users for this application.
          </BodyText>
          <ImageContainerHeader>
            Here is an exmaple of a user flow for managers &#39;Assigning&#39; a
            task to an employee
          </ImageContainerHeader>
          <ImageContainer>
            <Image src={Assign} />
          </ImageContainer>
          <Technology>Technology</Technology>
          <SubHeading>Backend</SubHeading>
          <BodyText>1. PostgreSQL</BodyText>
          <BodyText>2. Node.js</BodyText>
          <BodyText>3. Express</BodyText>
          <BodyText>4. GraphQL</BodyText>
          <BodyText>5. Sequelize.js</BodyText>
          <SubHeading>Frontend</SubHeading>
          <BodyText>1. React</BodyText>
          <BodyText>2. Redux</BodyText>
          <BodyText>3. Apollo Client</BodyText>
          <SubHeading>Deployment</SubHeading>
          <BodyText>1. Travis CI</BodyText>
          <BodyText>2. Heroku (staging)</BodyText>
          <BodyText>3. AWS Cloud Services</BodyText>
          <ImageContainerHeader>
            Here is an example of a user flow for employees &#39;Completing&#39;
            tasks
          </ImageContainerHeader>
          <ImageContainer>
            <Image src={Completing} />
          </ImageContainer>
          <BodyText>
            I continued to build and manage this project through its completion.
            After several iterations of tweaks and adjustments after client
            demos, the project was completed and handed over to the clients late
            June of 2018.
          </BodyText>
          <ImageContainerHeader>
            Here is an example of a user flow for managers &#39;Verifying&#39;
            tasks
          </ImageContainerHeader>
          <ImageContainer>
            <Image src={Verifying} />
          </ImageContainer>
        </Container>
      </BigContainer>
    )
  }
}

export default HsaTime
