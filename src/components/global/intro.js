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

const TitleSection = styled.h1`
  text-transform: uppercase;
  color: #222B3E;
  letter-spacing: 0px;
  font-size:32px;
  line-height:38px;
  margin-bottom:24px;
  @media (max-width: 1440px) {
    font-size:28px;
    line-height:32px;
  }
  @media (max-width: 1024px) {
    font-size:26px;
    line-height:30px;
  }
  @media (max-width:768px) {
    margin-top:60px;
  }
`


const Map = () => (
  <>
  <TitleSection id='#maps'>Covid-19 Pandemic Evolution</TitleSection>

  <Grid>
    <iframe className='responsive-iframe' src={withPrefix('../map/index.html')}></iframe>
  </Grid>


    
    
</>
  );


export default Map


