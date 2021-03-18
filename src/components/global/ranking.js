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
	padding-top: 95%;
	width: 1400px;
`;

const GlobalStats = () => (
  <>
  <h1 id='#maps'>Countries Weekly Ranking</h1>

<Grid>

<iframe className='responsive-iframe' src={withPrefix('../ranking/index.html')}></iframe>

</Grid>


    
    
</>
  );


export default GlobalStats