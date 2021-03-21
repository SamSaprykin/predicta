import React from "react"
import Layout from "../components/layout"
import DepthSoon from "../components/in-depth/DepthSoon"

const DepthGreeceData = {
    image:"/depth-greece.png",
    title: "Greece",
    navItems: [
        "General Findings","Health Facilities & Deaths","Measures & Mobility","The Success During The First Wave","A Quick Comparison","Demographics","Conclusion",
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