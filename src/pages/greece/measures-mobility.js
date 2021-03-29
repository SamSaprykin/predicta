import React from "react"
import Layout from "../../components/layout"
import DepthSoon from "../../components/in-depth/DepthSoon"
import {
    PredictaTextWrapper,
    PredictaTitle,
    PredictaText,
} from "../../components/BlockElements/BlockElements";

const DepthGreeceData = {
    title: "Greece",
    navItems:[
        {
            title:"General Findings",
            linkTo:"/greece/general-findings"
        },
        {
            title:"Health Facilities & Deaths",
            linkTo:"/greece/health-facilities-deaths"
        },
        {
            title:"Measures & Mobility",
            linkTo:"/greece/measures-mobility"
        },
        {
            title:"The Success During The First Wave",
            linkTo:"/greece/success-during-the-first-wave"
        },
        {
            title:"A Quick Comparison",
            linkTo:"/greece/a-quick-comparison"
        },
        {
            title:"Demographics",
            linkTo:"/greece/demographics"
        },
        {
            title:"Conclusion",
            linkTo:"/greece/conclusion"
        }
    ]
}
const MeasuresMobility = (props) => (
    <Layout location={props.location}>
        <DepthSoon 
            title={DepthGreeceData.title}
            navItems={DepthGreeceData.navItems}
        />
        <PredictaTitle marginBottom="80px" marginTop="120px">
            MEASURES &amp; MOBILITY
        </PredictaTitle>
        <PredictaTextWrapper >
            <PredictaText marginBottom="120px">
                The pandemic evolution in Greece can be further analyzed and explained, examining government 
                preventive policies and their effect on citizens behavior and compliance. <br /> <br />
                The graphs below 
                demonstrate how the government preventive measures influence the population mobility, 
                which consequently affected the virus spread through time.
            </PredictaText>
        </PredictaTextWrapper>
    </Layout>
)

export default MeasuresMobility
