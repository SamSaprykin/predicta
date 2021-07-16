import React from "react";
import styled from "styled-components";

import Layout from "../../components/layout";
import DepthSoon from "../../components/in-depth/DepthSoon";
import {
  PredictaContentContainer,
  PredictaTextWrapper,
  PredictaTitle,
  PredictaSubTitle,
  PredictaText,
} from "../../components/BlockElements/BlockElements";
import CasesOneMillione from "../../components/in-depth/latin-america/images/cases-per-1M-latin1.svg";
import DeathsOneMillione from "../../components/in-depth/latin-america/images/deaths-per-1M-latin1.svg";
import TitleGraphic from "../../components/in-depth/latin-america/images/title-graphic-latin.svg";
import MobilityLatin from "../../components/in-depth/latin-america/images/mobility-per-monts-latin1.svg";
import TotalCasesLatin from "../../components/in-depth/latin-america/images/total-case-perM-latin.svg";
import ExcessMortality from "../../components/in-depth/latin-america/images/excess-mortality-latin.svg";
import SEO from "../../components/seo";

const latinGeneralMetadata = {
  Title: "General Findings | Latin America & the Covid-19 Pandemic",
  Keywords: [`covid analytics`, `predicta analytics`, `covid`, `predicta`],
  Description:
    "Latin America is a worldwide region badly affected from COVID-19 Pandemic.",
  Image: "/predicta-icon.png",
  url: "https://www.predicta4covid.com/",
  titleTemplate: "Predicta",
};

const DepthLatinData = {
  image: "/depth-latin.png",
  title: "Latin America",
  navItems: [
    {
      title: "General Findings",
      linkTo: "/latin-america/general-findings",
    },
    {
      title: "Socio-Economic and Health Factors",
      linkTo: "/latin-america/socio-economic-and-healts-factors",
    },
    {
      title: "Conclusion",
      linkTo: "/latin-america/conclusion",
    },
  ],
};

