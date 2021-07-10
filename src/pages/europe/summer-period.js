import React from "react"
//import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../../components/layout"
import NavbarSubLinks from "../../components/in-depth/navbarsub"
import ChartOne from "../../components/in-depth/europe/images/summerperiod/a.svg"
import ChartTwo from "../../components/in-depth/europe/images/summerperiod/b.svg"
import SEO from "../../components/seo"

const summerPeriodMetadata = {
  Title: "The Summer Period 2020 | Europe & the Covid-19 Pandemic",
  Keywords: [`covid analytics`, `predicta analytics`, `covid`, `predicta`],
  Description: "Most European countries demonstrated a significant decrease in both COVID-19 diagnosed cases and deaths.",
  Image: "/predicta-icon.png",
  url: "https://www.predicta4covid.com/",
  titleTemplate: "Predicta"
}


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
width:100%;
max-width: 800px;
margin: 0 auto;
@media (max-width:1440px) {
  max-width:600px;
}
@media (max-width: 1024px) {
  padding:0 32px;
}
p {
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

const Gap = styled.div`
height: 2rem;

  @media (max-width: 1024px) {
  
  }
`
const TitleSection = styled.h1`
  text-transform: uppercase;
  color: #222B3E;
  letter-spacing: 0px;
  font-size:32px;
  line-height:38px;
  margin-bottom:24px;
  @media (max-width: 1440px) {
    font-size:28px;
    line-height:32px;
  }
  @media (max-width: 1024px) {
    font-size:26px;
    line-height:30px;
  }
`
const SubTitle = styled.h2`
    color: #222B3E;
    font-weight:400;
    font-size:26px;
    line-height:38px;
    @media (max-width: 1440px) {
      font-size:24px;
      line-height:32px;
    }
    @media (max-width: 1024px) {
      font-size:22px;
      line-height:30px;
    }
`


const SummerPeriod = (props) => (
  <Layout location={props.location}>
    <SEO
      title={summerPeriodMetadata.Title}
      keywords={summerPeriodMetadata.Keywords}
      description={summerPeriodMetadata.Description}
      image={summerPeriodMetadata.Image}
      url={summerPeriodMetadata.url}
      titleTemplate={summerPeriodMetadata.titleTemplate}
    />
    <div className="row" id="first-section">
      <div className="col">

        <NavbarSubLinks />

        <TitleSection>SUMMER PERIOD (JUN ΤΟ AUG 2020) – TEMPERATURE EFFECT</TitleSection>
        <Grid>
          <Item>

          </Item>
        </Grid>


        <TextBox>
          <p>As already mentioned during the summer months following the first wave of the pandemic, most European countries demonstrated a significant decrease in both COVID-19 diagnosed cases and deaths.
<br /> <br /> The diagram below clearly presents this situation as most of the European countries fall in the quarter where cases per million and deaths per million are very low. On the other hand, we note that there is a group of countries that do not follow this pattern, mainly Balkan countries, which seem to enter the second wave towards the end of the summer.
</p>


        </TextBox>

      </div>
    </div>


    <div className="row" style={{
      backgroundColor: `rgba(234,234,234,1)`
    }}>
      <div className="col">



        <SubTitle
          style={{
            fontWeight: `normal`
          }}
        >Cases per 1M vs Deaths per 1M (Jun-Aug)</SubTitle>

        <Grid>
          <Item>
            <ChartOne />
            <Gap />
          </Item>
        </Grid>



      </div>
    </div>

    <div className="row">
      <div className="col">






        <TextBox>
          <p>It is evident that the level of temperature influences the pandemic, as higher temperatures during the summer months decreased the number of incidents of COVID-19 and therefore almost minimized death per million indices.  </p>
        </TextBox>

        <SubTitle
          style={{
            fontWeight: `normal`
          }}
        >Temperature vs Deaths per 1M</SubTitle>


        <Grid>
          <Item>
            <ChartTwo />
            <Gap />
          </Item>
        </Grid>


        <TextBox>
          <p>
            We also note that in both waves (first and second wave) the Deaths per Million index increases
            from 15 degrees Celsius onwards. Having said that, the mobility indexes graph we saw in previous
            section highlights the increased mobility in the parks during summer months, which may provide
            an additional explanation for the decrease in Deaths per Million during the summer period.
          </p>
        </TextBox>

      </div>
    </div>




  </Layout>
)

export default SummerPeriod