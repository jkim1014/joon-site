import React, { Component } from 'react'
import {
  Container,
  Header,
  SubHeading,
  BigContainer,
  LeftArrow,
  LeftArrowCapt,
  RightArrow,
  RightArrowCapt,
  BodyText,
  Role,
  Technology,
  ImageContainer,
  ImageContainerHeader,
  Image
} from './styles'
import Helmet from 'react-helmet'
import BackButton from '../../../../components/LinkButton'
import Navbar from '../../../../components/Navbar'
import RArrow from '../../../../img/RightArrow.png'
import LArrow from '../../../../img/LeftArrow.png'
import One from './img/g1.png'
import Two from './img/g2.png'
import Three from './img/g3.png'
import Four from './img/g4.png'
import Five from './img/g5.png'
import Six from './img/g6.png'
import Seven from './img/g7.png'
import Eight from './img/g8.png'
import Nine from './img/g9.png'
import Ten from './img/g10.png'
import Eleven from './img/g11.png'
import Twelve from './img/g12.png'
import Thirteen from './img/g13.png'
import Fourteen from './img/g14.png'
import Fifteen from './img/g15.png'
import Sixteen from './img/g16.png'

class HouseGrilles extends Component {
  render() {
    return (
      <BigContainer>
        <Navbar backCol="white" />
        <Helmet>
          <title>Grilles</title>
          <meta name="description" content="Project!" />
        </Helmet>
        <Container>
          <BackButton to="/" text="Back to Home/Projects" />
          <Header>House Grilles</Header>
          <BodyText>
            My school has an array of absolutely fabulous grilles within student
            dormitories that attract students at any time. The food, the drinks,
            the milkshakes, the boba. It really hits the spot. However, the only
            way of ordering from the grille currently is yelling over a wildly
            beeping kitchen oven to one of three workers - only to be met with
            an equally confusing yelling over the counter once the food is
            ready. Why has these processes of ordering and getting food not been
            digitized? This is when we decided to take the opportunity to solve
            the problem of inaccuracies in grille orders and expediting the
            process of receiving orders and foods.
          </BodyText>
          <LeftArrow
            src={LArrow}
            onClick={() => this.props.history.push('/project/pineapplepair')}
          />
          <LeftArrowCapt>Previous</LeftArrowCapt>
          <RightArrow
            src={RArrow}
            onClick={() => this.props.history.push('/project/crispyeuchre')}
          />
          <RightArrowCapt>Next</RightArrowCapt>
          <ImageContainerHeader>Register user flow!</ImageContainerHeader>
          <ImageContainer>
            <Image src={One} />
            <Image src={Two} />
            <Image src={Three} />
            <Image src={Four} />
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
            Easy ordering from grille menu
          </ImageContainerHeader>
          <ImageContainer>
            <Image src={Five} />
            <Image src={Six} />
            <Image src={Seven} />
            <Image src={Eight} />
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
            Keep track of your orders submitted and upstanding orders. Make sure
            to pick up your order!
          </ImageContainerHeader>
          <ImageContainer>
            <Image src={Twelve} />
            <Image src={Nine} />
            <Image src={Ten} />
            <Image src={Eleven} />
          </ImageContainer>
          <BodyText>
            We also built out an admin portal for the app. Grille workers could
            easily add and delete items on and off the menu as well and punching
            in and out of their shifts.
          </BodyText>
          <ImageContainer>
            <Image src={Thirteen} />
            <Image src={Fourteen} />
            <Image src={Fifteen} />
            <Image src={Sixteen} />
          </ImageContainer>
        </Container>
      </BigContainer>
    )
  }
}

export default HouseGrilles
