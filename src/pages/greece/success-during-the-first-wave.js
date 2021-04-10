import React from "react"
import Layout from "../../components/layout"
import DepthSoon from "../../components/in-depth/DepthSoon"
import {
    PredictaContentContainer,
    PredictaTextWrapper,
    PredictaTitle,
    PredictaSubTitle,
    SectionSideBySide,
    PredictaText,
} from "../../components/BlockElements/BlockElements";
import SEO from "../../components/seo"

const successFirstWaveMetadata = {
    Title: "Predicta",
    Keywords: [`covid analytics`,`predicta analytics`, `covid`, `predicta`],
    Description: "Analytics for Decision Making, is a leading provider of Predictive Analytics Solutions.",
    Image: "/predicta-icon.png",
    url:"https://www.predicta4covid.com/",
    titleTemplate:"Predicta"
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

const SuccessFirstWave = (props) => (
    <Layout location={props.location}>
        <SEO 
            title={successFirstWaveMetadata.Title} 
            keywords={successFirstWaveMetadata.Keywords} 
            description={successFirstWaveMetadata.Description} 
            image={successFirstWaveMetadata.Image}
            url={successFirstWaveMetadata.url}
            titleTemplate={successFirstWaveMetadata.titleTemplate}
        /> 
        <DepthSoon 
            title={DepthGreeceData.title}
            navItems={DepthGreeceData.navItems}
        />
        <PredictaTitle marginBottom="80px" marginTop="120px" id="first-section">
            THE SUCCESS DURING THE FIRST WAVE
        </PredictaTitle>
        <PredictaTextWrapper >
            <PredictaText marginBottom="120px">
                The epidemic curve of Greece can be seen below. Statistics demonstrate that 34 days elapsed from 
                the first diagnosed case, until the epidemic curve reached its peak. Also, counting from the 
                lockdown imposement, 15 days elapsed before the reproduction rate fell below 1. Lockdown rules 
                were relaxed on the 4rth of May.
            </PredictaText>
        </PredictaTextWrapper>
        <div className="row" style={{backgroundColor: `#E8E8E8`}}>
            <PredictaSubTitle>
                1st Wave of Greece
            </PredictaSubTitle>
            <PredictaContentContainer marginTop="20px" containerSize="normal">
               <img src="/depth-greece/first-wave-label.svg" alt="1st Wave of Greece label" />
               <img src="/depth-greece/first-wave.svg" alt="1st Wave of Greece" />
            </PredictaContentContainer>
        </div>
        <div className="row" >
            <PredictaTextWrapper >
                <PredictaText marginBottom="50px">
                    The detailed governement preventive measures applied during the first wave, 
                    responsible for the successful handling of the pandeming appear in the graph below.
                </PredictaText>
            </PredictaTextWrapper>
            <PredictaSubTitle  marginBottom="30px">
                18 Measures (Within EU AVG) - 28% Targeted
            </PredictaSubTitle>
            <PredictaContentContainer marginTop="20px" containerSize="normal">
               <img src="/depth-greece/18-measures.svg" alt="18 Measures (Within EU AVG) - 28% Targeted" />
            </PredictaContentContainer>
            <PredictaTextWrapper >
                <PredictaText marginBottom="50px" marginTop="60px">
                    Eighteen(18) different measures were applied in total, while five (5) of them, (28%) 
                    were targeted to specific geographical or population groups. It took from 11 to 67 days 
                    from the first diagnosed case, for each of these measures to be imposed, with the majority 
                    beiing applied within the first 20 days. <br /> <br />
                    As Greece has land borders only to its north, 
                    the incoming infection was easy to handled and the extensive border checks during the 
                    summer period proved to be effective enough.
                </PredictaText>
            </PredictaTextWrapper>
        </div>
    </Layout>
)

export default SuccessFirstWave