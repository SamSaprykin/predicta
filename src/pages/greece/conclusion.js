import React from "react"
import Layout from "../../components/layout"
import DepthSoon from "../../components/in-depth/DepthSoon"
import {
    PredictaTextWrapper,
    PredictaTitle,
    PredictaText,
} from "../../components/BlockElements/BlockElements";
import SEO from "../../components/seo"

const greeceConclusionMetadata = {
    Title: "Conclusion | Greece & the Covid-19 Pandemic",
    Keywords: [`covid analytics`,`predicta analytics`, `covid`, `predicta`],
    Description: "Overall, Greece was not hit by the pandemic, as brutally as the other countries of the Western World. Geographical characteristics and government polices are the main factors explaining this differentiation.",
    Image: "/predicta-icon.png",
    url:"https://www.predicta4covid.com/",
    titleTemplate:"Conclusion | Greece & the Covid-19 Pandemic"
}

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
            title:"The Success during the First Wave",
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
        <SEO 
            title={greeceConclusionMetadata.Title} 
            keywords={greeceConclusionMetadata.Keywords} 
            description={greeceConclusionMetadata.Description} 
            image={greeceConclusionMetadata.Image}
            url={greeceConclusionMetadata.url}
            titleTemplate={greeceConclusionMetadata.titleTemplate}
        /> 
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
                and led to a smaller number of Deaths per million population.
            </PredictaText>
        </PredictaTextWrapper>
    </Layout>
)

export default Conclusion