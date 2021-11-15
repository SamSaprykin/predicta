import React from "react";
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
  margin: 0 auto 32px;
`;

const Gap = styled.div`
  height: 2rem;
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
    margin-bottom: 60px;
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

const RiskH = () => (
  <>
    <Grid>
      <Item>
        <TitleSection>
          Risk of Hospitalization by Vaccination vs Gathering Size
        </TitleSection>
        <img
          src="/risk-of-hospitalization-gathering.png"
          alt="Risk of Hospitalization by Vaccination vs Gathering Size"
        />
      </Item>
    </Grid>
    <Gap />
    <TextBox>
      <p>
        Comparing the <strong>risk of hospitalization</strong> in gatherings of
        people, vaccinated and non-vaccinated, we note that{" "}
        <strong>
          there is a big difference in favor of vaccinated people.
        </strong>{" "}
        For example, the risk of being hospitalized in a gathering of 1000
        attendees decreases from 63% for the non-vaccinated group to 4% for the
        vaccinated group. Comparing the{" "}
      </p>
    </TextBox>
  </>
);

export default RiskH;
