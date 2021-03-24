import React from "react";
import styled from "styled-components"
import CasesGender from "./images/gender-cases.svg";
import DeathsGender from "./images/gender-deaths.svg";
import MortalityGender from "./images/gender-mortality.svg";



const FlexCont = styled.div`
  display: flex;
  max-width: 1280px;
  width:100%;
  align-self: center;
  justify-content:space-between;
  align-items:center;
  @media (max-width: 1440px) {
    max-width: 1080px;
  }
  @media (max-width: 1024px) {
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
      font-size: 22px;   
    }
    @media (max-width: 768px) {
      margin-bottom: 0;
    }
    @media (max-width: 470px) {
      font-size:20px;
    }
  }
  .bit-item {
    width:33%;
    margin-bottom:1rem;
    h2 {
      margin-bottom:2.5rem;
    }
  }
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  width:23%;
  padding: .1rem;

  @media (max-width: 1024px) {
    max-width: 200px;
  }
  @media (max-width: 768px) {
    grid-gap: 0px;
  }
`;

const Title = styled.div`
margin-bottom: 3rem;
color: #222B3E;
@media (max-width: 1024px) {
  margin-bottom: 1rem;
}
`

const Divider = styled.div`
  width:4px;
  height:300px;
  background-color:black;
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
    <Divider />
    <Item> 
      <Title>
        <h2>Deaths by Gender</h2>
      </Title>
      <DeathsGender/>
    </Item>
    <Divider />
    <Item className="bit-item"> 
      <Title>
        <h2>Mortality Rate by Gender</h2>
      </Title>
    <MortalityGender/>
    </Item>
  </FlexCont>
    
</>
  );


export default Gender