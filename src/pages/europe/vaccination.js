import React from "react";
// import { Link } from "gatsby"
import styled from "styled-components";
import Layout from "../../components/layout";
import NavbarSubLinks from "../../components/in-depth/navbarsub";

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
    @media (max-width: 960px) {
      max-width: 100%;
      padding: 0 32px;
    }
    #highlighted-dark-blue {
      background-color: #587393;
      color: white;

      td {
        color: white;
      }
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
              <tr>
                <td>Estonia</td>
                <td>55,2%</td>
                <td>67,1%</td>
                <td>77,1%</td>
                <td>72,7%</td>
                <td>70,5%</td>
                <td>61,9%</td>
                <td>63,5%</td>
              </tr>
              <tr>
                <td>Poland</td>
                <td>51,2%</td>
                <td>67,6%</td>
                <td>86,2%</td>
                <td>72,8%</td>
                <td>64,7%</td>
                <td>54,0%</td>
                <td>48,3%</td>
              </tr>
              <tr>
                <td>Slovenia</td>
                <td>48,2%</td>
                <td>77,2%</td>
                <td>85,8%</td>
                <td>75,5%</td>
                <td>67,6%</td>
                <td>50,5%</td>
                <td>49,9%</td>
              </tr>
              <tr>
                <td>Latvia</td>
                <td>46,5%</td>
                <td>44,1%</td>
                <td>55,7%</td>
                <td>57,4%</td>
                <td>54,6%</td>
                <td>52,9%</td>
                <td>58,4%</td>
              </tr>
              <tr>
                <td>Slovakia</td>
                <td>43,8%</td>
                <td>59,1%</td>
                <td>74,1%</td>
                <td>63,9%</td>
                <td>55,4%</td>
                <td>45,6%</td>
                <td>43,3%</td>
              </tr>
              <tr>
                <td>Serbia</td>
                <td>43,1%</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Croatia</td>
                <td>42,6%</td>
                <td>58,0%</td>
                <td>75,2%</td>
                <td>70,2%</td>
                <td>58,1%</td>
                <td>43,1%</td>
                <td>29,6%</td>
              </tr>
              <tr>
                <td>North Macedonia</td>
                <td>35,0%</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Montenegro</td>
                <td>34,2%</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Kosovo</td>
                <td>30,9%</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Russia</td>
                <td>30,4%</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Albania</td>
                <td>29,4%</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Albania</td>
                <td>29,4%</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Romania</td>
                <td>27,6%</td>
                <td>20,3%</td>
                <td>37,5%</td>
                <td>39,7%</td>
                <td>39,1%</td>
                <td>32,7%</td>
                <td>28,9%</td>
              </tr>
              <tr>
                <td>Bosnia and Herzegovina</td>
                <td>17,4%</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Belarus</td>
                <td>17,2%</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Bulgaria</td>
                <td>15,8%</td>
                <td>21,2%</td>
                <td>32,8%</td>
                <td>31,2%</td>
                <td>26,8%</td>
                <td>19,5%</td>
                <td>13,2%</td>
              </tr>
              <tr>
                <td>Moldova</td>
                <td>14,2%</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Ukraine</td>
                <td>12,8%</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
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
        backgroundColor: `white`,
      }}
    >
      <div className="col">
        <TextBox>
          <p>
            The following graph demonstrates the high positive correlation
            (0.85) between countries’ HDI (Human Development Index) and
            Vaccination percentage. We note that countries with low HDI have
            significantly lower percentage of vaccination, an issue which may
            affect negatively the long term pandemic containment.
          </p>
        </TextBox>

        <Grid>
          <Item>
            <img src="/vaccin.png" alt="vaccination" />
          </Item>
        </Grid>
        <Gap />
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
            The table below demonstrates selected pandemic KPIs in three
            European country groups, formed by their level of vaccination.{" "}
            <br /> <br /> We can clearly see that Countries with over 70%
            vaccinated population are more prosperous, better educated, more
            healthy, more democratic, leading to overall lower negative effects
            from the pandemic.
          </p>
        </TextBox>
        <Item>
          <table className="metrics-table">
            <thead>
              <tr>
                <th className="wide-cell">KPI's</th>
                <th className="mid-cell">Vaccinations &gt;=70%</th>
                <th>Vaccinations &gt;= 55% -70%</th>
                <th>Vaccinations &lt; 55%</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mortality% Jun &apos;21 - Aug&apos;21 </td>
                <td>1,5%</td>
                <td>1,6%</td>
                <td>2,6%</td>
              </tr>
              <tr>
                <td>Cases per 1M Jun &apos;21 - Aug&apos;21 </td>
                <td>14.594</td>
                <td>12.331</td>
                <td>3.305</td>
              </tr>
              <tr>
                <td>Deaths per 1M Jun &apos;21 - Aug&apos;21 </td>
                <td>42</td>
                <td>59</td>
                <td>73</td>
              </tr>
              <tr id="highlighted-dark">
                <td>Prosperity Index </td>
                <td>78,2</td>
                <td>75,9</td>
                <td>68,3</td>
              </tr>
              <tr id="highlighted">
                <td>Health Score </td>
                <td>81,4</td>
                <td>79,4</td>
                <td>75,3</td>
              </tr>
              <tr id="highlighted">
                <td>% With Perceived Good Health</td>
                <td>71,0</td>
                <td>66,6</td>
                <td>60,0</td>
              </tr>
              <tr id="highlighted">
                <td>Life Expectancy </td>
                <td>82,8</td>
                <td>81,2</td>
                <td>78,0</td>
              </tr>
              <tr id="highlighted">
                <td>% Aged &gt;=65 </td>
                <td>19,3</td>
                <td>18,9</td>
                <td>18,4</td>
              </tr>
              <tr id="highlighted-dark-blue">
                <td>Education Score </td>
                <td>83,1</td>
                <td>81,6</td>
                <td>76,1</td>
              </tr>
              <tr id="highlighted-dark-blue">
                <td>Personal Freedom </td>
                <td>85,2</td>
                <td>77,3</td>
                <td>65,1</td>
              </tr>
              <tr id="highlighted-dark-blue">
                <td>Social Capital </td>
                <td>64,0</td>
                <td>59,7</td>
                <td>48,1</td>
              </tr>
              <tr id="highlighted-dark-blue">
                <td>Religious Index </td>
                <td>0,37</td>
                <td>0,41</td>
                <td>0,57</td>
              </tr>
              <tr id="highlighted-dark-blue">
                <td>Num Of Countries </td>
                <td>11</td>
                <td>10</td>
                <td>7</td>
              </tr>
            </tbody>
          </table>
        </Item>
        <Gap />
      </div>
    </div>
  </Layout>
);

export default FirstWave;
