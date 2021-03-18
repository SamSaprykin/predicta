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
  
`;

const Item = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 800px;
margin: 0 auto;

@media (max-width: 1280px) {
  width: 600px;
  }
  @media (max-width: 600px) {
    width: 300px;
    }
`



const Gap = styled.div`
height: 2rem;

  @media (max-width: 1024px) {
    
  }
`

const TextBox = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 800px;
margin: 0 auto;

@media (max-width: 1024px) {
  width: 80%

}
`


const RiskA = () => (
  <>
  
     <h2
      style={{
        fontWeight: `normal`
      }}
    >Risk vs Gathering Size without Masks</h2>

<Grid>
  <Item>
<ChartOne />
<Gap />
</Item>
</Grid>

<TextBox>
<p>We note that the <strong>chance of infection</strong> in a gathering of 1000 attendees, that do not use masks was the lowest in the <strong>summer</strong> period <strong>(63%)</strong>, followed by that in the <strong>spring (78%)</strong> and reached its highest value <strong>(100%) </strong>in the <strong>fall.</strong> This is due primarily to the different spread of the virus in the community and secondly to other factors such as the temperature.</p>
</TextBox>


  </>
);

export default RiskA