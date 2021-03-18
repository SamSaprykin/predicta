import React from "react"
//import { Link } from "gatsby"
import styled from "styled-components"


const IntroBox = styled.div`
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
height: 2rem;

  @media (max-width: 1024px) {
  
  }
  `

const Intro = () => (
  <>
  <IntroBox>
     <h1>Technology</h1>

<Gap/>
  
    <p>Retrieving and organizing the available data from a considerable number of sources (listed in detail in the ‘ABOUT’ section of this micro site), was a challenging task that could not have been accomplished successfully and promptly without the appropriate technological tools. Further to that, the statistical analysis of the data and the reporting of finding and results, demanded a wide range of user-friendly analytics capabilities. Last, but not least, the need to continuously update the created COVID-19 Master File as more data become available and the consequent need to update the analysis and findings, required an end - to - end analytics technological platform, which can support all the steps of the adopted methodology.</p>
    
    {/* <Link to="/">Go back to the homepage</Link> */}

    </IntroBox>



</>
  
)

export default Intro