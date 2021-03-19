import React from "react"
//import { Link } from "gatsby"
import styled from "styled-components"


const IntroBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width:100%;
  max-width: 1080px;
  margin: 0 auto;
  p {
    font-size:24px;
    line-height:44px;
    color: #606060;
    margin-bottom:60px;
    @media (max-width: 678px) {
      font-size:20px;
      line-height:1.5;
    }
  }
  h2 {
    text-align:left;
    color: #606060;
    width:100%;
    font-size:35px;
    line-height:42px;
    @media (max-width: 678px) {
      font-size:28px;
      line-height:36px;
    }
  }
  h5 {
    font-size:24px;
    line-height:44px;
    color: #606060;
    margin-top:60px;
    font-family:IBM Plex Sans;
    @media (max-width: 678px) {
      font-size:20px;
      line-height:1.5;
    }
  }
  ul {
    color: #606060;
    li {
      @media (max-width: 678px) {
        font-size:18px;
      }
    }
  }
  @media (max-width: 1024px) {
    padding:0 32px;
    margin-top:3rem;
   
  }
  @media (max-width: 470px) {
    padding:0 24px;
  }

`
const TitleSection = styled.h1`
  text-transform: capitalize;
  color: #222B3E;
  letter-spacing: 0px;
  font-size:50px;
  line-height:60px;
  margin-bottom:80px;
  @media (max-width: 1024px) {
    font-size:42px;
    line-height:48px;
  }
`


const Intro = () => (
  <>
  <IntroBox>
    <TitleSection>Scenarios</TitleSection>
    <p>This scientific analysis will try to simulate the virus risk of infection effect on the society across different situations, based on size and density of gatherings/social clusters. This analysis has been conducted specifically for Greece.</p>
    <h2 style={{fontWeight: `normal`, marginBottom:`10px`, textAlign:`left`}}>What You Should Know</h2>
    <ul style={{listStyle: `none`,margin: `0`,padding: `0`}}>
      <li>- The <strong>Risk of Infection</strong> is the probability for an individual to be infectious.</li>
      <li>- <strong>Active cases</strong> include diagnosed cases, asymptomatic carriers or those that are pre-symptomatic but can still spread the virus (estimated).</li>
      <li>- The Risk of Infection for an individual is the ratio of the <strong>maximum Active cases per period</strong> of study, to the <strong>Greek population.</strong></li>
    </ul>
    <h5><strong>Selected Scenarios demonstrating the Risk of Infection in Greece, under variable situations, interpreting our pandemic experience and the ways preventive measures can influence this experience.</strong></h5>
  </IntroBox>
  </>
)

export default Intro