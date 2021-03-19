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
  width: 100%;
  max-width:1080px;
  @media (max-width: 1024px) {
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
  width:100%;
  max-width:630px;
  margin:0 auto 64px;
`

const Gap = styled.div`
  height: 2rem;
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

const RiskB = () => (
  <>
    <Grid>
      <Item>
        <TitleSection>Risk by Precautions vs Gathering Size in Spring</TitleSection>
        <ChartTwo />
      </Item>
      <Item>
        <TitleSection>Risk by Precautions vs Gathering Size in Fall </TitleSection>
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