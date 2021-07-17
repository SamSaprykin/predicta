import React from "react";
// import { Link } from "gatsby"
import styled from "styled-components";
import Layout from "../../components/layout";
import NavbarSubLinks from "../../components/in-depth/navbarsub";
import ChartOne from "../../components/in-depth/europe/images/vaccination/vacc-1.svg";
import ChartTwo from "../../components/in-depth/europe/images/firstwave/b.svg";
import ChartThree from "../../components/in-depth/europe/images/firstwave/c.svg";
import ChartFour from "../../components/in-depth/europe/images/firstwave/d.svg";
import ChartFive from "../../components/in-depth/europe/images/firstwave/e.svg";
import ChartSix from "../../components/in-depth/europe/images/firstwave/f.svg";
import ChartSeven from "../../components/in-depth/europe/images/firstwave/g.svg";
import ChartEight from "../../components/in-depth/europe/images/firstwave/h.svg";
import ChartNine from "../../components/in-depth/europe/images/firstwave/i.svg";
import SEO from "../../components/seo";

const europeFirstWaveMetadata = {
  Title: "The First Wave | Europe & the Covid-19 Pandemic",
  Keywords: [`covid analytics`, `predicta analytics`, `covid`, `predicta`],
  Description:
    "Statistical analysis of Europe during the first wave of the pandemic from February 2020 to May 2020",
  Image: "/predicta-icon.png",
  url: "https://www.predicta4covid.com/",
  titleTemplate: "Predicta",
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: auto;
  grid-gap: 2rem;
  align-self: center;
  justify-content: center;
  .age-table {
    width: 100%;
    max-width: 1346px;
  }
  width: 100%;
  .big-item {
    max-width: 1085px !important;
    @media (max-width: 1440px) {
      max-width: 960px !important;
    }
    @media (max-width: 1024px) {
      max-width: 768px !important;
    }
    @media (max-width: 768px) {
      padding: 0 32px;
    }
  }
`;

const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  svg {
    width: 100%;
  }
  @media (max-width: 1440px) {
    max-width: 720px;
  }
  @media (max-width: 1024px) {
    max-width: 768px;
  }
  @media (max-width: 768px) {
    padding: 0 32px;
  }
  .metrics-table {
    .wide-cell {
      min-width: 206px;
      @media (max-width: 960px) {
        min-width: auto;
      }
    }
    .mid-cell {
      min-width: 160px;
      @media (max-width: 960px) {
        min-width: auto;
      }
    }
    @media (max-width: 1440px) {
      padding: 0 32px;
      max-width: 90%;
    }

    th {
      color: #ffffff;
      font-family: "IBM Plex Sans - Medium";
      font-size: 19px;
      font-weight: 500;
      font-style: normal;
      letter-spacing: normal;
      line-height: 22.74px;
      text-align: center;
      /* Text style for "Area" */
      font-family: "IBM Plex Sans";
      font-weight: 500;
      font-style: normal;
      letter-spacing: normal;
      line-height: normal;
      @media (max-width: 768px) {
        font-size: 12px;
      }
    }
    td {
      color: #606060;
      font-family: "IBM Plex Sans - Light";
      font-size: 19px;
      font-weight: 300;
      font-style: normal;
      letter-spacing: normal;
      line-height: 22.74px;
      text-align: center;
      /* Text style for "Latin Amer" */
      font-family: "IBM Plex Sans";
      font-weight: 300;
      font-style: normal;
      letter-spacing: normal;
      line-height: normal;
      @media (max-width: 768px) {
        font-size: 12px;
      }
    }
  }
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  @media (max-width: 1440px) {
    max-width: 600px;
  }
  @media (max-width: 1024px) {
    padding: 0 32px;
  }
  p {
    font-size: 18px;
    line-height: 38px;
    @media (max-width: 1440px) {
      font-size: 16px;
      line-height: 32px;
    }
    @media (max-width: 1024px) {
      font-size: 15px;
      line-height: 30px;
    }
  }
`;

const Gap = styled.div`
  height: 2rem;

  @media (max-width: 1024px) {
  }
`;

const TitleSection = styled.h1`
  text-transform: uppercase;
  color: #222b3e;
  letter-spacing: 0px;
  font-size: 32px;
  line-height: 38px;
  margin-bottom: 0;
  @media (max-width: 1440px) {
    font-size: 28px;
    line-height: 32px;
  }
  @media (max-width: 1024px) {
    font-size: 26px;
    line-height: 30px;
  }
`;
const SubTitle = styled.h2`
  color: #222b3e;
  font-weight: 400;
  font-size: 26px;
  line-height: 38px;
  @media (max-width: 1440px) {
    font-size: 24px;
    line-height: 32px;
  }
  @media (max-width: 1024px) {
    font-size: 22px;
    line-height: 30px;
  }
`;

const FirstWave = (props) => (
  <Layout location={props.location}>
    <SEO
      title={europeFirstWaveMetadata.Title}
      keywords={europeFirstWaveMetadata.Keywords}
      description={europeFirstWaveMetadata.Description}
      image={europeFirstWaveMetadata.Image}
      url={europeFirstWaveMetadata.url}
      titleTemplate={europeFirstWaveMetadata.titleTemplate}
    />
    <div className="row" id="first-section">
      <div className="col">
        <NavbarSubLinks />

        <TitleSection>VACCINATIONS</TitleSection>
        <Gap />
        <Gap />
        <SubTitle>Vaccinated% min 1-Dose</SubTitle>
        <Grid>
          <Item>
            <ChartOne />
            <Gap />
          </Item>
        </Grid>

        <Gap />
        <TextBox>
          <p>
            Τhe above graph demonstrates the population percentage vaccinated
            with at least one dose for all the European countries. Malta, United
            Kingdom, Hungary and Iceland have achieved vaccination of minimum
            one dose for over 50% of their population.
          </p>
        </TextBox>
      </div>
    </div>

    <div
      className="row"
      style={{
        backgroundColor: `#EAEAEA`,
      }}
    >
      <div className="col">
        <TextBox>
          <p>
            Following, there is graph demonstrating the positive correlation
            between country GDP and Vaccination percentage with minimum one
            dose. We can see that poor countries have significantly lower
            percentage of vaccination, an issue which may affect negatively the
            long term pandemic containment.
          </p>
        </TextBox>

        <Grid>
          <Item>
            <img src="/vaccin.png" alt="vaccination" />
          </Item>
        </Grid>
        <Gap />
        <Gap />
        <Gap />
      </div>
    </div>
  </Layout>
);

export default FirstWave;
