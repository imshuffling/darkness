import React from 'react'
import Layout from "../components/layout.js"
import styled from 'styled-components'
import { SubHeading } from '../elements'

const Section = styled.section`
  max-width: 600px;
  animation: intro 800ms cubic-bezier(0.694, 0, 0.335, 1) 0s backwards;
`

const randomFacts = (props) => (
  <Layout>
    <Section>
      <SubHeading>Some random facts about darkness.</SubHeading>
      <p>A shadow happens when an object blocks the sun’s rays. Shadows are longer in the winter because of the angle of the sun.</p>
      <p>Black or dark objects absorb light and heat. White or light objects reflect it. During the summer, you’ll stay cooler if you wear light clothing.</p>
      <p>Some objects, such as glass, are transparent. Light can shine through them. Some light shines through translucent objects, such as a balloon or sheet of wax paper. Light cannot shine through opaque objects and you can’t see through them. Opaque objects, including a desk, bath towel or blanket, are solid.</p>
    </Section>
  </Layout>
)

export default randomFacts