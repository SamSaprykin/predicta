import React from "react";
import styled from "styled-components"

import Technology from "./images/technology.svg"


const ImageBox = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 800px;
margin: 0 auto;

@media (max-width: 1024px) {
  width: 80%

}
`

const TextBox = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 800px;
margin: 0 auto;

@media (max-width: 1024px) {
  width: 80%

}
`

const Gap = styled.div`
display: block;
height: 2rem;
`;


const Tech = () => (
  <>

<ImageBox>
    <Technology /> 
    </ImageBox>
    <Gap />
<TextBox>
    <p>IBM SPSS MODELER is an extensive data mining & predictive analytics platform that is designed to integrate predictive intelligence into decisions made by individuals, groups, systems and the enterprise. By providing a range of advanced algorithms and techniques that include text analytics, entity analytics, decision management and optimization, IBM SPSS MODELER helps you consistently to make the right decisions, from the desktop or within operational systems.</p>
    <p>As, IBM SPSS MODELER also interacts with exceptional efficiency with R and PYTHON software languages, a fact that expands the available analytical capabilities in an unlimited fashion, made possible the successful implementation of the presented project.</p>

    </TextBox>
    </>
  );


export default Tech