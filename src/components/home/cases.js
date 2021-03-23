import React from "react"
import styled from "styled-components"
import Map from "./images/map.svg"


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
`
const TitleSection = styled.h2`
  text-transform: capitalize;
  color: #222B3E;
  letter-spacing: 0px;
  font-size:42px;
  line-height:1.1;
  margin-bottom:80px;
  @media (max-width: 1024px) {
    font-size:42px;
    line-height:48px;
    margin-bottom:40px;
  }
`



const Cases = () => (
<>
  <TitleSection id ='#map'>Cases per 1M Pop (end Nov. 2020)</TitleSection>
    <ImageBox>
      <Map alt="Main Map" />
    </ImageBox>
  </>
)

export default Cases