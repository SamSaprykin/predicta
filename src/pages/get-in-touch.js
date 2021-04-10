import React from "react"
//import { Link } from "gatsby"
import Intro from "../components/get-in-touch/intro"

import Layout from "../components/layout"
import SEO from "../components/seo"

const getInTouchMetadata = {
  Title: "Get in Touch | Predicta S.A.",
  Keywords: [`covid analytics`,`predicta analytics`, `covid`, `predicta`],
  Description: "Contact us for exchanging ideas or additional information. PREDICTA’s team has successfully championed advanced analytics for 35 years. Applying statistics, data mining and machine learning techniques they uncover hidden information for better predictions and decision making",
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
