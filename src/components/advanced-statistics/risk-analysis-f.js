import React from "react"
//import { Link } from "gatsby"
import styled from "styled-components"
import ChartNine from "./images/chart-i.svg";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: auto;
  grid-gap: 2rem;
  align-self: center;
  justify-content: center;
  width: 800px;
`;

const Item = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin: 0 auto;
width: 800px;

@media (max-width: 1024px) {
  width: 600px;
  }
  @media (max-width: 600px) {
    width: 300px;
    }
`

const Gap = styled.div`
height: 2rem;

  @media (max-width: 1024px) {
 
  }
`

const TextBox = styled.div`
width: 800px;
margin: 0 auto;

  @media (max-width: 1024px) {
    width: 80%;
  }
`

const RiskF = () => (
  <>

     <h2
      style={{
        fontWeight: `normal`
      }}
    >Risk vs Gathering Size without Masks</h2>

<Grid>
  <Item>
<ChartNine />
<Gap />
</Item>
</Grid>

<TextBox>
<p>To demonstrate how <strong>risky</strong> are our everyday habits during the pandemic, we chose a scenario that compares the chance of dying from covid-19 to the chance to be involved in a fatal car accident. Example given, <strong>visiting a bar we are 264 times more prevalent to die from covid-19, compared to our death in a car accident. Again, the mask usage decreases this risk by more than half.</strong></p>



</TextBox>

<p style={{
        backgroundColor: `#f8f8f8`, padding:`.5rem`, textAlign: `center`, margin: `0 auto`
      }}> If you have found this small selection of scenarios interesting, you can always contact us for more.</p>


  </>
);
export default RiskF