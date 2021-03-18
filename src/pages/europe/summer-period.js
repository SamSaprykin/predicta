import React from "react"
//import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../../components/layout"
import NavbarSubLinks from "../../components/in-depth/navbarsub"
import ChartOne from "../../components/in-depth/europe/images/summerperiod/a.svg"
import ChartTwo from "../../components/in-depth/europe/images/summerperiod/b.svg"



const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: auto;
  grid-gap: 2rem;
  align-self: center;
  justify-content: center;
`;

const Item = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 800px;
margin: 0 auto;

@media (max-width: 1280px) {
  width: 600px;
  }
  @media (max-width: 600px) {
    width: 300px;
    }
`

const TextBox = styled.div`
display: flex;
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


const SummerPeriod = () => (
    <Layout>

<div className="row">
    <div className="col">

    <NavbarSubLinks />
      
     <h1>SUMMER PERIOD (JUN ΤΟ AUG 2020)</h1>

     <Gap/>

     <Grid>
  <Item>

<Gap />
</Item>
</Grid>
  

<TextBox>
    <p>As already mentioned during the summer months following the first wave of the pandemic, most European countries demonstrated a significant decrease in both COVID-19 diagnosed cases and deaths.
The diagram below clearly presents this situation as most of the European countries fall in the quarter where cases per million and deaths per million are very low. On the other hand, we note that there is a group of countries that do not follow this pattern, mainly Balkan countries, which seem to enter the second wave towards the end of the summer.
</p>


    </TextBox>

    </div>
    </div>


    <div className="row" style={{
        backgroundColor: `rgba(234,234,234,1)`
      }}>
    <div className="col">



    <h2
      style={{
        fontWeight: `normal`
      }}
    >Cases per 1M vs Deaths per 1M (Jun-Aug)</h2>

<Grid>
  <Item>
<ChartOne />
<Gap />
</Item>
</Grid>

{/* <TextBox>
<p>The first wave of the pandemic (Feb-May 2020) was quite difficult, with a stable and controllable summer period, followed by a much more aggressive second wave, especially from October 2020 onwards. It is interesting to examine the differentiation by region of this general trend. The graph below, of deaths per million of population, demonstrates the outlined differences..</p>
</TextBox> */}

      </div>
    </div>

    <div className="row">
    <div className="col">



    


<TextBox>
<p>It is evident that the level of temperature influences the pandemic, as higher temperatures during the summer months decreased the number of incidents of COVID-19 and therefore almost minimized death per million indices.  </p>
</TextBox>

<h2
      style={{
        fontWeight: `normal`
      }}
    >Temperature vs Deaths per 1M</h2>


<Grid>
  <Item>
<ChartTwo />
<Gap />
</Item>
</Grid>


<TextBox>
<p>We also note that in both waves (first and second wave) the deaths per million index increases from 15 degrees Celsius onwards. 
Having said that, the mobility indexes graph we saw in previous section highlights the increased mobility in the parks during summer months, which may provide an additional explanation for the decrease in deaths per million during the summer period.

</p>
</TextBox>

      </div>
    </div>




</Layout>
)

export default SummerPeriod