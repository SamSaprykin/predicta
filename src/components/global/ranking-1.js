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
  max-width: 1085px;
  height:550px;
  background-color: rgb(234, 234, 234);
  
  @media (max-width:1440px) {
    max-width: 960px;
    height:550px;
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
`

const RankingOne = () => (
  <>
  <TitleSection id='#maps'>Countries Weekly Ranking</TitleSection>
    <Grid>
        <iframe className='responsive-iframe' scrolling='no' src={withPrefix('../geo-1/index.html')}></iframe>
    </Grid>
  </>
);


export default RankingOne