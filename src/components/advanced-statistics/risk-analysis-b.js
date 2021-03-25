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
  max-width:1280px;
  @media (max-width: 1440px) {
    max-width:960px;
  }
  @media (max-width: 1024px) {
    max-width:768px;
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

    margin-bottom:60px;
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