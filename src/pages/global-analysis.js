import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import Intro from "../components/global/intro"
import GlobalStats from "../components/global/globalstatistics"
import Metrics from "../components/global/metrics"
import Ranking from "../components/global/ranking"
import GeoAnalysis from "../components/global/geographical"
import Regional from "../components/global/regional"
import Demographics from "../components/global/demographics"
//import Image from "../components/image"
//import SEO from "../components/seo"

const Global = () => (
  <Layout>
    <div className="row">
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
<div className="col">
  <Ranking/>
</div>
*/