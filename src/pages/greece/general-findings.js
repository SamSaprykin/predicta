import React from "react"
import styled from "styled-components"
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

const greeceGeneralMetadata = {
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

const GeneralFindingsLatin = (props) => (
    <Layout location={props.location}>
        <SEO 
            title={greeceGeneralMetadata.Title} 
            keywords={greeceGeneralMetadata.Keywords} 
            description={greeceGeneralMetadata.Description} 
            image={greeceGeneralMetadata.Image}
            url={greeceGeneralMetadata.url}
            titleTemplate={greeceGeneralMetadata.titleTemplate}
        /> 
        <DepthSoon 
            title={DepthGreeceData.title}
            navItems={DepthGreeceData.navItems}
        />
        <PredictaTitle marginBottom="80px" marginTop="120px" id="first-section">
            GENERAL FINDINGS
        </PredictaTitle>
        <PredictaTextWrapper>
            <PredictaText>
                Overall, Greece was not hit by the pandemic, as brutally as the other countries of the Western World. 
                Geographical characteristics and government polices are the main factors explaining this differentiation. 
                During the first wave of the pandemic (February to April 2020), Greece demonstrated a remarkable performance, 
                as result of the prompt governmental response, while the second wave that developed from September 2020 
                onwards proved to be much more severe, due to limited restrictions, accompanied by colder weather which 
                facilitated the spread. <br /> <br />
                Up to the end of August, the COVID-19 pandemic concequences seemed under control 
                with only 262 deaths recorded. September and October showed the first signs that the worst was yet to come with 358 deaths recorded. 
                Consequently, November’s infection spread had already started to expand with a positivity rate of about 
                11% and 1701 deaths recorded which is 73% of the total deaths to date. The attempt contain the pandemic 
                is reflected by the increasing number of tests performed, reaching 57k Τests per 1M population in November.
            </PredictaText>
        </PredictaTextWrapper>
        <PredictaContentContainer marginTop="60px" containerSize="large">
            <Table className="metrics-table" maxWidth="100%">
                <thead>
                    <tr>
                        <th>Month</th>
                        <th>Total Cases</th>
                        <th>% Cases by Month</th>
                        <th>Total Deaths</th>
                        <th>% Deaths by Month</th>
                        <th>% Mortality by Month</th>
                        <th>% Mortality (Rolling)</th>
                        <th>Cases per 1M</th>
                        <th>Deaths per 1M</th>
                        <th>Tests per 1M</th>
                        <th>% Positivity</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Feb</td>
                        <td>4</td>
                        <td>0,0%</td>
                        <td>0</td>
                        <td>0,0%</td>
                        <td>0,0%</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Mar</td>
                        <td>1.208</td>
                        <td>1,2%</td>
                        <td>43</td>
                        <td>1,9%</td>
                        <td>3,6%</td>
                        <td>3,5%</td>
                        <td>113</td>
                        <td>4</td>
                        <td>1605</td>
                        <td>7,0%</td>
                    </tr>
                    <tr>
                        <td>Apr</td>
                        <td>1.364</td>
                        <td>1,3%</td>
                        <td>96</td>
                        <td>4,1%</td>
                        <td>7,0%</td>
                        <td>5,4%</td>
                        <td>127</td>
                        <td>9</td>
                        <td>5.607</td>
                        <td>2,3%</td>
                    </tr>
                    <tr>
                        <td>May</td>
                        <td>339</td>
                        <td>0,3%</td>
                        <td>36</td>
                        <td>1,6%</td>
                        <td>10,6%</td>
                        <td>6,0%</td>
                        <td>32</td>
                        <td>3</td>
                        <td>10.107</td>
                        <td>0,3%</td>
                    </tr>
                    <tr>
                        <td>Jun</td>
                        <td>475</td>
                        <td>0,5%</td>
                        <td>16</td>
                        <td>0,7%</td>
                        <td>3,4%</td>
                        <td>5,6%</td>
                        <td>44</td>
                        <td>1</td>
                        <td>12.689</td>
                        <td>0,3%</td>
                    </tr>
                    <tr>
                        <td>Jul</td>
                        <td>1.011</td>
                        <td>1,0%</td>
                        <td>12</td>
                        <td>0,5%</td>
                        <td>1,2%</td>
                        <td>4,6%</td>
                        <td>94</td>
                        <td>1</td>
                        <td>19.871</td>
                        <td>0,5%</td>
                    </tr>
                    <tr>
                        <td>Aug</td>
                        <td>5.733</td>
                        <td>5,5%</td>
                        <td>59</td>
                        <td>2,5%</td>
                        <td>1,0%</td>
                        <td>2,6%</td>
                        <td>535</td>
                        <td>6</td>
                        <td>41.204</td>
                        <td>1,3%</td>
                    </tr>
                    <tr>
                        <td>Sep</td>
                        <td>7.989</td>
                        <td>7,7%</td>
                        <td>126</td>
                        <td>5,4%</td>
                        <td>1,6%</td>
                        <td>2,1%</td>
                        <td>745</td>
                        <td>12</td>
                        <td>34.365</td>
                        <td>2,2%</td>
                    </tr>
                    <tr>
                        <td>Oct</td>
                        <td>19.073</td>
                        <td>18,3%</td>
                        <td>232</td>
                        <td>10,0%</td>
                        <td>1,2%</td>
                        <td>1,7%</td>
                        <td>1.778</td>
                        <td>22</td>
                        <td>45.070</td>
                        <td>3,9%</td>
                    </tr>
                    <tr>
                        <td>Nov</td>
                        <td>67.031</td>
                        <td>64,3%</td>
                        <td>1.701</td>
                        <td>73,3%</td>
                        <td>2,5%</td>
                        <td>2,2%</td>
                        <td>6.250</td>
                        <td>159</td>
                        <td>57.205</td>
                        <td>10,9%</td>
                    </tr>
                    <tr>
                        <td>Total</td>
                        <td>104.227</td>
                        <td></td>
                        <td>2.321</td>
                        <td></td>
                        <td>2,2%</td>
                        <td></td>
                        <td>9.718</td>
                        <td>216</td>
                        <td>227.723</td>
                        <td>4,3%</td>
                    </tr>
                </tbody>
            </Table>
        </PredictaContentContainer>
        <div className="row" style={{backgroundColor: `#E8E8E8`}}>
            <PredictaTextWrapper>
                <PredictaText>
                    The evolution of the infection severity is best demonstrated in the graphs that follow below:
                </PredictaText>
            </PredictaTextWrapper>
            <PredictaContentContainer marginTop="60px" containerSize="large">
                <SectionSideBySide 
                    leftSide={
                        <>
                            <PredictaSubTitle>Cases per 15 Days</PredictaSubTitle>
                            <img src="/depth-greece/cases-per-15-days.svg" alt="Cases per 15 Days" />
                        </>
                    }
                    rightSide={
                        <>
                            <PredictaSubTitle>Deaths per 15 Days</PredictaSubTitle>
                            <img src="/depth-greece/deaths-per-15-days.svg" alt="Deaths per 15 Days" />
                        </>
                    }
                />
            </PredictaContentContainer>
            <PredictaTextWrapper>
                <PredictaText marginTop="40px">
                    Cases reach their peak with ~35000 infections in the middle of November, while deaths have 
                    not reached their peak yet, with 1286 deaths within the last two weeks of November.
                </PredictaText>
            </PredictaTextWrapper>
        </div>
        <div className="row" >
            <PredictaTextWrapper>
                <PredictaText>
                    At the end of November, the country reached the 11th position of Deaths per 1M population globally, within a single week.
                </PredictaText>
            </PredictaTextWrapper>
            <PredictaContentContainer marginTop="60px" containerSize="normal">
               <PredictaSubTitle>
                  Ranking of Greece - Death per Million by Week
               </PredictaSubTitle>
               <img src="/depth-greece/death-per-million-greece.svg" alt="deaths per million greece" />
            </PredictaContentContainer>
        
            <PredictaTextWrapper>
                <PredictaText marginTop="40px">
                    During November, new cases and deaths reached 3316 and 121 respectively within a day. <br /> <br />
                    Hospital admissions to ICU units as expected, follows the deaths trend, with 93 patients being in 
                    ICUs in early April, while the situation in the last days of November was so bad, that intubated 
                    patients reached 608.
                </PredictaText>
            </PredictaTextWrapper>
        </div>
        <div className="row" style={{backgroundColor: `#E8E8E8`}}>
            
            <PredictaSubTitle>
                Deaths and ICU patients
            </PredictaSubTitle>
            <PredictaContentContainer marginTop="60px" containerSize="normal">
               <img src="/depth-greece/deaths-and-ICU-title.svg" alt="Deaths and ICU patients title" />
               <img src="/depth-greece/deaths-and-ICU.svg" alt="Deaths and ICU patients" />
            </PredictaContentContainer>
            
            <PredictaTextWrapper>
                <PredictaText marginTop="40px" marginBottom="40px">
                    Based on models’ estimations for Greece, we have reached a conclusion that cases reported 
                    are about 21% of the total infections considering both asymptomatic and pre-symptomatic 
                    cases. Accordingly, the estimated actual mortality (IFR) is about 0.5% (4 times lower than 
                    mortality calculated on diagnosed cases). Hospital and ICU admissions on the reported cases, 
                    are about 7% and 3% accordingly.
                </PredictaText>
                
            </PredictaTextWrapper>
            <PredictaSubTitle>
                Reported vs Estimated Cases
            </PredictaSubTitle>
            <PredictaContentContainer marginTop="60px" containerSize="normal">
               <img src="/depth-greece/reported-estimates-title.svg" alt="Reported vs Estimated Cases title" />
               <img src="/depth-greece/reported-estimates.svg" alt="Reported vs Estimated Cases" />
            </PredictaContentContainer>
            
        </div>
        <div className="row" >
            <PredictaContentContainer marginTop="60px" containerSize="large">
                <SectionSideBySide 
                    leftSide={
                        <>
                            <PredictaSubTitle>Estimated Real Cases &amp; Mortality</PredictaSubTitle>
                            <img src="/depth-greece/real-cases-mortality.svg" alt="Estimated Real Cases and Mortality" />
                        </>
                    }
                    rightSide={
                        <>
                            <PredictaSubTitle>Hospitalizations &amp; ICU incidents</PredictaSubTitle>
                            <img src="/depth-greece/hospitalization-isu.svg" alt="Hospitalizations and ICU incidents" />
                        </>
                    }
                />
            </PredictaContentContainer>
        </div>
    </Layout>
)

const Table = styled.table`
    width:100%;
    max-width:${props => props.maxWidth};
    margin:0 auto 80px;
    td {
        line-height:1;
        color: #606060;
    }
    .width {
        width:160px;
        padding:5px 24px;
    }
    #highlighted {
        td {
            color:white;
        }
    }
    .gray-td {
        td {
            background-color: #f6f6f6;
        }
    }
`

export default GeneralFindingsLatin