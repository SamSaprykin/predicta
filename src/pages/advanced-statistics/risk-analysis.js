import React from "react";
// import { Link } from "gatsby"

import Layout from "../../components/layout";

import RiskA from "../../components/advanced-statistics/risk-analysis-a";
import RiskB from "../../components/advanced-statistics/risk-analysis-b";
import RiskC from "../../components/advanced-statistics/risk-analysis-c";
import RiskD from "../../components/advanced-statistics/risk-analysis-d";
import RiskE from "../../components/advanced-statistics/risk-analysis-e";
import RiskF from "../../components/advanced-statistics/risk-analysis-f";
import SEO from "../../components/seo";

const riskAnalysisMetadata = {
  Title: "Risk Analysis | Advanced Statistics for the Covid-19 Pandemic",
  Keywords: [`covid analytics`, `predicta analytics`, `covid`, `predicta`],
  Description:
    "Simulating the virus risk of infection effect on the society across different situations, based on size and density of gatherings/social clusters",
  Image: "/predicta-icon.png",
  url: "https://www.predicta4covid.com/",
  titleTemplate:
    "Risk Analysis | Advanced Statistics for the Covid-19 Pandemic",
};

const Index = (props) => (
  <Layout location={props.location}>
    <SEO
      title={riskAnalysisMetadata.Title}
      keywords={riskAnalysisMetadata.Keywords}
      description={riskAnalysisMetadata.Description}
      image={riskAnalysisMetadata.Image}
      url={riskAnalysisMetadata.url}
      titleTemplate={riskAnalysisMetadata.titleTemplate}
    />
    <div className="row" style={{ backgroundColor: ` rgba(234,234,234,1)` }}>
      <div className="col">
        <RiskA />
      </div>
    </div>
    <div className="row">
      <div className="col">
        <RiskB />
      </div>
    </div>
    <div className="row" style={{ backgroundColor: ` rgba(234,234,234,1)` }}>
      <div className="col">
        <RiskC />
      </div>
    </div>
  </Layout>
);

export default Index;
