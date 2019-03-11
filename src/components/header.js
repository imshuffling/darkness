import React from 'react'
import styled from 'styled-components'
import { Link } from "gatsby"

const HeaderWrapper = styled.header`
  grid-area: header;
  align-self: top;
  animation: fadeIn 1s backwards;
`
const Logo = styled.div`
  font-family: var(--logo);
  font-weight: bold;
  padding: 30px 0;
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

const Header = () => (
  <HeaderWrapper>
    <Logo><Link to="/">Darkness.</Link></Logo>
  </HeaderWrapper>
)

export default Header
