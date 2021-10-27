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

const measuresMobMetadata = {
  Title: "Measures & Mobility | Greece & the Covid-19 Pandemic",
  Keywords: [`covid analytics`, `predicta analytics`, `covid`, `predicta`],
  Description:
    "The pandemic evolution in Greece can be further analyzed and explained, examining government preventive policies and their effect on citizens behavior and compliance.",
  Image: "/predicta-icon.png",
  url: "https://www.predicta4covid.com/",
  titleTemplate: "Measures & Mobility | Greece & the Covid-19 Pandemic",
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

const MeasuresMobility = (props) => (
  <Layout location={props.location}>
    <SEO
      title={measuresMobMetadata.Title}
      keywords={measuresMobMetadata.Keywords}
      description={measuresMobMetadata.Description}
      image={measuresMobMetadata.Image}
      url={measuresMobMetadata.url}
      titleTemplate={measuresMobMetadata.titleTemplate}
    />
    <DepthSoon
      title={DepthGreeceData.title}
      navItems={DepthGreeceData.navItems}
    />
    <PredictaTitle marginBottom="80px" marginTop="120px" id="first-section">
      MEASURES &amp; MOBILITY
    </PredictaTitle>
    <PredictaTextWrapper>
      <PredictaText marginBottom="120px">
        The pandemic evolution in Greece can be further analyzed and explained,
        examining government preventive policies and their effect on citizens
        behavior and compliance. <br /> <br /> The graphs below demonstrate how
        the government preventive measures influence the population mobility,
        which consequently affected the virus spread through time.
      </PredictaText>
    </PredictaTextWrapper>
    <div className="row" style={{ backgroundColor: `#E8E8E8` }}>
      <PredictaSubTitle marginBottom="30px">
        Mobility MA 7 Days - Positivity MA 7 Days - Cases MA 7 Days
      </PredictaSubTitle>
      <PredictaContentContainer
        marginTop="20px"
        containerSize="large"
        marginBottom="60px"
      >
        <img
          src="/depth-greece/mobility-positivity-greece.png"
          alt="Mobility MA 7 Days"
        />
      </PredictaContentContainer>
    </div>
    <div className="row">
      <PredictaSubTitle marginBottom="30px">
        Transportation MA 7 Days - Workplaces MA 7 Days - Cases 1M MA 7 Days
      </PredictaSubTitle>
      <PredictaContentContainer
        marginTop="20px"
        containerSize="large"
        marginBottom="60px"
      >
        <img
          src="/depth-greece/transportation-workplace.png"
          alt="Transportation MA 7 Days"
        />
      </PredictaContentContainer>
      <PredictaTextWrapper>
        <PredictaText marginBottom="30px">
          Early imposement of drastic measures, such as schools closure and
          general lockdown, seem to be the success factors during the first wave
          of the pandemic. During this period (March, April 2020), the
          population mobility was reduced by ~85%, restraining the spread of the
          virus. Transportation and Workplaces Mobility decreased together until
          the re-opening of the economy in May, when this pattern started to
          change. <br /> <br /> During the summer months, with the additional
          help of the high temperatures, the pandemic was also well-handled
          despite the fact that we note increased mobility in all means of
          transport (trains, ships etc.) including incoming foreign tourists. A
          low peak in Workplaces mobility is noted in August due to the majority
          of holiday leaves.
        </PredictaText>
      </PredictaTextWrapper>
    </div>
    <div className="row" style={{ backgroundColor: `#E8E8E8` }}>
      <PredictaTextWrapper>
        <PredictaText marginBottom="30px">
          During the autumn the extra measure of wearing protective masks
          everywhere was imposed as the second wave of the pandemic was in
          progress. But mobility was only half reduced compared to the first
          lockdown, as a second strict lockdown would have been disastrous for
          the economy. <br /> <br /> Despite the noticed reduced mobility from
          November ’20 until April ’21, resulting from the 2nd (November ’20)
          and the 3rd lockdown (February ’21), the effect on the spread of the
          virus is not as successful as the one during the first lockdown (March
          ’20). <br /> <br /> Domestic infection, as well as the more contagious
          British mutation, possibly explain this phenomenon.
        </PredictaText>
      </PredictaTextWrapper>
      <PredictaSubTitle marginBottom="30px">
        Cases per 1M - Positivity MA 7 - Tests per 1M
      </PredictaSubTitle>
      <PredictaContentContainer
        marginTop="20px"
        containerSize="normal"
        marginBottom="30px"
      >
        <img
          src="/depth-greece/cases-positivity-greece.png"
          alt="Cases per 1M - Positivity MA 7 - Tests per 1M"
        />
        <PredictaTextWrapper>
          <PredictaText marginBottom="30px">
            From the end of the summer (September 2020) the number of tests
            performed were substantially increased for the local population,
            resulting to higher values of positivity as the virus spread started
            to increase, especially at the period of 2nd and 3rd Wave. This
            policy greatly facilitated early detection of the pandemic trend,
            depicted by the above noted pattern of the three entities (tests,
            cases, positivity), which tend to converge as the virus outbreaks.
            Summer ’21 was greatly affected by vaccination, testing and relaxed
            restriction policies.
          </PredictaText>
        </PredictaTextWrapper>
      </PredictaContentContainer>
    </div>
    <div className="row">
      <PredictaSubTitle marginBottom="30px">
        Milestones of the Greek pandemic
      </PredictaSubTitle>
      <PredictaContentContainer marginTop="60px" containerSize="normal">
        <Table className="metrics-table" maxWidth="480px">
          <thead>
            <tr>
              <th>Milestone</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Date of First Case</td>
              <td>27/2/2020</td>
            </tr>
            <tr>
              <td>Closing Schools</td>
              <td>11/3/2020</td>
            </tr>
            <tr>
              <td>Date of 100th Case</td>
              <td>13/3/2020</td>
            </tr>
            <tr>
              <td>1st Lockdown</td>
              <td>23/3/2020</td>
            </tr>
            <tr>
              <td>Peak of Curve 1st Wave</td>
              <td>4/4/2020</td>
            </tr>
            <tr>
              <td>Opening High Schools</td>
              <td>11/5/2020</td>
            </tr>
            <tr>
              <td>Opening Primary Schools</td>
              <td>1/6/2020</td>
            </tr>
            <tr>
              <td>Open Tourism</td>
              <td>1/7/2020</td>
            </tr>
            <tr>
              <td>Opening Schools</td>
              <td>14/9/2020</td>
            </tr>
            <tr>
              <td>Teleworking - 40%</td>
              <td>26/9/2020</td>
            </tr>
            <tr>
              <td>Face Masks - Obligatory</td>
              <td>22/10/2020</td>
            </tr>
            <tr>
              <td>Closing Restaurants - Café</td>
              <td>2/11/2020</td>
            </tr>
            <tr>
              <td>2nd Lockdown</td>
              <td>7/11/2020</td>
            </tr>
            <tr>
              <td>3rd Lockdown</td>
              <td>12/2/2021</td>
            </tr>
          </tbody>
        </Table>
      </PredictaContentContainer>
    </div>
    <div className="row" style={{ backgroundColor: `#E8E8E8` }}>
      <PredictaTextWrapper>
        <PredictaText marginBottom="60px">
          In the following graph it is impressive to see the negative
          correlation between government restrictions and the spread intensity
          as depicted by the Rt index.
        </PredictaText>
      </PredictaTextWrapper>
      <PredictaSubTitle marginBottom="30px">
        Government Stringency Index MA 7 - Rt
      </PredictaSubTitle>
      <PredictaContentContainer
        marginTop="20px"
        containerSize="normal"
        marginBottom="30px"
      >
        <img
          src="/depth-greece/government-stringency.png"
          alt="Government Stringency Index MA 7 - Rt"
        />
      </PredictaContentContainer>
      <PredictaTextWrapper>
        <PredictaText marginBottom="60px">
          The Rt curve shows the speed of the spread at specific time intervals
          and how it is influenced by measures’ stringency. It is apparent that
          these two metrics are strongly negatively correlated, that is as the
          one increases the other decreases, except from the period of
          Feb’21-Mar’21, when despite Government Measures the Rt increased,
          mostly because of domestic infection and the more contagious British
          mutation.
        </PredictaText>
      </PredictaTextWrapper>
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

export default MeasuresMobility;