const GeneralFindingsLatin = (props) => (
  <Layout location={props.location}>
    <SEO
      title={latinGeneralMetadata.Title}
      keywords={latinGeneralMetadata.Keywords}
      description={latinGeneralMetadata.Description}
      image={latinGeneralMetadata.Image}
      url={latinGeneralMetadata.url}
      titleTemplate={latinGeneralMetadata.titleTemplate}
    />
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
        Latin America is a worldwide region badly affected from COVID – 19
        Pandemic. 20% of the total cases and almost 30% of the total deaths
        happened in Latin America.
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
            <td>29.261.101</td>
            <td>17,3%</td>
            <td>641.984</td>
            <td>18,2%</td>
            <td>2,2%</td>
            <td>68.726</td>
            <td>1.508</td>
          </tr>
          <tr>
            <td>Eastern Europe</td>
            <td>18.524.909</td>
            <td>10,9%</td>
            <td>434.328</td>
            <td>12,3%</td>
            <td>2,3%</td>
            <td>54.414</td>
            <td>1.276</td>
          </tr>
          <tr>
            <td>North America</td>
            <td>34.290.575</td>
            <td>20,2%</td>
            <td>609.185</td>
            <td>17,3%</td>
            <td>1,8%</td>
            <td>93.554</td>
            <td>1.662</td>
          </tr>
          <tr id="highlighted">
            <td>Latin America and the Caribbean</td>
            <td>33.065.992</td>
            <td>19,5%</td>
            <td>1.037.821</td>
            <td>29,5%</td>
            <td>3,1%</td>
            <td>51.101</td>
            <td>1.604</td>
          </tr>
          <tr>
            <td>Asia-Pacific</td>
            <td>36.459.144</td>
            <td>21,5%</td>
            <td>482.018</td>
            <td>13,7%</td>
            <td>1,3%</td>
            <td>8.589</td>
            <td>114</td>
          </tr>
          <tr>
            <td>Middle East and North Africa</td>
            <td>14.409.207</td>
            <td>8,5%</td>
            <td>231.633</td>
            <td>6,6%</td>
            <td>1,6%</td>
            <td>26.833</td>
            <td>431</td>
          </tr>
          <tr>
            <td>Sub-Saharan Africa</td>
            <td>3.379.593</td>
            <td>2,0%</td>
            <td>86.633</td>
            <td>2,5%</td>
            <td>2,6%</td>
            <td>3.043</td>
            <td>78</td>
          </tr>
          <tr>
            <td>Global</td>
            <td>169.390.521</td>
            <td>&nbsp;</td>
            <td>3.523.602</td>
            <td>&nbsp;</td>
            <td>2,1%</td>
            <td>22.078</td>
            <td>459</td>
          </tr>
        </tbody>
      </Table>
    </PredictaContentContainer>
    <div className="row" style={{ backgroundColor: `#E8E8E8` }}>
      <PredictaTextWrapper>
        <PredictaText>
          Nine Latin American countries are among the Top 30 in Deaths per
          Million Population
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
              <td>Hungary</td>
              <td>3.040</td>
            </tr>
            <tr>
              <td>Czechia</td>
              <td>2.820</td>
            </tr>
            <tr>
              <td>Bosnia and Herzegovina</td>
              <td>2.792</td>
            </tr>
            <tr>
              <td>North Macedonia</td>
              <td>2.602</td>
            </tr>
            <tr>
              <td>Bulgaria</td>
              <td>2.518</td>
            </tr>
            <tr>
              <td>Slovakia</td>
              <td>2.251</td>
            </tr>
            <tr id="highlighted">
              <td>Brazil</td>
              <td>2.189</td>
            </tr>
            <tr>
              <td>Belgium</td>
              <td>2.157</td>
            </tr>
            <tr id="highlighted">
              <td>Peru</td>
              <td>2.136</td>
            </tr>
            <tr>
              <td>Italy</td>
              <td>2.082</td>
            </tr>
            <tr>
              <td>Croatia</td>
              <td>1.951</td>
            </tr>
            <tr>
              <td>Poland</td>
              <td>1.928</td>
            </tr>
            <tr>
              <td>United Kingdom</td>
              <td>1.907</td>
            </tr>
            <tr>
              <td>Slovenia</td>
              <td>1.800</td>
            </tr>
            <tr>
              <td>United States of America</td>
              <td>1.774</td>
            </tr>
            <tr id="highlighted">
              <td>Mexico</td>
              <td>1.754</td>
            </tr>
            <tr id="highlighted">
              <td>Colombia</td>
              <td>1.742</td>
            </tr>
            <tr id="highlighted">
              <td>Argentina</td>
              <td>1.720</td>
            </tr>
            <tr>
              <td>Portugal</td>
              <td>1.653</td>
            </tr>
            <tr>
              <td>France</td>
              <td>1.625</td>
            </tr>
            <tr>
              <td>Spain</td>
              <td>1.604</td>
            </tr>
            <tr>
              <td>Romania</td>
              <td>1.554</td>
            </tr>
            <tr id="highlighted">
              <td>Chile</td>
              <td>1.538</td>
            </tr>
            <tr>
              <td>Moldova</td>
              <td>1.510</td>
            </tr>
            <tr>
              <td>Armenia</td>
              <td>1.501</td>
            </tr>
            <tr id="highlighted">
              <td>Panama</td>
              <td>1.495</td>
            </tr>
            <tr>
              <td>Sweden</td>
              <td>1.394</td>
            </tr>
            <tr>
              <td>Lithuania</td>
              <td>1.393</td>
            </tr>
            <tr id="highlighted">
              <td>Paraguay</td>
              <td>1.277</td>
            </tr>
            <tr id="highlighted">
              <td>Bolivia</td>
              <td>1.256</td>
            </tr>
          </tbody>
        </Table>
      </PredictaContentContainer>
    </div>
    <div className="row">
      <PredictaTextWrapper>
        <PredictaText>
          The table below presents the data concerning the first COVID-19 case
          for every country in Latin America, the date each country reached 100
          diagnosed cases, the date the lockdown policies were imposed and the
          days elapsed from 100 cases to lockdown. <br /> <br /> As the pandemic
          arrived later in Latin America in comparison with other regions of the
          world and lockdown measures were imposed promptly in most countries,
          they did not experience an aggressive first wave at the beginning.
          Actually, up to the middle of May 2020, the Latin America countries
          suffered mildly from COVID -19.
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
            <tr>
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
    <div className="row" style={{ backgroundColor: `#E8E8E8` }}>
      <PredictaTextWrapper>
        <PredictaText>
          The evolution of the pandemic in major Latin American countries is
          demonstrated in the graphs that follow, presenting Cases per 1M pop
          and Deaths per 1M Pop. We note that Chile faced an outstanding peak in
          May-June 2020, while Argentina a considerable in September-October
          2020 and an even worse one in April-May 2021.
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
          From June 2020 where for that region of the world winter starts, we
          can see a gradual increase of cases and deaths with some countries
          doing a lot worse than others. This effect is reversed around
          November’20 – January ’21 due to summer conditions, while in early
          autumn the pandemic picks up once more.
        </PredictaText>
        <PredictaSubTitle marginTop="32px" marginBottom="24px">
          Mobility per Month by Country
        </PredictaSubTitle>
        <TitleGraphic className="title-graph" />
        <MobilityLatin className="graph" />
        <PredictaText marginBottom="40px">
          The above mobility graph demonstrates the reduction of population
          mobility up the middle of May 2020, a result of the early imposed
          lockdown policies, while after that mobility systematically increases,
          with minor decrease in some countries (e.g. Peru, Chile) between
          December’20 and March ’21.
        </PredictaText>
      </PredictaContentContainer>
    </div>
    <div className="row">
      <PredictaContentContainer containerSize="normal">
        <PredictaSubTitle marginBottom="24px">
          Total Cases per 1M vs Total Deaths per 1M (Feb ‘20-May ‘21)
        </PredictaSubTitle>
        <img src="/deaths-per-1mln-latin.png" alt="deaths-per-1mln-latin" />
        <PredictaText>
          The previous scatterplot correlating Cases per 1M with Deaths per 1M
          by country, groups the Latin American countries in interesting
          clusters. <br /> <br />
          <ul>
            <li>
              Countries that are hit strongly (high number of cases and deaths),
              like Peru Argentina Brazil etc.{" "}
            </li>
            <li>
              Countries that are hit mildly or not at all (low number of cases
              and deaths), like Guatemala, Uruguay, Paraguay and Cuba{" "}
            </li>
            <li>
              Countries with exceptionally high number of deaths with respect to
              their number of diagnosed cases (Mexico, Bolivia etc.){" "}
            </li>
            <li>
              Countries with exceptionally low number of deaths with respect to
              their number of diagnosed cases (Costa Rica, Puerto Rico){" "}
            </li>
          </ul>
          An overall finding is that most Latin America countries have more than
          500 Deaths per 1M, while a considerable number of countries have more
          than 1000 Deaths per 1M.
        </PredictaText>
      </PredictaContentContainer>
    </div>
    <div className="row" style={{ backgroundColor: `#E8E8E8` }}>
      <PredictaContentContainer containerSize="normal">
        <PredictaSubTitle marginBottom="24px">
          Excess Mortality
        </PredictaSubTitle>
        <img src="/mortality-latin.png" alt="mortality-latin" />
        <PredictaText marginBottom="60px">
          Another indicator demonstrating the severity of COVID-19 pandemic in
          Latin America is the above histogram where we can see that the
          mortality due to COVID-19 (Excess Mortality) is much higher than the
          global figure.
        </PredictaText>
      </PredictaContentContainer>
    </div>
    <div className="row">
      <PredictaContentContainer containerSize="normal">
        <PredictaSubTitle marginBottom="24px">
          % Vaccinated - Dose
        </PredictaSubTitle>
        <img src="/vaccination-latin.png" alt="% Vaccinated - Dose" />
        <PredictaText>
          Most of Latin America Countries have vaccinated with at least one dose
          a small proportion of their population (less than 20%), except for
          Chile, Uruguay and Dominican Republic which vaccinated with at least
          one dose more than 30% of their population. Chile’s paradox, is that
          despite the successful vaccination program, there was a substantial
          third wave of the pandemic. The reason for this paradox is probably
          the early opening of many social activities and possibly the fact that
          one dose of vaccine is not sufficient for new mutations, such as the
          Brazilian one.
        </PredictaText>
      </PredictaContentContainer>
    </div>
  </Layout>
);

const Table = styled.table`
  width: 100%;
  max-width: ${(props) => props.maxWidth};
  margin: 0 auto 80px;
  td {
    line-height: 1;
    color: #606060;
  }
  .width {
    width: 160px;
    padding: 5px 24px;
  }
  #highlighted {
    td {
      color: white;
    }
  }
  .gray-td {
    td {
      background-color: #f6f6f6;
    }
  }
`;

export default GeneralFindingsLatin;
