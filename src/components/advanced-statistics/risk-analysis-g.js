import React from "react";
// import { Link } from "gatsby"
import styled from "styled-components";

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
  width: 100%;
  max-width: 630px;
  margin: 0 auto 64px;
`;

const TextBox = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  @media (max-width: 1440px) {
    max-width: 600px;
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
    @media (max-width: 1024px) {
      font-size: 15px;
      line-height: 30px;
    }
    @media (max-width: 768px) {
      padding: 0 32px;
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

const RiskG = () => (
  <>
    <TitleSection>
      Risk by Vaccination vs Gathering Size without Masks
    </TitleSection>
    <Grid>
      <Item>
        <img
          src="/gathering-without-mask.png"
          alt="Risk vs Gathering size without Masks"
        />
      </Item>
    </Grid>
    <TextBox>
      <p>
        Comparing the <strong>risk of infection</strong> in gatherings of
        people, vaccinated and non-vaccinated, we note that{" "}
        <strong>
          there is a big difference in favor of the vaccinated group
        </strong>
        . For example, the risk of infection in a gathering of 500 participants
        decreases from 100% for the non-vaccinated group to 46% for the
        vaccinated group.
      </p>
    </TextBox>
  </>
);

export default RiskG;
