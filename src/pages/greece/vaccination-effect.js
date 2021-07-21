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

const VaccinationEffect = (props) => (
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
      THE EFFECT OF VACCINATIONS
    </PredictaTitle>
    <PredictaTextWrapper>
      <PredictaText marginBottom="120px">
        Greece adopted a complete vaccination policy for its citizens. That is
        all necessary vaccination doses were planned in advanced for every
        candidate wishing to be vaccinated. Other European countries planned to
        vaccinate as many as possible citizens with at least the first dose. The
        results of the alternative approaches are presented in the following
        graph, where we can see that while Greece is below the European rate by
        5%, concerning the citizens vaccinated by minimum 1 dose (42%), is ahead
        by 1% concerning the fully vaccinated population (24%).
      </PredictaText>
    </PredictaTextWrapper>
    <div className="row" style={{ backgroundColor: `#E8E8E8` }}>
      <PredictaContentContainer marginTop="60px" containerSize="normal">
        <PredictaSubTitle
          marginBottom="20px"
          marginTop="120px"
          id="first-section"
        >
          Greece vs Europe Vaccinations
        </PredictaSubTitle>
        <img
          src="/depth-greece/compare-vaccination-europe.png"
          alt="Compare vaccination Europe Greece"
        />
      </PredictaContentContainer>
    </div>
    <div className="row">
      <PredictaContentContainer marginTop="60px" containerSize="normal">
        <PredictaTextWrapper>
          <PredictaText marginBottom="60px">
            The vaccination policy is dependent on the citizens’ age,
            prioritizing older people to minimize the risk of infection, but it
            is also influenced by the citizens’ will to be vaccinated. The
            following graph demonstrates the evolution of vaccination by age
            group.
          </PredictaText>
        </PredictaTextWrapper>
        <PredictaSubTitle
          marginBottom="20px"
          marginTop="120px"
          id="first-section"
        >
          Vaccination % by min 1 Dose
        </PredictaSubTitle>
        <img
          src="/depth-greece/min-1-dose.jpg"
          alt="Compare vaccination Europe Greece"
        />
      </PredictaContentContainer>
    </div>
    <div className="row" style={{ backgroundColor: `#E8E8E8` }}>
      <PredictaContentContainer marginTop="60px" containerSize="normal">
        <PredictaTextWrapper>
          <PredictaText marginBottom="60px">
            In the following three graphs, the vaccination effect on the
            pandemic is demonstrated taking into account two major age groups
            (0-64 vs 65+) and their vaccinated percentage. In the cases graph we
            can see clearly that the older group, once reaching 50% vaccination
            produces smaller numbers of cases than the younger group. This
            difference increases further, once the total population reaches 25%
            vaccination. Similarly, death rates of both age groups coincide,
            once 25% of the total population is vaccinated and ICU beds
            occupation is lower for the older group.
          </PredictaText>
        </PredictaTextWrapper>
        <PredictaContentContainer marginTop="100px" containerSize="normal">
          <PredictaSubTitle marginTop="100px" id="first-section">
            Cases as % of 3rd Wave Peak
          </PredictaSubTitle>
          <img
            src="/depth-greece/cases-3rd-vawe-peak.png"
            alt="cases-3rd-vawe-peak"
          />
        </PredictaContentContainer>
        <PredictaContentContainer marginTop="100px" containerSize="normal">
          <PredictaSubTitle marginTop="100px" id="first-section">
            Deaths as % of 3rd Wave Peak
          </PredictaSubTitle>
          <img
            src="/depth-greece/cases-3vawe-peak.png"
            alt="cases-3vawe-peak"
          />
        </PredictaContentContainer>
        <PredictaContentContainer marginTop="100px" containerSize="normal">
          <PredictaSubTitle marginTop="100px" id="first-section">
            ICU as % of 3rd Wave Peak
          </PredictaSubTitle>
          <img
            src="/depth-greece/icu-3vawe-peak.png"
            alt="Compare vaccination Europe Greece"
          />
        </PredictaContentContainer>
      </PredictaContentContainer>
    </div>
  </Layout>
);

export default VaccinationEffect;
