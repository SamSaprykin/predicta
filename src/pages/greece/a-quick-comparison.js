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

const quickComparisonMetadata = {
    Title: "A Quick Comparison | Greece & the Covid-19 Pandemic",
    Keywords: [`covid analytics`,`predicta analytics`, `covid`, `predicta`],
    Description: "Overall, Greece was not hit by the pandemic, as brutally as the other countries of the Western World.",
    Image: "/predicta-icon.png",
    url:"https://www.predicta4covid.com/",
    titleTemplate:"A Quick Comparison | Greece & the Covid-19 Pandemic"
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

const Comprasin = (props) => (
    <Layout location={props.location}>
        <SEO 
            title={quickComparisonMetadata.Title} 
            keywords={quickComparisonMetadata.Keywords} 
            description={quickComparisonMetadata.Description} 
            image={quickComparisonMetadata.Image}
            url={quickComparisonMetadata.url}
            titleTemplate={quickComparisonMetadata.titleTemplate}
        /> 
        <DepthSoon 
            title={DepthGreeceData.title}
            navItems={DepthGreeceData.navItems}
        />
        <PredictaTitle marginBottom="80px" marginTop="120px" id="first-section">
                A QUICK COMPARISON
        </PredictaTitle>
        <PredictaTextWrapper >
            <PredictaText marginBottom="120px">
                Comparing Greece’s overall cases and deaths with all the other European countries, it is obvious 
                that the pandemic situation is far better than the majority of Europe. With respect to cases per 
                1M population Greece is ranked 38th and with respect to Deaths per 1M population, Greece is ranked 
                31st.
            </PredictaText>
        </PredictaTextWrapper>
        <div className="row" style={{backgroundColor: `#E8E8E8`}}>
        <PredictaContentContainer marginTop="90px" containerSize="large">
            <SectionSideBySide 
                leftSide={
                    <>
                        <Table className="metrics-table" maxWidth="100%">
                            <thead>
                                <tr>
                                    <th>A/A</th>
                                    <th className="width">Country</th>
                                    <th>Cases 1M</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Montenegro</td>
                                    <td>56.062</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Luxembourg</td>
                                    <td>55.340</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Belgium</td>
                                    <td>50.390</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Czechia</td>
                                    <td>48.801</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>Switzerland</td>
                                    <td>37.102</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>Slovenia</td>
                                    <td>36.225</td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td>Spain</td>
                                    <td>35.115</td>
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td>Liechtenstein</td>
                                    <td>33.170</td>
                                </tr>
                                <tr>
                                    <td>9</td>
                                    <td>France</td>
                                    <td>33.105</td>
                                </tr>
                                <tr>
                                    <td>10</td>
                                    <td>Austria</td>
                                    <td>31.402</td>
                                </tr>
                                <tr>
                                    <td>11</td>
                                    <td>Croatia</td>
                                    <td>31.061</td>
                                </tr>
                                <tr>
                                    <td>12</td>
                                    <td>Netherlands</td>
                                    <td>29.989</td>
                                </tr>
                                <tr>
                                    <td>13</td>
                                    <td>North Macedonia</td>
                                    <td>29.629</td>
                                </tr>
                                <tr>
                                    <td>14</td>
                                    <td>Portugal</td>
                                    <td>28.686</td>
                                </tr>
                                <tr>
                                    <td>15</td>
                                    <td>Bosnia and Herzegovina</td>
                                    <td>26.469</td>
                                </tr>
                                <tr>
                                    <td>16</td>
                                    <td>Moldova</td>
                                    <td>26.468</td>
                                </tr>
                                <tr>
                                    <td>17</td>
                                    <td>Italy</td>
                                    <td>26.262</td>
                                </tr>
                                <tr>
                                    <td>18</td>
                                    <td>Poland</td>
                                    <td>25.942</td>
                                </tr>
                                <tr>
                                    <td>19</td>
                                    <td>Serbia</td>
                                    <td>24.299</td>
                                </tr>
                                <tr>
                                    <td>20</td>
                                    <td>Romania</td>
                                    <td>24.288</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr id="highlighted">
                                    <td>38</td>
                                    <td>Greece</td>
                                    <td>9.718</td>
                                </tr>
                                <tr>
                                    <td>39</td>
                                    <td>Estonia</td>
                                    <td>9.097</td>
                                </tr>
                                <tr>
                                    <td>40</td>
                                    <td>Latvia</td>
                                    <td>8.841</td>
                                </tr>
                                <tr>
                                    <td>41</td>
                                    <td>Norway</td>
                                    <td>6.521</td>
                                </tr>
                                <tr>
                                    <td>42</td>
                                    <td>Finland</td>
                                    <td>4.463</td>
                                </tr>
                            </tbody>
                        </Table>
                    </>
                }
                rightSide={
                    <>
                        <Table className="metrics-table" maxWidth="100%">
                            <thead>
                                <tr>
                                    <th>A/A</th>
                                    <th className="width">Country</th>
                                    <th>Deaths 1M</th>
                                
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Belgium</td>
                                    <td>1452</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Spain</td>
                                    <td>960</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Italy</td>
                                    <td>910</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>United Kingdom</td>
                                    <td>874</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>North Macedonia</td>
                                    <td>833</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>Bosnia and Herzegovina</td>
                                    <td>794</td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td>Montenegro</td>
                                    <td>783</td>
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td>France</td>
                                    <td>781</td>
                                </tr>
                                <tr>
                                    <td>9</td>
                                    <td>Czechia</td>
                                    <td>764</td>
                                </tr>
                                <tr>
                                    <td>10</td>
                                    <td>Sweden</td>
                                    <td>653</td>
                                </tr>
                                <tr>
                                    <td>11</td>
                                    <td>Romania</td>
                                    <td>577</td>
                                </tr>
                                <tr>
                                    <td>12</td>
                                    <td>Moldova</td>
                                    <td>566</td>
                                </tr>
                                <tr>
                                    <td>13</td>
                                    <td>Kosovo</td>
                                    <td>559</td>
                                </tr>
                                <tr>
                                    <td>14</td>
                                    <td>Bulgaria</td>
                                    <td>545</td>
                                </tr>
                                <tr>
                                    <td>15</td>
                                    <td>Netherlands</td>
                                    <td>540</td>
                                </tr>
                                <tr>
                                    <td>16</td>
                                    <td>Luxembourg</td>
                                    <td>498</td>
                                </tr>
                                <tr>
                                    <td>17</td>
                                    <td>Switzerland</td>
                                    <td>496</td>
                                </tr>
                                <tr>
                                    <td>18</td>
                                    <td>Hungary</td>
                                    <td>494</td>
                                </tr>
                                <tr>
                                    <td>19</td>
                                    <td>Poland</td>
                                    <td>448</td>
                                </tr>
                                <tr>
                                    <td>20</td>
                                    <td>Slovenia</td>
                                    <td>445</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr id="highlighted">
                                    <td>31</td>
                                    <td>Greece</td>
                                    <td>216</td>
                                </tr>
                                <tr>
                                    <td>32</td>
                                    <td>Germany</td>
                                    <td>196</td>
                                </tr>
                                <tr>
                                    <td>33</td>
                                    <td>Lithuania</td>
                                    <td>181</td>
                                </tr>
                                <tr>
                                    <td>41</td>
                                    <td>Norway</td>
                                    <td>62</td>
                                </tr>
                                <tr>
                                    <td>42</td>
                                    <td>Cyprus</td>
                                    <td>55</td>
                                </tr>
                            </tbody>
                        </Table>
                    </>
                }
            />
        </PredictaContentContainer>
        </div>
        <div className="row">
            <PredictaTextWrapper >
                <PredictaText marginBottom="120px">
                    In an attempt to further analyze the situation, we compare Greece with the most prosperous 
                    countries of Europe. On the graphs below, we can clearly see how citizens’ mobility differ.
                    Greece’s pattern show that the general mobility was low only during the lockdown policies, 
                    while during all other periods Greece has the highest mobility.
                </PredictaText>
            </PredictaTextWrapper>
            <PredictaSubTitle>
                    Mobility Rate MA7
            </PredictaSubTitle>
            <PredictaContentContainer containerSize="normal" marginBottom="60px">
                <img src="/depth-greece/mobility-rate-label.svg" alt="Mobility Rate MA7 Label" />
                <img src="/depth-greece/mobility-rate.svg" alt="Mobility Rate MA7" />
            </PredictaContentContainer>
            <PredictaSubTitle>
                    Parks Mobility MA7
            </PredictaSubTitle>
            <PredictaContentContainer containerSize="normal">
                <img src="/depth-greece/mobility-rate-label.svg" alt="Parks Mobility MA7 Label" />
                <img src="/depth-greece/parks-mobility.svg" alt="Parks Mobility MA7" />
            </PredictaContentContainer>
            <PredictaTextWrapper >
                <PredictaText marginTop="30px" marginBottom="60px">
                    It is interesting that the mobility in parks, marinas and nature was one of the lowest 
                    during the first wave and one of the highest during the summer and early autumn. 
                    The mild climate partly explains this pattern, while the citizens’ feelings of danger 
                    at the beginning of the pandemic and a pseudo-safety feeling once the virus was contained, 
                    explains the opposite reaction.
                </PredictaText>
            </PredictaTextWrapper>
            <PredictaSubTitle>
                    Test Positivity MA7
            </PredictaSubTitle>
            <PredictaContentContainer containerSize="normal">
                <img src="/depth-greece/mobility-rate-label.svg" alt="Parks Mobility MA7 Label" />
                <img src="/depth-greece/test-positivity-greece.svg" alt="Parks Mobility MA7" />
            </PredictaContentContainer>
            <PredictaTextWrapper >
                <PredictaText marginTop="30px" marginBottom="60px">
                    Despite, the increased mobility in the country after the 1st lockdown measures were relaxed, 
                    the positivity index is either at low or medium level compared to other European countries, 
                    which indicates the lower spread of the virus. <br /> <br />
                    In general, despite the different countries’ characteristics, western countries have strong 
                    connections worldwide, therefore it was inevitable to suffer the intense of the pandemic.
                </PredictaText>
            </PredictaTextWrapper>
        </div>
    </Layout>
)

const Table = styled.table`
    width:100%;
    max-width:${props => props.maxWidth};
    margin:0 auto 80px;
    tr {
        height:37px;
    }
    
`


export default Comprasin
