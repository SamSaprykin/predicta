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

const RiskD = () => (
  <>

      <Grid>

        <Item>
          <TitleSection>Risk by Region vs Gathering Size in Spring</TitleSection>
          <ChartSix />
        </Item>
        <Item>
            <TitleSection>Risk by Region vs Gathering Size in Fall</TitleSection>
            <ChartSeven/>
        </Item>
      </Grid>
      <TextBox>
        <p>Comparing the <strong>risk of infection </strong>between Athens and Thessaloniki, we note that it follows a similar pattern in the 1st wave, while <strong>in the 2nd wave, there is a much higher chance of infection in the region of Thessaloniki.</strong> This is again a result of the much higher spread of the virus in Thessaloniki, during the 2nd wave.</p>
      </TextBox>
</>


  );


export default RiskD