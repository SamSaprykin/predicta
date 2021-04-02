import React from "react"
import Layout from "../../components/layout"
import DepthSoon from "../../components/in-depth/DepthSoon"
import {
    PredictaTextWrapper,
    PredictaTitle,
    PredictaText,
} from "../../components/BlockElements/BlockElements";
const DepthLatinData = {
    image:"/depth-latin.png",
    title:"Latin America",
    navItems:[
        {
            title:"General Findings",
            linkTo:"/latin-america/general-findings"
        },
        {
            title:"Socio-Economic and Health Factors",
            linkTo:"/latin-america/socio-economic-and-healts-factors"
        },
        {
            title:"Conclusion",
            linkTo:"/latin-america/conclusion"
        }
    ]
}

const Conclusion = (props) => (
    <Layout location={props.location}>
        <DepthSoon  
            title={DepthLatinData.title}
            navItems={DepthLatinData.navItems}
        />
        <PredictaTitle marginBottom="80px" marginTop="120px">
            CONCLUSION
        </PredictaTitle>
        <PredictaTextWrapper >
            <PredictaText marginBottom="120px">
                The Latin American countries poverty level combined with the rest of the socioeconomic and 
                health characteristics discussed, lead to unsurpassed difficulties to contain the pandemic 
                in this region of the world with continuous disastrous results from June 2020 onwards.
            </PredictaText>
        </PredictaTextWrapper>
    </Layout>
)

export default Conclusion