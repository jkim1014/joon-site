import React, { Component } from 'react'
import Navbar from '../../components/Navbar'
import {
  BigContainer,
  Container,
  TopHeader,
  FunFacts,
  ImageContainer,
  Image,
  WhatI,
  Follow,
  Title,
  Title2,
  Content,
  Discover,
  SmollContainer
} from './styles'

class About extends Component {
  render() {
    return (
      <BigContainer>
        <TopHeader>
          <Navbar color="white" backCol="#92b4f2" invert="invert(100%)" />
          <SmollContainer>
            <Discover>Discover who I am!</Discover>
            <Title>MY PASSIONS AND PERSONALITY</Title>
          </SmollContainer>
        </TopHeader>
        <Container>
          <FunFacts>
            <Title2>A few fun facts about me</Title2>
            <Content>I like cheese</Content>
          </FunFacts>
          <ImageContainer>
            <Image />
            <Image />
            <Image />
            <Image />
            <Image />
            <Image />
          </ImageContainer>
          <WhatI />
          <Follow />
        </Container>
      </BigContainer>
    )
  }
}

export default About
