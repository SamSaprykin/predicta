import React from "react"
//import { Link } from "gatsby"
import styled from "styled-components"


const IntroBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width:100%;
  max-width: 800px;
  margin: 0 auto;
  @media (max-width:1440px) {
    max-width:600px;
  }
  @media (max-width: 768px) {
    padding:0 32px;
  }
  p {
    letter-spacing: 0px;
    color: #606060;
    font-size:18px;
    line-height:38px;
    @media (max-width: 1440px) {
      font-size:16px;
      line-height:32px;
    }
    @media (max-width: 1024px) {
      font-size:15px;
      line-height:30px;
    }
  }
  ul {
    li {
      font-size:18px;
      line-height:38px;
      color: #606060;
      @media (max-width: 1440px) {
        font-size:16px;
        line-height:32px;
      }
      @media (max-width: 1024px) {
        font-size:15px;
        line-height:30px;
      }
    }
  }
  h2 {
    text-align:left;
    color: #606060;
    width:100%;
    font-size:26px;
    line-height:38px;
    @media (max-width: 1440px) {
      font-size:24px;
      line-height:32px;
    }
    @media (max-width: 1024px) {
      font-size:22px;
      line-height:30px;
    }
  }
  h5 {
    font-size:18px;
    line-height:38px;
    color: #606060;
    @media (max-width: 1440px) {
      font-size:16px;
      line-height:32px;
    }
    @media (max-width: 1024px) {
      font-size:15px;
      line-height:30px;
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
  text-transform: uppercase;
  color: #222B3E;
  letter-spacing: 0px;
  font-size:32px;
  line-height:38px;
  margin-bottom:80px;
  @media (max-width: 1440px) {
    font-size:28px;
    line-height:32px;
  }
  @media (max-width: 1024px) {
    font-size:26px;
    line-height:30px;
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
    <p>
    <h5><strong>Selected Scenarios demonstrating the Risk of Infection in Greece, under variable situations, interpreting our pandemic experience and the ways preventive measures can influence this experience.</strong></h5>
    </p>
  </IntroBox>
  </>
)

export default Intro
