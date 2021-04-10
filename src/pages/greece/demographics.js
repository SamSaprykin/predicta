import React from "react"
import Layout from "../../components/layout"
import DepthSoon from "../../components/in-depth/DepthSoon"
import styled from "styled-components"
import {
    PredictaTextWrapper,
    PredictaTitle,
    PredictaText,
    PredictaContentContainer,
} from "../../components/BlockElements/BlockElements";
import SEO from "../../components/seo"

const demographicsMetadata = {
    Title: "Demographics | Greece & the Covid-19 Pandemic",
    Keywords: [`covid analytics`,`predicta analytics`, `covid`, `predicta`],
    Description: "Demographic characteristics of infected populations altered considerably during the various phases of the pandemic",
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

const Demographics = (props) => (
    <Layout location={props.location}>
        <SEO 
            title={demographicsMetadata.Title} 
            keywords={demographicsMetadata.Keywords} 
            description={demographicsMetadata.Description} 
            image={demographicsMetadata.Image}
            url={demographicsMetadata.url}
            titleTemplate={demographicsMetadata.titleTemplate}
        /> 
        <DepthSoon 
            title={DepthGreeceData.title}
            navItems={DepthGreeceData.navItems}
        />
        <PredictaTitle marginBottom="80px" marginTop="120px" id="first-section">
            DEMOGRAPHICS
        </PredictaTitle>
        <PredictaTextWrapper >
            <PredictaText marginBottom="120px">
                Examining the COVID-19 demographics, we note a difference in patients’ age, with younger 
                infected people during the summer period due to holiday gatherings and vacations, while 
                in the autumn the working population was the one mostly affected. The majority of deceased 
                people had underlying health conditions and were of old age. Overall, 2.2% of the reported 
                cases died and their median age was 78 years. Finally, men have a higher risk to die from 
                COVID-19 compared to women (2.5% vs 1.9%).
            </PredictaText>
        </PredictaTextWrapper>
        <div className="row" style={{backgroundColor: `#E8E8E8`}}>
            <PredictaContentContainer marginTop="60px" containerSize="large">   
                <Table className="metrics-table" maxWidth="100%">
                        <thead>
                            <tr>
                                <th>Period</th>
                                <th>% Male Cases</th>
                                <th>% Female Cases</th>
                                <th>Cases - Median Age</th>
                                <th>Male Cases - Median Age</th>
                                <th>Female Cases - Median Age</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Feb-May</td>
                                <td>55%</td>
                                <td>45%</td>
                                <td>47</td>
                                <td>48</td>
                                <td>46</td>
                            </tr>
                            <tr>
                                <td>June-Aug</td>
                                <td>55%</td>
                                <td>45%</td>
                                <td>40</td>
                                <td>40</td>
                                <td>39</td>
                            </tr>
                            <tr>
                                <td>Sep-Nov</td>
                                <td>53%</td>
                                <td>47%</td>
                                <td>45</td>
                                <td>44</td>
                                <td>45</td>
                            </tr>
                            <tr className="total">
                                <td>Total</td>
                                <td>53,2%</td>
                                <td>46,8%</td>
                                <td>44</td>
                                <td>44</td>
                                <td>45</td>
                            </tr>
                        </tbody>
                </Table>
                <Table className="metrics-table" maxWidth="100%">
                        <thead>
                            <tr>
                                <th>Period</th>
                                <th>% Male Cases</th>
                                <th>% Female Cases</th>
                                <th>Cases - Median Age</th>
                                <th>Male Cases - Median Age</th>
                                <th>Female Cases - Median Age</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Feb-May</td>
                                <td>73%</td>
                                <td>27%</td>
                                <td>76</td>
                                <td>75</td>
                                <td>79</td>
                                
                            </tr>
                            <tr>
                                <td>June-Aug</td>
                                <td>65%</td>
                                <td>36%</td>
                                <td>77</td>
                                <td>77</td>
                                <td>79</td>
                            </tr>
                            <tr>
                                <td>Sep-Nov</td>
                                <td>59%</td>
                                <td>41%</td>
                                <td>78</td>
                                <td>77</td>
                                <td>79</td>
                            </tr>
                            <tr className="total">
                                <td>Total</td>
                                <td>60,6%</td>
                                <td>39,4%</td>
                                <td>78</td>
                                <td>77</td>
                                <td>79</td>
                            </tr>
                        </tbody>
                </Table>
                <Table className="metrics-table" maxWidth="100%">
                        <thead>
                            <tr>
                                <th>Period</th>
                                <th>% Mortality</th>
                                <th>% Mortality Male</th>
                                <th>% Mortality Female</th>
                                <th>Deaths with Conditions</th>
                                <th>Deaths without Conditions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Feb-May</td>
                                <td>6,0%</td>
                                <td>8,0%</td>
                                <td>3,6%</td>
                                <td>92%</td>
                                <td>8%</td>
                                
                            </tr>
                            <tr>
                                <td>June-Aug</td>
                                <td>1,2%</td>
                                <td>1,4%</td>
                                <td>1,0%</td>
                                <td>94%</td>
                                <td>6%</td>
                            </tr>
                            <tr>
                                <td>Sep-Nov</td>
                                <td>2,2%</td>
                                <td>2,5%</td>
                                <td>1,9%</td>
                                <td>97%</td>
                                <td>3%</td>
                            </tr>
                            <tr className="total">
                                <td>Total</td>
                                <td>2,2%</td>
                                <td>2,5%</td>
                                <td>1,9%</td>
                                <td>96%</td>
                                <td>4%</td>
                            </tr>
                        </tbody>
                </Table>
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
    #highlighted {
        td {
            color:white;
        }
    }
    
    .total {
        td {
            font-weight:700;
        }
    }
`

export default Demographics
