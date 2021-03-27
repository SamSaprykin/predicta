import React from "react";
import styled from "styled-components"

import ChartOne from "./images/chart-demographics-one.svg";
import ChartTwo from "./images/chart-demographics-two.svg";
import ChartThree from "./images/chart-demographics-three.svg";


const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: auto;
  grid-gap: 3rem;
  width: 100%;
  align-self: center;
  justify-content:center;
  max-width: 800px;
 
  @media (max-width: 1440px) {
    max-width: 720px;
  }
  @media (max-width: 1024px) {
    grid-template-columns: repeat(1, 1fr);
    max-width: 768px;
  }
  

`;


const Item = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
height: auto;
background-color: transparent;

& h3 {
text-align:center;
}
`;

const Gap = styled.div`
display: block;
height: 3rem;
`;
const TitleSection = styled.h1`
  text-transform: uppercase;
  color: #222B3E;
  letter-spacing: 0px;
  font-size:32px;
  line-height:38px;
  margin-bottom:0;
  @media (max-width: 1440px) {
    font-size:28px;
    line-height:32px;
  }
  @media (max-width: 1024px) {
    font-size:26px;
    line-height:30px;
  }
`

const SubheadSection = styled.h2`
  margin-bottom:1rem;
  color: #606060;
  font-weight:400;
  font-size:26px;
  line-height:38px;
  margin-bottom:42px;
  @media (max-width: 1440px) {
    font-size:24px;
    line-height:32px;
  }
  @media (max-width: 1024px) {
    font-size:22px;
    line-height:30px;
  }
`

const GeoAnalysis = () => (
  <>
 
  <TitleSection id='demographics'>Demographics</TitleSection>


 <Gap />

      <Grid>


        <Item>


      <SubheadSection>Age Distribution Evolution</SubheadSection>
        <ChartOne/>
</Item>

<Item>
<SubheadSection>Cases & Deaths Median Ages Evolution</SubheadSection>
<ChartTwo/>

</Item>


<Item>


<SubheadSection>Cases & Deaths by Gender Evolution</SubheadSection>

<ChartThree/>


</Item>





      </Grid>
    
</>
  );


export default GeoAnalysis