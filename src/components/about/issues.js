import React from "react";
import styled from "styled-components"


// const Title = styled.div`
// margin-bottom: 3rem;

// @media (max-width: 1024px) {
//     padding: 20px 0;
//     font-size: 1.5rem;
//     z-index: 6;
//   }
// `

const TextBox = styled.div`
display: flex;
justify-content: left;
flex-direction: column;
width: 800px;
margin: 0 auto;


@media (max-width: 1024px) {
  width: 80%

}
`

const Gap = styled.div`
height: 1rem;

  @media (max-width: 1024px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
`

const Issues = () => (
  <>

     <h1 id='issues'>Data Issues</h1>

     <Gap/>
 
    <TextBox>
    <h4>Infection Data Recording</h4>

<p>Asynchronous data recording &#40; data reported at a specific date refer to previous dates &#41; - No common data reporting strategy by source - Non consistent recording of cases/deaths &#40;in hospital recording vs out of hospital&#41;.</p>

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