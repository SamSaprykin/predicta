import React from "react";
import styled from "styled-components"

import ChartOne from "./images/chart-one.svg";
import ChartTwo from "./images/chart-two.svg";
import ChartThree from "./images/chart-three.svg";
import ChartFour from "./images/chart-four.svg";
import ChartFive from "./images/chart-five.svg";
import ChartSix from "./images/chart-six.svg";



const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  grid-gap: 2rem;
  width: 1220px;
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


`;

const Gap = styled.div`
display: block;
height: 3rem;
`;

const GlobalStats = () => (
  <>
 
  <h1 id='global-statistics'>Global Statistics</h1>


  <Gap />
      <Grid>

        <Item>


  <h3>Cases Monthly Evolution</h3>
 
        
        <ChartOne />

        </Item>


        <Item>
       
  <h3>Cumulative Cases Distribution</h3>

        <ChartTwo />
        
        </Item>

        <Item>
     
  <h3>Deaths Monthly Evolution</h3>

        <ChartThree />
        
        </Item>

        <Item>
            
  <h3>Cumulative Deaths Distribution</h3>

        <ChartFour />
        
        </Item>

        <Item>
            
  <h3>Mortality %</h3>
  
        <ChartFive />
        
        </Item>

        <Item>
             
  <h3>Positivity %</h3>

        <ChartSix />
        
        </Item>




      </Grid>
    
</>
  );


export default GlobalStats