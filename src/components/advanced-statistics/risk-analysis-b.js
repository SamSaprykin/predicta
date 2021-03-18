import React from "react";
import styled from "styled-components"

import ChartTwo from "./images/chart-b.svg";
import ChartThree from "./images/chart-c.svg";


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

const RiskB = () => (
  <>

      <Grid>

        <Item>

        <h2
      style={{
        fontWeight: `normal`
      }}
    >Risk by Precautions vs Gathering Size in Spring</h2>

<ChartTwo />
</Item>

<Item>

<h2
style={{
fontWeight: `normal`
}}
>Risk by Precautions vs Gathering Size in Fall </h2>

<ChartThree />
</Item>




      </Grid>

      <Gap />

      <TextBox>

      <p>Comparing the <strong>effect of preventive measures in the 1st wave vs the 2nd wave</strong>, we note that there is much lower contribution of the measures in the fall. For example, the risk of infection in a gathering of 1000 attendees in the spring decreaces from 78% to 26% with mask usage and ventilation. While in the fall, the chance for risk infection with or without mask is certain and comes down to 86% if proper ventilation exists. This observation suggests that <strong>usual precautions are of minor importance, once the spread of the virus is extensive in the community.</strong></p>
      </TextBox>
    
</>
  );


export default RiskB