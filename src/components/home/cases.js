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
    max-width: 600px; 
  }
  @media (max-width: 600px) {
    max-width: 300px;
  }
`

const Gap = styled.div`
display: block;
height: 2rem;
`;

// const Title = styled.div`

// margin-bottom: 3rem;

// @media (max-width: 1024px) {
//     padding: 20px 0;
//     font-size: 1.5rem;
//     z-index: 6;
//   }
// `

const Cases = () => (
<>
  <h1 id ='#map' style={{textTransform: `capitalize`}}>Cases per 1M Pop (end Nov. 2020)</h1>
  <Gap />


    <ImageBox>
      <Map alt="Main Map" />
    </ImageBox>
  </>
)

export default Cases