import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import {
  Container,
  Header,
  BigContainer,
  BodyText,
  Role,
  Technology,
  ImageContainer,
  ImageContainerHeader,
  LeftArrow,
  LeftArrowCapt
} from './styles'
import Helmet from 'react-helmet'
import BackButton from '../../../../components/LinkButton'
import Navbar from '../../../../components/Navbar'
import LArrow from '../../../../img/LeftArrow.png'

class AnnenbergHelper extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <BigContainer>
        <Navbar backCol="white" />
        <Helmet>
          <title>Annenberg Helper</title>
          <meta name="description" content="Project!" />
        </Helmet>
        <Container>
          <BackButton to="/" text="Back to Home/Projects" />
          <Header>Annenberg Helper</Header>
          <BodyText>
            As a final project for CS50, Harvard&#39;s introduction to CS class,
            my two friends and I got together and sought to solve a common
            problem college freshmen ran into on a daily basis.
          </BodyText>
          <BodyText>
            1. Knowing the location of the table at which your friends are
            sitting at
          </BodyText>
          <BodyText>
            2. Eating the right nutritions and stay healthy during busy hours in
            between classes, homework, and activities
          </BodyText>
          <LeftArrow
            src={LArrow}
            onClick={() => this.props.history.push('/project/crispyeuchre')}
          />
          <LeftArrowCapt>Previous</LeftArrowCapt>
          <Role>Tasks</Role>
          <BodyText>
            The main tasks we had remaining after finishing the concept of the
            project were as follows:
          </BodyText>
          <BodyText>
            1. Building an html webscraper that scrapes the menu and the
            nutrition of each food item on the menu every meal
          </BodyText>
          <BodyText>2. Populating database with those items each meal</BodyText>
          <BodyText>
            3. Building out a basic frontend for some user interaction and easy
            usage
          </BodyText>
          <ImageContainerHeader>
            Here is a video explaining each page of the application and its
            functionalities!
          </ImageContainerHeader>
          <ImageContainer>
            <ReactPlayer
              url="https://youtu.be/dwLyAt8b3DI"
              controls
              width="100%"
              height="100%"
            />
          </ImageContainer>
          <Technology>Technology</Technology>
          <BodyText>1. Python Flask</BodyText>
          <BodyText>2. Python Beautiful Soup</BodyText>
          <BodyText>3. Python Jinja</BodyText>
          <BodyText>4. SQL</BodyText>
          <ImageContainer />
          <BodyText />
        </Container>
      </BigContainer>
    )
  }
}

export default AnnenbergHelper
