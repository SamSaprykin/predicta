import React from "react";
import styled from "styled-components";

import ChartFour from "./images/chart-d.svg";
import ChartFive from "./images/chart-e.svg";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: auto;
  grid-gap: 2rem;
  align-self: center;
  justify-content: center;
  width: 100%;
  max-width: 960px;
  @media (max-width: 1440px) {
    max-width: 720px;
  }
  @media (max-width: 1024px) {
    max-width: 768px;
  }
  @meida (max-width:768px) {
    padding: 0 32px;
  }
  @media (max-width: 470px) {
    padding: 0 24px;
  }
`;

const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto 32px;
  width: 100%;
  svg {
    width: 100%;
  }
`;

const TextBox = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  tex-align: left;
  max-width: 800px;
  margin: 0 auto;
  @media (max-width: 1440px) {
    max-width: 600px;
  }
  @media (max-width: 768px) {
    padding: 0 32px;
  }
  p {
    letter-spacing: 0px;
    color: #606060;
    font-size: 18px;
    line-height: 38px;
    @media (max-width: 1440px) {
      font-size: 16px;
      line-height: 32px;
    }
  }
`;

const TitleSection = styled.h1`
  text-transform: none;
  color: #222b3e;
  letter-spacing: 0px;
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

const RiskK = () => (
  <>
    <Grid>
      <Item>
        <TitleSection>
          Risk of Death by Vaccination vs Gathering Size
        </TitleSection>
        <img
          src="/risk-by-vaccination-gathering-size.png"
          alt="Risk of Death by Vaccination vs Gathering Size"
        />
      </Item>
    </Grid>
    <TextBox>
      <p>
        Comparing the risk of death in gatherings of people, vaccinated and
        non-vaccinated, we note that there is a big difference in favor of
        vaccinated people. For example, the risk of being deceased in a
        gathering of 1000 attendees decreases from 7% for the non-vaccinated
        group to 0,3% for the vaccinated group.
      </p>
    </TextBox>
  </>
);

export default RiskK;
