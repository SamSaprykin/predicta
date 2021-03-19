import React from "react";
import styled from "styled-components"
import Median from "./images/median-age-gender.svg";


const ImageBox = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 100%;
max-width: 1200px;
margin: 0 auto;
  @media (max-width: 1280px) {
    padding:0 32px;
  }
  @media (max-width: 1024px) {
    max-width: 800px; 
  }
  @media (max-width: 768px) {
    padding:0 48px;
  }
  @media (max-width: 600px) {
    max-width: 500px;
  }
  @media (max-width: 470px) {
    padding:0 24px;
  }
`

const TitleSection = styled.h2`
  text-transform: capitalize;
  color: #222B3E;
  letter-spacing: 0px;
  font-size:50px;
  line-height:60px;
  margin-bottom:26px;
  @media (max-width: 1024px) {
    font-size:42px;
    line-height:48px;
  }
`

const Gap = styled.div`
display: block;
height: 2rem;
`;

const MedianBox = () => (
  <>
    <TitleSection id =''>Median Age by Gender - (Cases & Deaths)</TitleSection>
    <Gap />
    <ImageBox>
      <Median />
    </ImageBox>
  </>
);


export default MedianBox