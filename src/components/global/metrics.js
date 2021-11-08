import React from "react";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  grid-gap: 1rem;
  width: 100%;
  max-width: 1280px;
  align-self: center;
  justify-content: center;
  @media (max-width: 1440px) {
    max-width: 1280px;
    padding: 0 32px;
  }
  @media (max-width: 1280px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 1024px) {
    padding: 0 32px;
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    width: 80%;
  }
  th {
    color: #ffffff;
    font-family: "IBM Plex Sans - Medium";
    font-size: 17px;
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
    height: 55px;
    @media (max-width: 1024px) {
      font-size: 15px;
    }
    @media (max-width: 768px) {
      font-size: 12px;
    }
  }
  td {
    color: #606060;
    font-family: "IBM Plex Sans - Light";
    font-size: 17px;
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
    @media (max-width: 1024px) {
      font-size: 15px;
    }
    @media (max-width: 768px) {
      font-size: 12px;
    }
  }
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  background-color: transparent;
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

const GlobalStats = () => (
  <>
    <TitleSection id="toptwenty">Top 20 Country Metrics</TitleSection>

    <Grid>
      <Item>
        <table className="metrics-table">
          <thead>
            <tr>
              <th>Country</th>
              <th>Cases</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>United States of America</td>
              <td>38.787.699</td>
            </tr>
            <tr>
              <td>India</td>
              <td>32.784.390</td>
            </tr>
            <tr>
              <td>Brazil</td>
              <td>20.780.671</td>
            </tr>
            <tr>
              <td>France</td>
              <td>6.928.459</td>
            </tr>
            <tr>
              <td>Russia</td>
              <td>6.868.186</td>
            </tr>
            <tr>
              <td>United Kingdom</td>
              <td>6.711.670</td>
            </tr>
            <tr>
              <td>Turkey</td>
              <td>5.519.225</td>
            </tr>
            <tr>
              <td>Argentina</td>
              <td>5.165.113</td>
            </tr>
            <tr>
              <td>Iran</td>
              <td>4.962.365</td>
            </tr>
            <tr>
              <td>Colombia</td>
              <td>4.895.842</td>
            </tr>
            <tr>
              <td>Spain</td>
              <td>4.867.754</td>
            </tr>
            <tr>
              <td>Italy</td>
              <td>4.528.462</td>
            </tr>
            <tr>
              <td>Indonesia</td>
              <td>4.081.625</td>
            </tr>
            <tr>
              <td>Germany</td>
              <td>3.917.716</td>
            </tr>
            <tr>
              <td>Mexico</td>
              <td>3.333.597</td>
            </tr>
            <tr>
              <td>Poland</td>
              <td>2.875.206</td>
            </tr>
            <tr>
              <td>South Africa</td>
              <td>2.753.743</td>
            </tr>
            <tr>
              <td>Ukraine</td>
              <td>2.306.080</td>
            </tr>
            <tr>
              <td>Peru</td>
              <td>2.156.116</td>
            </tr>
            <tr>
              <td>Philippines</td>
              <td>1.976.621</td>
            </tr>
            <tr id="highlighted">
              <td>Greece (# 48)</td>
              <td>583.995</td>
            </tr>
            <tr>
              <td>Global AVG</td>
              <td>1.015.158</td>
            </tr>
          </tbody>
        </table>
      </Item>

      <Item>
        <table className="metrics-table">
          <thead>
            <tr>
              <th>Country</th>
              <th>Cases per 1M Pop</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Montenegro</td>
              <td>182.996</td>
            </tr>
            <tr>
              <td>Bahrain</td>
              <td>166.235</td>
            </tr>
            <tr>
              <td>Gibraltar</td>
              <td>156.204</td>
            </tr>
            <tr>
              <td>Czechia</td>
              <td>156.194</td>
            </tr>
            <tr>
              <td>Georgia</td>
              <td>137.517</td>
            </tr>
            <tr>
              <td>Cyprus</td>
              <td>130.005</td>
            </tr>
            <tr>
              <td>Slovenia</td>
              <td>127.158</td>
            </tr>
            <tr>
              <td>Israel</td>
              <td>124.667</td>
            </tr>
            <tr>
              <td>Luxembourg</td>
              <td>123.707</td>
            </tr>
            <tr>
              <td>U.S.A.</td>
              <td>117.872</td>
            </tr>
            <tr>
              <td>Argentina</td>
              <td>115.342</td>
            </tr>
            <tr>
              <td>Netherlands</td>
              <td>112.204</td>
            </tr>
            <tr>
              <td>Uruguay</td>
              <td>111.362</td>
            </tr>
            <tr>
              <td>Sweden</td>
              <td>109.403</td>
            </tr>
            <tr>
              <td>Serbia</td>
              <td>109.112</td>
            </tr>
            <tr>
              <td>Panama</td>
              <td>106.855</td>
            </tr>
            <tr>
              <td>Estonia</td>
              <td>106.597</td>
            </tr>
            <tr>
              <td>Lithuania</td>
              <td>106.295</td>
            </tr>
            <tr>
              <td>Spain</td>
              <td>103.708</td>
            </tr>
            <tr>
              <td>France</td>
              <td>103.390</td>
            </tr>
            <tr id="highlighted">
              <td>Greece (# 77)</td>
              <td>37.450</td>
            </tr>
            <tr>
              <td>Global AVG</td>
              <td>45.404</td>
            </tr>
          </tbody>
        </table>
      </Item>

      <Item>
        <table className="metrics-table">
          <thead>
            <tr>
              <th>Vaccinations at least 1 dose</th>
              <th>%Vaccinated 1 dose</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>United Arab Emirates</td>
              <td>89,5%</td>
            </tr>
            <tr>
              <td>Portugal</td>
              <td>84,7%</td>
            </tr>
            <tr>
              <td>Malta</td>
              <td>84,1%</td>
            </tr>
            <tr>
              <td>Qatar</td>
              <td>82,5%</td>
            </tr>
            <tr>
              <td>Singapore</td>
              <td>79,4%</td>
            </tr>
            <tr>
              <td>Monaco</td>
              <td>79,0%</td>
            </tr>
            <tr>
              <td>Iceland</td>
              <td>78,4%</td>
            </tr>
            <tr>
              <td>Spain</td>
              <td>78,2%</td>
            </tr>
            <tr>
              <td>Uruguay</td>
              <td>77,3%</td>
            </tr>
            <tr>
              <td>Chile</td>
              <td>76,2%</td>
            </tr>
            <tr>
              <td>Denmark</td>
              <td>76,1%</td>
            </tr>
            <tr>
              <td>Faroe Islands</td>
              <td>75,6%</td>
            </tr>
            <tr>
              <td>Ireland</td>
              <td>75,5%</td>
            </tr>
            <tr>
              <td>Seychelles</td>
              <td>75,5%</td>
            </tr>
            <tr>
              <td>Canada</td>
              <td>75,1%</td>
            </tr>
            <tr>
              <td>China</td>
              <td>74,8%</td>
            </tr>
            <tr>
              <td>Belgium</td>
              <td>73,7%</td>
            </tr>
            <tr>
              <td>Finland</td>
              <td>73,3%</td>
            </tr>
            <tr>
              <td>Norway</td>
              <td>73,2%</td>
            </tr>
            <tr>
              <td>France</td>
              <td>72,8%</td>
            </tr>
            <tr id="highlighted">
              <td>Greece (# 36)</td>
              <td>57,3%</td>
            </tr>
            <tr>
              <td>Global AVG</td>
              <td>41%</td>
            </tr>
          </tbody>
        </table>
      </Item>

      <Item>
        <table className="metrics-table">
          <thead>
            <tr>
              <th>Country</th>
              <th>Deaths</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>United States of America</td>
              <td>628.896</td>
            </tr>
            <tr>
              <td>Brazil</td>
              <td>580.341</td>
            </tr>
            <tr>
              <td>India</td>
              <td>438.666</td>
            </tr>
            <tr>
              <td>Mexico</td>
              <td>258.496</td>
            </tr>
            <tr>
              <td>Russia</td>
              <td>181.760</td>
            </tr>
            <tr>
              <td>Indonesia</td>
              <td>132.840</td>
            </tr>
            <tr>
              <td>United Kingdom</td>
              <td>131.801</td>
            </tr>
            <tr>
              <td>Italy</td>
              <td>128.783</td>
            </tr>
            <tr>
              <td>Colombia</td>
              <td>124.755</td>
            </tr>
            <tr>
              <td>France</td>
              <td>113.000</td>
            </tr>
            <tr>
              <td>Argentina</td>
              <td>111.320</td>
            </tr>
            <tr>
              <td>Iran</td>
              <td>107.116</td>
            </tr>
            <tr>
              <td>Germany</td>
              <td>91.615</td>
            </tr>
            <tr>
              <td>Peru</td>
              <td>84.173</td>
            </tr>
            <tr>
              <td>South Africa</td>
              <td>81.446</td>
            </tr>
            <tr>
              <td>Spain</td>
              <td>78.995</td>
            </tr>
            <tr>
              <td>Poland</td>
              <td>74.810</td>
            </tr>
            <tr>
              <td>Turkey</td>
              <td>56.067</td>
            </tr>
            <tr>
              <td>Ukraine</td>
              <td>54.544</td>
            </tr>
            <tr>
              <td>Chile</td>
              <td>36.910</td>
            </tr>
            <tr id="highlighted">
              <td>Greece (# 42)</td>
              <td>13.586</td>
            </tr>
            <tr>
              <td>Global AVG</td>
              <td>20.532</td>
            </tr>
          </tbody>
        </table>
      </Item>

      <Item>
        <table className="metrics-table">
          <thead>
            <tr>
              <th>Country</th>
              <th>Deaths per 1M Pop</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Hungary</td>
              <td>3.073</td>
            </tr>
            <tr>
              <td>Bosnia and Herzegovina</td>
              <td>2.967</td>
            </tr>
            <tr>
              <td>Gibraltar</td>
              <td>2.878</td>
            </tr>
            <tr>
              <td>North Macedonia</td>
              <td>2.839</td>
            </tr>
            <tr>
              <td>Czechia</td>
              <td>2.833</td>
            </tr>
            <tr>
              <td>Montenegro</td>
              <td>2.758</td>
            </tr>
            <tr>
              <td>Brazil</td>
              <td>2.750</td>
            </tr>
            <tr>
              <td>Bulgaria</td>
              <td>2.686</td>
            </tr>
            <tr>
              <td>Peru</td>
              <td>2.589</td>
            </tr>
            <tr>
              <td>Argentina</td>
              <td>2.486</td>
            </tr>
            <tr>
              <td>Colombia</td>
              <td>2.478</td>
            </tr>
            <tr>
              <td>Slovakia</td>
              <td>2.289</td>
            </tr>
            <tr>
              <td>Paraguay</td>
              <td>2.233</td>
            </tr>
            <tr>
              <td>Belgium</td>
              <td>2.193</td>
            </tr>
            <tr>
              <td>Italy</td>
              <td>2.134</td>
            </tr>
            <tr>
              <td>Croatia</td>
              <td>2.030</td>
            </tr>
            <tr>
              <td>Mexico</td>
              <td>2.026</td>
            </tr>
            <tr>
              <td>Tunisia</td>
              <td>2.003</td>
            </tr>
            <tr>
              <td>United Kingdom</td>
              <td>1.978</td>
            </tr>
            <tr>
              <td>Poland</td>
              <td>1.970</td>
            </tr>
            <tr id="highlighted">
              <td>Greece (# 48) </td>
              <td>1.267</td>
            </tr>
            <tr>
              <td>Global AVG</td>
              <td>716</td>
            </tr>
          </tbody>
        </table>
      </Item>

      <Item>
        <table className="metrics-table">
          <thead>
            <tr>
              <th>Country</th>
              <th>Mortality %</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Yemen</td>
              <td>18,8%</td>
            </tr>
            <tr>
              <td>Sudan</td>
              <td>7,8%</td>
            </tr>
            <tr>
              <td>Mexico</td>
              <td>7,8%</td>
            </tr>
            <tr>
              <td>Syria</td>
              <td>7,2%</td>
            </tr>
            <tr>
              <td>Ecuador</td>
              <td>6,4%</td>
            </tr>
            <tr>
              <td>Egypt</td>
              <td>5,8%</td>
            </tr>
            <tr>
              <td>Somalia</td>
              <td>5,5%</td>
            </tr>
            <tr>
              <td>Taiwan</td>
              <td>5,2%</td>
            </tr>
            <tr>
              <td>China</td>
              <td>4,7%</td>
            </tr>
            <tr>
              <td>Afghanistan</td>
              <td>4,6%</td>
            </tr>
            <tr>
              <td>Bosnia and Herzegovina</td>
              <td>4,6%</td>
            </tr>
            <tr>
              <td>Liberia</td>
              <td>4,4%</td>
            </tr>

            <tr>
              <td>Bulgaria</td>
              <td>4,2%</td>
            </tr>
            <tr>
              <td>Peru</td>
              <td>3,9%</td>
            </tr>
            <tr>
              <td>Myanmar</td>
              <td>3,9%</td>
            </tr>
            <tr>
              <td>Bolivia</td>
              <td>3,8%</td>
            </tr>
            <tr>
              <td>Hungary</td>
              <td>3,7%</td>
            </tr>
            <tr>
              <td>United Republic of Tanzania</td>
              <td>3,7%</td>
            </tr>
            <tr>
              <td>Comoros</td>
              <td>3,6%</td>
            </tr>
            <tr>
              <td>Mali</td>
              <td>3,6%</td>
            </tr>
            <tr id="highlighted">
              <td>Greece (# 36)</td>
              <td>2,3%</td>
            </tr>
            <tr>
              <td>Global AVG</td>
              <td>2,0%</td>
            </tr>
          </tbody>
        </table>
      </Item>

      <Item>
        <table className="metrics-table">
          <thead>
            <tr>
              <th>Country</th>
              <th>Excess Mortality %</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Peru</td>
              <td>87,5%</td>
            </tr>
            <tr>
              <td>Bolivia</td>
              <td>82,0%</td>
            </tr>
            <tr>
              <td>Jordan</td>
              <td>59,3%</td>
            </tr>
            <tr>
              <td>Paraguay</td>
              <td>58,3%</td>
            </tr>
            <tr>
              <td>Colombia</td>
              <td>56,8%</td>
            </tr>
            <tr>
              <td>Oman</td>
              <td>52,0%</td>
            </tr>
            <tr>
              <td>Bahrain</td>
              <td>51,7%</td>
            </tr>
            <tr>
              <td>Ecuador</td>
              <td>49,9%</td>
            </tr>
            <tr>
              <td>Brazil</td>
              <td>45,9%</td>
            </tr>
            <tr>
              <td>San Marino</td>
              <td>41,1%</td>
            </tr>
            <tr>
              <td>Mexico</td>
              <td>40,3%</td>
            </tr>
            <tr>
              <td>Kuwait</td>
              <td>40,2%</td>
            </tr>
            <tr>
              <td>Panama</td>
              <td>38,6%</td>
            </tr>
            <tr>
              <td>Chile</td>
              <td>29.9%</td>
            </tr>
            <tr>
              <td>British Virgin Islands</td>
              <td>35,6%</td>
            </tr>
            <tr>
              <td>Argentina</td>
              <td>33,7%</td>
            </tr>
            <tr>
              <td>Iran</td>
              <td>32,7%</td>
            </tr>
            <tr>
              <td>North Macedonia</td>
              <td>30,7%</td>
            </tr>
            <tr>
              <td>Montenegro</td>
              <td>29,3%</td>
            </tr>
            <tr>
              <td>Czechia</td>
              <td>28,0%</td>
            </tr>
            <tr id="highlighted">
              <td>Greece (# 67)</td>
              <td>11,2%</td>
            </tr>
            <tr>
              <td>Global AVG</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </Item>

      <Item>
        <table className="metrics-table">
          <thead>
            <tr>
              <th>Country</th>
              <th>Tests per 1M Pop</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Denmark</td>
              <td>13.965.074</td>
            </tr>
            <tr>
              <td>Gibraltar</td>
              <td>10.032.543</td>
            </tr>
            <tr>
              <td>Austria</td>
              <td>8.477.406</td>
            </tr>
            <tr>
              <td>Cyprus</td>
              <td>7.692.892</td>
            </tr>
            <tr>
              <td>United Arab Emirates</td>
              <td>7.481.365</td>
            </tr>
            <tr>
              <td>Luxembourg</td>
              <td>5.367.240</td>
            </tr>
            <tr>
              <td>United Kingdom</td>
              <td>3.965.771</td>
            </tr>
            <tr>
              <td>Bahrain</td>
              <td>3.361.985</td>
            </tr>
            <tr>
              <td>Czechia</td>
              <td>3.356.089</td>
            </tr>
            <tr>
              <td>Singapore</td>
              <td>3.010.325</td>
            </tr>
            <tr>
              <td>Iceland</td>
              <td>2.851.323</td>
            </tr>
            <tr>
              <td>Malta</td>
              <td>2.696.579</td>
            </tr>
            <tr>
              <td>San Marino</td>
              <td>2.218.528</td>
            </tr>
            <tr>
              <td>Israel</td>
              <td>2.064.847</td>
            </tr>
            <tr>
              <td>Georgia</td>
              <td>2.032.656</td>
            </tr>
            <tr>
              <td>Latvia</td>
              <td>1.919.248</td>
            </tr>
            <tr>
              <td>France</td>
              <td>1.906.556</td>
            </tr>
            <tr>
              <td>Wallis and Futuna</td>
              <td>1.862.839</td>
            </tr>
            <tr>
              <td>U.S.A.</td>
              <td>1.760.387</td>
            </tr>
            <tr>
              <td>Portugal</td>
              <td>1.678.249</td>
            </tr>
            <tr id="highlighted">
              <td>Greece (# 32)</td>
              <td>1.508.012</td>
            </tr>
            <tr>
              <td>Global AVG</td>
              <td>858.331</td>
            </tr>
          </tbody>
        </table>
      </Item>

      <Item>
        <table className="metrics-table">
          <thead>
            <tr>
              <th>Country</th>
              <th>Positivity %</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Brazil</td>
              <td>37,1%</td>
            </tr>
            <tr>
              <td>Honduras</td>
              <td>35,5%</td>
            </tr>
            <tr>
              <td>Mexico</td>
              <td>34,9%</td>
            </tr>
            <tr>
              <td>Ecuador</td>
              <td>29,4%</td>
            </tr>
            <tr>
              <td>Suriname</td>
              <td>28,1%</td>
            </tr>
            <tr>
              <td>Paraguay</td>
              <td>26,5%</td>
            </tr>
            <tr>
              <td>Tunisia</td>
              <td>26,0%</td>
            </tr>
            <tr>
              <td>Argentina</td>
              <td>23,7%</td>
            </tr>
            <tr>
              <td>Costa Rica</td>
              <td>23,2%</td>
            </tr>
            <tr>
              <td>Bolivia</td>
              <td>22,0%</td>
            </tr>
            <tr>
              <td>Guatemala</td>
              <td>21,8%</td>
            </tr>
            <tr>
              <td>Afghanistan</td>
              <td>21,4%</td>
            </tr>
            <tr>
              <td>Libya</td>
              <td>20,7%</td>
            </tr>
            <tr>
              <td>Colombia</td>
              <td>20,7%</td>
            </tr>
            <tr>
              <td>Nepal</td>
              <td>20,1%</td>
            </tr>
            <tr>
              <td>Albania</td>
              <td>19,8%</td>
            </tr>
            <tr>
              <td>Haiti</td>
              <td>19,6%</td>
            </tr>
            <tr>
              <td>Namibia</td>
              <td>19,5%</td>
            </tr>
            <tr>
              <td>Central African Republic</td>
              <td>19,5%</td>
            </tr>
            <tr>
              <td>Dem. Rep. of the Congo</td>
              <td>19,2%</td>
            </tr>
            <tr id="highlighted">
              <td>Greece (# 140)</td>
              <td>3,6%</td>
            </tr>
            <tr>
              <td>Global AVG</td>
              <td>4,4%</td>
            </tr>
          </tbody>
        </table>
      </Item>
    </Grid>
  </>
);

export default GlobalStats;
