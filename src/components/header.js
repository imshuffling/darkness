import React, { Component } from 'react'
import styled from 'styled-components'
import Link from 'gatsby-plugin-transition-link'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const HeaderWrapper = styled.header`
  grid-area: header;
  align-self: top;
  animation: fadeIn 1s backwards;
`

const HeaderInner = styled.div`
  display: flex;
  align-items: center;
`

const Nav = styled.nav`
  margin-left: auto;
  display: flex;
  align-items: center;
  padding-left: 20px;
  > ul {
    animation: introRight 350ms cubic-bezier(0.694, 0, 0.335, 1) 0s backwards;
    list-style: none;
    display: flex;
    flex-direction: row;
    margin: 0;
    padding: 0;

    @media (max-width: 700px) {
      flex-direction: column;
    }

    li {
      padding: 0;
      margin-right: 30px;
      font-size: 16px;

      @media (max-width: 700px) {
        margin-right: 10px;
      }

      a {
        font-weight: normal;
        color: var(--green);
        &.active {
          text-decoration: underline;
        }
        &:after {
          display: none;
        }
      }
    }
  }
`

const Logo = styled.div`
  font-family: var(--logo);
  font-weight: bold;
  padding: 50px 0;
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: -.5px;
  > a {
    text-decoration: none;
    color: inherit;
    &:after {
      display: none;
    }
  }
`

const Button = styled.button`
  width: 24px;
  height: 20px;
  position: relative;
  transform: rotate(0deg);
  transition: .5s ease-in-out;
  cursor: pointer;

  span {
    display: block;
    position: absolute;
    height: 2px;
    width: 100%;
    background: var(--white);
    border-radius: 9px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: .25s ease-in-out;

    &:nth-child(1) {
      top: 0px;
    }

    &:nth-child(2) {
      top: 9px;
    }

    &:nth-child(3) {
      top: 18px;
    }
  }

  &.active {
    span {
      &:nth-child(1) {
        top: 9px;
        transform: rotate(135deg);
      }

      &:nth-child(2) {
        opacity: 0;
        left: -60px;
      }

      &:nth-child(3) {
        top: 9px;
        transform: rotate(-135deg);
      }
    }
  }
`

class Header extends Component {

  state = {
    toggle: false
  }

  toggle = () => {
    this.setState({
      toggle: !this.state.toggle
    })
  }

  render() {

    //const props = this.props

    return (
    <HeaderWrapper className={this.state.toggle ? 'open' : '' }>
      <HeaderInner>
        <Logo><Link to="/">Darkness.</Link></Logo>
        <Nav>
        {this.state.toggle &&
          <ul>
            <li><Link activeClassName="active" to="/">Styled Components</Link></li>
            <li><AniLink activeClassName="active" paintDrip hex="#C0FFC0" to="/random-facts">Random Facts</AniLink></li>
          </ul>
        }
        <Button className={this.state.toggle ? 'navbutton active' : 'navbutton' } onClick={this.toggle}>
          <span></span>
          <span></span>
          <span></span>
        </Button>
        </Nav>
      </HeaderInner>
    </HeaderWrapper>
    )
  }
}

export default Header
