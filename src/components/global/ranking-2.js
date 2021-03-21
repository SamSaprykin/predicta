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
  height:720px;
  
`;

const RankingTwo = () => (
  <>
    <Grid>
      <iframe className='responsive-iframe' scrolling='no' src={withPrefix('../geo-2/index.html')}></iframe>
    </Grid>
  </>
);


export default RankingTwo