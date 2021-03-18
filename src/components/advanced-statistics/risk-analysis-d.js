import React from "react";
import styled from "styled-components"

import ChartSix from "./images/chart-f.svg";
import ChartSeven from "./images/chart-g.svg";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  grid-gap: 2rem;
  align-self: center;
  justify-content: center;

  @media (max-width: 1024px) {
    width: 600px;
    }
    @media (max-width: 600px) {
      grid-template-columns: repeat(1, 1fr);
      width: 300px;
      }
`;

const Item = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin: 0 auto;

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
max-width: 800px;
margin: 0 auto;

  @media (max-width: 1024px) {
    max-width: 80%;
  }
`

const RiskD = () => (
  <>

      <Grid>

        <Item>

        <h2
      style={{
        fontWeight: `normal`
      }}
    >Risk by Region vs Gathering Size in Spring</h2>

<ChartSix />
</Item>

<Item>

<h2
style={{
fontWeight: `normal`
}}
>Risk by Region vs Gathering Size in Fall</h2>

<ChartSeven/>
</Item>




      </Grid>

      <Gap />

      <TextBox>


      

      <p>Comparing the <strong>risk of infection </strong>between Athens and Thessaloniki, we note that it follows a similar pattern in the 1st wave, while <strong>in the 2nd wave, there is a much higher chance of infection in the region of Thessaloniki.</strong> This is again a result of the much higher spread of the virus in Thessaloniki, during the 2nd wave.</p>
      </TextBox>
</>


  );


export default RiskD