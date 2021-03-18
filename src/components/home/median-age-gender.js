import React from "react";
import styled from "styled-components"
import Median from "./images/median-age-gender.svg";

//import "./styles.css";

// const Grid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(8, 1fr);
//   grid-template-rows: auto;
//   grid-gap: 10px;
//   width: 800px;
//   align-self: center;
// `;

// const Item = styled.div`
// display: flex;
// flex-direction: column;
// align-items: center;
// justify-content: center;
// width: auto;
// height: auto;
// background-color: transparent;

// `;

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

// const Title = styled.div`
// margin-bottom: 3rem;

// @media (max-width: 1024px) {
//     padding: 20px 0;
//     font-size: 1.5rem;
//     z-index: 6;
//   }
// `
const Gap = styled.div`
display: block;
height: 2rem;
`;

const MedianBox = () => (
  <>
 
  <h1 id ='' style={{textTransform: `capitalize`}}>Median Age by Gender - (Cases & Deaths)</h1>

  <Gap />

  <ImageBox>
  <Median />

  </ImageBox>
     
     
    
</>
  );


export default MedianBox