import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import Intro from "../components/about/intro"
import Insights from "../components/about/insights"
import Approach from "../components/about/approach"
import Data from "../components/about/data"
import Issues from "../components/about/issues"
//import Image from "../components/image"
//import SEO from "../components/seo"

const Index = (props) => {
  console.log(props)
  return (
    <Layout location={props.location}>
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
