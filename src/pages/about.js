import React from "react"

import Layout from "../components/layout"
import Intro from "../components/about/intro"
import Insights from "../components/about/insights"
import Approach from "../components/about/approach"
import Data from "../components/about/data"
import Issues from "../components/about/issues"
import SEO from "../components/seo"

const aboutMetadata = {
  Title: "Investigating COVID-19's Global Evolution Factors",
  Keywords: [`covid analytics`,`predicta analytics`, `covid`, `predicta`],
  Description: "The findings and results of this project are considered worth of publicity and attention, as they may contribute to the wider global research, with the intention to better understand the situation",
  Image: "/predicta-icon.png",
  url:"https://www.predicta4covid.com/",
  titleTemplate:"Predicta"
}

const Index = (props) => {
  return (
    <Layout location={props.location}>
      <SEO 
        title={aboutMetadata.Title} 
        keywords={aboutMetadata.Keywords} 
        description={aboutMetadata.Description} 
        image={aboutMetadata.Image}
        url={aboutMetadata.url}
        titleTemplate={aboutMetadata.titleTemplate}
      />
      <div className="row">
        <div className="col">
          <Intro />
        </div>
      </div>
      <div className="row" style={{backgroundColor: ` rgba(234,234,234,1)`}}>
        <div className="col">
          <Insights />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Approach />
        </div>
      </div>
      <div className="row" style={{backgroundColor: `rgba(234,234,234,1)`}}>
        <div className="col">
          <Data />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Issues />
        </div>
      </div>
    </Layout>
  )
  
}


export default Index
