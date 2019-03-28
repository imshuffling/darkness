import React from 'react'
import Layout from "../components/layout.js"
import styled from 'styled-components'
import { Heading, SubHeading } from '../elements'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const Section = styled.section`
  max-width: 600px;
  animation: intro 800ms cubic-bezier(0.694, 0, 0.335, 1) 0s backwards;
`

const IndexPage = (props) => (
  <Layout>
    <Section>
      <Heading>This is a <a target="_blank" rel="noopener noreferrer" href="https://www.styled-components.com/"><span className="MainText">Styled Components</span><span className="HoverText">Styled Components</span></a> demo.</Heading>
      <SubHeading>Why don't you read some random facts about Darkness <AniLink paintDrip hex="#C0FFC0" to="/random-facts"><span className="MainText">here.</span><span className="HoverText">here.</span></AniLink></SubHeading>
      <p>This site is built in React, using <a target="_blank" rel="noopener noreferrer" href="https://www.gatsbyjs.org/"><span className="MainText">Gatsby.js</span><span className="HoverText">Gatsby.js</span></a><br/> and hosted on <a target="_blank" rel="noopener noreferrer" href="https://www.netlify.com/"><span className="MainText">Netlify.</span><span className="HoverText">Netlify.</span></a></p>
    </Section>
  </Layout>
)

export default IndexPage