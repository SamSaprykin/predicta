import React from "react"


import Layout from "../components/layout"
import Intro from "../components/technology/intro"
import Tech from "../components/technology/technology"

import Partners from "../components/technology/partners"
import SEO from "../components/seo"


const technologyMetadata = {
  Title: "Predicta",
  Keywords: [`covid analytics`,`predicta analytics`, `covid`, `predicta`],
  Description: "Analytics for Decision Making, is a leading provider of Predictive Analytics Solutions.",
  Image: "/predicta-icon.png",
  url:"https://www.predicta4covid.com/",
  titleTemplate:"Predicta"
}

const Technology = (props) => (
  <Layout location={props.location}>
    <SEO 
      title={technologyMetadata.Title} 
      keywords={technologyMetadata.Keywords} 
      description={technologyMetadata.Description} 
      image={technologyMetadata.Image}
      url={technologyMetadata.url}
      titleTemplate={technologyMetadata.titleTemplate}
    />
  <div className="row" id="first-section">
    <div className="col">
        <Intro/>
    </div>
  </div>
  <div className="row" style={{backgroundColor: ` rgba(234,234,234,1)`}}>
    <div className="col">
        <Tech/>
    </div>
  </div>
  <div className="row">
    <div className="col">
      <Partners/>
    </div>
  </div>

  </Layout>
)

export default Technology