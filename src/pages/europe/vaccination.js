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
  max-width: 1080px;
  margin: 0 auto;
  svg {
    width: 100%;
  }
  @media (max-width: 1440px) {
    max-width: 768px;
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
            <img
              src="/vaccinated-one-dose-europe.png"
              alt="Vaccinated% min 1-Dose Europe"
            />
            <Gap />
          </Item>
        </Grid>

        <Gap />
        <TextBox>
          <p>
            Τhe above graph demonstrates the population percentage vaccinated
            with at least one dose for all the European countries. Many Western
            European Countries have a high percentage of vaccination, above 70%.
            On the other hand, many Eastern European Countries have a medium to
            low percent of vaccination.
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
            On the table below we can see the age distribution of vaccinations.
            It is remarkable that Western countries with high percent of
            vaccination, have also high percent of vaccination in the younger
            groups.
          </p>
        </TextBox>
        <Item>
          <table className="metrics-table">
            <thead>
              <tr>
                <th className="mid-cell">Country</th>
                <th>Vacinnated% min 1- dose</th>
                <th>80+ years</th>
                <th>70-79 years</th>
                <th>60-69 years</th>
                <th>50-59 years</th>
                <th>25-49 years</th>
                <th>18-24 years</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Portugal</td>
                <td>85,6%</td>
                <td>100,0%</td>
                <td>100,0%</td>
                <td>100,0%</td>
                <td>98,8%</td>
                <td>93,7%</td>
                <td>91,1%</td>
              </tr>
              <tr>
                <td>Iceland</td>
                <td>81,5%</td>
                <td>100,0%</td>
                <td>100,0%</td>
                <td>99,4%</td>
                <td>92,5%</td>
                <td>86,8%</td>
                <td>85,5%</td>
              </tr>
              <tr>
                <td>Malta</td>
                <td>80,7%</td>
                <td>100,0%</td>
                <td>100,0%</td>
                <td>95,6%</td>
                <td>89,1%</td>
                <td>89,0%</td>
                <td>80,9%</td>
              </tr>
              <tr>
                <td>Spain</td>
                <td>78,5%</td>
                <td>100,0%</td>
                <td>98,9%</td>
                <td>98,4%</td>
                <td>94,6%</td>
                <td>83,2%</td>
                <td>82,6%</td>
              </tr>
              <tr>
                <td>Denmark</td>
                <td>76,0%</td>
                <td>100,0%</td>
                <td>100,0%</td>
                <td>97,2%</td>
                <td>94,4%</td>
                <td>83,7%</td>
                <td>79,9%</td>
              </tr>
              <tr>
                <td>Ireland</td>
                <td>74,3%</td>
                <td>100,0%</td>
                <td>100,0%</td>
                <td>100,0%</td>
                <td>98,2%</td>
                <td>87,2%</td>
                <td>83,5%</td>
              </tr>
              <tr>
                <td>Finland</td>
                <td>72,9%</td>
                <td>95,3%</td>
                <td>99,7%</td>
                <td>91,6%</td>
                <td>88,1%</td>
                <td>80,3%</td>
                <td>74,3%</td>
              </tr>
              <tr>
                <td>Belgium</td>
                <td>72,5%</td>
                <td>91,0%</td>
                <td>96,1%</td>
                <td>93,5%</td>
                <td>90,0%</td>
                <td>81,6%</td>
                <td>77,5%</td>
              </tr>
              <tr>
                <td>France</td>
                <td>72,2%</td>
                <td>86,4%</td>
                <td>97,3%</td>
                <td>90,0%</td>
                <td>90,3%</td>
                <td>85,0%</td>
                <td>87,9%</td>
              </tr>
              <tr>
                <td>Italy</td>
                <td>71,4%</td>
                <td>97,6%</td>
                <td>92,2%</td>
                <td>90,4%</td>
                <td>86,1%</td>
                <td>77,6%</td>
                <td>83,2%</td>
              </tr>
              <tr>
                <td>Norway</td>
                <td>71,3%</td>
                <td>98,4%</td>
                <td>100,0%</td>
                <td>97,4%</td>
                <td>95,3%</td>
                <td>85,7%</td>
                <td>86,7%</td>
              </tr>
              <tr>
                <td>United Kingdom</td>
                <td>70,7%</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Netherlands</td>
                <td>69,9%</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Sweden</td>
                <td>68,3%</td>
                <td>95,1%</td>
                <td>96,4%</td>
                <td>91,8%</td>
                <td>89,5%</td>
                <td>78,5%</td>
                <td>72,0%</td>
              </tr>
              <tr>
                <td>Monaco</td>
                <td>66,1%</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Monaco</td>
                <td>65,0%</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Cyprus</td>
                <td>64,9%</td>
                <td>97,3%</td>
                <td>96,8%</td>
                <td>89,7%</td>
                <td>84,1%</td>
                <td>77,0%</td>
                <td>59,3%</td>
              </tr>
              <tr>
                <td>Luxembourg</td>
                <td>64,3%</td>
                <td>87,7%</td>
                <td>87,7%</td>
                <td>85,2%</td>
                <td>82,7%</td>
                <td>70,3%</td>
                <td>62,2%</td>
              </tr>
              <tr>
                <td>Lithuania</td>
                <td>62,3%</td>
                <td>60,4%</td>
                <td>77,5%</td>
                <td>80,6%</td>
                <td>74,0%</td>
                <td>71,1%</td>
                <td>68,4%</td>
              </tr>
              <tr>
                <td>Austria</td>
                <td>61,3%</td>
                <td>100,0%</td>
                <td>83,9%</td>
                <td>86,8%</td>
                <td>77,1%</td>
                <td>66,9%</td>
                <td>62,5%</td>
              </tr>
              <tr>
                <td>Hungary</td>
                <td>60,2%</td>
                <td>76,2%</td>
                <td>86,9%</td>
                <td>78,7%</td>
                <td>72,5%</td>
                <td>62,4%</td>
                <td>50,0%</td>
              </tr>
              <tr>
                <td>Liechtenstein</td>
                <td>59,9%</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Greece</td>
                <td>59,2%</td>
                <td>74,0%</td>
                <td>82,4%</td>
                <td>79,9%</td>
                <td>73,9%</td>
                <td>64,1%</td>
                <td>55,6%</td>
              </tr>
              <tr>
                <td>Switzerland</td>
                <td>57,5%</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Czechia</td>
                <td>55,7%</td>
                <td>83,8%</td>
                <td>88,5%</td>
                <td>76,2%</td>
                <td>72,3%</td>
                <td>56,7%</td>
                <td>54,9%</td>
              </tr>
            </tbody>
          </table>
          <Gap />
        </Item>
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
