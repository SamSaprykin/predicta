import React from "react";
import styled from "styled-components"

import ChartOne from "./images/chart-demographics-one.svg";
import ChartTwo from "./images/chart-demographics-two.svg";
import ChartThree from "./images/chart-demographics-three.svg";


const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: auto;
  grid-gap: 4rem;
  width: 800px;
  align-self: center;
  justify-content:center;

  @media (max-width: 1024px) {
      grid-template-columns: repeat(1, 1fr);
      width: 80%
   
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


const GeoAnalysis = () => (
  <>
 
  <h1 id='demographics'>Demographics</h1>


 <Gap />

      <Grid>


        <Item>


      <h3>Age Distribution Evolution</h3>
      <Gap />

        <ChartOne/>
</Item>

<Item>
<h3>Cases & Deaths Median Ages Evolution</h3>
<Gap />
<ChartTwo/>

</Item>


<Item>


<h3>Cases & Deaths by Gender Evolution</h3>
<Gap />
<ChartThree/>


</Item>





      </Grid>
    
</>
  );


export default GeoAnalysis