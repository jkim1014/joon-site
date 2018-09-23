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
import one from './img/p - 1.png'
import two from './img/p - 2.png'
import three from './img/p - 3.png'
import four from './img/p - 4.png'
import five from './img/p5.png'
import six from './img/p6.png'
import seven from './img/p7.png'
import eight from './img/p8.png'
import nine from './img/p9.png'
import ten from './img/p10.png'
import eleven from './img/p11.png'
import twelve from './img/p12.png'

class PineapplePair extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <BigContainer>
        <Navbar backCol="white" />
        <Helmet>
          <title>Pineapple Pair</title>
          <meta name="description" content="Project!" />
        </Helmet>
        <Container>
          <BackButton to="/" text="Back to Home/Projects" />
          <Header>Pineapple Pair</Header>
          <BodyText>
            A group of Harvard Business School students approached with a
            problem to be solved. Often, travelling within the U.S. or abroad
            can come at a price even for business trips. Sometimes, a brief
            night stay at a hotel can be so pricy, especially if one is there
            for one night. So Pineapple Pair aimed to solve that problem with an
            intuitive, attractive mobile application that pairs a user with
            another who is travelling to the same destination during the same
            time period. This pairing mechanism allows for a safe and fun way to
            connect with other professionals who are going through the same
            problem of finding affordability for overnight stays.
          </BodyText>
          <LeftArrow
            src={LArrow}
            onClick={() => this.props.history.push('/project/hsatime')}
          />
          <LeftArrowCapt>Previous</LeftArrowCapt>
          <RightArrow
            src={RArrow}
            onClick={() => this.props.history.push('/project/housegrilles')}
          />
          <RightArrowCapt>Next</RightArrowCapt>
          <ImageContainerHeader>
            Here is an exmaple of a user flow for &#39;Registering&#39;
          </ImageContainerHeader>
          <ImageContainer>
            <Image src={one} />
            <Image src={two} />
            <Image src={three} />
            <Image src={four} />
          </ImageContainer>
          <Role>Role</Role>
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
            Here is an exmaple of a user flow for &#39;Planning&#39; a trip and
            finding potential &#39;Pair&#39;
          </ImageContainerHeader>
          <ImageContainer>
            <Image src={five} />
            <Image src={six} />
            <Image src={seven} />
            <Image src={eight} />
          </ImageContainer>
          <Technology>Technology</Technology>
          <SubHeading>Backend</SubHeading>
          <BodyText>1. MongoDB</BodyText>
          <BodyText>2. Node.js</BodyText>
          <BodyText>3. Express</BodyText>
          <SubHeading>Frontend</SubHeading>
          <BodyText>1. React Native</BodyText>
          <BodyText>2. Redux</BodyText>
          <ImageContainerHeader>
            Here are examples of a user flow for &#39;Pairing&#39; and engaging
            in &#39;Chat&#39; room
          </ImageContainerHeader>
          <ImageContainer>
            <Image src={nine} />
            <Image src={ten} />
            <Image src={eleven} />
            <Image src={twelve} />
          </ImageContainer>
          <BodyText>
            I built this project through its completion, most notably completing
            the chat functionality of the app. The project was handed over to
            the clients late September of 2018.
          </BodyText>
        </Container>
      </BigContainer>
    )
  }
}

export default PineapplePair
