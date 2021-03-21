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
  height:1500px;
`;

const GeoAnalysis = () => (
  <>
  <h1 id='#maps'>Geographical Analysis</h1>

<Grid>

<iframe className='responsive-iframe' src={withPrefix('../geographical/index.html')}></iframe>

</Grid>


    
    
</>
  );


export default GeoAnalysis