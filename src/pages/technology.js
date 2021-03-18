import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import Intro from "../components/technology/intro"
import Tech from "../components/technology/technology"

import Partners from "../components/technology/partners"
//import Image from "../components/image"
//import SEO from "../components/seo"

const Technology = () => (
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