import React from "react"
import Layout from "../components/layout"
import Intro from "../components/home/intro"
import Cases from "../components/home/cases"
import GridBox from "../components/home/overview"
import Age from "../components/home/age"
import Gender from "../components/home/gender"
import MedianBox from "../components/home/median-age-gender"
import Ratios from "../components/home/ratios"
import SEO from "../components/seo"


const indexMetadata = {
  Title: "Predicta",
  Keywords: [`covid analytics`,`predicta analytics`, `covid`, `predicta`],
  Description: "Analytics for Decision Making, is a leading provider of Predictive Analytics Solutions.",
  Image: "/predicta-icon.png",
  url:"https://www.predicta4covid.com/",
  titleTemplate:"Predicta"
}

const Index = (props) => (
 
  <Layout location={props.location}>
     <SEO 
      title={indexMetadata.Title} 
      keywords={indexMetadata.Keywords} 
      description={indexMetadata.Description} 
      image={indexMetadata.Image}
      url={indexMetadata.url}
      titleTemplate={indexMetadata.titleTemplate}
    />
    <div className="row" id="first-section">
      <div className="col">
        <Intro/>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <Cases/>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <GridBox/>
      </div>
    </div>
    <div className="row" style={{backgroundColor: ` rgba(234,234,234,1)`}}>
      <div className="col">
        <Age/>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <Gender/>
      </div>
    </div>
    <div className="row" style={{backgroundColor: ` rgba(234,234,234,1)`}}>
      <div className="col">
        <MedianBox/>
       </div>
    </div>
    <div className="row">
      <div className="col">
        <Ratios/>
      </div>
    </div>

  </Layout>
)

export default Index
