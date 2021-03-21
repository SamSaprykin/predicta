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
  height:670px;
  background-color: rgb(234, 234, 234);

  @media (max-width: 1440px) {
    height:650px;
  }
  
`;

const RankingOne = () => (
  <>
  <h1 id='#maps'>Countries Weekly Ranking</h1>
    <Grid>
        <iframe className='responsive-iframe' scrolling='no' src={withPrefix('../geo-1/index.html')}></iframe>
    </Grid>
  </>
);


export default RankingOne