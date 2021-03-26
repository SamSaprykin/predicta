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
width:100%;
svg {
  width:100%;
}
`



const TextBox = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  tex-align:left;
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
  }
`

const TitleSection = styled.h1`
  text-transform: capitalize;
  color: #222B3E;
  letter-spacing: 0px;
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