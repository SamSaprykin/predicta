import React from "react";
import styled from "styled-components"

import LogoOne from "./images/predicta-logo.svg"
import LogoTwo from "./images/spss-logo.svg"
import LogoThree from "./images/python-logo.svg"
import LogoFour from "./images/r-logo.svg"




const Grid = styled.div`

  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: auto;
  grid-gap: 0rem;
  align-self: center;
  justify-content:center;

  @media (max-width: 1024px) {
    padding:0 32px;
  }
`;

const LogoWrapper = styled.div`
  width:100%;
  max-width:960px;
  display:flex;
  flex-wrap:wrap;
  justify-content:space-between;
  align-items:center;
  @media (max-width: 1440px) {
    max-width:720px;
  }
  @media (max-width: 1024px) {
    max-width:768px;
  }
  img {
    height:120px;
    width:20%;
    @media (max-width: 470px) {
      width:40%;
    }
  }
`






const Partners = () => (
  <>
    <Grid>
      <LogoWrapper>
        <img src="/predicta-logo2.svg" />
        <img src="/spss-logo.svg" />
        <img src="/python-logo.svg" />
        <img src="/r-logo.svg" />

      </LogoWrapper>
    </Grid>  
  </>
  );


export default Partners