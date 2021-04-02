import React from "react"
//import { Link } from "gatsby"
import styled from "styled-components"
import ChartOne from "./images/chart-a.svg";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: auto;
  grid-gap: 2rem;
  align-self: center;
  justify-content: center;
  width:100%;
  max-width: 960px;
  @media (max-width: 1440px) {
    max-width:720px;
  }
  @media (max-width: 1024px) {
    max-width:768px;
  }
  @meida (max-width:768px) {
    padding:0 32px;
  }
  @media (max-width: 470px) {
    padding:0 24px;
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


const TextBox = styled.div`
width:100%;
max-width: 800px;
margin: 0 auto;
@media (max-width:1440px) {
  max-width:600px;
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
    @media (max-width: 1024px) {
      font-size:15px;
      line-height:30px;
    }
    @media (max-width: 768px) {
      padding:0 32px;
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

const RiskA = () => (
  <>
  
  <TitleSection>Risk vs Gathering size without Masks</TitleSection>
  <Grid>
    <Item>
      <ChartOne />
    </Item>
  </Grid>
  <TextBox>
    <p>We note that the <strong>chance of infection</strong> in a gathering of 1000 attendees, that do not use masks was the lowest in the <strong>summer</strong> period <strong>(63%)</strong>, followed by that in the <strong>spring (78%)</strong> and reached its highest value <strong>(100%) </strong>in the <strong>fall.</strong> This is due primarily to the different spread of the virus in the community and secondly to other factors such as the temperature.</p>
  </TextBox>


  </>
);

export default RiskA
