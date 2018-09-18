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
  SmollContainer,
  Resume,
  Line,
  Writing,
  Box
} from './styles'
import { SocialIcon } from 'react-social-icons'
import pdf from '../../img/JYKResume.pdf'

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
            <Content>
              I prefer a coldbrew over any hot coffee anyday, I like manchego
              cheese, I&#39;ve spent half of my life in Korean and the other
              half in America, Rubiks cubes are dope. Hotdogs are not
              sandwiches, and I&#39;m currently en route to mastering the hackey
              sack.
            </Content>
          </FunFacts>
          <ImageContainer>
            <Image />
            <Image />
            <Image />
            <Image />
            <Image />
            <Image />
          </ImageContainer>
          <WhatI>
            <Title2>Understand who I am as a person</Title2>
            <Writing>
              I like making cool stuff. Recently, I have dabbled in Javscript
              full-stack development. During the warmer months, I enjoy hitting
              the sweet spot of my gold club and waiting for breezy days to sail
              on the waters with. I am a passionate musician and a music
              listener which has had a huge impact throughout my life, but
              that&#39;s a story for another time. I&#39;m all about making
              things to solve problems relevant to the people close to me and to
              those who need solutions. I may not have the solutions to all the
              problems, but you better be damn sure I&#39;ll try my hardest.
              Bottom line: I love what I do and I love hearing what you have to
              say. :)
            </Writing>
            <Line />
            <Title2>What I&#39;ve done and what I can do</Title2>
            <Writing>
              Feel free to checkout a few other things I&#39;ve done over the
              years and what if I&#39;m able to help you solve your problem. My
              resume goes over the standard items, but please understand that I
              don&#39;t embellish my capabilities (no good ever comes out of
              that).
            </Writing>
            <Box>
              <Resume href={pdf}>Resume</Resume>
            </Box>
            <Line />
            <Title2>Follow me!</Title2>
            <Follow>
              <SocialIcon url="https://www.linkedin.com/in/joon-young-kim-442075137/" />
              <SocialIcon url="mailto:joon.young1014@gmail.com?subject=Hello" />
              <SocialIcon url="https://www.instagram.com/joonk1014/" />
            </Follow>
          </WhatI>
        </Container>
      </BigContainer>
    )
  }
}

export default About
