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
	
  width: 100%;
  height:1000px;
  @media (max-width:1680px) {
    height:900px;
  }
  @media (max-width:1440px) {
    height:800px;
  }
`;

const Map = () => (
  <>
  <h1 id='#maps'>Covid-19 Pandemic Evolution</h1>

  <Grid>
    <iframe className='responsive-iframe' src={withPrefix('../map/index.html')}></iframe>
  </Grid>


    
    
</>
  );


export default Map


