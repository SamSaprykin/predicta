import React from "react";
// import { Link } from "gatsby"
import styled from "styled-components";
import Layout from "../../components/layout";
import NavbarSubLinks from "../../components/in-depth/navbarsub";
import ChartOne from "../../components/in-depth/europe/images/secondwave/a.svg";
import DeathsChart from "../../components/in-depth/europe/images/secondwave/deaths.svg";
import SEO from "../../components/seo";

const secWaveMetadata = {
  Title: "The Second Wave | Europe & the Covid-19 Pandemic",
  Keywords: [`covid analytics`, `predicta analytics`, `covid`, `predicta`],
  Description:
    "Statistical analysis of Europe during the second wave of the pandemic from September 2020 to November 2020",
  Image: "/predicta-icon.png",
  url: "https://www.predicta4covid.com/",
  titleTemplate: "Predicta",
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: auto;
  grid-gap: 1rem;
  align-self: center;
  justify-content: center;
  width: 100%;

  color: #606060;
  font-family: "IBM Plex Sans";
  font-size: 24px;
  font-style: normal;
  letter-spacing: normal;
  line-height: 44px;
  text-align: left;

  .big-item {
    max-width: 1280px !important;
    @media (max-width: 1440px) {
      max-width: 960px !important;
    }
    @media (max-width: 1024px) {
      max-width: 768px !important;
    }
    @media (max-width: 768px) {
      padding: 0 32px;
    }
    img {
      margin: 0 auto;
    }
  }
`;

const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
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
  .metrics-table {
    @media (min-width: 1440px) {
      .wide-cell {
        min-width: 327px;
      }
      .wide-cellsec {
        min-width: 270px;
      }
      .mid-cell {
        min-width: 193px;
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

const List = styled.ul`
  list-style-type: disc !important;
  overflow-x: auto;
  margin: 0 0 2rem;
  padding: 0;
  text-align: justify;
  color: #606060;
  li {
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

const ListItem = styled.li`
  display: block;
  margin-bottom: 0;
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

const SecondWave = (props) => (
  <Layout location={props.location}>
    <SEO
      title={secWaveMetadata.Title}
      keywords={secWaveMetadata.Keywords}
      description={secWaveMetadata.Description}
      image={secWaveMetadata.Image}
      url={secWaveMetadata.url}
      titleTemplate={secWaveMetadata.titleTemplate}
    />
    <div className="row" id="first-section">
      <div className="col">
        <NavbarSubLinks />
        <TitleSection>2ND & 3RD WAVE OF THE PANDEMIC</TitleSection>
        <Gap />
        <div className="row">
          <div className="col">
            <SubTitle
              style={{
                fontWeight: `normal`,
              }}
            >
              Deaths per 1M
            </SubTitle>

            <Grid>
              <Item>
                <DeathsChart />
              </Item>
            </Grid>
          </div>
        </div>
        <TextBox>
          <p>
            We can easily see in the above graph that during the first wave of
            the pandemic Western Europe and Sweden where the main areas to
            suffer mostly. On the other hand, Central Europe and Balkan
            countries are the main areas contributing to the pandemic losses
            during the second and third wave. Having said that, most European
            countries suffered substantial losses during the second and third
            wave, with the exception of the Scandinavian countries, excluding
            Sweden.
          </p>
        </TextBox>
      </div>
    </div>

    <div
      className="row"
      style={{
        backgroundColor: `rgba(234,234,234,1)`,
      }}
    >
      <div className="col">
        <TextBox>
          <p>
            Some additional statistical data presented in the table below, will
            help us explain why the Balkan countries appear to have some of the
            highest Deaths per Million from COVID-19, while the Scandinavian
            countries appear to have some of the lowest Deaths per Million.
          </p>
        </TextBox>
        <SubTitle style={{ fontWeight: `normal` }}>
          Social & Health by Regions
        </SubTitle>

        <Grid>
          <Item>
            <table className="metrics-table">
              <thead>
                <tr>
                  <th className="wide-cell">Sub - Regions</th>
                  <th className="mid-cell">Regions</th>
                  <th>Average household size</th>
                  <th>1 member</th>
                  <th>2-3 members</th>
                  <th>4-5 members</th>
                  <th>6 or more members</th>
                  <th>Aged 65 years or over</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Western Europe</td>
                  <td>Western Europe</td>
                  <td>2,4</td>
                  <td>30,3%</td>
                  <td>47,8%</td>
                  <td>19,7%</td>
                  <td>2,2%</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Ex East Block (Central Europe)</td>
                  <td>Eastern Europe</td>
                  <td>2,6</td>
                  <td>28,5%</td>
                  <td>45,8%</td>
                  <td>21,6%</td>
                  <td>4,2%</td>
                  <td></td>
                </tr>
                <tr id="highlighted">
                  <td>Balkans</td>
                  <td>Eastern Europe</td>
                  <td>2,9</td>
                  <td>23,4%</td>
                  <td>45,2%</td>
                  <td>25,5%</td>
                  <td>6,0%</td>
                  <td>38,8%</td>
                </tr>
                <tr>
                  <td>Greece</td>
                  <td>Western Europe</td>
                  <td>2,6</td>
                  <td>25,7%</td>
                  <td>49,2%</td>
                  <td>22,6%</td>
                  <td>2,5%</td>
                  <td>36,8%</td>
                </tr>
                <tr>
                  <td>Baltic</td>
                  <td>Eastern Europe</td>
                  <td>2,4</td>
                  <td>31,5%</td>
                  <td>48,3%</td>
                  <td>17,9%</td>
                  <td>2,3%</td>
                  <td>37,4%</td>
                </tr>
                <tr id="highlighted-dark">
                  <td>Scandinavian</td>
                  <td>Western Europe</td>
                  <td>2,1</td>
                  <td>40,3%</td>
                  <td>42,6%</td>
                  <td>15,5%</td>
                  <td>1,6%</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
            <Gap />
          </Item>

          <Item className="large-item">
            <table className="metrics-table">
              <thead>
                <tr>
                  <th className="wide-cellsec">Sub - Regions</th>
                  <th className="mid-cell">Regions</th>
                  <th>GDP per Capita</th>
                  <th>Informal Employment</th>
                  <th>Living Conditions Index 2019</th>
                  <th>Health Index 2019</th>
                  <th>Care Home Beds per 1000</th>
                  <th>Diabetes Prevalence</th>
                  <th>Cardiovascular Disease deaths %</th>
                  <th>Obesity Rate %</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Western Europe</td>
                  <td>Western Europe</td>
                  <td>51.875</td>
                  <td>&nbsp;</td>
                  <td>94,3</td>
                  <td>81,7</td>
                  <td>7,7</td>
                  <td>6,2%</td>
                  <td>33,7%</td>
                  <td>22,8%</td>
                </tr>
                <tr>
                  <td>Ex East Block (Central Europe)</td>
                  <td>Eastern Europe</td>
                  <td>18.509</td>
                  <td></td>
                  <td>89,4</td>
                  <td>77,5</td>
                  <td>6,0</td>
                  <td>6,9%</td>
                  <td>46,0%</td>
                  <td>23,9%</td>
                </tr>
                <tr id="highlighted">
                  <td>Balkans</td>
                  <td>Eastern Europe</td>
                  <td>9.898</td>
                  <td>27,4%</td>
                  <td>83,0</td>
                  <td>73,3</td>
                  <td>2,0</td>
                  <td>8,5%</td>
                  <td>52,9%</td>
                  <td>21,8%</td>
                </tr>
                <tr>
                  <td>Greece</td>
                  <td>Western Europe</td>
                  <td>20.330</td>
                  <td></td>
                  <td>87,7</td>
                  <td>79,1</td>
                  <td>0,2</td>
                  <td>4,6%</td>
                  <td>43,0%</td>
                  <td>24,9%</td>
                </tr>
                <tr>
                  <td>Baltic</td>
                  <td>Eastern Europe</td>
                  <td>13.905</td>
                  <td>&nbsp;</td>
                  <td>85,8</td>
                  <td>71,0</td>
                  <td>4,2</td>
                  <td>5,0%</td>
                  <td>56,8%</td>
                  <td>23,3%</td>
                </tr>
                <tr id="highlighted-dark">
                  <td>Scandinavian</td>
                  <td>Western Europe</td>
                  <td>61.814 </td>
                  <td></td>
                  <td>96,3</td>
                  <td>82</td>
                  <td>9,8</td>
                  <td>5,6%</td>
                  <td>34,9%</td>
                  <td>21,4%</td>
                </tr>
              </tbody>
            </table>
          </Item>
        </Grid>

        <TextBox>
          <p>
            <strong>
              Some of factors that can explain the high death per million scores
              of the Balkan countries are the following:{" "}
            </strong>
          </p>

          <List>
            <ListItem>
              {" "}
              - The high average household size (2,9), which may lead to
              domestic spread of the virus. 30% of households has 4+ members.
            </ListItem>
            <ListItem>
              {" "}
              - The significantly lower GDP combined with a high Informal
              Employment percentage, factors that may indicate that people in
              these countries cannot respect the government lockdown rules, as
              they need to go out to seek a job, let alone that they cannot
              benefit of the state financial help, as the government has no way
              to identify them.
            </ListItem>
            <ListItem>
              {" "}
              - Finally, the poor quality of the health system in the Balkan
              countries combined with high diabetes and cardiovascular disease
              prevalence, could also be responsible for the significantly higher
              deaths per million in this region.
            </ListItem>
          </List>
          <p>
            <strong>Scandinavian countries</strong>, where deaths per million
            are much lower, can attribute this success to the low density of the
            population as well as the small household size (40% of the household
            are single households). Also, even though they have the highest
            number of elderly care home facilities, they seem to have protected
            them much more successfully, with the exception of Sweden, who had a
            very different approach during the first wave of the pandemic.{" "}
            <br /> <br /> It worth noting that Hungary and the Chech Republic
            demonstrated some to the worse Deaths rates per 1M, during the
            second and third wave as their preventive policies were almost
            non-existing due to internal political conflicts characterized by
            irrational propaganda.
          </p>
        </TextBox>
      </div>
    </div>

    <div className="row">
      <div className="col">
        <SubTitle
          style={{
            fontWeight: `normal`,
          }}
        >
          Average Mobility - Nov ’20-May ’21
        </SubTitle>

        <Grid>
          <Item>
            <ChartOne />
            <Gap />
          </Item>
        </Grid>

        <TextBox>
          <p>
            Another reason for the aggressive second and third waves from
            October onwards, is the significantly lower mobility reduction rates
            compared to first wave. The maximum reduction of mobility in the
            second and third wave is that of Ireland and the UK (52% and 51%),
            while in the first wave many countries had reached 70%. This is
            probably the result of less strict measures during second and third
            waves, without general lockdown measures, as well as the lower
            population response to the restrictive measures, due to general
            fatigue.
          </p>
        </TextBox>
      </div>
    </div>

    <div
      className="row"
      style={{
        backgroundColor: `rgba(234,234,234,1)`,
      }}
    >
      <div className="col">
        <SubTitle
          style={{
            fontWeight: `normal`,
          }}
        >
          Mobility vs Death per 1M November
        </SubTitle>

        <Grid>
          <Item class="big-item">
            <img
              src="/mobility-death.png"
              alt="Mobility vs Death per 1M November"
            />
            <Gap />
          </Item>
        </Grid>

        <TextBox>
          <p>
            The above graph presenting the relation between Death per 1M and
            Mobility, demonstrates a positive correlation that is: the higher
            the deaths per 1M Pop, the higher the mobility reduction. As strict
            measures such as lockdowns usually follow the pandemic rage. There
            is again a group of Central European and Balkan Countries which do
            not follow their trend, most probably for reason already discussed
            at the beginning of the section.
          </p>
        </TextBox>
      </div>
    </div>
  </Layout>
);

export default SecondWave;
