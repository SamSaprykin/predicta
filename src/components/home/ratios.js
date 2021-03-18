import React from "react";
import styled from "styled-components"

import AgeRatios from "./images/age-ratios.svg";

const ImageBox = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 100%;
max-width: 1200px;
margin: 0 auto;
  @media (max-width: 1280px) {
    padding:0 32px;
  }
  @media (max-width: 1024px) {
    max-width: 600px; 
  }
  @media (max-width: 600px) {
    max-width: 300px;
  }
`

const Gap = styled.div`
display: block;
height: 2rem;
`;

const GridBox = () => (
  <>
  
  <h1 id ='' style={{textTransform: `capitalize`}}>Age Ratios</h1>

  <Gap />

        <ImageBox>
          
          <AgeRatios />
          
          </ImageBox>
      
</>
  );


export default GridBox