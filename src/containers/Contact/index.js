/* eslint-disable */
import React, { Component } from 'react'
import Helmet from 'react-helmet'
import request from 'request-promise'
import Navbar from '../../components/Navbar'
import {
  BigContainer,
  Container,
  LeftColumn,
  RightColumn,
  Text,
  Heading,
  Mailbox,
  DropDown,
  Input,
  Row,
  MailboxMobile,
  Column,
  SendButton
} from './styles'
import mailbox from '../../img/mailbox.png'

const EMAIL_URL = 'https://joon-email-server.herokuapp.com/joonsite/contact'

export default class Contact extends Component {
  state = {
    name: '',
    email: '',
    affiliation: '',
    reason: '',
    heard: '',
    details: '',
    messageSent: false
  }
  onChange = e => {
    this.setState({ [e.target.id]: e.target.value })
  }
  render() {
    const reasonOptions = [
      {
        label: "I'm interested in a potential partnership",
        value: "I'm interested in a potential partnership"
      },
      {
        label: "I have a project I'd like to discuss",
        value: "I have a project I'd like to discuss"
      },
      { label: 'Something else', value: 'Something else' }
    ]
    const heardOptions = [
      {
        label: 'Google',
        value: 'Google'
      },
      {
        label: 'Word of Mouth / Referral',
        value: 'Word of Mouth / Referral'
      },
      {
        label: 'Other',
        value: 'Other'
      }
    ]
    const disabled = !(
      this.state.name &&
      this.state.email &&
      this.state.affiliation &&
      this.state.reason &&
      this.state.heard
    )
    return (
      <BigContainer>
        <Navbar backCol="white" />
        <Container>
          <Helmet>
            <title>Contact</title>
            <meta
              name="description"
              content="Send me a message and I'll get back to you ASAP"
            />
          </Helmet>
          <LeftColumn>
            <Row>
              <Column>
                {/* <SubHeading>DON&#39;T BE SHY.</SubHeading> */}
                <Heading>HIT ME UP</Heading>
              </Column>
              <MailboxMobile src={mailbox} />
            </Row>
            <Text>
              Let&#39;s talk about anything. Shoot me an email and let's connect
              soon!
            </Text>
            <Mailbox src={mailbox} />
          </LeftColumn>
          <RightColumn>
            <Input
              defaultText="Name *"
              id="name"
              height="50px"
              width="552px"
              onChange={this.onChange}
            />
            <Input
              defaultText="Email *"
              id="email"
              height="50px"
              onChange={this.onChange}
            />
            <DropDown
              options={reasonOptions}
              onChange={reason => this.setState({ reason })}
              value={this.state.reason}
              placeholder="&nbsp;Type of inquiry *"
            />
            <Input
              defaultText="Affilation *"
              id="affiliation"
              height="50px"
              onChange={this.onChange}
            />
            <DropDown
              options={heardOptions}
              onChange={heard => this.setState({ heard })}
              value={this.state.heard}
              placeholder="&nbsp;How did you hear about me? *"
            />
            <Input
              textarea
              id="details"
              defaultText="Your Message"
              height="283px"
              onChange={this.onChange}
            />
            <SendButton
              text="Send Message&nbsp;&nbsp;&nbsp;&nbsp;"
              arrow
              disabled={disabled}
              done={this.state.messageSent}
              style={{ marginTop: '8px', justifyContent: 'space-between' }}
              onClick={() => {
                if (disabled || this.state.messageSent) return
                this.setState({ messageSent: true })
                request({
                  uri: EMAIL_URL,
                  method: 'POST',
                  json: true,
                  body: {
                    name: this.state.name,
                    email: this.state.email,
                    reason: this.state.reason.value || '',
                    affiliation: this.state.affiliation,
                    heard: this.state.heard.value || '',
                    details: this.state.details
                  }
                })
                  .then(() => {
                    this.setState({ messageSent: true })
                  })
                  .catch(console.error)
              }}
            />
          </RightColumn>
        </Container>
      </BigContainer>
    )
  }
}
