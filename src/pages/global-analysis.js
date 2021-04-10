import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import Intro from "../components/global/intro"
import GlobalStats from "../components/global/globalstatistics"
import Metrics from "../components/global/metrics"
import Ranking from "../components/global/ranking"
import RankingOne from "../components/global/ranking-1"
import RankingTwo from "../components/global/ranking-2"
import GeoAnalysis from "../components/global/geographical"
import Regional from "../components/global/regional"
import Demographics from "../components/global/demographics"
import SEO from "../components/seo"


const globalAnalysisMetadata = {
  Title: "A Global Analysis of the Covid-19 Pandemic",
  Keywords: [`covid analytics`,`predicta analytics`, `covid`, `predicta`],
  Description: "Data and information regarding the evolution of the Covid-19 pandemic. globally, from December 2019 up to November 2020. Data includes monthly evolution of cases on a country level, positivity rates, mortality rates and more",
  Image: "/predicta-icon.png",
  url:"https://www.predicta4covid.com/",
  titleTemplate:"Predicta"
}

const Global = (props) => (
  <Layout location={props.location}>
    <SEO 
        title={globalAnalysisMetadata.Title} 
        keywords={globalAnalysisMetadata.Keywords} 
        description={globalAnalysisMetadata.Description} 
        image={globalAnalysisMetadata.Image}
        url={globalAnalysisMetadata.url}
        titleTemplate={globalAnalysisMetadata.titleTemplate}
    />
    <div className="row" id="first-section">
    <div className="col">
      <Intro/>
    </div>
</div>
<div className="row" style={{
        backgroundColor: ` rgba(234,234,234,1)`
      }}>
    <div className="col">
      <GlobalStats/>
    </div>
    </div>
    <div className="row">
    <div className="col">
      <Metrics/>
    </div>
</div>
<div className="row" style={{
        backgroundColor: ` rgba(234,234,234,1)`
      }}>
  <div className="col">
    <RankingOne/>
  </div>
</div>
<div className="row" style={{backgroundColor: ` rgba(255,255,255,1)`}}>
  <div className="col">
    <RankingTwo/>
  </div>
</div> 

    <div className="row" style={{
        backgroundColor: ` rgba(234,234,234,1)`
      }}>
    <div className="col">
      <GeoAnalysis/>
    </div>
    </div>
    <div className="row" style={{
        backgroundColor: ` rgba(255,255,255,1)`
      }}>
    <div className="col">
      <Regional/>
    </div>
    </div>
    <div className="row">
    <div className="col">
      <Demographics/>
    </div>
    </div>

  </Layout>
)

export default Global


/*

*/