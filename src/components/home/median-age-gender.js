import React from "react";
import styled from "styled-components"
import Median from "./images/median-age.svg";


const ImageBox = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 100%;
max-width: 960px;
margin: 0 auto;

svg {
  max-width: 100%;
  height: auto;
}
@media (max-width: 1440px) {
  max-width: 720px;
}
@media (max-width: 1024px) {
  max-width: 768px; 
}
@media (max-width: 768px) {
  padding:0 32px;
}
`

const TitleSection = styled.h2`
  text-transform: capitalize;
  color: #222B3E;
  font-size:32px;
  line-height:38px;
  @media (max-width: 1440px) {
    font-size:28px;
    line-height:32px;
  }
  @media (max-width: 1024px) {
    font-size:26px;
    line-height:30px;
  }
  @media (max-width:768px) {
    padding:0 32px;
  }
`

const Gap = styled.div`
display: block;
height: 2rem;
`;

const MedianBox = () => (
  <>
    <TitleSection id=''>Median Age by Gender - (Cases & Deaths)</TitleSection>
    <Gap />
    <ImageBox>
      <Median />
    </ImageBox>
  </>
);


export default MedianBox