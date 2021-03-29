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
const Conclusion = (props) => (
    <Layout>
        <DepthSoon 
            title={DepthGreeceData.title}
            navItems={DepthGreeceData.navItems}
        />
        <PredictaTitle marginBottom="80px" marginTop="120px">
            CONCLUSION
        </PredictaTitle>
        <PredictaTextWrapper >
            <PredictaText marginBottom="120px">
                The first wave of the pandemic was surprisingly well controlled in Greece due to the speedy 
                government reaction, mobilized by the limited ICU capacity of the National Health System. 
                The second wave was much harder to manage and contain, as it was very difficult to close-down 
                the economy for a second time and to control the population mobility.  Overall, factors such 
                as the Greek climate, the geographical structure and the living conditions of the elderly 
                part of the population, contributed in positive way to the effects of the pandemic in Greece 
                and led to a smaller number o1f Deaths per million population.
            </PredictaText>
        </PredictaTextWrapper>
    </Layout>
)

export default Conclusion