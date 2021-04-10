import React from "react"
//import { Link } from "gatsby"
import Intro from "../components/get-in-touch/intro"

import Layout from "../components/layout"
import SEO from "../components/seo"

const getInTouchMetadata = {
  Title: "Predicta",
  Keywords: [`covid analytics`,`predicta analytics`, `covid`, `predicta`],
  Description: "Analytics for Decision Making, is a leading provider of Predictive Analytics Solutions.",
  Image: "/predicta-icon.png",
  url:"https://www.predicta4covid.com/",
  titleTemplate:"Predicta"
}

const SecondPage = () => (
  <Layout>
    <SEO 
        title={getInTouchMetadata.Title} 
        keywords={getInTouchMetadata.Keywords} 
        description={getInTouchMetadata.Description} 
        image={getInTouchMetadata.Image}
        url={getInTouchMetadata.url}
        titleTemplate={getInTouchMetadata.titleTemplate}
      />
    <div className="row">
      <div className="col">
        <Intro/>
      </div>
    </div>
</Layout>
)

export default SecondPage
