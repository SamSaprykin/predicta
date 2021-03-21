import React from "react"
import Layout from "../components/layout"
import DepthSoon from "../components/in-depth/DepthSoon"

const DepthLatinData = {
    image:"/depth-latin.png",
    title:"Latin America",
    navItems:["General Findings","Socio-Economic and Health Factors","Conclusion"]

}

const DepthLatinAmerica = () => (
    <Layout>
        <DepthSoon 
            image={DepthLatinData.image} 
            title={DepthLatinData.title}
            navItems={DepthLatinData.navItems}
        />
    </Layout>
)

export default DepthLatinAmerica