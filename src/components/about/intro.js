import React from "react"
//import { Link } from "gatsby"
import styled from "styled-components"


const IntroBox = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 800px;
margin: 0 auto;

@media (max-width: 1024px) {
  width: 80%

}
`


const Intro = () => (
  <IntroBox>
     <h1
      style={{
        textTransform: `uppercase`, marginBottom:`20px`
      }}
    >Purpose</h1>
    <h2 style={{
        fontWeight: `normal`, color: `#606060`
      }}>Investigating COVID-19's global evolution factors</h2>
    <p>COVID-19 has already affected almost all countries of the world, with national goverments being exposed at an unprecedented situation, which creates such massive health and economic shocks that the world hasn't seen since the World War II. The intensity of the pandemic varies between countries, there are different goverment preventive policies and the reaction of alternative population regions, is not consistent. PREDICTA's scientific team took the challenge to collect and analyze the relevant publicly available data aiming to identify the most important factors that significantly affect the pandemic's evolution & spread, through the application of extensive statistical data analysis. The findings and the results of this project are considered worth of publicity and attention, as they may contribute to the wider global research, with the intention to better understand the situation created and to help optimize preventive policies in the present and possible future pandemics.</p>

  </IntroBox>
)

export default Intro