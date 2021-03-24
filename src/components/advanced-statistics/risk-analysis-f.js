import React from "react"
//import { Link } from "gatsby"
import styled from "styled-components"
import ChartNine from "./images/chart-i.svg";
import Label from "./images/label.svg"

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
  max-width:927px;
  @media (max-width: 1440px) {
    max-width:800px;
  }
  margin:0 auto 64px;
  
  
`


const ChartWrapper = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  width:100%;
  .a {
    stroke: none !important;
  }
`

const ChartContainer = styled.div`
  margin-top:22px;
  width:100%;
  max-width:927px;
  padding:61px 104px;
  background-color:#f8f8f8;
  border: 1px solid #A7A9AC;
  svg {
    width:719px;
  }
  @media (max-width: 1440px) {
    padding:30px 52px;
  }
 
  @media (max-width: 768px) {
    padding:24px;
    svg {
      width:100%;
      max-width:600px;
      height:auto;
    }
  }
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
  p {
    letter-spacing: 0px;
    color: #606060;
    font-size:24px;
    line-height:44px;
    margin-bottom:80px;
    @media (max-width:1440px) {
      font-size:19.20px;
      line-height:35.20px;
    }
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

const Info = styled.p`
  background-color: #f8f8f8;
  padding:.5rem;
  text-align:center; 
  margin: 0 auto;
  width:100%;
  max-width:1080px;
  letter-spacing: 0px;
  color: #606060;
  font-size:24px;
  line-height:44px;
  margin-bottom:80px;
  @media (max-width:1440px) {
    font-size:19.20px;
    line-height:35.20px;
  }
  @media (max-width: 1440px) {
    max-width: 800px;
  }
  @media (max-width: 1024px) {
    padding:0 32px;
  }
`
const RiskF = () => (
  <>
    <TitleSection>Covid-19 vs Car Accident Odds of Death</TitleSection>
    <Grid>
      <Item>
          <ChartWrapper>
            <Label />
            <ChartContainer>
              <ChartNine />
            </ChartContainer>
          </ChartWrapper>
        <Gap />
      </Item>
    </Grid>
    <TextBox>
      <p>To demonstrate how <strong>risky</strong> are our everyday habits during the pandemic, we chose a scenario that compares the chance of dying from covid-19 to the chance to be involved in a fatal car accident. Example given, <strong>visiting a bar we are 264 times more prevalent to die from covid-19, compared to our death in a car accident. Again, the mask usage decreases this risk by more than half.</strong></p>
    </TextBox>
    <Info> If you have found this small selection of scenarios interesting, you can always contact us for more.</Info>
  </>
);
export default RiskF