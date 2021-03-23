import React from "react"
import styled from "styled-components"
import Layout from "../../components/layout"



const TextBox = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 800px;
height: 400px;
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

const StatTests = () => (
    <Layout>

<div className="row">
    <div className="col">
    <h1>Statistical Tests</h1>
    </div>
</div>

<TextBox>
      
     
<h2>Coming Soon..</h2>
     <Gap/>

</TextBox>

</Layout>
)

export default StatTests