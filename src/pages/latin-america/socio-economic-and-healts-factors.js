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

import DiabetsPrevelance from "../../components/in-depth/latin-america/images/diabets-prevelance.svg";
import CardiovascularDeaths from "../../components/in-depth/latin-america/images/deats-cardiovascular-latin.svg";
import ObesityRate from "../../components/in-depth/latin-america/images/obesity-rate.svg";
import GpdCapita from "../../components/in-depth/latin-america/images/gpd-per-capita-latin.svg";
import ChartLatin from "../../components/in-depth/latin-america/images/chart-latin.svg";
import EmplotmentRate from "../../components/in-depth/latin-america/images/infomal-employmant-rate-latin.svg";
import SEO from "../../components/seo";

const latinSocioEconomicMetadata = {
  Title:
    "Socio-Economic and Health Factors | Latin America & the Covid-19 Pandemic",
  Keywords: [`covid analytics`, `predicta analytics`, `covid`, `predicta`],
  Description:
    "Socio-economic and health factors play a significant role in how Latin American countries have been affected by the pandemic ",
  Image: "/predicta-icon.png",
  url: "https://www.predicta4covid.com/",
  titleTemplate:
    "Socio-Economic and Health Factors | Latin America & the Covid-19 Pandemic",
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

const SocioEconomicLatin = (props) => (
  <Layout location={props.location}>
    <SEO
      title={latinSocioEconomicMetadata.Title}
      keywords={latinSocioEconomicMetadata.Keywords}
      description={latinSocioEconomicMetadata.Description}
      image={latinSocioEconomicMetadata.Image}
      url={latinSocioEconomicMetadata.url}
      titleTemplate={latinSocioEconomicMetadata.titleTemplate}
    />
    <DepthSoon
      image={DepthLatinData.image}
      title={DepthLatinData.title}
      navItems={DepthLatinData.navItems}
    />
    <PredictaTitle marginBottom="80px" marginTop="120px" id="first-section">
      SOCIO – ECONOMIC AND HEALTH FACTORS
    </PredictaTitle>
    <PredictaTextWrapper>
      <PredictaText marginBottom="40px">
        Latin American countries are considered among the poorest in the world
        with one of the lowest Living Conditions Index, as compared to Europe
        and North America. This situation is demonstrated in the following
        graphs, presenting the GDP per Capita and Living Conditions Index as
        compared to a global figure, created as an average of the European and
        North American countries.
      </PredictaText>
    </PredictaTextWrapper>
    <PredictaSubTitle>GDP Per Capita</PredictaSubTitle>
    <PredictaContentContainer marginBottom="80px" containerSize="normal">
      <img src="/gpd-capit-latin.png" alt="gpd-capit-latin.png" />
    </PredictaContentContainer>
    <div className="row" style={{ backgroundColor: `#E8E8E8` }}>
      <PredictaSubTitle>Living Conditions</PredictaSubTitle>
      <PredictaContentContainer containerSize="normal">
        <img src="/living-conditions-latin.png" alt="living-conditions-latin" />
      </PredictaContentContainer>
    </div>
    <div className="row">
      <PredictaTextWrapper>
        <PredictaText marginBottom="40px">
          We note in the graph below that the majority of poorest countries
          performs a low number of tests, while the rich countries such as
          Chile, Uruguay and Panama perform considerable higher number of tests.
          A clear effect the GDP level.
        </PredictaText>
      </PredictaTextWrapper>

      <PredictaContentContainer containerSize="normal">
        <ChartLatin className="living graph" />
      </PredictaContentContainer>
    </div>
    <div className="row" style={{ backgroundColor: `#E8E8E8` }}>
      <PredictaTextWrapper>
        <PredictaText marginBottom="40px">
          Additionally, the informal employment rate in the Latin America
          countries is among the highest in the world. Closed to 50% of the
          labor force, in informally employed, even in the wealthier countries
          like Argentina and Chile. <br /> <br /> This situation complicates
          lockdown policies, as all the informally employed citizens, cannot be
          helped by supporting social policies, therefore they tend to go out to
          seek work. Apart from that working from home is next to impossible, as
          most of the working people have hands on jobs in agriculture, retail
          and construction. This is probably the main reason for lockdown
          relaxation respect, although the pandemic keeps increasing from June
          2020 onwards.
        </PredictaText>
      </PredictaTextWrapper>
      <PredictaSubTitle>Informal Employment Rate (Total)</PredictaSubTitle>
      <PredictaContentContainer containerSize="normal">
        <EmplotmentRate className="living graph" />
      </PredictaContentContainer>
    </div>
    <div className="row">
      <PredictaTextWrapper>
        <PredictaText marginBottom="40px">
          As lockdown rules are not respected, population mobility increases and
          the spread of the virus within the same household is inevitable. Given
          that the average household size is one of the highest in the world
          (3.7 household members per household) and the multigeneration
          cohabitation is also high (33%), the spread of the virus within the
          same household is further increased, affecting fatally the elderly
          members of the household.
        </PredictaText>
      </PredictaTextWrapper>
      <PredictaContentContainer containerSize="large">
        <Table className="metrics-table" maxWidth="100%">
          <thead>
            <tr>
              <th className="width">Sub- Regions</th>
              <th className="width">Regions</th>
              <th>Average household size</th>
              <th>1 member</th>
              <th>2-3 member</th>
              <th>4-5 member</th>
              <th>6 or more members</th>
              <th className="width-small">Aged 65 years or over</th>
              <th className="width-small">Multi-Generation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Latin America</td>
              <td>Latin America &amp; the Caribbean</td>
              <td id="highlighted">3,7</td>
              <td id="highlighted">12,5%</td>
              <td id="highlighted">37,8%</td>
              <td id="highlighted">33,0%</td>
              <td id="highlighted">16,7%</td>
              <td id="highlighted">21,7%</td>
              <td id="highlighted">33,0%</td>
            </tr>
            <tr>
              <td>Balkans</td>
              <td>Eastern Europe</td>
              <td>2,9</td>
              <td>23,4%</td>
              <td>45,2%</td>
              <td>25,5%</td>
              <td>6,0%</td>
              <td>38,8%</td>
              <td>44,0%</td>
            </tr>
            <tr>
              <td>Western Europe</td>
              <td>Western Europe</td>
              <td>2,4</td>
              <td>30,3%</td>
              <td>47,8%</td>
              <td>19,7%</td>
              <td>2,2%</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Greece</td>
              <td>Western Europe</td>
              <td>2,6</td>
              <td>25,7%</td>
              <td>49,2%</td>
              <td>22,6%</td>
              <td>2,5%</td>
              <td>36,8%</td>
              <td></td>
            </tr>
            <tr>
              <td>North America</td>
              <td>North America</td>
              <td>2,5</td>
              <td>28,0%</td>
              <td>49,5%</td>
              <td>19,0%</td>
              <td>3,4%</td>
              <td>28,1%</td>
              <td>15,7%</td>
            </tr>
            <tr>
              <td>Central Europe</td>
              <td>Eastern Europe</td>
              <td>2,6</td>
              <td>28,5%</td>
              <td>45,8%</td>
              <td>21,6%</td>
              <td>4,2%</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Baltic</td>
              <td>Eastern Europe</td>
              <td>2,4</td>
              <td>31,5%</td>
              <td>48,3%</td>
              <td>17,9%</td>
              <td>2,3%</td>
              <td>37,4%</td>
              <td>31,0%</td>
            </tr>
            <tr>
              <td>Scandinavian</td>
              <td>Western Europe</td>
              <td>2,1</td>
              <td>40,3%</td>
              <td>42,6%</td>
              <td>15,5%</td>
              <td>1,6%</td>
              <td>4%</td>
              <td>3%</td>
            </tr>
            <tr>
              <td>
                <span>&amp;</span>
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Sub-Saharan Africa</td>
              <td>Sub-Saharan Africa</td>
              <td>5,0</td>
              <td>11,5%</td>
              <td>25,6%</td>
              <td>28,1%</td>
              <td>34,8%</td>
              <td>16,5%</td>
              <td>23,9%</td>
            </tr>
            <tr>
              <td>Asia - Pacific</td>
              <td>Asia-Pacific</td>
              <td>4,5</td>
              <td>9,5%</td>
              <td>30,9%</td>
              <td>32,8%</td>
              <td>26,8%</td>
              <td>20,5%</td>
              <td>44,0%</td>
            </tr>
            <tr>
              <td>Middle East and North Africa</td>
              <td>Middle East and North Africa</td>
              <td>5,5</td>
              <td>7,0%</td>
              <td>26,6%</td>
              <td>30,2%</td>
              <td>36,2%</td>
              <td>19,9%</td>
              <td>40,8%</td>
            </tr>
          </tbody>
        </Table>
      </PredictaContentContainer>
    </div>
    <div className="row" style={{ backgroundColor: `#E8E8E8` }}>
      <PredictaTextWrapper>
        <PredictaText marginBottom="42px">
          Examining the COVID-19 Case age distribution below we see that over
          70% of the cases are under the age of 50 years. Despite this positive
          factor with respect to the low risk of getting seriously sick from
          COVID-19 and dying, the anticipated effect is not experienced in Latin
          America.
        </PredictaText>
      </PredictaTextWrapper>
      <PredictaSubTitle>COVID-19 Cases Age Distribution</PredictaSubTitle>
      <PredictaContentContainer marginTop="80px" containerSize="large">
        <Table className="metrics-table" maxWidth="100%">
          <thead className="light-head">
            <tr className="bold-head">
              <th className="dark width">Ages</th>
              <th>0 - 19</th>
              <th>20 - 29</th>
              <th>30 - 39</th>
              <th>40 - 49</th>
              <th>50 - 59</th>
              <th>60 - 69</th>
              <th>70 - 79</th>
              <th>80+</th>
            </tr>
          </thead>
          <tbody>
            <tr className="light-td">
              <td className="dark">Latin America &amp; The Caribean</td>
              <td>10%</td>
              <td>20%</td>
              <td>23%</td>
              <td>18%</td>
              <td>14%</td>
              <td>9%</td>
              <td>4%</td>
              <td>3%</td>
            </tr>
          </tbody>
        </Table>
      </PredictaContentContainer>
    </div>
    <div className="row">
      <PredictaTextWrapper>
        <PredictaText marginBottom="42px">
          A potential explanation for this situation is the bad disease profiles
          of the population as described in the following graphs. Obesity rates,
          diabetes prevalence and cardiovascular which are factors that increase
          the probability to get seriously ill from COVID-19, are depict
          significantly higher percentages compared to the global figures (again
          formed by European and North America countries).
        </PredictaText>
      </PredictaTextWrapper>

      <PredictaContentContainer containerSize="large">
        <PredictaSubTitle marginBottom="24px">Obesity Rate</PredictaSubTitle>
        <ObesityRate className="graph" />
        <PredictaSubTitle marginBottom="24px">
          % of Deaths - Cardiovascular
        </PredictaSubTitle>
        <CardiovascularDeaths className="graph deaths" />
        <PredictaSubTitle marginBottom="24px">
          Diabetes Prevelance
        </PredictaSubTitle>
        <DiabetsPrevelance className="graph" />
      </PredictaContentContainer>
    </div>
  </Layout>
);

const Table = styled.table`
  width: 100%;
  max-width: ${(props) => props.maxWidth};
  margin: 0 auto 80px;
  .bold-head {
    th {
      font-weight: 700;
    }
  }

  td {
    span {
      opacity: 0;
    }
  }
  .dark {
    background-color: #222b3e !important;
    color: white !important;
    font-weight: 400;
  }
  .light-head {
    tr {
      th {
        color: #606060;
        background-color: white;
      }
    }
  }
  td {
    line-height: 1;
    color: #606060;
  }
  .width {
    width: 160px;
    padding: 5px 24px;
  }
  .width-small {
    width: 100px;
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

export default SocioEconomicLatin;
