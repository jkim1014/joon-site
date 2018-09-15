import React, { Component } from 'react'
import { Container, TextArea, Input } from './styles'

class TextInput extends Component {
  constructor(props) {
    super(props)
    this.state = { active: false }
  }
  render() {
    const {
      defaultText,
      height,
      width,
      id,
      name,
      onChange,
      value,
      type,
      textarea
    } = this.props
    return (
      <div>
        <Container
          active={this.state.active.toString()}
          height={textarea ? height : '50px'}
          width={width}
        >
          {textarea && (
            <TextArea
              type={type}
              id={id}
              name={name}
              value={value}
              placeholder={this.state.active ? '' : defaultText}
              onFocus={() => this.setState({ active: true })}
              onBlur={() => this.setState({ active: false })}
              onChange={onChange}
            />
          )}
          {!textarea && (
            <Input
              type={type}
              id={id}
              name={name}
              value={value}
              placeholder={this.state.active ? '' : defaultText}
              onFocus={() => this.setState({ active: true })}
              onBlur={() => this.setState({ active: false })}
              onChange={onChange}
            />
          )}
        </Container>
      </div>
    )
  }
}

export default TextInput
