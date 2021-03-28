import React from "react"
import Layout from "../components/layout"
import DepthSoon from "../components/in-depth/DepthSoon"

const DepthGreeceData = {
    image:"/depth-greece.png",
    title: "Greece",
    navItems:[
        {
            title:"General Findings",
            linkTo:"/"
        },
        {
            title:"Health Facilities & Deaths",
            linkTo:"/"
        },
        {
            title:"Measures & Mobility",
            linkTo:"/"
        },
        {
            title:"The Success During The First Wave",
            linkTo:"/"
        },
        {
            title:"A Quick Comparison",
            linkTo:"/"
        },
        {
            title:"Demographics",
            linkTo:"/"
        },
        {
            title:"Conclusion",
            linkTo:"/"
        }
    ]
}
const DepthGreece = () => (
    <Layout>
        <DepthSoon 
            image={DepthGreeceData.image} 
            title={DepthGreeceData.title}
            navItems={DepthGreeceData.navItems}
        />
    </Layout>
)

export default DepthGreece