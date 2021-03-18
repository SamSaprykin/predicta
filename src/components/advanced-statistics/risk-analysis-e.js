import React from "react";
import styled from "styled-components"

import ChartEight from "./images/chart-h.svg";

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

const RiskE = () => (
  <>

      <Grid>

        <Item>

        <h2
      style={{
        fontWeight: `normal`
      }}
    >Risk by Venue vs Mask Usage</h2>

<ChartEight />
</Item>
      </Grid>

      <Gap />

      <TextBox>

      <p>This reaviling scenario demonstrates that the <strong>risk of infection is much higher in recreation venues</strong> such as bars, restaurants and other overcrowding places, while <strong>venues we normally visit in our everyday routines</strong> (subway, supermarket, parks) <strong>are much less dangerous.</strong> Needless to mention, <strong>the positive effect of mask usage</strong> in any of these cases.</p>

    </TextBox>
</>
  );


export default RiskE