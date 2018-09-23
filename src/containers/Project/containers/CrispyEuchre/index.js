import React, { Component } from 'react'
import {
  Container,
  Header,
  BigContainer,
  BodyText,
  BodyLink,
  LeftArrow,
  LeftArrowCapt,
  RightArrow,
  RightArrowCapt,
  Technology,
  ImageContainer,
  ImageContainerHeader
} from './styles'
import Helmet from 'react-helmet'
import BackButton from '../../../../components/LinkButton'
import Navbar from '../../../../components/Navbar'
import RArrow from '../../../../img/RightArrow.png'
import LArrow from '../../../../img/LeftArrow.png'

class CrispyEuchre extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <BigContainer>
        <Navbar backCol="white" />
        <Helmet>
          <title>Euchre</title>
          <meta name="description" content="Project!" />
        </Helmet>
        <Container>
          <BackButton to="/" text="Back to Home/Projects" />
          <Header>Crispy Euchre</Header>
          <BodyText>
            Euchre has been my house favorite when it comes to card games. It
            promotes teamwork, a bit of game theory, and oodles of combinations
            for strategy plays. So there came about a time when I thought why
            don&#39;t I make a variation of the game myself? Euchre is a game
            with four players, but it&#39;s not always the case that I three
            other friends readily availble. Oh yea, and let me also code up
            robots that play optimally.
          </BodyText>
          <BodyText>
            The regular set of rules of Euchre can be a pretty long list, so
            I&#39;ll link them here:
            <BodyLink href="https://cardgames.io/euchre/" target="_blank">
              HERE
            </BodyLink>
          </BodyText>
          <LeftArrow
            src={LArrow}
            onClick={() => this.props.history.push('/project/housegrilles')}
          />
          <LeftArrowCapt>Previous</LeftArrowCapt>
          <RightArrow
            src={RArrow}
            onClick={() => this.props.history.push('/project/annenberghelper')}
          />
          <RightArrowCapt>Next</RightArrowCapt>
          <Technology>Technology</Technology>
          <BodyText>Pretty much only python :p</BodyText>
          <ImageContainerHeader>Examples</ImageContainerHeader>
          <ImageContainer />
          <BodyText />
        </Container>
      </BigContainer>
    )
  }
}

export default CrispyEuchre
