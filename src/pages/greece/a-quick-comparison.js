import React from "react";
import styled from "styled-components";
import Layout from "../../components/layout";
import DepthSoon from "../../components/in-depth/DepthSoon";
import {
  PredictaContentContainer,
  PredictaTextWrapper,
  PredictaTitle,
  PredictaSubTitle,
  SectionSideBySide,
  PredictaText,
} from "../../components/BlockElements/BlockElements";

import SEO from "../../components/seo";

const quickComparisonMetadata = {
  Title: "A Quick Comparison | Greece & the Covid-19 Pandemic",
  Keywords: [`covid analytics`, `predicta analytics`, `covid`, `predicta`],
  Description:
    "Overall, Greece was not hit by the pandemic, as brutally as the other countries of the Western World.",
  Image: "/predicta-icon.png",
  url: "https://www.predicta4covid.com/",
  titleTemplate: "Predicta",
};
const DepthGreeceData = {
  title: "Greece",
  navItems: [
    {
      title: "General Findings",
      linkTo: "/greece/general-findings",
    },
    {
      title: "Health System ICU Facilities",
      linkTo: "/greece/health-facilities-deaths",
    },
    {
      title: "Mesures Mobility-RT",
      linkTo: "/greece/measures-mobility",
    },
    {
      title: "The Effect of Vaccinations",
      linkTo: "/greece/vaccination-effect",
    },
    {
      title: "The Success during the First Wave",
      linkTo: "/greece/success-during-the-first-wave",
    },
    {
      title: "A Quick Comparison",
      linkTo: "/greece/a-quick-comparison",
    },
    {
      title: "Demographics Age Effect",
      linkTo: "/greece/demographics",
    },
    {
      title: "Conclusion",
      linkTo: "/greece/conclusion",
    },
  ],
};

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
    <PredictaTextWrapper>
      <PredictaText marginBottom="120px">
        Comparing Greece’s overall cases and deaths with all the other European
        countries, it is obvious that the pandemic situation is far better than
        the majority of Europe. With respect to Cases per 1M population Greece
        is ranked 39th and with respect to Deaths per 1M population, Greece is
        ranked 28th.
      </PredictaText>
    </PredictaTextWrapper>
    <div className="row" style={{ backgroundColor: `#E8E8E8` }}>
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
                    <td>158.598</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Czechia</td>
                    <td>154.579</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Slovenia</td>
                    <td>120.910</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Luxembourg</td>
                    <td>114.357</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Sweden</td>
                    <td>104.005</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>Serbia</td>
                    <td>102.258</td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>Lithuania</td>
                    <td>97.482</td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>Estonia</td>
                    <td>97.228</td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td>Netherlands</td>
                    <td>95.305</td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td>Belgium</td>
                    <td>92.343</td>
                  </tr>
                  <tr>
                    <td>11</td>
                    <td>France</td>
                    <td>88.609</td>
                  </tr>
                  <tr>
                    <td>12</td>
                    <td>Croatia</td>
                    <td>86.783</td>
                  </tr>
                  <tr>
                    <td>13</td>
                    <td>Cyprus</td>
                    <td>82.989</td>
                  </tr>
                  <tr>
                    <td>14</td>
                    <td>Hungary</td>
                    <td>82.376</td>
                  </tr>
                  <tr>
                    <td>15</td>
                    <td>Portugal</td>
                    <td>81.909</td>
                  </tr>
                  <tr>
                    <td>16</td>
                    <td>Switzerland</td>
                    <td>80.105</td>
                  </tr>
                  <tr>
                    <td>17</td>
                    <td>Spain</td>
                    <td>79.042</td>
                  </tr>
                  <tr>
                    <td>18</td>
                    <td>Liechtenstein</td>
                    <td>77.831</td>
                  </tr>
                  <tr>
                    <td>19</td>
                    <td>Poland</td>
                    <td>75.286</td>
                  </tr>
                  <tr>
                    <td>20</td>
                    <td>Monaco</td>
                    <td>75.140</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr id="highlighted">
                    <td>39</td>
                    <td>Greece</td>
                    <td>37.450</td>
                  </tr>
                  <tr>
                    <td>40</td>
                    <td>Russia</td>
                    <td>34.421</td>
                  </tr>
                  <tr>
                    <td>41</td>
                    <td>Norway</td>
                    <td>23.172</td>
                  </tr>
                  <tr>
                    <td>42</td>
                    <td>Iceland</td>
                    <td>18.421</td>
                  </tr>
                  <tr>
                    <td>43</td>
                    <td>Finland</td>
                    <td>16.901</td>
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
                    <td>Hungary</td>
                    <td>3.040</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Czechia</td>
                    <td>2.820</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Bosnia & Herzegovina</td>
                    <td>2.792</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>North Macedonia</td>
                    <td>2.602</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Montenegro</td>
                    <td>2.544</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>Bulgaria</td>
                    <td>2.518</td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>Slovakia</td>
                    <td>2.251</td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>Belgium</td>
                    <td>2.157</td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td>Italy</td>
                    <td>2.082</td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td>Croatia</td>
                    <td>1.951</td>
                  </tr>
                  <tr>
                    <td>11</td>
                    <td>Poland</td>
                    <td>1.928</td>
                  </tr>
                  <tr>
                    <td>12</td>
                    <td>United Kingdom</td>
                    <td>1.907</td>
                  </tr>
                  <tr>
                    <td>13</td>
                    <td>Slovenia</td>
                    <td>1.800</td>
                  </tr>
                  <tr>
                    <td>14</td>
                    <td>Portugal</td>
                    <td>1.653</td>
                  </tr>
                  <tr>
                    <td>15</td>
                    <td>France</td>
                    <td>1.625</td>
                  </tr>
                  <tr>
                    <td>16</td>
                    <td>Spain</td>
                    <td>1.604</td>
                  </tr>
                  <tr>
                    <td>17</td>
                    <td>Romania</td>
                    <td>1.554</td>
                  </tr>
                  <tr>
                    <td>18</td>
                    <td>Moldova</td>
                    <td>1.510</td>
                  </tr>
                  <tr>
                    <td>19</td>
                    <td>Liechtenstein</td>
                    <td>1.407</td>
                  </tr>
                  <tr>
                    <td>20</td>
                    <td>Sweden</td>
                    <td>1.394</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr id="highlighted">
                    <td>28</td>
                    <td>Greece</td>
                    <td>1.123</td>
                  </tr>
                  <tr>
                    <td>29</td>
                    <td>Germany</td>
                    <td>1.058</td>
                  </tr>
                  <tr>
                    <td>30</td>
                    <td>Netherlands</td>
                    <td>1.016</td>
                  </tr>
                  <tr>
                    <td>31</td>
                    <td>Norway</td>
                    <td>147</td>
                  </tr>
                  <tr>
                    <td>32</td>
                    <td>Iceland</td>
                    <td>84</td>
                  </tr>
                </tbody>
              </Table>
            </>
          }
        />
      </PredictaContentContainer>
    </div>
    <div className="row">
      <PredictaTextWrapper>
        <PredictaText marginBottom="120px">
          In an attempt to further analyze the situation, we compare Greece with
          the most prosperous countries of Europe. On the graphs below, we can
          clearly see how citizens’ mobility differ. Greece’s pattern show that
          the general mobility was low only during the lockdown policies, while
          summer period Greece has the highest mobility. From Ferbuary’21 to
          April’21 Greece seems to have one of the highest mobility reduction
          together with United Kingdom.
        </PredictaText>
      </PredictaTextWrapper>
      <PredictaSubTitle>Mobility Rate MA7</PredictaSubTitle>
      <PredictaContentContainer containerSize="large" marginBottom="60px">
        <img
          src="/depth-greece/mobility-rate-ma7.png"
          alt="Mobility Rate MA7"
        />
      </PredictaContentContainer>
      <PredictaSubTitle>Parks Mobility MA7</PredictaSubTitle>
      <PredictaContentContainer containerSize="large">
        <img src="/depth-greece/parks-mobility.png" alt="Parks Mobility MA7" />
      </PredictaContentContainer>
      <PredictaTextWrapper>
        <PredictaText marginTop="30px" marginBottom="60px">
          It is interesting that the mobility in parks, marinas and nature was
          one of the lowest during the first wave and one of the highest during
          the summer and early autumn. The mild climate partly explains this
          pattern, while the citizens’ feelings of danger at the beginning of
          the pandemic and a pseudo-safety feeling once the virus was contained,
          explains the opposite reaction. During Nov’20 and April’21 there is
          also reduction in parks mobility but not so high as during the first
          lockdown.
        </PredictaText>
      </PredictaTextWrapper>
      <PredictaSubTitle>Test Positivity MA7</PredictaSubTitle>
      <PredictaContentContainer containerSize="large">
        <img
          src="/depth-greece/test-positivity-greece.png"
          alt="Parks Mobility MA7"
        />
      </PredictaContentContainer>
      <PredictaTextWrapper>
        <PredictaText marginTop="30px" marginBottom="60px">
          Despite, the increased mobility in the country after the 1st lockdown
          measures were relaxed, the positivity index is either at low or medium
          level compared to other European countries, which indicates the lower
          spread of the virus. <br /> <br /> In general, despite the different
          countries’ characteristics, western countries have strong connections
          worldwide, therefore it was inevitable to suffer the intense of the
          pandemic.
        </PredictaText>
      </PredictaTextWrapper>
    </div>
  </Layout>
);

const Table = styled.table`
  width: 100%;
  max-width: ${(props) => props.maxWidth};
  margin: 0 auto 80px;
  tr {
    height: 37px;
  }
`;

export default Comprasin;
