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
import Helmet from 'react-helmet'
import pdf from '../../img/JYKResume.pdf'
import one from '../../img/1.png'
import two from '../../img/2.png'
import three from '../../img/3.png'
import four from '../../img/4.png'
import five from '../../img/5.png'
import six from '../../img/6.png'

class About extends Component {
  render() {
    return (
      <BigContainer>
        <TopHeader>
          <Navbar color="white" backCol="#92b4f2" invert="invert(100%)" />
          <Helmet>
            <title>About</title>
            <meta name="description" content="Get to know me!" />
          </Helmet>
          <SmollContainer>
            <Discover>Discover who I am, along with</Discover>
            <Title>MY PASSIONS AND PERSONALITY</Title>
          </SmollContainer>
        </TopHeader>
        <Container>
          <FunFacts>
            <Title2>Fun facts!</Title2>
            <Content>
              I prefer a coldbrew over any hot coffee anyday, I like manchego
              cheese, I&#39;ve spent half of my life in Korea and the other half
              in America, Rubiks cubes are dope. Hotdogs are not sandwiches, and
              I&#39;m currently en route to mastering the hackey sack.
            </Content>
          </FunFacts>
          <ImageContainer>
            <Image src={five} />
            <Image src={four} />
            <Image src={six} />
          </ImageContainer>
          <ImageContainer>
            <Image src={one} />
            <Image src={three} />
            <Image src={two} />
          </ImageContainer>
          <WhatI>
            <Title2>Who I am as a person</Title2>
            <Writing>
              I like making cool stuff. Recently, I have dabbled in Javscript
              full-stack development. Off my coding chair, I enjoy hitting the
              sweet spot of my gold club and waiting for breezy days to sail on
              the waters with. I am a passionate musician and a music listener
              which has had a huge impact throughout my life. I&#39;m all about
              making things to solve problems relevant to the people close to me
              and to those who need solutions. I may not have the solutions to
              all the problems, but you better be damn sure I&#39;ll try my
              hardest. Bottom line: I love what I do and I love hearing what you
              have to say. :)
            </Writing>
            <Line />
            <Title2>Things I&#39;ve done and knowledge I&#39;ve amassed</Title2>
            <Writing>
              Here&#39;s a short list of what I&#39;ve done, learned, and
              stumbled upon over last few years. I&#39;m genuinely grateful for
              the experiences I&#39;ve had and to the people who made them
              possible. So let me know if I&#39;m able to help you solve a
              problem on your mind! Shoot me an email. If not, still shoot me an
              email, let&#39;s connect!
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
