import React from "react";
import styled from "styled-components";

import ChartOne from "./images/chart-one.svg";
import ChartTwo from "./images/chart-two.svg";
import ChartThree from "./images/chart-three.svg";
import ChartFour from "./images/chart-four.svg";
import ChartFive from "./images/chart-five.svg";
import ChartSix from "./images/chart-six.svg";
import ChartSeven from "./images/chart-seven.svg";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 4fr 3fr;
  grid-template-rows: auto;
  grid-gap: 2rem;
  width: 100%;
  align-self: center;
  justify-content: center;
  max-width: 1280px;

  svg {
    max-width: 100%;
  }
  @media (max-width: 1440px) {
    max-width: 960px;
  }
  @media (max-width: 1024px) {
    max-width: 768px;
  }
  @media (max-width: 960px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media (max-width: 768px) {
    padding: 0 32px;
  }

  .centered {
    margin: 0 auto;
  }
`;

const GridB = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  grid-gap: 2rem;
  width: 100%;
  align-self: center;
  justify-content: center;
  max-width: 1280px;
  margin-top: 2rem;
  svg {
    max-width: 100%;
  }
  @media (max-width: 1440px) {
    max-width: 960px;
  }
  @media (max-width: 1024px) {
    max-width: 768px;
  }
  @media (max-width: 960px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media (max-width: 768px) {
    padding: 0 32px;
  }
`;

const GridA = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: auto;
  grid-gap: 2rem;
  width: 100%;
  align-self: center;
  justify-content: center;
  max-width: 1280px;
  svg {
    max-width: 100%;
  }
  @media (max-width: 1440px) {
    max-width: 960px;
  }
  @media (max-width: 1024px) {
    max-width: 768px;
  }
  @media (max-width: 960px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media (max-width: 768px) {
    padding: 0 32px;
  }
  .centered {
    margin: 2rem auto;
    width: 50%;
    @media (max-width: 960px) {
      width: 100%;
    }
  }
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  background-color: transparent;
`;

const Gap = styled.div`
  display: block;
  height: 3rem;
`;

const TitleSection = styled.h1`
  text-transform: uppercase;
  color: #222b3e;
  letter-spacing: 0px;
  font-size: 32px;
  line-height: 38px;
  margin-bottom: 24px;
  @media (max-width: 1440px) {
    font-size: 28px;
    line-height: 32px;
  }
  @media (max-width: 1024px) {
    font-size: 26px;
    line-height: 30px;
  }
`;

const SubTitle = styled.h2`
  color: #222b3e;
  font-weight: 400;
  font-size: 26px;
  line-height: 38px;
  @media (max-width: 1440px) {
    font-size: 24px;
    line-height: 32px;
  }
  @media (max-width: 1024px) {
    font-size: 22px;
    line-height: 30px;
  }
`;

const GlobalStats = () => (
  <>
    <TitleSection id="global-statistics">Global Statistics</TitleSection>
    <Gap />
    <Grid>
      <Item>
        <SubTitle>Cases Monthly Evolution</SubTitle>
        <ChartOne />
      </Item>
      <Item>
        <SubTitle>Cumulative Cases Distribution</SubTitle>
        <ChartTwo />
      </Item>
      <Item>
        <SubTitle>Deaths Monthly Evolution</SubTitle>
        <ChartThree />
      </Item>
      <Item>
        <SubTitle>Cumulative Deaths Distribution</SubTitle>
        <ChartFour />
      </Item>
    </Grid>
    <GridB>
      <Item>
        <SubTitle>Mortality %</SubTitle>
        <ChartFive />
      </Item>
      <Item>
        <SubTitle>Positivity %</SubTitle>
        <ChartSix />
      </Item>
    </GridB>
    <GridA>
      <Item className="centered">
        <SubTitle>Vaccinated at Least 1 Dose %</SubTitle>
        <ChartSeven />
      </Item>
    </GridA>
  </>
);

export default GlobalStats;
