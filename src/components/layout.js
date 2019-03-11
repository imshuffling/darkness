import React, { Component } from 'react'
import Helmet from 'react-helmet'
import Header from '../components/header'
import Footer from '../components/footer'
import styled from 'styled-components'
import GlobalStyle from '../Global'
import Div100vh from 'react-div-100vh';

const Wrapper = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-areas: "header" "main" "footer";
  max-width: 1220px;
  padding: 0 2rem;
  margin: 0px auto;
  overflow: hidden;
`

class Layout extends Component {
  render() {
    const { children } = this.props
    return (
      <Div100vh>
        <Wrapper>
          <GlobalStyle />
          <Helmet
            title="Darkness."
            meta={[
              { name: 'description', content: 'A Styled Components Demo' },
              { name: 'keywords', content: 'David Riches Styled Components' },
            ]}
          />
          <Header />
            {children}
          <Footer />
        </Wrapper>
      </Div100vh>
    )
  }
}

export default Layout
