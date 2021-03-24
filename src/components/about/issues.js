import React from "react";
import styled from "styled-components"

const TextBox = styled.div`
display: flex;
justify-content: left;
flex-direction: column;
width: 100%;
margin: 0 auto;
max-width: 1085px;
@media (max-width:1440px) {
  max-width:800px;
}
@media (max-width: 1024px) {
  width: 100%;
  padding:0 32px;
}
h4 {
  font-family:IBM Plex Sans;
  font-size:24px;
  line-height:44px;
  color: #222B3E;
}
p {
  color: #222B3E;
  font-size: 24px;
  line-height: 44px;
  margin-bottom: 0;
  @media (max-width:1440px) {
    font-size:19.20px;
    line-height:35.20px;
  }
}
`



const TitleSection = styled.h1`
  text-transform: uppercase;
  color: #222B3E;
  letter-spacing: 0px;
  font-size:42px;
  line-height:1.1;
  margin-bottom:60px;
  
  @media (max-width: 1024px) {
    font-size:42px;
    line-height:48px;
    margin-bottom:32px;
  }
`

const Issues = () => (
  <>

    <TitleSection id='issues'>Data Issues</TitleSection>
    <TextBox>
      <h4>Infection Data Recording</h4>
      <p>Asynchronous data recording &#40;data reported at a specific date refer to previous dates&#41; - No common data reporting strategy by source - Non consistent recording of cases/deaths &#40;in hospital recording vs out of hospital&#41;.</p>
      <h4>Testing Strategy</h4>
      <p>Testing strategy varies by country and additionally is constantly changing, leading to under/overestimation of incidents and mortality. Rapid COVID-19 tests with limited accuracy leading to underestimation of real cases. Very few countries trace and test infected cases' contacts. Some countries report the total number of tests performed, while others report the number of individuals tested, as it is common that the same person is tested more than once.</p>
      <h4>Reliability / Data Availability</h4>
      <p>A lot of countries do not publish detailed info of certain groups of data (e.g. demographics, hospitalizations). Developing countries provide limited information and suspicious numbers that cannot be trusted.</p>
      <h4>Geographical / Population / Cultural Characteristics</h4>
      <p>Regional differentiations within a country were not taken into account as relevant data cannot be accessed easily. The level of countries' exposure to the global community was difficult to be taken into account.</p>
    </TextBox>
</>
)


export default Issues