import React from "react";
import styled from "styled-components"
import CasesGender from "./images/gender-cases.svg";
import DeathsGender from "./images/gender-deaths.svg";
import MortalityGender from "./images/gender-mortality.svg";
import Divider from "./images/divider.svg";


const FlexCont = styled.div`
  display: flex;
  max-width: 1200px;
  align-self: center;
  @media (max-width: 1024px) {
    grid-gap: 50px;
    padding:0 32px;
  }
  
  @media (max-width: 768px) {
    grid-gap: 0px;
  }
  @media (max-width: 470px) {
    padding:0 24px;
  }
  h2 {
    @media (max-width: 1024px) {
      margin-bottom: 2rem;
      font-size: .6rem;   
    }
    @media (max-width: 768px) {
      margin-bottom: 0;
      font-size:24px;
    }
    @media (max-width: 470px) {
      font-size:20px;
    }
  }
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  width:33%;
  padding: .1rem;
  & :nth-child(even) {
    max-width: 200px;
    @media (max-width: 1024px) {
      max-width: 100px;
    }
    @media (max-width: 470px) {
      max-width: 30px;
    }
  }
  @media (max-width: 1024px) {
    grid-gap: 50px;
    max-width: 200px;
  }
  @media (max-width: 768px) {
    grid-gap: 0px;
  }
`;

const Title = styled.div`
margin-bottom: 3rem;
color: #222B3E


`

const Gender = () => (
  <>
  <FlexCont>
    <Item>
      <Title>
        <h2>Cases by Gender</h2>
      </Title>
      <CasesGender/>
    </Item>
    <Item>
      <Divider/>
    </Item>
    <Item> 
      <Title>
        <h2>Deaths by Gender</h2>
      </Title>
      <DeathsGender/>
    </Item>
    <Item>
      <Divider/>
    </Item>
    <Item> 
      <Title>
        <h2>Mortality Rate by Gender</h2>
      </Title>
    <MortalityGender/>
    </Item>
  </FlexCont>
    
</>
  );


export default Gender