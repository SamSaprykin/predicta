import React from "react";
// import { Link } from "gatsby"
import styled from "styled-components";
import Layout from "../../components/layout";
import NavbarSubLinks from "../../components/in-depth/navbarsub";
import ChartOne from "../../components/in-depth/europe/images/generalfindings/a.svg";
import ChartTwo from "../../components/in-depth/europe/images/generalfindings/b.svg";
import SEO from "../../components/seo";

const generalFindingsMetadata = {
  Title: "General Findings | Europe & the Covid-19 Pandemic",
  Keywords: [`covid analytics`, `predicta analytics`, `covid`, `predicta`],
  Description:
    "COVID-19 PANDEMIC has hit Europe much more than other geographical regions of the world, having almost 30% of diagnosed cases and deaths.",
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
  width: 100%;
  max-width: 960px;
  @media (max-width: 1440px) {
    max-width: 720px;
  }
  @media (max-width: 1024px) {
    max-width: 768px;
  }
  @media (max-width: 768px) {
    padding: 0 32px;
  }
  &h2 {
    font-size: 35px;
  }
  th {
    min-width: 120px;
    @media (max-width: 960px) {
      min-width: auto;
    }
  }
  .wide-cell {
    min-width: 280px;
    @media (max-width: 960px) {
      min-width: auto;
    }
  }
`;

const GridB = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  grid-gap: 2rem;
  align-self: center;
  justify-content: center;
  width: 100%;
  max-width: 1256px;
  @media (max-width: 1440px) {
    max-width: 1080px;
  }
  @media (max-width: 960px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const GridC = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: auto;
  grid-gap: 2rem;
  align-self: center;
  justify-content: center;
  width: 100%;
  max-width: 960px !important;
  img {
    margin-bottom: 0;
  }
  @media (max-width: 1440px) {
    max-width: 800px !important;
  }
  @media (max-width: 1024px) {
    max-width: 768px !important;
  }
  @media (max-width: 768px) {
    padding: 0 32px;
  }
`;

const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;

  img {
    width: 100%;
    height: auto;
  }
  @media (max-width: 960px) {
    max-width: 100%;
  }

  .metrics-table {
    @media (max-width: 960px) {
      max-width: 90%;
      padding: 0 32px;
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
`;

const WrapperCountriesGraphs = styled.div`
  background: #e8e8e8;
  padding: 120px 0 187px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .item-image {
    max-width: 1000px;
  }
`;

const TitleSection = styled.h1`
  text-transform: uppercase;
  color: #222b3e;
  letter-spacing: 0px;
  font-size: 32px;
  line-height: 38px;
  margin-bottom: 24px;
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

const GeneralFindings = (props) => (
  <Layout location={props.location}>
    <SEO
      title={generalFindingsMetadata.Title}
      keywords={generalFindingsMetadata.Keywords}
      description={generalFindingsMetadata.Description}
      image={generalFindingsMetadata.Image}
      url={generalFindingsMetadata.url}
      titleTemplate={generalFindingsMetadata.titleTemplate}
    />
    <div className="row" id="first-section">
      <div className="col">
        <NavbarSubLinks />
        <TextBox>
          <TitleSection>General Findings</TitleSection>
          <Gap />
          <p>
            COVID-19 PANDEMIC has hit Europe much more than other geographical
            regions of the world, having almost 30% of diagnosed cases and
            deaths. We can also see that there is a significant difference
            between Western and Eastern Europe, with Western Europe having
            almost 20% of cases and deaths.
          </p>
        </TextBox>

        <Grid>
          <Item>
            <table className="metrics-table">
              <thead>
                <tr>
                  <th>Area</th>
                  <th>Total Cases</th>
                  <th>Cases %</th>
                  <th>Total Deaths</th>
                  <th>Deaths %</th>
                  <th>Mortality %</th>
                  <th>Cases per 1M</th>
                  <th>Deaths per 1M</th>
                </tr>
              </thead>
              <tbody>
                <tr id="highlighted-dark">
                  <td>Western Europe</td>
                  <td>29.261.101</td>
                  <td>17,3%</td>
                  <td>641.984</td>
                  <td>18,2%</td>
                  <td>2,2%</td>
                  <td>68.726</td>
                  <td>1508</td>
                </tr>
                <tr id="highlighted-dark">
                  <td>Eastern Europe</td>
                  <td>18.524.909</td>
                  <td>10,9%</td>
                  <td>434.328</td>
                  <td>12,3%</td>
                  <td>2,3%</td>
                  <td>54.414</td>
                  <td>1.276</td>
                </tr>
                <tr id="highlighted">
                  <td>Total Europe</td>
                  <td>47.786.010</td>
                  <td>28,2%</td>
                  <td>1.076.312</td>
                  <td>30.5%</td>
                  <td>2.3%</td>
                  <td>63.484</td>
                  <td>1.429</td>
                </tr>
                <tr>
                  <td>North America</td>
                  <td>34.290.575</td>
                  <td>20,2%</td>
                  <td>609.185</td>
                  <td>17,3%</td>
                  <td>1,8%</td>
                  <td>93.554</td>
                  <td>1.662</td>
                </tr>
                <tr>
                  <td>Latin America and the Caribbean</td>
                  <td>33.065.992</td>
                  <td>19,5%</td>
                  <td>1.037.821</td>
                  <td>29,5%</td>
                  <td>3,1%</td>
                  <td>51.101</td>
                  <td>1.604</td>
                </tr>
                <tr>
                  <td>Asia-Pacific</td>
                  <td>36.459.144</td>
                  <td>21,5%</td>
                  <td>482.018</td>
                  <td>13,7%</td>
                  <td>1,3%</td>
                  <td>8.589</td>
                  <td>114</td>
                </tr>
                <tr>
                  <td>Middle East and North Africa</td>
                  <td>14.409.207</td>
                  <td>8,5%</td>
                  <td>231.633</td>
                  <td>6,6%</td>
                  <td>1,6%</td>
                  <td>26.833</td>
                  <td>431</td>
                </tr>
                <tr>
                  <td>Sub-Saharan Africa</td>
                  <td>3.379.593</td>
                  <td>2,0%</td>
                  <td>86.633</td>
                  <td>2,5%</td>
                  <td>2,6%</td>
                  <td>3.043</td>
                  <td>78</td>
                </tr>
                <tr>
                  <td>Global</td>
                  <td>169.390.521</td>
                  <td>&nbsp;</td>
                  <td>3.523.602</td>
                  <td>&nbsp;</td>
                  <td>2,1%</td>
                  <td>22.078</td>
                  <td>459</td>
                </tr>
              </tbody>
            </table>
          </Item>
        </Grid>
      </div>
    </div>

    <div className="row" style={{ backgroundColor: `rgba(234,234,234,1)` }}>
      <div className="col">
        <SubTitle style={{ fontWeight: `normal`, color: "#222B3E" }}>
          Europe - Deaths per 1M MA7
        </SubTitle>
        <Grid>
          <Item>
            <ChartOne />
            <Gap />
          </Item>
        </Grid>

        <TextBox>
          <p>
            The first wave of the pandemic (Feb-May 2020) was quite difficult,
            with a stable and controllable summer period, followed by a much
            more aggressive second wave, especially from October 2020 onwards.
            The second wave reached its peak during January 2021, when a decline
            started, but before reaching the highest level of the first wave
            towards the end of February, a third wave started to develop,
            somehow milder than the second one. It is interesting to examine the
            differentiation by region of the general pandemic trend. The graph
            below, of Deaths per Million of Population, demonstrates the
            outlined differences.
          </p>
        </TextBox>
      </div>
    </div>

    <div className="row">
      <div className="col">
        <Grid>
          <Item>
            <SubTitle>Deaths per 1M</SubTitle>
            <img src="/deaths-depth-europe.png" alt="deaths depth europe" />
            <Gap />
            <TextBox>
              <p>
                Western European countries, together with Sweden, faced a much
                more severe first wave, compared to other European regions.
                While in the second wave, ex-Eastern block countries of Central
                Europe, the Balkans and Greece together with the Western
                European countries, were hit badly by the pandemic. On the other
                hand, the Baltic and the rest of Scandinavian countries had a
                much milder hit during both waves. Finally, the Central European
                countries and the Balkans contributed mostly during the third
                wave.
              </p>
            </TextBox>
          </Item>
        </Grid>
      </div>
    </div>
    <div className="row" style={{ backgroundColor: `rgba(234,234,234,1)` }}>
      <div className="col">
        <SubTitle style={{ fontWeight: `normal`, color: "#222B3E" }}>
          Phases by Regions
        </SubTitle>
        <Grid>
          <Item>
            <table className="metrics-table">
              <thead>
                <tr>
                  <th>Europe - Regions</th>
                  <th># Countries</th>
                  <th>Total Cases per 1M</th>
                  <th>Total Deaths per 1M</th>
                  <th>% Mortality </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Western Europe</td>
                  <td>17</td>
                  <td>70.328</td>
                  <td>1.576</td>
                  <td>2,2%</td>
                </tr>
                <tr>
                  <td>Ex East Block (Central Europe)</td>
                  <td>4</td>
                  <td>89.176</td>
                  <td>2.274</td>
                  <td>2,6%</td>
                </tr>
                <tr>
                  <td>Balkans</td>
                  <td>11</td>
                  <td>69.365</td>
                  <td>1.720</td>
                  <td>2,5%</td>
                </tr>
                <tr>
                  <td>Greece</td>
                  <td>1</td>
                  <td>37.450</td>
                  <td>1.123</td>
                  <td>3,0%</td>
                </tr>
                <tr>
                  <td>Baltic</td>
                  <td>5</td>
                  <td>52.926</td>
                  <td>1.036</td>
                  <td>2,0%</td>
                </tr>
                <tr>
                  <td>Scandinavian</td>
                  <td>3</td>
                  <td>29.814</td>
                  <td>252</td>
                  <td>0,8%</td>
                </tr>
                <tr>
                  <td>Sweden</td>
                  <td>1</td>
                  <td>104.005</td>
                  <td>1.394</td>
                  <td>1,3%</td>
                </tr>
              </tbody>
            </table>
          </Item>
          <Item>
            <table className="metrics-table">
              <thead>
                <tr>
                  <th className="wide-cell">Europe - Regions</th>
                  <th>Cases per 1M(Feb'20 - May'20)</th>
                  <th>Cases per 1M(Jun'20 - Aug'20)</th>
                  <th>Cases per 1M(Sep'20 - Nov'20)</th>
                  <th>Cases per 1M(Dec'20 - Feb'21)</th>
                  <th>Cases per 1M(Mar'21 - May'21)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Western Europe</td>
                  <td>3.261</td>
                  <td>1.617</td>
                  <td>21.616</td>
                  <td>26.093</td>
                  <td>17.818</td>
                </tr>
                <tr>
                  <td>Ex East Block (Central Europe)</td>
                  <td>598</td>
                  <td>985</td>
                  <td>27.043</td>
                  <td>28.462</td>
                  <td>32.088</td>
                </tr>
                <tr>
                  <td>Balkans</td>
                  <td>959</td>
                  <td>3.563</td>
                  <td>20.418</td>
                  <td>22.924</td>
                  <td>21.501</td>
                </tr>
                <tr>
                  <td>Greece</td>
                  <td>272</td>
                  <td>673</td>
                  <td>8.774</td>
                  <td>8.013</td>
                  <td>19.718</td>
                </tr>
                <tr>
                  <td>Baltic</td>
                  <td>1.168</td>
                  <td>2.151</td>
                  <td>12.619</td>
                  <td>17.677</td>
                  <td>19.312</td>
                </tr>
                <tr>
                  <td>Scandinavian</td>
                  <td>1.614</td>
                  <td>507</td>
                  <td>6.210</td>
                  <td>11.845</td>
                  <td>9.639</td>
                </tr>
                <tr>
                  <td>Sweden</td>
                  <td>3.753</td>
                  <td>4.481</td>
                  <td>15.532</td>
                  <td>39.075</td>
                  <td>39.753</td>
                </tr>
              </tbody>
            </table>
          </Item>
          <Item>
            <table className="metrics-table">
              <thead>
                <tr>
                  <th className="wide-cell">Europe - Regions</th>
                  <th>Deaths per 1M(Feb'20 - May'20)</th>
                  <th>Deaths per 1M(Jun'20 - Aug'20)</th>
                  <th>Deaths per 1M(Sep'20 - Nov'20)</th>
                  <th>Deaths per 1M(Dec'20 - Feb'21)</th>
                  <th>Deaths per 1M(Mar'21 - May'21)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Western Europe</td>
                  <td>398</td>
                  <td>32</td>
                  <td>255</td>
                  <td>655</td>
                  <td>232</td>
                </tr>
                <tr>
                  <td>Ex East Block (Central Europe)</td>
                  <td>30</td>
                  <td>18</td>
                  <td>434</td>
                  <td>859</td>
                  <td>939</td>
                </tr>
                <tr>
                  <td>Balkans</td>
                  <td>46</td>
                  <td>107</td>
                  <td>366</td>
                  <td>585</td>
                  <td>617</td>
                </tr>
                <tr>
                  <td>Greece</td>
                  <td>16</td>
                  <td>8</td>
                  <td>192</td>
                  <td>385</td>
                  <td>521</td>
                </tr>
                <tr>
                  <td>Baltic</td>
                  <td>18</td>
                  <td>39</td>
                  <td>181</td>
                  <td>329</td>
                  <td>468</td>
                </tr>
                <tr>
                  <td>Scandinavian</td>
                  <td>67</td>
                  <td>6</td>
                  <td>20</td>
                  <td>128</td>
                  <td>32</td>
                </tr>
                <tr>
                  <td>Sweden</td>
                  <td>452</td>
                  <td>114</td>
                  <td>86</td>
                  <td>556</td>
                  <td>140</td>
                </tr>
              </tbody>
            </table>
          </Item>

          <Item>
            <table className="metrics-table">
              <thead>
                <tr>
                  <th className="wide-cell">Europe - Regions</th>
                  <th>% Mortality(Feb'20 - May'20)</th>
                  <th>% Mortality(Jun'20 - Aug'20)</th>
                  <th>% Mortality(Sep'20 - Nov'20)</th>
                  <th>% Mortality(Dec'20 - Feb'21)</th>
                  <th>% Mortality(Mar'21 - May'21)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Western Europe</td>
                  <td>12,2%</td>
                  <td>2,0%</td>
                  <td>1,2%</td>
                  <td>2,5%</td>
                  <td>1,3%</td>
                </tr>
                <tr>
                  <td>Ex East Block (Central Europe)</td>
                  <td>5,1%</td>
                  <td>1,9%</td>
                  <td>1,6%</td>
                  <td>3,0%</td>
                  <td>2,9%</td>
                </tr>
                <tr>
                  <td>Balkans</td>
                  <td>4,8%</td>
                  <td>3,0%</td>
                  <td>1,8%</td>
                  <td>2,6%</td>
                  <td>2,9%</td>
                </tr>
                <tr>
                  <td>Greece</td>
                  <td>6,0%</td>
                  <td>1,2%</td>
                  <td>2,2%</td>
                  <td>4,8%</td>
                  <td>2,6%</td>
                </tr>
                <tr>
                  <td>Baltic</td>
                  <td>1,6%</td>
                  <td>1,8%</td>
                  <td>1,4%</td>
                  <td>1,9%</td>
                  <td>2,4%</td>
                </tr>
                <tr>
                  <td>Scandinavian</td>
                  <td>4,2%</td>
                  <td>1,2%</td>
                  <td>0,3%</td>
                  <td>1,1%</td>
                  <td>0,3%</td>
                </tr>
                <tr>
                  <td>Sweden</td>
                  <td>12,1%</td>
                  <td>2,6%</td>
                  <td>0,6%</td>
                  <td>1,4%</td>
                  <td>0,4%</td>
                </tr>
              </tbody>
            </table>
          </Item>
        </Grid>
      </div>
    </div>

    <div className="row">
      <div className="col">
        <SubTitle
          style={{
            fontWeight: `normal`,
            color: "#222B3E",
          }}
        >
          Ranking - Cases & Deaths per 1M (Feb-May 2021)
        </SubTitle>

        <GridB>
          <Item>
            <table className="metrics-table">
              <thead>
                <tr>
                  <th>A/A</th>
                  <th>Country</th>
                  <th>Cases 1M</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Montenegro</td>
                  <td>158.598</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Czechia</td>
                  <td>154.579</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Slovenia</td>
                  <td>120.910</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Luxembourg</td>
                  <td>114.357</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Sweden</td>
                  <td>104.005</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Serbia</td>
                  <td>102.258</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>Lithuania</td>
                  <td>97.482</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>Estonia</td>
                  <td>97.228</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>Netherlands</td>
                  <td>95.305</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>Belgium</td>
                  <td>92.343</td>
                </tr>
                <tr>
                  <td>11</td>
                  <td>France</td>
                  <td>88.609</td>
                </tr>
                <tr>
                  <td>12</td>
                  <td>Croatia</td>
                  <td>86.783</td>
                </tr>
                <tr>
                  <td>13</td>
                  <td>Cyprus</td>
                  <td>82.989</td>
                </tr>
                <tr>
                  <td>14</td>
                  <td>Hungary</td>
                  <td>82.375</td>
                </tr>
                <tr>
                  <td>15</td>
                  <td>Portugal</td>
                  <td>81.909</td>
                </tr>
                <tr>
                  <td>16</td>
                  <td>Switzerland</td>
                  <td>80.104</td>
                </tr>
                <tr>
                  <td>17</td>
                  <td>Spain</td>
                  <td>79.042</td>
                </tr>
                <tr>
                  <td>18</td>
                  <td>Liechtenstein</td>
                  <td>77.831</td>
                </tr>
                <tr>
                  <td>19</td>
                  <td>Poland</td>
                  <td>72.285</td>
                </tr>

                <tr>
                  <td>20</td>
                  <td>Monaco</td>
                  <td>75.139</td>
                </tr>
                <tr>
                  <td>21</td>
                  <td>North Macedonia</td>
                  <td>74.640</td>
                </tr>
                <tr>
                  <td>22</td>
                  <td>Austria</td>
                  <td>72.341</td>
                </tr>
                <tr>
                  <td>23</td>
                  <td>Slovakia</td>
                  <td>70.344</td>
                </tr>
                <tr>
                  <td>24</td>
                  <td>Italy</td>
                  <td>69.748</td>
                </tr>
                <tr>
                  <td>25</td>
                  <td>Latvia</td>
                  <td>68.549</td>
                </tr>
                <tr>
                  <td>26</td>
                  <td>United Kingdom</td>
                  <td>66.590</td>
                </tr>
                <tr>
                  <td>27</td>
                  <td>Moldova</td>
                  <td>63.009</td>
                </tr>
                <tr>
                  <td>28</td>
                  <td>Malta</td>
                  <td>62.069</td>
                </tr>
                <tr>
                  <td>29</td>
                  <td>Bosnia and Herzegovina</td>
                  <td>61.577</td>
                </tr>
                <tr>
                  <td>30</td>
                  <td>Bulgaria</td>
                  <td>59.651</td>
                </tr>
                <tr>
                  <td>31</td>
                  <td>Kosovo</td>
                  <td>59.393</td>
                </tr>
                <tr>
                  <td>32</td>
                  <td>Romania</td>
                  <td>55.427</td>
                </tr>
                <tr>
                  <td>33</td>
                  <td>Ireland</td>
                  <td>53.045</td>
                </tr>
                <tr>
                  <td>34</td>
                  <td>Ukraine</td>
                  <td>50.513</td>
                </tr>
                <tr>
                  <td>35</td>
                  <td>Denmark</td>
                  <td>48.182</td>
                </tr>
                <tr>
                  <td>36</td>
                  <td>Albania</td>
                  <td>46.349</td>
                </tr>
                <tr>
                  <td>37</td>
                  <td>Germany</td>
                  <td>44.037</td>
                </tr>
                <tr>
                  <td>38</td>
                  <td>Belarus</td>
                  <td>41.601</td>
                </tr>
                <tr>
                  <td>39</td>
                  <td>Greece</td>
                  <td>37.450</td>
                </tr>
                <tr>
                  <td>40</td>
                  <td>Russia</td>
                  <td>34.421</td>
                </tr>
                <tr>
                  <td>41</td>
                  <td>Norway</td>
                  <td>23.171</td>
                </tr>
                <tr>
                  <td>42</td>
                  <td>Iceland</td>
                  <td>18.420</td>
                </tr>
                <tr>
                  <td>43</td>
                  <td>Iceland</td>
                  <td>18.420</td>
                </tr>
              </tbody>
            </table>
          </Item>

          <Item>
            <table className="metrics-table">
              <thead>
                <tr>
                  <th>A/A</th>
                  <th>Country</th>
                  <th>Deaths 1M</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Hungary</td>
                  <td>3.040</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Czechia</td>
                  <td>2.820</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Bosnia and Herzegovina</td>
                  <td>2.792</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>North Macedonia</td>
                  <td>2.602</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Montenegro</td>
                  <td>2.544</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Bulgaria</td>
                  <td>2.518</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>Slovakia</td>
                  <td>2.251</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>Belgium</td>
                  <td>2.157</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>Italy</td>
                  <td>2.082</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>Croatia</td>
                  <td>1.951</td>
                </tr>
                <tr>
                  <td>11</td>
                  <td>Poland</td>
                  <td>1.928</td>
                </tr>
                <tr>
                  <td>12</td>
                  <td>United Kingdom</td>
                  <td>1.907</td>
                </tr>
                <tr>
                  <td>13</td>
                  <td>Slovenia</td>
                  <td>1.800</td>
                </tr>
                <tr>
                  <td>14</td>
                  <td>Portugal</td>
                  <td>1.653</td>
                </tr>
                <tr>
                  <td>15</td>
                  <td>France</td>
                  <td>1.625</td>
                </tr>
                <tr>
                  <td>16</td>
                  <td>Spain</td>
                  <td>1.604</td>
                </tr>
                <tr>
                  <td>17</td>
                  <td>Romania</td>
                  <td>1.554</td>
                </tr>
                <tr>
                  <td>18</td>
                  <td>Moldova</td>
                  <td>1.510</td>
                </tr>
                <tr>
                  <td>19</td>
                  <td>Liechtenstein</td>
                  <td>448</td>
                </tr>
                <tr>
                  <td>20</td>
                  <td>Sweden</td>
                  <td>1.394</td>
                </tr>
                <tr>
                  <td>21</td>
                  <td>Lithuania</td>
                  <td>1.393</td>
                </tr>
                <tr>
                  <td>22</td>
                  <td>Luxembourg</td>
                  <td>1.332</td>
                </tr>
                <tr>
                  <td>23</td>
                  <td>Kosovo</td>
                  <td>1.242</td>
                </tr>
                <tr>
                  <td>24</td>
                  <td>Latvia</td>
                  <td>1.232</td>
                </tr>
                <tr>
                  <td>25</td>
                  <td>Austria</td>
                  <td>1.169</td>
                </tr>
                <tr>
                  <td>26</td>
                  <td>Ukraine</td>
                  <td>1.166</td>
                </tr>
                <tr>
                  <td>27</td>
                  <td>Switzerland</td>
                  <td>1.166</td>
                </tr>
                <tr>
                  <td>28</td>
                  <td>Greece</td>
                  <td>1.123</td>
                </tr>
                <tr>
                  <td>29</td>
                  <td>Germany</td>
                  <td>1.058</td>
                </tr>

                <tr>
                  <td>30</td>
                  <td>Netherlands</td>
                  <td>1.016</td>
                </tr>
                <tr>
                  <td>31</td>
                  <td>Ireland</td>
                  <td>1.006</td>
                </tr>
                <tr>
                  <td>32</td>
                  <td>Serbia</td>
                  <td>979</td>
                </tr>
                <tr>
                  <td>33</td>
                  <td>Estonia</td>
                  <td>943</td>
                </tr>
                <tr>
                  <td>34</td>
                  <td>Monaco</td>
                  <td>937</td>
                </tr>
                <tr>
                  <td>35</td>
                  <td>Albania</td>
                  <td>861</td>
                </tr>

                <tr>
                  <td>36</td>
                  <td>Malta</td>
                  <td>841</td>
                </tr>
                <tr>
                  <td>37</td>
                  <td>Russia</td>
                  <td>823</td>
                </tr>
                <tr>
                  <td>38</td>
                  <td>Denmark</td>
                  <td>427</td>
                </tr>
                <tr>
                  <td>39</td>
                  <td>Cyprus</td>
                  <td>411</td>
                </tr>
                <tr>
                  <td>40</td>
                  <td>Belarus</td>
                  <td>301</td>
                </tr>

                <tr>
                  <td>41</td>
                  <td>Finland</td>
                  <td>171</td>
                </tr>
                <tr>
                  <td>42</td>
                  <td>Norway</td>
                  <td>147</td>
                </tr>
                <tr>
                  <td>42</td>
                  <td>Iceland</td>
                  <td>84</td>
                </tr>
              </tbody>
            </table>
          </Item>
        </GridB>

        <Gap />
      </div>
    </div>
    <WrapperCountriesGraphs>
      <SubTitle style={{ fontWeight: `normal`, color: "#222B3E" }}>
        GDP per Capita vs COVID-19 Test Policy
      </SubTitle>
      <GridC>
        <Item className="big-item">
          <img src="/graph-5.png" alt="GDP per Capita vs Deaths per 1M" />
          <Gap />
        </Item>
        <TextBox>
          <p>
            The above graph demonstrates a positive correlation between GDP and
            COVID-19 testing policy. There are though some exceptions to this
            rule, with Malta, Chechia and the United Kingdom performing
            significantly higher number of tests given their GDP, while
            Switzerland, Norway and Ireland did exactly the opposite.{" "}
          </p>
        </TextBox>
      </GridC>
      <Gap />
      <SubTitle style={{ fontWeight: `normal`, color: "#222B3E" }}>
        GDP per Capita vs Deaths per 1M
      </SubTitle>
      <GridC>
        <Item className="big-item">
          <img src="/graph-6.png" alt="GDP per Capita vs Deaths per 1M" />
          <Gap />
        </Item>
        <TextBox>
          <p>
            With respect to GDP per Capita, we note that there is a group of
            countries who perform well as far as Deaths per Million is concerned
            independent of the level of GDP per Capita. (Some Balkan countries,
            some ex-eastern block countries, Greece, Cyprus, Germany, Austria,
            Finland, Switzerland, Ireland, Iceland and Norway). While there is
            another group of countries of low and medium GDP per Capita who
            demonstrate much higher Death per Million index with outstanding the
            central European countries and some Balkan countries (Hungary,
            Poland,Chechia, Bulgaria, North Macedonia etc). It looks like the
            GDP per Capita is not a primary factor in the evolution of the
            pandemic in Europe. There is a negative Correlation between GDP and
            Deaths per 1M.(Pearson = -0.4)
          </p>
        </TextBox>
      </GridC>
    </WrapperCountriesGraphs>
  </Layout>
);

export default GeneralFindings;
