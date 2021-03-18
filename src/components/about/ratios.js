import React from "react";
import styled from "styled-components"

import MixedGroupCol from "../../images/mixed-group-col.svg";
import MixedGroupGrey from "../../images/mixed-group-grey.svg";

//import "./styles.css";

const Item = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: auto;
height: auto;
background-color: transparent;

`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  grid-gap: 10px;
  width: 800px;
  align-self: center;
`;


const GridBox = () => (
  <>
 
  <h1 id='ratios'>Age Ratios</h1>

      <Grid>
        <Item>
          
          <MixedGroupGrey /><p>0-19</p><h1>11%</h1></Item>
        <Item><p>0-19</p><h1>11%</h1></Item>
        <Item><MixedGroupCol /><p>0-19</p><h1>11%</h1></Item>
        <Item><p>0-19</p><h1>11%</h1></Item>
        <Item><p>0-19</p><h1>11%</h1></Item>
        <Item><p>0-19</p><h1>11%</h1></Item>
        <Item><MixedGroupGrey /><p>0-19</p><h1>11%</h1></Item>
        <Item><p>0-19</p><h1>11%</h1></Item>
        <Item><MixedGroupCol /><p>0-19</p><h1>11%</h1></Item>
      </Grid>
    
</>
  );


export default GridBox