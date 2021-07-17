import React from "react"
import styled from "styled-components"
import WorldMap from "./images/world-map.svg"


const ImageBox = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 100%;
max-width: 1280px;
margin: 0 auto;

svg {
  max-width: 100%;
  height: auto;
}
@media (max-width: 1440px) {
  max-width:960px;
}
@media (max-width: 1024px) {
  max-width: 768px; 
}
@media (max-width: 1024px) {
  padding:0 32px; 
}

`
const TitleSection = styled.h2`
  text-transform: capitalize;
  color: #222B3E;
  letter-spacing: 0px;
  font-size:32px;
  line-height:38px;
  margin-bottom:80px;
  @media (max-width: 1440px) {
    font-size:28px;
  }
  @media (max-width: 1024px) {
    font-size:26px;
  }
  
`



const Cases = () => (
  <>
    <TitleSection id='#map'>Cases per 1M Pop (End of May 2021)</TitleSection>
    <ImageBox>
      <WorldMap alt="New Map" />
    </ImageBox>
  </>
)

export default Cases