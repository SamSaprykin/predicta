import React from "react"
//import { Link } from "gatsby"
import styled from "styled-components"


const IntroBox = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width:100%;
max-width: 1280px;
margin: 0 auto;
@media (max-width:1440px) {
  max-width:1080px;
}
@media (max-width: 1280px) {
  padding:0 32px;
}
@media (max-width: 1024px) {
  width: 100%;
  padding:0 32px;
}
@media (max-width:768px) {
  padding-top:60px;
}
`

const Gap = styled.div`
height: 2rem;

  `

const Intro = () => (
  <>
  <IntroBox>
     <h1>Technology</h1>

<Gap/>
  
    <p>Retrieving and organizing the available data from a considerable number of sources (listed in detail in the ‘ABOUT’ section of this micro site), was a challenging task that could not have been accomplished successfully and promptly without the appropriate technological tools. Further to that, the statistical analysis of the data and the reporting of finding and results, demanded a wide range of user-friendly analytics capabilities. Last, but not least, the need to continuously update the created COVID-19 Master File as more data become available and the consequent need to update the analysis and findings, required an end - to - end analytics technological platform, which can support all the steps of the adopted methodology.</p>
    </IntroBox>



</>
  
)

export default Intro