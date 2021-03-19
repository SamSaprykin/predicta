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
  max-width:1080px;
  @media (max-width: 1024px) {
    width: 100%;
    max-width:800px;
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    padding:0 32px;
  }
`;

const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto 32px;
`


const TextBox = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  @media (max-width: 1440px) {
    max-width: 800px;
  }
  @media (max-width: 1024px) {
    padding:0 32px;
  }
`

const TitleSection = styled.h2`
  text-transform: capitalize;
  color: #222B3E;
  letter-spacing: 0px;
  font-size:35px;
  line-height:42px;
  margin-bottom:80px;
  font-weight:400;
  @media (max-width: 1440px) {
    font-size:32px;
    line-height:34px;
  }
`

const RiskC = () => (
  <>

      <Grid>
        <Item>
          <TitleSection>Indoor/Outdoor Risk vs Gathering Size in Spring</TitleSection>
          <ChartFour />
        </Item>

        <Item>
          <TitleSection>Indoor/Outdoor Risk vs Gathering Size in Fall </TitleSection>
          <ChartFive />
        </Item>
      </Grid>
      <TextBox>
        <p>Comparing the <strong>risk</strong> of infection in outdoor versus indoor gatherings, we note that <strong>there is a big difference in favor of outdoor gatherings.</strong> This difference is similar during the 1st and the 2nd wave of the pandemic, with a remarkable increase of the risk of infection, even in outdoor gatherings during the 2nd wave.</p>
      </TextBox>
</>


  );


export default RiskC