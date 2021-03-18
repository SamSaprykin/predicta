import React from "react";
import styled from "styled-components"

import ChartFour from "./images/chart-d.svg";
import ChartFive from "./images/chart-e.svg";


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

const RiskC = () => (
  <>

      <Grid>

        <Item>

        <h2
      style={{
        fontWeight: `normal`
      }}
    >Indoor/Outdoor Risk vs Gathering Size in Spring</h2>

<ChartFour />
</Item>

<Item>

<h2
style={{
fontWeight: `normal`
}}
>Indoor/Outdoor Risk vs Gathering Size in Fall </h2>

<ChartFive />
</Item>




      </Grid>

      <Gap />

      <TextBox>


      

      <p>Comparing the <strong>risk</strong> of infection in outdoor versus indoor gatherings, we note that <strong>there is a big difference in favor of outdoor gatherings.</strong> This difference is similar during the 1st and the 2nd wave of the pandemic, with a remarkable increase of the risk of infection, even in outdoor gatherings during the 2nd wave.</p>
      </TextBox>
</>


  );


export default RiskC