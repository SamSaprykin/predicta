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
`;

const TitleSection = styled.h1`
  text-transform: uppercase;
  color: #222B3E;
  letter-spacing: 0px;
  font-size:32px;
  line-height:38px;
  margin-bottom:0;
  @media (max-width: 1440px) {
    font-size:28px;
    line-height:32px;
  }
  @media (max-width: 1024px) {
    font-size:26px;
    line-height:30px;
  }
`

const SubheadSection = styled.h2`
  margin-bottom:1rem;
  color: #606060;
  font-weight:400;
  font-size:26px;
  line-height:38px;
  margin-bottom:42px;
  @media (max-width: 1440px) {
    font-size:24px;
    line-height:32px;
  }
  @media (max-width: 1024px) {
    font-size:22px;
    line-height:30px;
  }
`


const GeoAnalysis = () => (
  <>
    <TitleSection id='geographicalanalysis'>Geographical Analysis</TitleSection>

    <Grid>

      <iframe className='responsive-iframe' src={withPrefix('../geographical/index.html')}></iframe>

    </Grid>




  </>
);


export default GeoAnalysis