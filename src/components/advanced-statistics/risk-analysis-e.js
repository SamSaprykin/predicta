import React from "react";
import styled from "styled-components"

import ChartEight from "./images/chart-h.svg";
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
`

const ChartContainer = styled.div`
  margin-top:22px;
  width:100%;
  max-width:927px;
  padding:61px 104px;
  background-color:white;
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

const RiskE = () => (
  <>

      <Grid>
        <Item>
          <TitleSection>Risk by Venue vs Mask Usage</TitleSection>
          <ChartWrapper>
            <Label />
            <ChartContainer>
              <ChartEight />
            </ChartContainer>
          </ChartWrapper>
         
          
        </Item>
      </Grid>
      <TextBox>
        <p>This reaviling scenario demonstrates that the <strong>risk of infection is much higher in recreation venues</strong> such as bars, restaurants and other overcrowding places, while <strong>venues we normally visit in our everyday routines</strong> (subway, supermarket, parks) <strong>are much less dangerous.</strong> Needless to mention, <strong>the positive effect of mask usage</strong> in any of these cases.</p>
      </TextBox>
</>
  );


export default RiskE