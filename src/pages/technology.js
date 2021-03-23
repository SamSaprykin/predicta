import React from "react"


import Layout from "../components/layout"
import Intro from "../components/technology/intro"
import Tech from "../components/technology/technology"

import Partners from "../components/technology/partners"


const Technology = (props) => (
  <Layout location={props.location}>
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