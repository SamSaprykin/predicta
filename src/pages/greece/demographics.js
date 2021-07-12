import React from "react";
import styled from "styled-components";
import Layout from "../../components/layout";
import DepthSoon from "../../components/in-depth/DepthSoon";
import {
  PredictaTextWrapper,
  PredictaTitle,
  PredictaSubTitle,
  PredictaText,
  PredictaContentContainer,
  SectionSideBySide,
} from "../../components/BlockElements/BlockElements";
import SEO from "../../components/seo";

const demographicsMetadata = {
  Title: "Demographics | Greece & the Covid-19 Pandemic",
  Keywords: [`covid analytics`, `predicta analytics`, `covid`, `predicta`],
  Description:
    "Demographic characteristics of infected populations altered considerably during the various phases of the pandemic",
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
      DEMOGRAPHICS - AGE EFFECT
    </PredictaTitle>
    <PredictaTextWrapper>
      <PredictaText marginBottom="120px">
        Examining the COVID-19 demographics, we note a difference in patients’
        age, with younger infected people during the summer period due to
        holiday gatherings and vacations, while in the autumn the working
        population was the one mostly affected. The majority of deceased people
        had underlying health conditions and were of old age. Overall, 3% of the
        reported cases died and their median age was 78 years. Finally, men have
        a higher risk to die from COVID-19 compared to women (3.4% vs 2.6%).
      </PredictaText>
    </PredictaTextWrapper>
    <div className="row" style={{ backgroundColor: `#E8E8E8` }}>
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
              <td>Feb-May&apos;20</td>
              <td>55,1%</td>
              <td>44,9%</td>
              <td>47,3</td>
              <td>48,0</td>
              <td>46,5</td>
            </tr>
            <tr>
              <td>June-Aug&apos;20</td>
              <td>55,0%</td>
              <td>55,0%</td>
              <td>40,0</td>
              <td>40,0</td>
              <td>39,0</td>
            </tr>
            <tr>
              <td>Sep-Nov&apos;20</td>
              <td>53,0%</td>
              <td>47,0%</td>
              <td>45,0</td>
              <td>44,3</td>
              <td>45,4</td>
            </tr>
            <tr>
              <td>Dec-Feb&apos;21</td>
              <td>51,7%</td>
              <td>48,3%</td>
              <td>45,0</td>
              <td>45,4</td>
              <td>46,6</td>
            </tr>
            <tr>
              <td>Mar-May&apos;21</td>
              <td>51,2%</td>
              <td>48,8%</td>
              <td>44,0</td>
              <td>44,4</td>
              <td>45,9</td>
            </tr>
            <tr className="total">
              <td>Total</td>
              <td>51,8%</td>
              <td>48,2%</td>
              <td>45,2</td>
              <td>44,5</td>
              <td>45,8</td>
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
              <td>Feb-May&apos;20</td>
              <td>73,1%</td>
              <td>26,9%</td>
              <td>76,0</td>
              <td>75,0</td>
              <td>78,8</td>
            </tr>
            <tr>
              <td>June-Aug&apos;20</td>
              <td>64,5%</td>
              <td>35,5%</td>
              <td>77,0</td>
              <td>77,0</td>
              <td>79,0</td>
            </tr>
            <tr>
              <td>Sep-Nov&apos;20</td>
              <td>59,4%</td>
              <td>40,6%</td>
              <td>78,0</td>
              <td>77,0</td>
              <td>79,0</td>
            </tr>
            <tr>
              <td>Dec-Feb&apos;21</td>
              <td>58,8%</td>
              <td>41,2%</td>
              <td>77,0</td>
              <td>76,7</td>
              <td>79,1</td>
            </tr>
            <tr>
              <td>Mar-May&apos;21</td>
              <td>57,9%</td>
              <td>42,1%</td>
              <td>78,0</td>
              <td>77,5</td>
              <td>80,0</td>
            </tr>
            <tr className="total">
              <td>Total</td>
              <td>58,7%</td>
              <td>41,3%</td>
              <td>78,3</td>
              <td>77,1</td>
              <td>79,5</td>
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
              <td>Feb-May&apos;20</td>
              <td>6,0%</td>
              <td>8,0%</td>
              <td>3,6%</td>
              <td>92,0%</td>
              <td>8,0%</td>
            </tr>
            <tr>
              <td>June-Aug&apos;20</td>
              <td>1,2%</td>
              <td>1,4%</td>
              <td>1,0%</td>
              <td>93,5%</td>
              <td>6,5%</td>
            </tr>
            <tr>
              <td>Sep-Nov&apos;20</td>
              <td>2,2%</td>
              <td>2,5%</td>
              <td>1,9%</td>
              <td>96,6%</td>
              <td>3,4%</td>
            </tr>
            <tr>
              <td>Dec-Feb&apos;21</td>
              <td>3,4%</td>
              <td>3,9%</td>
              <td>2,9%</td>
              <td>95,7%</td>
              <td>4,3%</td>
            </tr>
            <tr>
              <td>Mar-May&apos;21</td>
              <td>3,0%</td>
              <td>3,4%</td>
              <td>2,6%</td>
              <td>95,1%</td>
              <td>4,9%</td>
            </tr>
            <tr className="total">
              <td>Total</td>
              <td>3,0%</td>
              <td>3,4%</td>
              <td>2,6%</td>
              <td>95,5%</td>
              <td>4,5%</td>
            </tr>
          </tbody>
        </Table>
      </PredictaContentContainer>
    </div>
    <div className="row">
      <PredictaTextWrapper>
        <PredictaText marginTop="40px" marginBottom="40px">
          The following graphs presenting weekly cases and deaths during the 3rd
          wave demonstrate the age effect, which is influenced by the
          vaccination program progress. We note a much higher number of cases of
          age under 64 years, and much lower deaths in the same age group, while
          the opposite trend is depicted in the age group 65+.
        </PredictaText>
      </PredictaTextWrapper>
      <PredictaContentContainer marginTop="60px" containerSize="large">
        <SectionSideBySide
          leftSide={
            <>
              <PredictaSubTitle>Cases</PredictaSubTitle>
              <img
                src="/depth-greece/demog-cases.png"
                alt="Demographics cases"
              />
            </>
          }
          rightSide={
            <>
              <PredictaSubTitle>Deaths</PredictaSubTitle>
              <img
                src="/depth-greece/demog-deaths.png"
                alt="Demographics deaths"
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
  #highlighted {
    td {
      color: white;
    }
  }

  .total {
    td {
      font-weight: 700;
    }
  }
`;

export default Demographics;
