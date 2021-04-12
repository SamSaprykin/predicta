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

const healthFacMetadata = {
    Title: "Health Facilities & Deaths | Greece & the Covid-19 Pandemic",
    Keywords: [`covid analytics`,`predicta analytics`, `covid`, `predicta`],
    Description: "Greece increased ICU beds to deal with increased demand as a result of the pandemic",
    Image: "/predicta-icon.png",
    url:"https://www.predicta4covid.com/",
    titleTemplate:"Health Facilities & Deaths | Greece & the Covid-19 Pandemic"
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

const HealthFacilities = (props) => (
    <Layout location={props.location}>
        <SEO 
            title={healthFacMetadata.Title} 
            keywords={healthFacMetadata.Keywords} 
            description={healthFacMetadata.Description} 
            image={healthFacMetadata.Image}
            url={healthFacMetadata.url}
            titleTemplate={healthFacMetadata.titleTemplate}
        /> 
        <DepthSoon 
            title={DepthGreeceData.title}
            navItems={DepthGreeceData.navItems}
        />
        <PredictaTitle marginBottom="80px" marginTop="120px" id="first-section">
            HEALTH FACILITIES &amp; DEATHS
        </PredictaTitle>
        <PredictaTextWrapper >
            <PredictaText marginBottom="120px">
                The country, before the COVID-19 pandemic did not have enough ICU beds to meet the unticipated 
                demand, a fact that influenced the governement’s prompt response with lockdown policies during 
                the first wave. This situation is reflected in the graph below. <br /> <br />
                It was officially reported that until the end of November, ICU beds had been doubled, reaching 
                the number of 12 per 100.000 people, close to the EU average.
            </PredictaText>
        </PredictaTextWrapper>
        <div className="row" style={{backgroundColor: `#E8E8E8`}}>
            
            <PredictaSubTitle>
                ICU Beds per 100,000 Pop
            </PredictaSubTitle>
            <PredictaContentContainer marginTop="20px" containerSize="normal">
               <img src="/depth-greece/icu-beds-per-100.svg" alt="Deaths and ICU patients" />
            </PredictaContentContainer>
            
            <PredictaTextWrapper>
                <PredictaText marginTop="40px" marginBottom="40px">
                Elderly people Care facilities in Greece are limited, compared to most Western countries, 
                due to household structure close family relationships, a factor which definetely reduced 
                deaths.
                </PredictaText>
            </PredictaTextWrapper>
            <PredictaSubTitle>
                Beds in Long Term Care Facilities Per 1000 Population (for 65 years+)            
            </PredictaSubTitle>
            <PredictaContentContainer marginTop="20px" containerSize="normal">
               <img src="/depth-greece/beds-in-long-term-care.svg" alt="Beds in Long Term Care Facilities Per 1000 Population (for 65 years+)" />
            </PredictaContentContainer>
            
        </div>
        <div className="row">
            <PredictaTextWrapper>
                <PredictaText marginTop="40px" marginBottom="40px">
                    Comparing Deaths per 1M population between Greece and Europe, all along the pandemic 
                    evolution , we note that the only period Greece presented worse numbers than the rest of 
                    Europe is the end of last November, when the country was hit by the severe second wave.
                </PredictaText>
            </PredictaTextWrapper>
            <PredictaSubTitle>
                Daily Deaths per 1M - Greece vs Europe  
            </PredictaSubTitle>
            <PredictaContentContainer marginTop="20px" containerSize="normal">
               <img src="/depth-greece/daily-deaths-per1m-label.svg" alt="Daily Deaths per 1M - Greece vs Europe label" />    
               <img src="/depth-greece/daily-deaths-per1m.svg" alt="Daily Deaths per 1M - Greece vs Europe " />
            </PredictaContentContainer>
        </div>
    </Layout>
)

export default HealthFacilities
