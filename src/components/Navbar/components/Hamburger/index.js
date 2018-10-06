import React, { Component } from 'react'
import { stack as Menu } from 'react-burger-menu'
import { Item, BurgerStyles, View } from './styles'

export default class Hamburger extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hamburgerDisplay: false
    }
  }
  render() {
    const XStyles = {
      bmBurgerButton: {
        display: 'none',
        position: 'absolute',
        width: '26px',
        height: '22px',
        right: '30px',
        top: '5px'
      },
      bmCross: {
        display: 'block',
        background: '#333',
        right: '20px',
        marginTop: '-15px',
        paddingBottom: '20px'
      },
      bmBurgerBars: { display: 'none', background: 'white' }
    }
    const burgerStyles = {
      bmBurgerButton: {
        display: 'block',
        position: 'absolute',
        width: '26px',
        height: '22px',
        right: '30px',
        top: '5px'
      },
      bmCross: {
        display: 'none',
        background: '#333',
        right: '20px',
        marginTop: '-15px',
        paddingBottom: '20px'
      },
      bmBurgerBars: {
        display: 'block',
        background: this.props.purple
      }
    }

    const stateStyles = this.state.hamburgerDisplay ? XStyles : burgerStyles

    return (
      <div>
        <View
          onClick={() =>
            this.setState({ hamburgerDisplay: !this.state.hamburgerDisplay })
          }
        >
          <Menu
            right
            styles={{ ...BurgerStyles, ...stateStyles }}
            isOpen={this.state.hamburgerDisplay}
          >
            <Item
              onClick={() => this.setState({ hamburgerDisplay: true })}
              to="/"
            >
              HOME/PROJECTS
            </Item>
            <Item
              onClick={() => this.setState({ hamburgerDisplay: true })}
              to="/about"
            >
              ABOUT ME
            </Item>
            <Item to="/contact">CONTACT </Item>
          </Menu>
        </View>
      </div>
    )
  }
}
