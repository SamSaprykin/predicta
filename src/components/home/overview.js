import React from "react";
import styled from "styled-components";
// import "./styles.css";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  grid-gap: 55px;
  align-self: center;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  align-self: center;
  justify-self: center;
  @media (max-width: 1440px) {
    max-width: 960px;
    grid-gap: 36px;
  }
  @media (max-width: 1024px) {
    max-width: 768px;
    grid-gap: 10px;
    padding: 0 32px;
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 470px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 220px;
  height: 220px;
  background-color: rgba(34, 43, 62, 1);
  border-radius: 100%;
  color: white;
  padding: 1.5rem;
  position: relative;
  align-self: center;
  justify-self: center;
  h3 {
    font-size: 26px;
    line-height: 38px;
    margin-bottom: 4px;
    @media (max-width: 1440px) {
      font-size: 28px;
      line-height: 32px;
    }
    @media (max-width: 1024px) {
      font-size: 26px;
      line-height: 30px;
    }
  }
  p {
    font-size: 18px;
    line-height: 38px;
    text-align: center;
    margin-bottom: 4px;
    @media (max-width: 1440px) {
      font-size: 16px;
      line-height: 32px;
    }
    @media (max-width: 1024px) {
      font-size: 12px;
      line-height: 24px;
    }
  }

  @media (max-width: 1440px) {
    padding: 0.5rem;
    width: 200px;
    height: 200px;
  }

  @media (max-width: 1024px) {
    padding: 1.5rem;
    width: 160px;
    height: 160px;
  }
`;

const GridB = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  grid-gap: 40px;
  width: auto;
  align-self: center;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  @media (max-width: 1440px) {
    max-width: 960px;
  }
  @media (max-width: 1024px) {
    max-width: 768px;
    grid-gap: 20px;
  }
  @media (max-width: 1024px) {
    padding: 0 32px;
  }
  @media (max-width: 470px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const GridC = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  grid-gap: 55px;
  width: 100%;
  max-width: 960px;
  align-self: center;
  margin-top: 55px;
  @media (max-width: 1440px) {
    max-width: 720px;
  }
  @media (max-width: 1024px) {
    max-width: 576px;
    grid-gap: 10px;
    padding: 0 32px;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    margin-top: 20px;
  }

  @media (max-width: 470px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const ItemB = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  position: relative;
  text-align: center;
  margin-top: 20px;
  h3 {
    color: #606060;
    margin-bottom: 3.5px;
    font-size: 26px;
    line-height: 38px;
    @media (max-width: 1440px) {
      font-size: 28px;
      line-height: 32px;
    }
    @media (max-width: 1024px) {
      font-size: 26px;
      line-height: 30px;
    }
  }
  p {
    letter-spacing: 0px;
    color: #222b3e;
    font-size: 26px;
    line-height: 38px;
    @media (max-width: 1440px) {
      font-size: 28px;
      line-height: 32px;
    }
    @media (max-width: 1024px) {
      font-size: 26px;
      line-height: 30px;
    }
  }
`;

const TitleSection = styled.h2`
  text-transform: capitalize;
  color: #222b3e;
  font-size: 32px;
  margin-bottom: 26px;
  line-height: 38px;
  @media (max-width: 1440px) {
    font-size: 28px;
    line-height: 32px;
  }
  @media (max-width: 1024px) {
    font-size: 26px;
    line-height: 30px;
  }
`;

const Gap = styled.div`
  display: block;
  height: 2rem;
`;

const GridBox = () => (
  <>
    <TitleSection id="#global">Global Overview</TitleSection>
    <GridB>
      <ItemB>
        <h3>First Day of Infection</h3>
        <p>01/12/2019</p>
      </ItemB>
      <ItemB>
        <h3>Countries</h3>
        <p>213</p>
      </ItemB>
      <ItemB>
        <h3>Global Population</h3>
        <p>7.672.512.111</p>
      </ItemB>
    </GridB>
    <Gap />
    <Grid>
      <Item>
        <h3>216.228.626</h3>
        <p style={{ color: `#fff` }}>Cases</p>
      </Item>
      <Item>
        <h3>28.183</h3>
        <p style={{ color: `#fff` }}>Cases per 1M Pop</p>
      </Item>
      <Item>
        <h3>4.373.186</h3>
        <p style={{ color: `#fff` }}>Deaths</p>
      </Item>
      <Item>
        <h3>570</h3>
        <p style={{ color: `#fff` }}>Deaths per 1M Pop</p>
      </Item>
      <Item>
        <h3>2,0%</h3>
        <p style={{ color: `#fff` }}>Mortality</p>
      </Item>
      <Item>
        <h3>96%</h3>
        <p style={{ color: `#fff` }}>Deaths with Underlying Conditions</p>
      </Item>
      <Item>
        <h3>90%</h3>
        <p style={{ color: `#fff` }}>Recovery</p>
      </Item>
      <Item>
        <h3>4,4%</h3>
        <p style={{ color: `#fff` }}>Positivity</p>
      </Item>
      <Item>
        <h3>14,0</h3>
        <p style={{ color: `#fff` }}>Estimated Real Cases Multiplier</p>
      </Item>
      <Item>
        <h3>29,3%</h3>
        <p style={{ color: `#fff` }}>Population Immunity</p>
      </Item>
      <Item>
        <h3>18,7%</h3>
        <p style={{ color: `#fff` }}>Estimated Excess Deaths due to Covid-19</p>
      </Item>
      <Item>
        <h3>41%</h3>
        <p style={{ color: `#fff` }}>Population Vaccinated</p>
      </Item>
    </Grid>
  </>
);

export default GridBox;
