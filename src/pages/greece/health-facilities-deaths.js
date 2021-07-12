import React from "react";
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

const healthFacMetadata = {
  Title: "Health Facilities & Deaths | Greece & the Covid-19 Pandemic",
  Keywords: [`covid analytics`, `predicta analytics`, `covid`, `predicta`],
  Description:
    "Greece increased ICU beds to deal with increased demand as a result of the pandemic",
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

const HealthFacilities = (props) => (
  <Layout location={props.location}>
    <SEO
      title={healthFacMetadata.Title}
      keywords={healthFacMetadata.Keywords}
      description={healthFacMetadata.Description}
      image={healthFacMetadata.Image}
      url={healthFacMetadata.url}
      titleTemplate={healthFacMetadata.titleTemplate}
    />
    <DepthSoon
      title={DepthGreeceData.title}
      navItems={DepthGreeceData.navItems}
    />
    <PredictaTitle marginBottom="80px" marginTop="120px" id="first-section">
      DEATHS HEALTH SYSTEM - ICU FACILITIES
    </PredictaTitle>
    <PredictaTextWrapper>
      <PredictaText marginBottom="120px">
        The country, before the COVID-19 pandemic did not have enough ICU beds
        to cover the anticipated demand, a fact that guided the governement’s
        prompt response with lockdown policies during the first wave. In
        pararell, new ICU beds were created reaching the average (12 ICU beds
        per 100.000 population) by November 2020.
      </PredictaText>
    </PredictaTextWrapper>
    <div className="row" style={{ backgroundColor: `#E8E8E8` }}>
      <PredictaSubTitle>ICU Beds per 100,000 Pop</PredictaSubTitle>
      <PredictaContentContainer marginTop="20px" containerSize="normal">
        <img
          src="/depth-greece/icu-beds-per-100.png"
          alt="Deaths and ICU patients"
        />
      </PredictaContentContainer>
    </div>
    <div className="row">
      <PredictaTextWrapper>
        <PredictaText marginTop="40px" marginBottom="40px">
          Below we notice the obvious trend of deaths following ICU beds
          admissions. The first wave’s peak of ICU beds admissions is 93 in
          April’20, while the second and third waves peaks reached the dramatic
          numbers of 622 and 847 in December’20 and April’21 respectively.
        </PredictaText>
      </PredictaTextWrapper>
      <PredictaSubTitle>Deaths and ICU Patients</PredictaSubTitle>
      <PredictaContentContainer marginTop="20px" containerSize="normal">
        <img
          src="/depth-greece/deaths-and-ICU-patients.png"
          alt="Deaths and ICU Patients"
        />
      </PredictaContentContainer>
    </div>
    <div className="row" style={{ backgroundColor: `#E8E8E8` }}>
      <PredictaTextWrapper>
        <PredictaText marginTop="40px" marginBottom="40px">
          Health system requirements are depicted on the following figures
          regarding hospital admissions and intensice care units load for the
          3rd wave. <br /> <br />
          The following graph demonstrates the pressure on the health system
          during the 3rd wave (February ’21 to May ’21). As we can see, for most
          of this period, hospitalizations are higher than discharges. This
          trend was only reversed in the first week of May’21.
        </PredictaText>
      </PredictaTextWrapper>
      <PredictaSubTitle>
        Hospitalizations MA7 vs Discharged MA7
      </PredictaSubTitle>
      <PredictaContentContainer marginTop="20px" containerSize="normal">
        <img
          src="/depth-greece/hospitalizations-discharged.png"
          alt="Deaths and ICU patients"
        />
      </PredictaContentContainer>
    </div>
    <div className="row">
      <PredictaTextWrapper>
        <PredictaText marginTop="40px" marginBottom="40px">
          During the same period of the 3rd wave, we can see below the ICU beds
          usage by four different age groups. It is impressive to realize that
          ICU beds are highly occupied by people over 40 years of age and
          especially over 65 years. Towards the end and of April ’21 ICU beds
          occupation reached their peak at 89.8 %.
        </PredictaText>
      </PredictaTextWrapper>
      <PredictaSubTitle>ICU</PredictaSubTitle>
      <PredictaContentContainer marginTop="20px" containerSize="normal">
        <img src="/depth-greece/ICU.png" alt="Deaths and ICU patients" />
      </PredictaContentContainer>
    </div>
  </Layout>
);

export default HealthFacilities;
