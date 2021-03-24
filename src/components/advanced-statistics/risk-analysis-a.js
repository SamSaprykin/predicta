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
  max-width: 1080px;
  @media (max-width: 1024px) {
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
  max-width: 1080px;
  margin: 0 auto;
  @media (max-width: 1440px) {
    max-width: 800px;
  }
  @media (max-width: 1024px) {
    padding:0 32px;
  }
  p {
    letter-spacing: 0px;
    color: #606060;
    font-size:24px;
    line-height:44px;
    margin-bottom:60px;
    @media (max-width:1440px) {
      font-size:19.20px;
      line-height:35.20px;
    }
  }
`
const TitleSection = styled.h1`
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

const RiskA = () => (
  <>
  
  <TitleSection>Risk vs Gathering Size without Masks</TitleSection>
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