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
  titleTemplate: "General Findings | Europe & the Covid-19 Pandemic",
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
            regions of the world, having almost 26% of diagnosed cases and
            deaths. We can also see that there is a significant difference
            between Western and Eastern Europe, with Western Europe having
            almost 16% of cases and deaths.
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
                  <td>35.520.986</td>
                  <td>16,4%</td>
                  <td>665.342</td>
                  <td>15,2%</td>
                  <td>1,9%</td>
                  <td>83.428</td>
                  <td>1.563</td>
                </tr>
                <tr id="highlighted-dark">
                  <td>Eastern Europe</td>
                  <td>21.189.497</td>
                  <td>9,8%</td>
                  <td>511.259</td>
                  <td>11,7%</td>
                  <td>2,4%</td>
                  <td>62.241</td>
                  <td>1.502</td>
                </tr>
                <tr id="highlighted">
                  <td>Total Europe</td>
                  <td>56.710.483</td>
                  <td>26,2%</td>
                  <td>1.176.601</td>
                  <td>26,9%</td>
                  <td>2,1%</td>
                  <td>74.014</td>
                  <td>1.535</td>
                </tr>
                <tr>
                  <td>North America</td>
                  <td>40.280.930</td>
                  <td>18,6%</td>
                  <td>655.588</td>
                  <td>15,0%</td>
                  <td>1,6%</td>
                  <td>109.897</td>
                  <td>1.789</td>
                </tr>
                <tr>
                  <td>Latin America and the Caribbean</td>
                  <td>43.458.129</td>
                  <td>20,1%</td>
                  <td>1.327.011</td>
                  <td>30,3%</td>
                  <td>3,1%</td>
                  <td>67.162</td>
                  <td>2.051</td>
                </tr>
                <tr>
                  <td>Asia-Pacific</td>
                  <td>50.343.781</td>
                  <td>23,3%</td>
                  <td>783.277</td>
                  <td>17,9%</td>
                  <td>1,6%</td>
                  <td>11.860</td>
                  <td>185</td>
                </tr>
                <tr>
                  <td>Middle East and North Africa</td>
                  <td>20.012.229</td>
                  <td>9,3%</td>
                  <td>297.968</td>
                  <td>6,8%</td>
                  <td>1,5%</td>
                  <td>37.267</td>
                  <td>555</td>
                </tr>
                <tr>
                  <td>Sub-Saharan Africa</td>
                  <td>5.423.114</td>
                  <td>2,5%</td>
                  <td>132.940</td>
                  <td>3,0%</td>
                  <td>2,5%</td>
                  <td>4.882</td>
                  <td>120</td>
                </tr>
                <tr>
                  <td>Global</td>
                  <td>216.228.666</td>
                  <td>&nbsp;</td>
                  <td>4.373.385</td>
                  <td>&nbsp;</td>
                  <td>2,0%</td>
                  <td>28.182</td>
                  <td>570</td>
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
            <img src="/europe-deaths.png" alt="Europe - Deaths per 1M MA7" />
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
            <img src="/Deaths-per-1M.png" alt="deaths depth europe" />
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
                  <td>88.726</td>
                  <td>1.679</td>
                  <td>1,9%</td>
                </tr>
                <tr>
                  <td>Ex East Block (Central Europe)</td>
                  <td>4</td>
                  <td>89.905</td>
                  <td>2.310</td>
                  <td>2,6%</td>
                </tr>
                <tr>
                  <td>Balkans</td>
                  <td>11</td>
                  <td>73.817</td>
                  <td>1.803</td>
                  <td>2,4%</td>
                </tr>
                <tr>
                  <td>Greece</td>
                  <td>1</td>
                  <td>54.454</td>
                  <td>1.267</td>
                  <td>2,3%</td>
                </tr>
                <tr>
                  <td>Baltic</td>
                  <td>5</td>
                  <td>56.573</td>
                  <td>1.116</td>
                  <td>2,0%</td>
                </tr>
                <tr>
                  <td>Scandinavian</td>
                  <td>3</td>
                  <td>37.745</td>
                  <td>261</td>
                  <td>0,7%</td>
                </tr>
                <tr>
                  <td>Sweden</td>
                  <td>1</td>
                  <td>109.403</td>
                  <td>1.407</td>
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
                  <th>Cases per 1M (Jun‘21 - Aug‘21)</th>
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
                  <td>15.998</td>
                </tr>
                <tr>
                  <td>Ex East Block (Central Europe)</td>
                  <td>598</td>
                  <td>985</td>
                  <td>27.043</td>
                  <td>28.462</td>
                  <td>32.088</td>
                  <td>730</td>
                </tr>
                <tr>
                  <td>Balkans</td>
                  <td>959</td>
                  <td>3.563</td>
                  <td>20.418</td>
                  <td>22.924</td>
                  <td>21.501</td>
                  <td>4.452</td>
                </tr>
                <tr>
                  <td>Greece</td>
                  <td>272</td>
                  <td>673</td>
                  <td>8.774</td>
                  <td>8.013</td>
                  <td>19.718</td>
                  <td>17.004</td>
                </tr>
                <tr>
                  <td>Baltic</td>
                  <td>1.168</td>
                  <td>2.151</td>
                  <td>12.619</td>
                  <td>17.677</td>
                  <td>19.312</td>
                  <td>3.647</td>
                </tr>
                <tr>
                  <td>Scandinavian</td>
                  <td>1.614</td>
                  <td>507</td>
                  <td>6.210</td>
                  <td>11.845</td>
                  <td>9.639</td>
                  <td>7.930</td>
                </tr>
                <tr>
                  <td>Sweden</td>
                  <td>3.753</td>
                  <td>4.481</td>
                  <td>15.532</td>
                  <td>39.075</td>
                  <td>39.753</td>
                  <td>5.398</td>
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
                  <th>Cases per 1M (Jun‘21 - Aug‘21)</th>
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
                  <td>65</td>
                </tr>
                <tr>
                  <td>Ex East Block (Central Europe)</td>
                  <td>30</td>
                  <td>18</td>
                  <td>434</td>
                  <td>859</td>
                  <td>939</td>
                  <td>36</td>
                </tr>
                <tr>
                  <td>Balkans</td>
                  <td>46</td>
                  <td>107</td>
                  <td>366</td>
                  <td>585</td>
                  <td>617</td>
                  <td>83</td>
                </tr>
                <tr>
                  <td>Greece</td>
                  <td>16</td>
                  <td>8</td>
                  <td>192</td>
                  <td>385</td>
                  <td>521</td>
                  <td>144</td>
                </tr>
                <tr>
                  <td>Baltic</td>
                  <td>18</td>
                  <td>39</td>
                  <td>181</td>
                  <td>329</td>
                  <td>468</td>
                  <td>80</td>
                </tr>
                <tr>
                  <td>Scandinavian</td>
                  <td>67</td>
                  <td>6</td>
                  <td>20</td>
                  <td>128</td>
                  <td>32</td>
                  <td>9</td>
                </tr>
                <tr>
                  <td>Sweden</td>
                  <td>452</td>
                  <td>114</td>
                  <td>86</td>
                  <td>556</td>
                  <td>140</td>
                  <td>13</td>
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
                  <th>% Mortality (Jun‘21 - Aug‘21)</th>
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
                  <td>0,4%</td>
                </tr>
                <tr>
                  <td>Ex East Block (Central Europe)</td>
                  <td>5,1%</td>
                  <td>1,9%</td>
                  <td>1,6%</td>
                  <td>3,0%</td>
                  <td>2,9%</td>
                  <td>4,9%</td>
                </tr>
                <tr>
                  <td>Balkans</td>
                  <td>4,8%</td>
                  <td>3,0%</td>
                  <td>1,8%</td>
                  <td>2,6%</td>
                  <td>2,9%</td>
                  <td>1,9%</td>
                </tr>
                <tr>
                  <td>Greece</td>
                  <td>6,0%</td>
                  <td>1,2%</td>
                  <td>2,2%</td>
                  <td>4,8%</td>
                  <td>2,6%</td>
                  <td>0,8%</td>
                </tr>
                <tr>
                  <td>Baltic</td>
                  <td>1,6%</td>
                  <td>1,8%</td>
                  <td>1,4%</td>
                  <td>1,9%</td>
                  <td>2,4%</td>
                  <td>2,2%</td>
                </tr>
                <tr>
                  <td>Scandinavian</td>
                  <td>4,2%</td>
                  <td>1,2%</td>
                  <td>0,3%</td>
                  <td>1,1%</td>
                  <td>0,3%</td>
                  <td>0,1%</td>
                </tr>
                <tr>
                  <td>Sweden</td>
                  <td>12,1%</td>
                  <td>2,6%</td>
                  <td>0,6%</td>
                  <td>1,4%</td>
                  <td>0,4%</td>
                  <td>0,2%</td>
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
                  <td>182.996</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Czechia</td>
                  <td>156.194</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Cyprus</td>
                  <td>130.005</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Slovenia</td>
                  <td>127.158</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Luxembourg</td>
                  <td>123.707</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Netherlands</td>
                  <td>112.204</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>Sweden</td>
                  <td>109.403</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>Serbia</td>
                  <td>109.112</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>Estonia</td>
                  <td>106.597</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>Lithuania</td>
                  <td>106.295</td>
                </tr>
                <tr>
                  <td>11</td>
                  <td>Spain</td>
                  <td>103.708</td>
                </tr>
                <tr>
                  <td>12</td>
                  <td>France</td>
                  <td>103.390</td>
                </tr>
                <tr>
                  <td>13</td>
                  <td>Belgium</td>
                  <td>102.724</td>
                </tr>
                <tr>
                  <td>14</td>
                  <td>United Kingdom</td>
                  <td>100.705</td>
                </tr>
                <tr>
                  <td>15</td>
                  <td>Portugal</td>
                  <td>100.141</td>
                </tr>
                <tr>
                  <td>16</td>
                  <td>Monaco</td>
                  <td>95.814</td>
                </tr>
                <tr>
                  <td>17</td>
                  <td>Croatia</td>
                  <td>91.164</td>
                </tr>
                <tr>
                  <td>18</td>
                  <td>Switzerland</td>
                  <td>90.153</td>
                </tr>
                <tr>
                  <td>19</td>
                  <td>Liechtenstein</td>
                  <td>85.283</td>
                </tr>

                <tr>
                  <td>20</td>
                  <td>North Macedonia</td>
                  <td>84.440</td>
                </tr>
                <tr>
                  <td>21</td>
                  <td>Hungary</td>
                  <td>83.174</td>
                </tr>
                <tr>
                  <td>22</td>
                  <td>Kosovo</td>
                  <td>79.554</td>
                </tr>
                <tr>
                  <td>23</td>
                  <td>Austria</td>
                  <td>77.150</td>
                </tr>
                <tr>
                  <td>24</td>
                  <td>Poland</td>
                  <td>75.717</td>
                </tr>
                <tr>
                  <td>25</td>
                  <td>Italy</td>
                  <td>75.025</td>
                </tr>
                <tr>
                  <td>26</td>
                  <td>Latvia</td>
                  <td>73.518</td>
                </tr>
                <tr>
                  <td>27</td>
                  <td>Malta</td>
                  <td>73.363</td>
                </tr>
                <tr>
                  <td>28</td>
                  <td>Slovakia</td>
                  <td>71.299</td>
                </tr>
                <tr>
                  <td>29</td>
                  <td>Ireland</td>
                  <td>71.273</td>
                </tr>
                <tr>
                  <td>30</td>
                  <td>Moldova</td>
                  <td>65.992</td>
                </tr>
                <tr>
                  <td>31</td>
                  <td>Bulgaria</td>
                  <td>64.710</td>
                </tr>
                <tr>
                  <td>32</td>
                  <td>Bosnia and Herzegovina</td>
                  <td>64.425</td>
                </tr>
                <tr>
                  <td>33</td>
                  <td>Denmark</td>
                  <td>59.286</td>
                </tr>
                <tr>
                  <td>34</td>
                  <td>Romania</td>
                  <td>56.518</td>
                </tr>
                <tr>
                  <td>35</td>
                  <td>Greece</td>
                  <td>54.454</td>
                </tr>
                <tr>
                  <td>36</td>
                  <td>Ukraine</td>
                  <td>52.418</td>
                </tr>
                <tr>
                  <td>37</td>
                  <td>Albania</td>
                  <td>50.899</td>
                </tr>
                <tr>
                  <td>38</td>
                  <td>Belarus</td>
                  <td>50.758</td>
                </tr>
                <tr>
                  <td>39</td>
                  <td>Germany</td>
                  <td>47.190</td>
                </tr>
                <tr>
                  <td>40</td>
                  <td>Russia</td>
                  <td>47.084</td>
                </tr>
                <tr>
                  <td>41</td>
                  <td>Iceland</td>
                  <td>30.222</td>
                </tr>
                <tr>
                  <td>42</td>
                  <td>Norway</td>
                  <td>29.383</td>
                </tr>
                <tr>
                  <td>43</td>
                  <td>Finland</td>
                  <td>23.153</td>
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
                  <td>3.073</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Bosnia and Herzegovina</td>
                  <td>2.967</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>North Macedonia</td>
                  <td>2.839</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Czechia</td>
                  <td>2.833</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Montenegro</td>
                  <td>2.544</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Bulgaria</td>
                  <td>2.686</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>Slovakia</td>
                  <td>2.289</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>Belgium</td>
                  <td>2.193</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>Italy</td>
                  <td>2.134</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>Croatia</td>
                  <td>2.030</td>
                </tr>
                <tr>
                  <td>11</td>
                  <td>United Kingdom</td>
                  <td>1.978</td>
                </tr>
                <tr>
                  <td>12</td>
                  <td>Poland</td>
                  <td>1.970</td>
                </tr>
                <tr>
                  <td>13</td>
                  <td>Slovenia</td>
                  <td>1.837</td>
                </tr>
                <tr>
                  <td>14</td>
                  <td>Portugal</td>
                  <td>1.722</td>
                </tr>
                <tr>
                  <td>15</td>
                  <td>France</td>
                  <td>1.686</td>
                </tr>
                <tr>
                  <td>16</td>
                  <td>Spain</td>
                  <td>1.683</td>
                </tr>
                <tr>
                  <td>17</td>
                  <td>Romania</td>
                  <td>1.590</td>
                </tr>
                <tr>
                  <td>18</td>
                  <td>Moldova</td>
                  <td>1.582</td>
                </tr>
                <tr>
                  <td>19</td>
                  <td>Lithuania</td>
                  <td>1.502</td>
                </tr>
                <tr>
                  <td>20</td>
                  <td>Liechtenstein</td>
                  <td>1.433</td>
                </tr>
                <tr>
                  <td>21</td>
                  <td>Sweden</td>
                  <td>1.407</td>
                </tr>
                <tr>
                  <td>22</td>
                  <td>Kosovo</td>
                  <td>1.372</td>
                </tr>
                <tr>
                  <td>23</td>
                  <td>Luxembourg</td>
                  <td>1.359</td>
                </tr>
                <tr>
                  <td>24</td>
                  <td>Latvia</td>
                  <td>1.340</td>
                </tr>
                <tr>
                  <td>25</td>
                  <td>Greece</td>
                  <td>1.267</td>
                </tr>
                <tr>
                  <td>26</td>
                  <td>Russia</td>
                  <td>1.246</td>
                </tr>
                <tr>
                  <td>27</td>
                  <td>Ukraine</td>
                  <td>1.240</td>
                </tr>
                <tr>
                  <td>28</td>
                  <td>Austria</td>
                  <td>1.186</td>
                </tr>
                <tr>
                  <td>29</td>
                  <td>Switzerland</td>
                  <td>1.185</td>
                </tr>

                <tr>
                  <td>30</td>
                  <td>Germany</td>
                  <td>1.104</td>
                </tr>
                <tr>
                  <td>31</td>
                  <td>Serbia</td>
                  <td>1.040</td>
                </tr>
                <tr>
                  <td>32</td>
                  <td>Netherlands</td>
                  <td>1.038</td>
                </tr>
                <tr>
                  <td>33</td>
                  <td>Ireland</td>
                  <td>1.037</td>
                </tr>
                <tr>
                  <td>34</td>
                  <td>Monaco</td>
                  <td>1.028</td>
                </tr>
                <tr>
                  <td>35</td>
                  <td>Estonia</td>
                  <td>973</td>
                </tr>

                <tr>
                  <td>36</td>
                  <td>Malta</td>
                  <td>883</td>
                </tr>
                <tr>
                  <td>37</td>
                  <td>Albania</td>
                  <td>877</td>
                </tr>
                <tr>
                  <td>38</td>
                  <td>Cyprus</td>
                  <td>572</td>
                </tr>
                <tr>
                  <td>39</td>
                  <td>Denmark</td>
                  <td>438</td>
                </tr>
                <tr>
                  <td>40</td>
                  <td>Belarus</td>
                  <td>399</td>
                </tr>

                <tr>
                  <td>41</td>
                  <td>Finland</td>
                  <td>181</td>
                </tr>
                <tr>
                  <td>42</td>
                  <td>Norway</td>
                  <td>153</td>
                </tr>
                <tr>
                  <td>42</td>
                  <td>Iceland</td>
                  <td>92</td>
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
          <img
            src="/gdp-capita-europe-test-policy.png"
            alt="GDP per Capita vs COVID-19 Test Policy"
          />
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
          <img
            src="/GDP-per-capita-vs-deaths-per-1M.png"
            alt="GDP per Capita vs Deaths per 1M"
          />
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
            Deaths per 1M. (Pearson = -0.4)
          </p>
        </TextBox>
      </GridC>
    </WrapperCountriesGraphs>
  </Layout>
);

export default GeneralFindings;
