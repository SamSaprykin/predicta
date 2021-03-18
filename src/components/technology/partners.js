import React from "react";
import styled from "styled-components"

//import LogoOne from "./images/predicta-logo.svg"
//import LogoTwo from "./images/spss-logo.svg"
//import LogoThree from "./images/python-logo.svg"
//import LogoFour from "./images/r-logo.svg"
//import LogoThree from "./images/python-logo.svg"
import LogoStrip from "./images/logo-strip.svg"



const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: auto;
  grid-gap: 0rem;
  align-self: center;
  justify-content:center;

  @media (max-width: 1024px) {

  grid-template-columns: repeat(2, 1fr);
 
  
  }
`;



const Item = styled.div`
display: flex;

flex-direction: column;
align-items: center;
background-color: transparent;

`;


// const TextBox = styled.div`
// display: flex;
// justify-content: center;
// align-items: center;
// flex-direction: column;
// width: 800px;
// margin: 0 auto;

// @media (max-width: 1024px) {
//   width: 80%

// }
// `

// const Gap = styled.div`
// display: block;
// height: 2rem;
// `;

// const Title = styled.div`
// margin-bottom: 3rem;

// @media (max-width: 1024px) {
//     padding: 20px 0;
//     font-size: 1.5rem;
//     z-index: 6;
//   }
// `

const Partners = () => (
  <>



      <Grid>

        <Item>

        <LogoStrip />


</Item>


      </Grid>
    
</>
  );


export default Partners