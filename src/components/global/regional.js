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
  height:1100px;
  @media (max-width:1680px) {
    height:900px;
  }
  @media (max-width:1440px) {
    height:900px;
  }
  @media (max-width:1280px) {
    height:750px;
  }
  @media (max-width:960px) {
    height:800px;
  }
`;

const GeoAnalysis = () => (
  <>

  <h1 id='regional'>Regional Statistics</h1>

        <Grid>

        <iframe className='responsive-iframe' src={withPrefix('../regional/index.html')}></iframe>

</Grid>




    
    
</>
  );


export default GeoAnalysis