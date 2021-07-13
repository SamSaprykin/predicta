import React from "react";
import styled from "styled-components";
// import { Helmet } from "react-helmet"
// import { Link } from "gatsby"
import { withPrefix } from "gatsby";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  grid-gap: 2rem;
  align-self: center;
  justify-content: center;
  position: relative;
  width: 100%;
  max-width: 1400px;
  height: 1800px;
  @media (max-width: 1900px) {
    height: 1600px;
  }
  @media (max-width: 1600px) {
    height: 1500px;
  }
  @media (max-width: 1440px) {
    height: 1400px;
  }
`;

const GlobalStats = () => (
  <>
    <Grid>
      <iframe
        className="responsive-iframe"
        src={withPrefix("../ranking/index.html")}
      ></iframe>
    </Grid>
  </>
);

export default GlobalStats;
