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

const greeceGeneralMetadata = {
  Title: "General Findings | Greece & the Covid-19 Pandemic",
  Keywords: [`covid analytics`, `predicta analytics`, `covid`, `predicta`],
  Description:
    "Geographical characteristics and government policies differentiation from Western Europe in terms of the effects of the pandemic",
  Image: "/predicta-icon.png",
  url: "https://www.predicta4covid.com/",
  titleTemplate: "General Findings | Greece & the Covid-19 Pandemic",
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
      title: "Measures Mobility-RT",
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
        During the first wave of the pandemic (February to April 2020), Greece
        demonstrated a remarkable performance, as result of the prompt
        governmental response. From September 2020 onwards when the second wave
        developed the pandemic proved to be much more severe, due to limited
        restrictions, accompanied by colder weather which facilitated the
        spread. A similar situation describes the third wave which hit the
        country from Ferbruary’21 until May’21, when the containenment of
        pandemic was achieved.
        <br /> <br />
        Up to the end of August, the COVID-19 pandemic concequences seemed under
        control with only 262 deaths recorded. September and October showed the
        first signs that the worst was yet to come with 358 deaths recorded.
        Consequently, November’s infection spread had already started to expand
        with a positivity rate of about 8% and 1701 deaths recorded which is 21%
        of the total deaths to date. The attempt to contain the pandemic is
        reflected by the increasing number of tests performed, reaching 71k
        Τests per 1M population in November.
        <br /> <br />
        The substantial increase in Tests performed from November’20 onwards,
        combined with the quarantine measures imposed, reduced the spread of the
        pandemic during the next couple of months. From February’21 onwards an
        intense third wave hit once more the country. During this third wave,
        despite the high number of Tests (over – 100.000 in 1M), the fatigue of
        the population prevented the discipline to the quarantine measures,
        resulting in similar morbidity as the one of the second wave.
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
            <td>Feb&lsquo;20</td>
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
            <td>Mar&lsquo;20</td>
            <td>1.208</td>
            <td>0,3%</td>
            <td>43</td>
            <td>0,4%</td>
            <td>3,6%</td>
            <td>3,5%</td>
            <td>113</td>
            <td>4</td>
            <td>1605</td>
            <td>7,0%</td>
          </tr>
          <tr>
            <td>Apr&lsquo;20</td>
            <td>1.364</td>
            <td>0,3%</td>
            <td>96</td>
            <td>0,8%</td>
            <td>7,0%</td>
            <td>5,4%</td>
            <td>127</td>
            <td>9</td>
            <td>5.607</td>
            <td>2,3%</td>
          </tr>
          <tr>
            <td>May&lsquo;20</td>
            <td>339</td>
            <td>0,1%</td>
            <td>36</td>
            <td>0,3%</td>
            <td>10,6%</td>
            <td>6,0%</td>
            <td>32</td>
            <td>3</td>
            <td>10.107</td>
            <td>0,3%</td>
          </tr>
          <tr>
            <td>Jun&lsquo;20</td>
            <td>475</td>
            <td>0,1%</td>
            <td>16</td>
            <td>0,1%</td>
            <td>3,4%</td>
            <td>5,6%</td>
            <td>44</td>
            <td>1</td>
            <td>12.689</td>
            <td>0,3%</td>
          </tr>
          <tr>
            <td>Jul&lsquo;20</td>
            <td>1.011</td>
            <td>0,3%</td>
            <td>12</td>
            <td>0,1%</td>
            <td>1,2%</td>
            <td>4,6%</td>
            <td>94</td>
            <td>1</td>
            <td>19.871</td>
            <td>0,5%</td>
          </tr>
          <tr>
            <td>Aug&lsquo;20</td>
            <td>5.733</td>
            <td>1,4%</td>
            <td>59</td>
            <td>0,5%</td>
            <td>1,0%</td>
            <td>2,6%</td>
            <td>535</td>
            <td>6</td>
            <td>41.204</td>
            <td>1,3%</td>
          </tr>
          <tr>
            <td>Sep&lsquo;20</td>
            <td>7.989</td>
            <td>2,0%</td>
            <td>126</td>
            <td>1,0%</td>
            <td>1,6%</td>
            <td>2,1%</td>
            <td>745</td>
            <td>12</td>
            <td>35.468</td>
            <td>2,1%</td>
          </tr>
          <tr>
            <td>Oct&lsquo;20</td>
            <td>19.073</td>
            <td>4,7%</td>
            <td>232</td>
            <td>1,9%</td>
            <td>1,2%</td>
            <td>1,7%</td>
            <td>1.778</td>
            <td>22</td>
            <td>50.837</td>
            <td>3,5%</td>
          </tr>
          <tr>
            <td>Nov&lsquo;20</td>
            <td>67.031</td>
            <td>16,7%</td>
            <td>1.701</td>
            <td>14,1%</td>
            <td>2,5%</td>
            <td>2,2%</td>
            <td>6.250</td>
            <td>159</td>
            <td>70.789</td>
            <td>8,8%</td>
          </tr>
          <tr>
            <td>Dec&lsquo;20</td>
            <td>33.691</td>
            <td>8,4%</td>
            <td>2.467</td>
            <td>20,5%</td>
            <td>7,3%</td>
            <td>3,5%</td>
            <td>3.141</td>
            <td>230</td>
            <td>76.343</td>
            <td>4,1%</td>
          </tr>
          <tr>
            <td>Jan&lsquo;21</td>
            <td>18.107</td>
            <td>4,5%</td>
            <td>958</td>
            <td>8,0%</td>
            <td>5,3%</td>
            <td>3,7%</td>
            <td>1.688</td>
            <td>89</td>
            <td>76.640</td>
            <td>2,2%</td>
          </tr>
          <tr>
            <td>Feb&lsquo;21</td>
            <td>34.143</td>
            <td>8,5%</td>
            <td>708</td>
            <td>5,9%</td>
            <td>2,1%</td>
            <td>3,4%</td>
            <td>3.184</td>
            <td>66</td>
            <td>101.175</td>
            <td>3,1%</td>
          </tr>
          <tr>
            <td>Mar&lsquo;21</td>
            <td>70.246</td>
            <td>17,5%</td>
            <td>1.549</td>
            <td>12,9%</td>
            <td>2,2%</td>
            <td>3,1%</td>
            <td>6.550</td>
            <td>144</td>
            <td>124.712</td>
            <td>5,3%</td>
          </tr>
          <tr>
            <td>Apr&lsquo;21</td>
            <td>82.831</td>
            <td>20,6%</td>
            <td>2.298</td>
            <td>19,1%</td>
            <td>2,8%</td>
            <td>3,0%</td>
            <td>7.723</td>
            <td>214</td>
            <td>148.128</td>
            <td>5,2%</td>
          </tr>
          <tr>
            <td>May&lsquo;21</td>
            <td>58.393</td>
            <td>14,5%</td>
            <td>1.739</td>
            <td>14,4%</td>
            <td>3,0%</td>
            <td>3,0%</td>
            <td>5.445</td>
            <td>162</td>
            <td>138.239</td>
            <td>3,9%</td>
          </tr>
          <tr>
            <td>Total</td>
            <td>401.638</td>
            <td></td>
            <td>12.040</td>
            <td></td>
            <td>3,0%</td>
            <td></td>
            <td>37.450</td>
            <td>1123</td>
            <td>913.414</td>
            <td>4,1%</td>
          </tr>
        </tbody>
      </Table>
    </PredictaContentContainer>
    <div className="row" style={{ backgroundColor: `#E8E8E8` }}>
      <PredictaTextWrapper>
        <PredictaText>
          The evolution of the infection severity is best demonstrated in the
          graphs that follow below:
        </PredictaText>
      </PredictaTextWrapper>
      <PredictaContentContainer marginTop="60px" containerSize="large">
        <SectionSideBySide
          leftSide={
            <>
              <PredictaSubTitle>Cases per 15 Days</PredictaSubTitle>
              <img
                src="/depth-greece/cases-per-15-days.png"
                alt="Cases per 15 Days"
              />
            </>
          }
          rightSide={
            <>
              <PredictaSubTitle>Deaths per 15 Days</PredictaSubTitle>
              <img
                src="/depth-greece/deaths-per-15-days.png"
                alt="Deaths per 15 Days"
              />
            </>
          }
        />
      </PredictaContentContainer>
      <PredictaTextWrapper>
        <PredictaText marginTop="40px">
          In the second wave cases reach their peak with ~35000 infections in
          the middle of November, while deaths reached their peak with 1366
          deaths within the first two weeks of December. While in the third
          wave, from March’21 to May’21, cases reached a peak of 44.000, but
          deaths reached a marginal lower peak of 1180 during the last two weeks
          of April. The lower death peak of the third wave is probably explained
          by the vaccination policy which started in January’21 with the older
          part of the population.
        </PredictaText>
      </PredictaTextWrapper>
    </div>
    <div className="row">
      <PredictaTextWrapper>
        <PredictaText>
          Greece during the second and third wave of the pandemic falls among
          the top 20 countries globally with respect to number of Deaths per 1M
          population.
        </PredictaText>
      </PredictaTextWrapper>
      <PredictaContentContainer marginTop="60px" containerSize="normal">
        <PredictaSubTitle>
          Ranking of Greece - Death per Million by Week
        </PredictaSubTitle>
        <img
          src="/depth-greece/deaths-per-million.png"
          alt="deaths per million greece"
        />
      </PredictaContentContainer>
    </div>
    <div className="row" style={{ backgroundColor: `#E8E8E8` }}>
      <PredictaTextWrapper>
        <PredictaText marginTop="40px" marginBottom="40px">
          Comparing Deaths per 1M population between Greece and the rest of
          Europe, all along the pandemic evolution, we note that Greece presents
          worse numbers than the rest of Europe during the second and third
          wave.
        </PredictaText>
      </PredictaTextWrapper>
      <PredictaSubTitle>
        Daily Deaths per 1M MA7 - Greece vs Europe
      </PredictaSubTitle>
      <PredictaContentContainer marginTop="60px" containerSize="large">
        <img
          src="/depth-greece/daily-deaths-per-1M-MA7.png"
          alt="Deaths and ICU patients"
        />
      </PredictaContentContainer>

      <PredictaTextWrapper>
        <PredictaText marginTop="40px" marginBottom="40px">
          Based on models’ estimations for Greece, we have reached a conclusion
          that cases reported are about 21% of the total infections considering
          both asymptomatic and pre-symptomatic cases. Accordingly, the
          estimated actual mortality (IFR) is about 0.5% (4 times lower than
          mortality calculated on diagnosed cases). Hospital and ICU admissions
          on the reported cases, are about 7% and 3% accordingly.
        </PredictaText>
      </PredictaTextWrapper>
    </div>
    <div className="row">
      <PredictaSubTitle>Reported vs Estimated Cases</PredictaSubTitle>
      <PredictaContentContainer marginTop="60px" containerSize="normal">
        <img
          src="/depth-greece/reported-estimates.png"
          alt="Reported vs Estimated Cases"
        />
      </PredictaContentContainer>
    </div>
    <div className="row" style={{ backgroundColor: `#E8E8E8` }}>
      <PredictaContentContainer marginTop="60px" containerSize="large">
        <SectionSideBySide
          leftSide={
            <>
              <PredictaSubTitle>
                Estimated Real Cases &amp; Mortality
              </PredictaSubTitle>
              <img
                src="/depth-greece/real-cases-mortality.png"
                alt="Estimated Real Cases and Mortality"
              />
            </>
          }
          rightSide={
            <>
              <PredictaSubTitle>
                Hospitalizations &amp; ICU incidents
              </PredictaSubTitle>
              <img
                src="/depth-greece/hospitalization-isu.png"
                alt="Hospitalizations and ICU incidents"
              />
            </>
          }
        />
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
