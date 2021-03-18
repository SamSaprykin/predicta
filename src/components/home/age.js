import React from "react";
import styled from "styled-components"
import Group from "./images/cases-by-age.svg";

//import "./styles.css";
// const Grid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(8, 1fr);
//   grid-template-rows: auto;
//   grid-gap: 43px;
//   align-self: center;
//   justify-content: center;
//   width: 1200px;

 
//   @media (max-width: 1024px) {

//     grid-gap: 23px;

//   }
// `;



// const Item = styled.div`
// display: flex;
// flex-direction: column;
// align-items: center;
// justify-content: center;
// width: auto;
// height: auto;
// background-color: transparent;
// text-align:center;

// @media (max-width: 1024px) {

// & p {font-size: 0.9em}
// & h1 {font-size: 1.4em}
// }
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

const Gap = styled.div`
display: block;
height: 2rem;
`;

const GridBox = () => (
  <>
 
  <h1 id ='age' style={{textTransform: `capitalize`}}>Cases by Age Group</h1>

  <Gap />

  <ImageBox>
    <Group/>
  </ImageBox>
      {/* <Grid>
        <Item><p>0-19</p><h1>11%</h1></Item>
        <Item><p>0-19</p><h1>11%</h1></Item>
        <Item><p>0-19</p><h1>11%</h1></Item>
        <Item><p>0-19</p><h1>11%</h1></Item>
        <Item><p>0-19</p><h1>11%</h1></Item>
        <Item><p>0-19</p><h1>11%</h1></Item>
        <Item><p>0-19</p><h1>11%</h1></Item>
        <Item><p>0-19</p><h1>11%</h1></Item>
      </Grid> */}
    
</>
  );


export default GridBox