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
  titleTemplate: "A Quick Comparison | Greece & the Covid-19 Pandemic",
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
      title: "Demographics Age Effect",
      linkTo: "/greece/demographics",
    },
    {
      title: "The Effect of Vaccinations",
      linkTo: "/greece/vaccination-effect",
    },
    {
      title: "Measures Mobility-RT",
      linkTo: "/greece/measures-mobility",
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
        is ranked 35th and with respect to Deaths per 1M population, Greece is
        ranked 25th.
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
                    <td>182.996</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Czechia</td>
                    <td>156.194</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Cyprus</td>
                    <td>130.005</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Slovenia</td>
                    <td>127.158</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Luxembourg</td>
                    <td>123.707</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>Netherlands</td>
                    <td>112.204</td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>Sweden</td>
                    <td>109.403</td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>Serbia</td>
                    <td>109.112</td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td>Estonia</td>
                    <td>106.597</td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td>Lithuania</td>
                    <td>106.295</td>
                  </tr>
                  <tr>
                    <td>11</td>
                    <td>Spain</td>
                    <td>103.708</td>
                  </tr>
                  <tr>
                    <td>12</td>
                    <td>France</td>
                    <td>103.390</td>
                  </tr>
                  <tr>
                    <td>13</td>
                    <td>Belgium</td>
                    <td>102.724</td>
                  </tr>
                  <tr>
                    <td>14</td>
                    <td>United Kingdom</td>
                    <td>100.705</td>
                  </tr>
                  <tr>
                    <td>15</td>
                    <td>Portugal</td>
                    <td>100.141</td>
                  </tr>
                  <tr>
                    <td>16</td>
                    <td>Monaco</td>
                    <td>95.814</td>
                  </tr>
                  <tr>
                    <td>17</td>
                    <td>Croatia</td>
                    <td>91.164</td>
                  </tr>
                  <tr>
                    <td>18</td>
                    <td>Switzerland</td>
                    <td>90.153</td>
                  </tr>
                  <tr>
                    <td>19</td>
                    <td>Liechtenstein</td>
                    <td>85.283</td>
                  </tr>
                  <tr>
                    <td>20</td>
                    <td>North Macedonia</td>
                    <td>84.440</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr id="highlighted">
                    <td>35</td>
                    <td>Greece</td>
                    <td>54.454</td>
                  </tr>
                  <tr>
                    <td>36</td>
                    <td>Ukraine</td>
                    <td>52.418</td>
                  </tr>
                  <tr>
                    <td>37</td>
                    <td>Albania</td>
                    <td>50.899</td>
                  </tr>
                  <tr>
                    <td>38</td>
                    <td>Belarus</td>
                    <td>50.758</td>
                  </tr>
                  <tr>
                    <td>39</td>
                    <td>Germany</td>
                    <td>47.190</td>
                  </tr>
                  <tr>
                    <td>40</td>
                    <td>Russia</td>
                    <td>47.084</td>
                  </tr>
                  <tr>
                    <td>41</td>
                    <td>Iceland</td>
                    <td>30.222</td>
                  </tr>
                  <tr>
                    <td>42</td>
                    <td>Norway</td>
                    <td>29.383</td>
                  </tr>
                  <tr>
                    <td>43</td>
                    <td>Finland</td>
                    <td>23.153</td>
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
                    <td>3.073</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Bosnia and Herzegovina</td>
                    <td>2.967</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>North Macedonia</td>
                    <td>2.839</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Czechia</td>
                    <td>2.833</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Montenegro</td>
                    <td>2.758</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>Bulgaria</td>
                    <td>2.686</td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>Slovakia</td>
                    <td>2.289</td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>Belgium</td>
                    <td>2.193</td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td>Italy</td>
                    <td>2.134</td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td>Croatia</td>
                    <td>2.030</td>
                  </tr>
                  <tr>
                    <td>11</td>
                    <td>United Kingdom</td>
                    <td>1.978</td>
                  </tr>
                  <tr>
                    <td>12</td>
                    <td>Poland</td>
                    <td>1.970</td>
                  </tr>
                  <tr>
                    <td>13</td>
                    <td>Slovenia</td>
                    <td>1.837</td>
                  </tr>
                  <tr>
                    <td>14</td>
                    <td>Portugal</td>
                    <td>1.722</td>
                  </tr>
                  <tr>
                    <td>15</td>
                    <td>France</td>
                    <td>1.686</td>
                  </tr>
                  <tr>
                    <td>16</td>
                    <td>Spain</td>
                    <td>1.683</td>
                  </tr>
                  <tr>
                    <td>17</td>
                    <td>Romania</td>
                    <td>1.590</td>
                  </tr>
                  <tr>
                    <td>18</td>
                    <td>Moldova</td>
                    <td>1.582</td>
                  </tr>
                  <tr>
                    <td>19</td>
                    <td>Lithuania</td>
                    <td>1.502</td>
                  </tr>
                  <tr>
                    <td>20</td>
                    <td>Liechtenstein</td>
                    <td>1.433</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr id="highlighted">
                    <td>25</td>
                    <td>Greece</td>
                    <td>1.267</td>
                  </tr>
                  <tr>
                    <td>26</td>
                    <td>Russia</td>
                    <td>1.246</td>
                  </tr>
                  <tr>
                    <td>27</td>
                    <td>Ukraine</td>
                    <td>1.240</td>
                  </tr>
                  <tr>
                    <td>28</td>
                    <td>Austria</td>
                    <td>1.186</td>
                  </tr>
                  <tr>
                    <td>29</td>
                    <td>Switzerland</td>
                    <td>1.185</td>
                  </tr>
                  <tr>
                    <td>30</td>
                    <td>Germany</td>
                    <td>1.104</td>
                  </tr>
                  <tr>
                    <td>41</td>
                    <td>Finland</td>
                    <td>181</td>
                  </tr>
                  <tr>
                    <td>42</td>
                    <td>Norway</td>
                    <td>153</td>
                  </tr>
                  <tr>
                    <td>43</td>
                    <td>Iceland</td>
                    <td>92</td>
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
    </div>
    <div className="row" style={{ backgroundColor: `#E8E8E8` }}>
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
    </div>
    <div className="row">
      <PredictaTextWrapper>
        <PredictaText marginTop="30px" marginBottom="60px">
          We can see below, that the general mobility of the local population is
          much higher during the summer periods compared to the European
          average, as a result of tourism.
        </PredictaText>
      </PredictaTextWrapper>
      <PredictaSubTitle>Mobility Rate MA7</PredictaSubTitle>
      <PredictaContentContainer containerSize="large">
        <img src="/depth-greece/mobility-rate.png" alt="Parks Mobility MA7" />
      </PredictaContentContainer>
    </div>
    <div className="row" style={{ backgroundColor: `#E8E8E8` }}>
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
