import React from "react"
//import { Link } from "gatsby"
import styled from "styled-components"


const IntroBox = styled.div`
display: flex;
flex-direction: column;
width: 800px;
margin: 0 auto;

@media (max-width: 1024px) {
  width: 80%

}
`

const Gap = styled.div`
height: 2rem;

  @media (max-width: 1024px) {
  
  }
`


const Intro = () => (
  <>
  <IntroBox>
     <h1>Scenarios</h1>

     <Gap/>
  
    <p>This scientific analysis will try to simulate the virus risk of infection effect on the society across different situations, based on size and density of gatherings/social clusters. This analysis has been conducted specifically for Greece.</p>

<h2 style={{
        fontWeight: `normal`, marginBottom:`10px`, textAlign:`left`
      }}>What You Should Know</h2>

<ul style={{
        listStyle: `none`,
        margin: `0`,
        padding: `0`
      }}>
  
<li>- The <strong>Risk of Infection</strong> is the probability for an individual to be infectious.</li>
<li>- <strong>Active cases</strong> include diagnosed cases, asymptomatic carriers or those that are pre-symptomatic but can still spread the virus (estimated).</li>
<li>- The Risk of Infection for an individual is the ratio of the <strong>maximum Active cases per period</strong> of study, to the <strong>Greek population.</strong></li>
</ul>

<p><strong>Selected Scenarios demonstrating the Risk of Infection in Greece, under variable situations, interpreting our pandemic experience and the ways preventive measures can influence this experience.</strong></p>

  </IntroBox>
  </>
)

export default Intro