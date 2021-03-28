import React from "react"
import styled from "styled-components"
import Layout from "../../components/layout"
import DepthSoon from "../../components/in-depth/DepthSoon"
import {
    PredictaContentContainer,
    PredictaTextWrapper,
    PredictaTitle,
    PredictaSubTitle,
    PredictaText,
} from "../../components/BlockElements/BlockElements";
import CasesOneMillione from "../../components/in-depth/latin-america/images/cases-per-1M-latin.svg"
import DeathsOneMillione from "../../components/in-depth/latin-america/images/deaths-per-1M-latin.svg"
import TitleGraphic from "../../components/in-depth/latin-america/images/title-graphic-latin.svg"
import TitleGraphic2 from "../../components/in-depth/latin-america/images/title-graphic-latin-2.svg"
import MobilityLatin from "../../components/in-depth/latin-america/images/mobility-per-monts-latin.svg"
import TotalCasesLatin from "../../components/in-depth/latin-america/images/total-case-perM-latin.svg"
import ExcessMortality from "../../components/in-depth/latin-america/images/excess-mortality-latin.svg"

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
const GeneralFindingsLatin = (props) => (
    <Layout location={props.location}>
        <DepthSoon 
            image={DepthLatinData.image} 
            title={DepthLatinData.title}
            navItems={DepthLatinData.navItems}
        />
        <PredictaTitle marginBottom="80px" marginTop="120px">
            GENERAL FINDINGS
        </PredictaTitle>
        <PredictaTextWrapper>
            <PredictaText>
                Latin America is a worldwide region badly affected from COVID-19 Pandemic. 
                21% of the total cases and almost 31% of the total deaths happened in Latin America.
            </PredictaText>
        </PredictaTextWrapper>
        <PredictaContentContainer marginTop="80px" containerSize="large">
            <Table className="metrics-table" maxWidth="100%">
                <thead>
                    <tr>
                        <th>Area</th>
                        <th>Total Cases</th>
                        <th>Cases %</th>
                        <th>Total Deaths</th>
                        <th>Deaths %</th>
                        <th>Mortality %</th>
                        <th>Cases per 1M</th>
                        <th>Deaths per 1M</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Western Europe</td>
                        <td>10.739.681</td>
                        <td>17,1%</td>
                        <td>277.659</td>
                        <td>19,0%</td>
                        <td>2,6%</td>
                        <td>25.224</td>
                        <td>652</td>
                    </tr>
                    <tr>
                        <td>Eastern Europe</td>
                        <td>6.812.975</td>
                        <td>10,9%</td>
                        <td>117.798</td>
                        <td>8,1%</td>
                        <td>1,7%</td>
                        <td>20.012</td>
                        <td>346</td>
                    </tr>
                    <tr>
                        <td>North America</td>
                        <td>13.753.617</td>
                        <td>21,9%</td>
                        <td>278.905</td>
                        <td>19,1%</td>
                        <td>2,0%</td>
                        <td>37.524</td>
                        <td>761</td>
                    </tr>
                    <tr id='highlighted'>
                        <td>Latin America and the Caribbean</td>
                        <td>13.069.332</td>
                        <td>20,8%</td>
                        <td>447.886</td>
                        <td>30,7%</td>
                        <td>3,4%</td>
                        <td>20.198</td>
                        <td>692</td>
                    </tr>
                    <tr>
                        <td>Asia-Pacific</td>
                        <td>12.446.240</td>
                        <td>19,8%</td>
                        <td>195.684</td>
                        <td>13,4%</td>
                        <td>1,6%</td>
                        <td>2.932</td>
                        <td>46</td>
                    </tr>
                    <tr>
                        <td>Middle East and North Africa</td>
                        <td>4.524.000</td>
                        <td>7,2%</td>
                        <td>110.604</td>
                        <td>7,6%</td>
                        <td>2,4%</td>
                        <td>8.425</td>
                        <td>206</td>
                    </tr>
                    <tr>
                        <td>Sub-Saharan Africa</td>
                        <td>1.433.917</td>
                        <td>2,3%</td>
                        <td>32.506</td>
                        <td>2,2%</td>
                        <td>2,3%</td>
                        <td>1.291</td>
                        <td>29</td>
                    </tr>
                    <tr>
                        <td>Global</td>
                        <td>62.779.762</td>
                        <td>&nbsp;</td>
                        <td>1.461.042</td>
                        <td>&nbsp;</td>
                        <td>2,3%</td>
                        <td>8.182</td>
                        <td>190</td>
                    </tr>
                </tbody>
            </Table>
        </PredictaContentContainer>
        <div className="row" style={{backgroundColor: `#E8E8E8`}}>
            <PredictaTextWrapper>
                <PredictaText>
                    Nine Latin American countries are among the Top 20 in Deaths Per Million Population
                </PredictaText>
            </PredictaTextWrapper>
            <PredictaContentContainer marginTop="40px" containerSize="normal">
                <Table className="metrics-table" maxWidth="480px">
                    <thead>
                        <tr>
                            <th>Top 20 countries</th>
                            <th>Death per 1M</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Belgium</td>
                            <td>1.452</td>
                        </tr>
                        <tr  id='highlighted'>
                            <td>Peru</td>
                            <td>1.105</td>
                        </tr>
                        <tr>
                            <td>Spain</td>
                            <td>960</td>
                        </tr>
                        <tr>
                            <td>Italy</td>
                            <td>910</td>
                        </tr>
                        <tr>
                            <td>United Kingdom</td>
                            <td>874</td>
                           
                        </tr>
                        <tr  id='highlighted'>
                            <td>Argentina</td>
                            <td>859</td>
                          
                        </tr>
                        <tr>
                            <td>North Macedonia</td>
                            <td>833</td>
                         
                        </tr>
                        <tr  id='highlighted'>
                            <td>Mexico</td>
                            <td>828</td>
                           
                        </tr>
                        <tr  id='highlighted'>
                            <td>Brasil</td>
                            <td>819</td>
                         
                        </tr>
                        <tr>
                            <td>United States of America</td>
                            <td>811</td>
                           
                        </tr>
                        <tr  id='highlighted'>
                            <td>Chile</td>
                            <td>810</td>
                           
                        </tr>
                        <tr>
                            <td>Bosnia and Herzegovina</td>
                            <td>794</td>
                        </tr>
                        <tr>
                            <td>France</td>
                            <td>781</td>
                           
                        </tr>
                        <tr  id='highlighted'>
                            <td>Bolivia</td>
                            <td>778</td>
                          
                        </tr>
                        <tr id='highlighted'>
                            <td>Ecuador</td>
                            <td>773</td>
                         
                        </tr>
                        <tr>
                            <td>Czechia</td>
                            <td>764</td>
                           
                        </tr>
                        <tr>
                            <td>Armenia</td>
                            <td>732</td>
                         
                        </tr>
                        <tr id='highlighted'>
                            <td>Colombia</td>
                            <td>727</td>
                           
                        </tr>
                        <tr id='highlighted'>
                            <td>Panama</td>
                            <td>721</td>
                        </tr>
                    </tbody>
                </Table>
            </PredictaContentContainer>
        </div>
        <div className="row" >
            <PredictaTextWrapper>
                <PredictaText>
                    The table below presents the data concerning the first COVID-19 case for every country 
                    in Latin America, the date each country reached 100 diagnosed cases, the date the lockdown 
                    policies were imposed, and the days elapsed from 100 cases to lockdown. <br /> <br /> As the pandemic 
                    arrived later in Latin America in comparison with other regions of the world and lockdown 
                    measures were imposed promptly in most countries, they did not experience an aggressive 
                    first wave at the beginning. Actually, up to the middle of May 2020, the Latin American 
                    countries suffered mildly from COVID-19.
                </PredictaText>
            </PredictaTextWrapper>
            <PredictaContentContainer marginTop="40px" containerSize="normal">
                <Table className="metrics-table" maxWidth="100%">
                    <thead>
                        <tr>
                            <th>Country</th>
                            <th>Date of 1st Case</th>
                            <th>Date of 100th Case</th>
                            <th>Date of Lockdown</th>
                            <th className="width">Date to Lockdown from 100th Case</th>
                           
                        </tr>
                    </thead>
                    <tbody className="gray-td">
                        <tr>
                            <td>Argentina</td>
                            <td>4/3/2020</td>
                            <td>20/3/2020</td>
                            <td>19/3/2020</td>
                            <td>-1</td>
                           
                        </tr>
                        <tr>
                            <td>Bolivia</td>
                            <td>12/3/2020</td>
                            <td>31/3/2020</td>
                            <td>16/3/2020</td>
                            <td>-15</td>
                           
                        </tr>
                        <tr>
                            <td>Brazil</td>
                            <td>26/2/2020</td>
                            <td>15/3/2020</td>
                            <td>8/4/2020</td>
                            <td>24</td>
                           
                        </tr>
                        <tr >
                            <td>Chile</td>
                            <td>4/3/2020</td>
                            <td>17/3/2020</td>
                            <td>26/3/2020</td>
                            <td>9</td>
                          
                        </tr>
                        <tr>
                            <td>Colombia</td>
                            <td>7/3/2020</td>
                            <td>19/3/2020</td>
                            <td>16/3/2020</td>
                            <td>-3</td>
                        </tr>
                        <tr>
                            <td>Costa Rica</td>
                            <td>7/3/2020</td>
                            <td>21/3/2020</td>
                            <td>16/6/2020</td>
                            <td>87</td> 
                        </tr>
                        <tr>
                            <td>Cuba</td>
                            <td>12/3/2020</td>
                            <td>29/3/2020</td>
                            <td>12/4/2020</td>
                            <td>14</td>
                        </tr>
                        <tr>
                            <td>Dominican Republic</td>
                            <td>2/3/2020</td>
                            <td>22/3/2020</td>
                            <td>No Lockdown</td>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <td>Ecuador</td>
                            <td>1/3/2020</td>
                            <td>18/3/2020</td>
                            <td>2/3/2020</td>
                            <td>-16</td>
                        </tr>
                        <tr>
                            <td>El Salvador</td>
                            <td>19/3/2020</td>
                            <td>9/4/2020</td>
                            <td>11/3/2020</td>
                            <td>-29</td>
                        </tr>
                        <tr>
                            <td>Guatemala</td>
                            <td>15/3/2020</td>
                            <td>10/4/2020</td>
                            <td>22/5/2020</td>
                            <td>42</td>
                        </tr>
                        <tr>
                            <td>Haiti</td>
                            <td>20/3/2020</td>
                            <td>5/5/2020</td>
                            <td>20/3/2020</td>
                            <td>-46</td>
                        </tr>
                        <tr>
                            <td>Honduras</td>
                            <td>12/3/2020</td>
                            <td>29/3/2020</td>
                            <td>6/4/2020</td>
                            <td>8</td>
                        </tr>
                        <tr>
                            <td>Mexico</td>
                            <td>14/1/2020</td>
                            <td>14/3/2020</td>
                            <td>30/3/2020</td>
                            <td>16</td>
                        </tr>
                        <tr>
                            <td>El Salvador</td>
                            <td>19/3/2020</td>
                            <td>9/4/2020</td>
                            <td>11/3/2020</td>
                            <td>-29</td>
                        </tr>
                        <tr>
                            <td>Nicaragua</td>
                            <td>19/3/2020</td>
                            <td>23/5/2020</td>
                            <td>No Lockdown</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Panama</td>
                            <td>10/3/2020</td>
                            <td>19/3/2020</td>
                            <td>11/4/2020</td>
                            <td>23</td>
                        </tr>
                        <tr>
                            <td>Paraguay</td>
                            <td>8/3/2020</td>
                            <td>5/4/2020</td>
                            <td>20/3/2020</td>
                            <td>-16</td>
                        </tr>
                        <tr>
                            <td>Peru</td>
                            <td>7/3/2020</td>
                            <td>18/3/2020</td>
                            <td>16/3/2020</td>
                            <td>-2</td>
                        </tr>
                        <tr>
                            <td>Puerto Rico</td>
                            <td>28/3/2020</td>
                            <td>29/3/2020</td>
                            <td>No Lockdown</td>
                            <td></td>
                        </tr>
                    </tbody>
                </Table>
            </PredictaContentContainer>
        </div>
        <div className="row" style={{backgroundColor: `#E8E8E8`}}>
            <PredictaTextWrapper>
                <PredictaText>
                    This situation is best demonstrated in the graphs that follow, presenting Cases per 1M Pop 
                    and Deaths per 1M Pop for the major Latin American countries.
                </PredictaText>
            </PredictaTextWrapper>
            <PredictaContentContainer marginTop="40px" containerSize="normal">
                <PredictaSubTitle marginTop="32px" marginBottom="24px">
                    Cases per 1M - MA 7 Days
                </PredictaSubTitle>
                <TitleGraphic className="title-graph" />
                <CasesOneMillione className="graph" />
                <PredictaSubTitle marginTop="32px" marginBottom="24px">
                    Deaths per 1M - MA 7 Days
                </PredictaSubTitle>
                <TitleGraphic className="title-graph" />
                <DeathsOneMillione className="graph" />
                <PredictaText marginBottom="40px">
                    From June 2020, when for that region of the world winter starts, we can see a gradual 
                    increase of cases and deaths with some countries doing a lot worse than others.
                </PredictaText>
                <PredictaSubTitle marginTop="32px" marginBottom="24px">
                    Mobility per Month by Country
                </PredictaSubTitle>
                <TitleGraphic2 className="title-graph" />
                <MobilityLatin className="graph" />
                <PredictaText marginBottom="40px">
                    The above mobility graph demonstrates the reduction of population mobility up to the 
                    middle of May 2020, a result of the early imposed lockdown policies, while after that, 
                    mobility systematically increases. A factor that definitely explains the increase in 
                    cases and deaths from June onwards.
                </PredictaText>
            </PredictaContentContainer>
        </div>
        <div className="row" >
            <PredictaContentContainer containerSize="normal">
                <PredictaSubTitle marginBottom="24px">
                    Total Cases per 1M vs Total Deaths per 1M (Feb-Nov)
                </PredictaSubTitle>
                <TotalCasesLatin className="graph-dark" />
                <PredictaText>
                    The previous scatterplot correlating Cases per 1M with Deaths per 1M by country, 
                    groups the Latin American countries in interesting clusters.  <br /> <br />
                    <ul>
                        <li>Countries that are hit strongly (high number of cases and deaths), like Peru Argentina Brazil etc. </li>
                        <li>Countries that are hit mildly or not at all (low number of cases and deaths), like Guatemala, Uruguay, Paraguay and Cuba </li>
                        <li>Countries with exceptionally high number of deaths with respect to their number of diagnosed cases (Mexico, Bolivia etc.) </li>
                        <li>Countries with exceptionally low number of deaths with respect to their number of diagnosed cases (Costa Rica, Puerto Rico) </li>
                    </ul>
                    
                    An overall finding is that most Latin America countries have more than 200 Deaths per 1M, while a considerable number of countries have more than 700 Deaths per 1M.
                </PredictaText>
            </PredictaContentContainer>
        </div>
        <div className="row" style={{backgroundColor: `#E8E8E8`}}>
            <PredictaContentContainer containerSize="normal">
                <PredictaSubTitle marginBottom="24px">
                    Excess Mortality
                </PredictaSubTitle>
                <ExcessMortality className="graph" />
                <PredictaText marginBottom="60px">
                    Another indicator demonstrating the severity of COVID-19 pandemic in Latin America is the 
                    above histogram where we can see that the mortality due to COVID-19 (Excess Mortality) 
                    is much higher than the global figure (calculated as an average of the European and North 
                    American countries).
                </PredictaText>
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