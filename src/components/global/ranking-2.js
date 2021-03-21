import React from "react";
import styled from "styled-components"
//import { Helmet } from "react-helmet"
//import { Link } from "gatsby"
import { withPrefix } from "gatsby"

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  grid-gap: 2rem;
  align-self: center;
  justify-content:center;
  position: relative;
  width:100%;
  max-width: 1400px;
  height:900px;
  @media (max-width: 1900px) {
    height:800px;
  }
  @media (max-width: 1600px) {
    height:750px;
  }
  @media (max-width: 1440px) {
    height:700px;
  }
`;

const RankingTwo = () => (
  <>
  <h1 id='#maps'>Countries Weekly Ranking</h1>

<Grid>

<iframe className='responsive-iframe' scrolling='no' src={withPrefix('../geo-2/index.html')}></iframe>

</Grid>


    
    
</>
  );


export default RankingTwo