import React from "react"
//import { Link } from "gatsby"
import styled from "styled-components"


const IntroBox = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width:100%;
margin: 0 auto;
max-width: 800px;

@media (max-width: 1440px) {
  max-width: 600px;
}

@media (max-width: 1024px) {
  max-width: 600px;
  padding:0 32px;
}
@media (max-width:768px) {
  padding-top:60px;
}
h1 {
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
}
p {
  letter-spacing: 0px;
  color: #606060;
  font-size:18px;
  line-height:38px;
  @media (max-width: 1440px) {
    font-size:16px;
    line-height:32px;
  }
  @media (max-width: 1024px) {
    font-size:15px;
    line-height:30px;
  }
}
`



const Intro = () => (
<>
  <IntroBox>
     <h1>Technology</h1>
     <p>Retrieving and organizing the available data from a considerable number of sources (listed in detail in the ‘ABOUT’ section of this micro site), was a challenging task that could not have been accomplished successfully and promptly without the appropriate technological tools. Further to that, the statistical analysis of the data and the reporting of findings and results, demanded a wide range of user-friendly analytics capabilities. Last, but not least, the need to continuously update the created COVID-19 Master File as more data become available and the consequent need to update the analysis and findings, required an end - to - end analytics technological platform, which can support all the steps of the adopted methodology.</p>
  </IntroBox>
</>
  
)

export default Intro
