import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import Intro from "../components/advanced-statistics/intro"
import RiskA from "../components/advanced-statistics/risk-analysis-a"
import RiskB from "../components/advanced-statistics/risk-analysis-b"
import RiskC from "../components/advanced-statistics/risk-analysis-c"
import RiskD from "../components/advanced-statistics/risk-analysis-d"
import RiskE from "../components/advanced-statistics/risk-analysis-e"
import RiskF from "../components/advanced-statistics/risk-analysis-f"
//import SEO from "../components/seo"

const Index = (props) => (
  <Layout location={props.location}>
    <div className="row"  id="first-section">
      <div className="col">
        <Intro />
      </div>
    </div>
    <div className="row" style={{backgroundColor: ` rgba(234,234,234,1)`}}>
      <div className="col">
        <RiskA />
      </div>
    </div>
    <div className="row">
      <div className="col">
      <RiskB />
      </div>
    </div>
    <div className="row" style={{backgroundColor: ` rgba(234,234,234,1)`}}>
      <div className="col">
        <RiskC />
      </div>
    </div>
    <div className="row">
      <div className="col">
        <RiskD />
      </div>
    </div>
    <div className="row" style={{backgroundColor: ` rgba(234,234,234,1)`}}>
      <div className="col">
        <RiskE />
      </div>
    </div>
    <div className="row">
      <div className="col">
        <RiskF />
      </div>
    </div>
  </Layout>
)

export default Index
