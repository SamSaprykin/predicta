import React from "react";
import styled from "styled-components";
import Layout from "../../components/layout";
import DepthSoon from "../../components/in-depth/DepthSoon";
import {
  PredictaTextWrapper,
  PredictaTitle,
  PredictaText,
} from "../../components/BlockElements/BlockElements";
import SEO from "../../components/seo";

const latinConclusionMetadata = {
  Title: "Conclusion | Latin America & the Covid-19 Pandemic",
  Keywords: [`covid analytics`, `predicta analytics`, `covid`, `predicta`],
  Description:
    "Latin American countries overall faced unsurpassed difficulties in dealing with the Covid-19 pandemic",
  Image: "/predicta-icon.png",
  url: "https://www.predicta4covid.com/",
  titleTemplate: "Conclusion | Latin America & the Covid-19 Pandemic",
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

const SpaceElem = styled.div`
  height: 250px;
`;

const Conclusion = (props) => (
  <Layout location={props.location}>
    <SEO
      title={latinConclusionMetadata.Title}
      keywords={latinConclusionMetadata.Keywords}
      description={latinConclusionMetadata.Description}
      image={latinConclusionMetadata.Image}
      url={latinConclusionMetadata.url}
      titleTemplate={latinConclusionMetadata.titleTemplate}
    />
    <DepthSoon
      title={DepthLatinData.title}
      navItems={DepthLatinData.navItems}
    />
    <PredictaTitle marginBottom="80px" marginTop="120px">
      CONCLUSION
    </PredictaTitle>
    <PredictaTextWrapper>
      <PredictaText marginBottom="120px">
        The Latin American countries poverty level combined with the rest of the
        socioeconomic and health characteristics discussed, lead to unsurpassed
        difficulties to contain the pandemic in this region of the world with
        continuous disastrous results. More than half of the Latin American
        countries are extremely poor leading to very low percentages of
        vaccinated population.
      </PredictaText>
    </PredictaTextWrapper>
    <SpaceElem />
  </Layout>
);

export default Conclusion;
