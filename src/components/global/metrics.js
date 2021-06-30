import React from "react";
import styled from "styled-components"

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  grid-gap: 1rem;
  width: 100%;
  max-width: 1280px;
  align-self: center;
  justify-content:center;
  @media (max-width: 1440px) {
    max-width:1280px;
    padding:0 32px;
  }
  @media (max-width: 1280px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 1024px) {
    padding: 0 32px;
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    width: 80%
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
    height:55px;
    @media (max-width: 1024px) {
      font-size: 15px;
    }
		@media(max-width:768px) {
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
		@media(max-width:768px) {
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
  color: #222B3E;
  letter-spacing: 0px;
  font-size:32px;
  line-height:38px;
  margin-bottom:24px;
  @media (max-width: 1440px) {
    font-size:28px;
    line-height:32px;
  }
  @media (max-width: 1024px) {
    font-size:26px;
    line-height:30px;
  }
`


const GlobalStats = () => (
  <>

    <TitleSection id='toptwenty'>Top 20 Country Metrics</TitleSection>

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
              <td>32.914.424</td>
            </tr>
            <tr>
              <td>India</td>
              <td>28.063.044</td>
            </tr>
            <tr>
              <td>Brazil</td>
              <td>16.510.456</td>
            </tr>
            <tr>
              <td>France</td>
              <td>5.937.976</td>
            </tr>
            <tr>
              <td>Russia</td>
              <td>5.021.138</td>
            </tr>
            <tr>
              <td>United Kingdom</td>
              <td>4.438.076</td>
            </tr>
            <tr>
              <td>Turkey</td>
              <td>4.395.698</td>
            </tr>
            <tr>
              <td>Italy</td>
              <td>4.209.966</td>
            </tr>
            <tr>
              <td>Argentina</td>
              <td>3.723.845</td>
            </tr>
            <tr>
              <td>Spain</td>
              <td>3.710.017</td>
            </tr>
            <tr>
              <td>Germany</td>
              <td>3.655.986</td>
            </tr>
            <tr>
              <td>Colombia</td>
              <td>3.353.645</td>
            </tr>
            <tr>
              <td>Iran</td>
              <td>2.903.715</td>
            </tr>
            <tr>
              <td>Poland</td>
              <td>2.858.819</td>
            </tr>
            <tr>
              <td>Mexico</td>
              <td>2.409.400</td>
            </tr>
            <tr>
              <td>Ukraine</td>
              <td>2.222.278</td>
            </tr>
            <tr>
              <td>Peru</td>
              <td>1.958.540</td>
            </tr>
            <tr>
              <td>Indonesia</td>
              <td>1.813.527</td>
            </tr>
            <tr>
              <td>Netherlands</td>
              <td>1.647.078</td>
            </tr>
            <tr>
              <td>Czechia</td>
              <td>1.646.233</td>
            </tr>
            <tr id='highlighted'>
              <td>Greece (# 48)</td>
              <td>401.638</td>
            </tr>
            <tr>
              <td>Global AVG</td>
              <td>795.261</td>
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
              <td>Czechia</td>
              <td>154.579</td>
            </tr>
            <tr>
              <td>Bahrain</td>
              <td>145.338</td>
            </tr>
            <tr>
              <td>Gibraltar</td>
              <td>125.082</td>
            </tr>
            <tr>
              <td>Slovenia</td>
              <td>120.910</td>
            </tr>
            <tr>
              <td>Luxembourg</td>
              <td>114.357</td>
            </tr>
            <tr>
              <td>Sweden</td>
              <td>104.005</td>
            </tr>
            <tr>
              <td>Serbia</td>
              <td>102.258</td>
            </tr>
            <tr>
              <td>United States of America</td>
              <td>100.024</td>
            </tr>
            <tr>
              <td>Israel</td>
              <td>98.162</td>
            </tr>
            <tr>
              <td>Lithuania</td>
              <td>97.482</td>
            </tr>
            <tr>
              <td>Estonia</td>
              <td>97.228</td>
            </tr>
            <tr>
              <td>Netherlands</td>
              <td>95.305</td>
            </tr>
            <tr>
              <td>Belgium</td>
              <td>92.343</td>
            </tr>
            <tr>
              <td>France</td>
              <td>88.609</td>
            </tr>
            <tr>
              <td>Panama</td>
              <td>88.195</td>
            </tr>
            <tr>
              <td>Croatia</td>
              <td>86.783</td>
            </tr>
            <tr>
              <td>Georgia</td>
              <td>86.013</td>
            </tr>
            <tr>
              <td>Uruguay</td>
              <td>83.480</td>
            </tr>
            <tr>
              <td>Argentina</td>
              <td>83.157</td>
            </tr>
            <tr>
              <td>Cyprus</td>
              <td>82.989</td>
            </tr>
            <tr id='highlighted'>
              <td>Greece (# 77)</td>
              <td>37.450</td>
            </tr>
            <tr>
              <td>Global AVG</td>
              <td>34.642</td>
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
              <td>Malta</td>
              <td>72.4%</td>
            </tr>
            <tr>
              <td>Seychelles</td>
              <td>71.6%</td>
            </tr>
            <tr>
              <td>Israel</td>
              <td>63.0%</td>
            </tr>
            <tr>
              <td>Canada</td>
              <td>59.0%</td>
            </tr>
            <tr>
              <td>United Kingdom</td>
              <td>58.3%</td>
            </tr>
            <tr>
              <td>Maldives</td>
              <td>57.4%</td>
            </tr>
            <tr>
              <td>Bahrain</td>
              <td>57.0%</td>
            </tr>
            <tr>
              <td>Mongolia</td>
              <td>56.8%</td>
            </tr>
            <tr>
              <td>Chile</td>
              <td>56.6%</td>
            </tr>
            <tr>
              <td>Hungary</td>
              <td>53.9%</td>
            </tr>
            <tr>
              <td>Uruguay</td>
              <td>53.7%</td>
            </tr>
            <tr>
              <td>Iceland</td>
              <td>52.0%</td>
            </tr>
            <tr>
              <td>Qatar</td>
              <td>51.9%</td>
            </tr>
            <tr>
              <td>United Arab Emirates</td>
              <td>51.4%</td>
            </tr>
            <tr>
              <td>United States of America</td>
              <td>50.5%</td>
            </tr>
            <tr>
              <td>Finland</td>
              <td>45.3%</td>
            </tr>
            <tr>
              <td>Germany</td>
              <td>45.1%</td>
            </tr>
            <tr>
              <td>Cyprus</td>
              <td>44.4%</td>
            </tr>
            <tr>
              <td>Austria</td>
              <td>41.8%</td>
            </tr>
            <tr>
              <td>Belgium</td>
              <td>41.4%</td>
            </tr>
            <tr id='highlighted'>
              <td>Greece (# 36)</td>
              <td>36%</td>
            </tr>
            <tr>
              <td>Global AVG</td>
              <td>17%</td>
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
              <td>583.916</td>
            </tr>
            <tr>
              <td>India</td>
              <td>462.090</td>
            </tr>
            <tr>
              <td>Brazil</td>
              <td>329.206</td>
            </tr>
            <tr>
              <td>France</td>
              <td>223.786</td>
            </tr>
            <tr>
              <td>Russia</td>
              <td>127.097</td>
            </tr>
            <tr>
              <td>United Kingdom</td>
              <td>125.683</td>
            </tr>
            <tr>
              <td>Turkey</td>
              <td>120.037</td>
            </tr>
            <tr>
              <td>Italy</td>
              <td>108.911</td>
            </tr>
            <tr>
              <td>Argentina</td>
              <td>87.857</td>
            </tr>
            <tr>
              <td>Spain</td>
              <td>87.691</td>
            </tr>
            <tr>
              <td>Germany</td>
              <td>79.904</td>
            </tr>
            <tr>
              <td>Colombia</td>
              <td>77.045</td>
            </tr>
            <tr>
              <td>Iran</td>
              <td>75.227</td>
            </tr>
            <tr>
              <td>Poland</td>
              <td>73.210</td>
            </tr>
            <tr>
              <td>Mexico</td>
              <td>69.434</td>
            </tr>
            <tr>
              <td>Ukraine</td>
              <td>56.055</td>
            </tr>
            <tr>
              <td>Peru</td>
              <td>51.291</td>
            </tr>
            <tr>
              <td>Indonesia</td>
              <td>50.395</td>
            </tr>
            <tr>
              <td>Netherlands</td>
              <td>47.014</td>
            </tr>
            <tr>
              <td>Czechia</td>
              <td>30.168</td>
            </tr>
            <tr id='highlighted'>
              <td>Greece (# 40)</td>
              <td>12.040</td>
            </tr>
            <tr>
              <td>Global AVG</td>
              <td>16.543</td>
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
              <td>3.040</td>
            </tr>
            <tr>
              <td>Czechia</td>
              <td>2.820</td>
            </tr>
            <tr>
              <td>Bosnia and Herzegovina</td>
              <td>2.792</td>
            </tr>
            <tr>
              <td>Gibraltar</td>
              <td>2.789</td>
            </tr>
            <tr>
              <td>North Macedonia</td>
              <td>2.602</td>
            </tr>
            <tr>
              <td>Montenegro</td>
              <td>2.544</td>
            </tr>
            <tr>
              <td>Bulgaria</td>
              <td>2.518</td>
            </tr>
            <tr>
              <td>Slovakia</td>
              <td>2.251</td>
            </tr>
            <tr>
              <td>Brazil</td>
              <td>2.189</td>
            </tr>
            <tr>
              <td>Belgium</td>
              <td>2.157</td>
            </tr>
            <tr>
              <td>Peru</td>
              <td>2.136</td>
            </tr>
            <tr>
              <td>Italy</td>
              <td>2.082</td>
            </tr>
            <tr>
              <td>Croatia</td>
              <td>1.951</td>
            </tr>
            <tr>
              <td>Poland</td>
              <td>1.928</td>
            </tr>
            <tr>
              <td>United Kingdom</td>
              <td>1.907</td>
            </tr>
            <tr>
              <td>Slovenia</td>
              <td>1.800</td>
            </tr>
            <tr>
              <td>United States of America</td>
              <td>1.774</td>
            </tr>
            <tr>
              <td>Mexico</td>
              <td>1.754</td>
            </tr>
            <tr>
              <td>Colombia</td>
              <td>1.742</td>
            </tr>
            <tr>
              <td>Argentina</td>
              <td>1.720</td>
            </tr>
            <tr id='highlighted'>
              <td>Greece (# 46) </td>
              <td>1.123</td>
            </tr>
            <tr>
              <td>Global AVG</td>
              <td>582</td>
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
              <td>19.6%</td>
            </tr>
            <tr>
              <td>Mexico</td>
              <td>9.3%</td>
            </tr>
            <tr>
              <td>Sudan</td>
              <td>7.9%</td>
            </tr>
            <tr>
              <td>Syria</td>
              <td>7.2%</td>
            </tr>
            <tr>
              <td>Somalia</td>
              <td>5.2%</td>
            </tr>
            <tr>
              <td>Ecuador</td>
              <td>4.8%</td>
            </tr>
            <tr>
              <td>China</td>
              <td>4.6%</td>
            </tr>
            <tr>
              <td>Bosnia and Herzegovina</td>
              <td>4.5%</td>
            </tr>
            <tr>
              <td>Bulgaria</td>
              <td>4.2%</td>
            </tr>
            <tr>
              <td>United Republic of Tanzania</td>
              <td>4.1%</td>
            </tr>
            <tr>
              <td>Zimbabwe</td>
              <td>4.1%</td>
            </tr>
            <tr>
              <td>Peru</td>
              <td>3,7%</td>
            </tr>
            <tr>
              <td>Afghanistan</td>
              <td>4.1%</td>
            </tr>
            <tr>
              <td>Bolivia</td>
              <td>3.9%</td>
            </tr>
            <tr>
              <td>Liberia</td>
              <td>3,9%</td>
            </tr>
            <tr>
              <td>Hungary</td>
              <td>3,4%</td>
            </tr>
            <tr>
              <td>Tunisia</td>
              <td>3,7%</td>
            </tr>
            <tr>
              <td>Mali</td>
              <td>3,6%</td>
            </tr>
            <tr>
              <td>Niger</td>
              <td>3,6%</td>
            </tr>
            <tr>
              <td>Eswatini</td>
              <td>3,6%</td>
            </tr>
            <tr id='highlighted'>
              <td>Greece (# 36)</td>
              <td>3.0%</td>
            </tr>
            <tr>
              <td>Global AVG</td>
              <td>2,1%</td>
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
              <td>Honduras</td>
              <td>97.4%</td>
            </tr>
            <tr>
              <td>Peru</td>
              <td>72.1%</td>
            </tr>
            <tr>
              <td>Bolivia</td>
              <td>64.3%</td>
            </tr>
            <tr>
              <td>Tunisia</td>
              <td>57.5%</td>
            </tr>
            <tr>
              <td>Jordan</td>
              <td>53.9%</td>
            </tr>
            <tr>
              <td>San Marino</td>
              <td>41.1%</td>
            </tr>
            <tr>
              <td>Colombia</td>
              <td>40.0%%</td>
            </tr>
            <tr>
              <td>Brazil</td>
              <td>36.6%</td>
            </tr>
            <tr>
              <td>Bahrain</td>
              <td>35.5%</td>
            </tr>
            <tr>
              <td>Mexico</td>
              <td>34.9%</td>
            </tr>
            <tr>
              <td>Panama</td>
              <td>34.9%</td>
            </tr>
            <tr>
              <td>Paraguay</td>
              <td>33.3%</td>
            </tr>
            <tr>
              <td>Ecuador</td>
              <td>31.8%</td>
            </tr>
            <tr>
              <td>Oman</td>
              <td>29.9%</td>
            </tr>
            <tr>
              <td>Kuwait</td>
              <td>29.4%</td>
            </tr>
            <tr>
              <td>Chile</td>
              <td>28.2%</td>
            </tr>
            <tr>
              <td>North Macedonia</td>
              <td>28.1%</td>
            </tr>
            <tr>
              <td>Czechia</td>
              <td>27.9%</td>
            </tr>
            <tr>
              <td>Montenegro</td>
              <td>27.0%</td>
            </tr>
            <tr>
              <td>Bosnia and Herzegovina</td>
              <td>25.6%</td>
            </tr>
            <tr id='highlighted'>
              <td>Greece (# 67)</td>
              <td>9.8%</td>
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
              <td>9.565.101</td>
            </tr>
            <tr>
              <td>Gibraltar</td>
              <td>7.572.561</td>
            </tr>
            <tr>
              <td>Cyprus</td>
              <td>5.495.818</td>
            </tr>
            <tr>
              <td>United Arab Emirates</td>
              <td>5.034.223</td>
            </tr>
            <tr>
              <td>Austria</td>
              <td>4.614.454</td>
            </tr>
            <tr>
              <td>Luxembourg</td>
              <td>4.557.594</td>
            </tr>
            <tr>
              <td>United Kingdom</td>
              <td>2.660.145</td>
            </tr>
            <tr>
              <td>Bahrain</td>
              <td>2.645.697</td>
            </tr>
            <tr>
              <td>Czechia</td>
              <td>2.300.406</td>
            </tr>
            <tr>
              <td>Malta</td>
              <td>2.093.824</td>
            </tr>
            <tr>
              <td>Singapore</td>
              <td>2.027.680</td>
            </tr>
            <tr>
              <td>San Marino</td>
              <td>1.945.670</td>
            </tr>
            <tr>
              <td>Iceland</td>
              <td>1.943.178</td>
            </tr>
            <tr>
              <td>Wallis and Futuna</td>
              <td>1.737.113</td>
            </tr>
            <tr>
              <td>Maldives</td>
              <td>1.586.270</td>
            </tr>
            <tr>
              <td>Israel</td>
              <td>1.580.427</td>
            </tr>
            <tr>
              <td>Aruba</td>
              <td>1.544.010</td>
            </tr>
            <tr>
              <td>United States of America</td>
              <td>1.442.204</td>
            </tr>
            <tr>
              <td>Latvia</td>
              <td>1.431.850</td>
            </tr>
            <tr>
              <td>France</td>
              <td>1.303.020</td>
            </tr>
            <tr id='highlighted'>
              <td>Greece (# 44)</td>
              <td>917.519</td>
            </tr>
            <tr>
              <td>Global AVG</td>
              <td>730.967</td>
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
              <td>Algeria</td>
              <td>57.6%</td>
            </tr>
            <tr>
              <td>Mexico</td>
              <td>34.9%</td>
            </tr>
            <tr>
              <td>Honduras</td>
              <td>33.9%</td>
            </tr>
            <tr>
              <td>Brazil</td>
              <td>33.8%</td>
            </tr>
            <tr>
              <td>Ecuador</td>
              <td>31.0%</td>
            </tr>
            <tr>
              <td>Paraguay</td>
              <td>27.7%</td>
            </tr>
            <tr>
              <td>Argentina</td>
              <td>27.1%</td>
            </tr>
            <tr>
              <td>Costa Rica</td>
              <td>26.7%</td>
            </tr>
            <tr>
              <td>Bolivia</td>
              <td>25.4%</td>
            </tr>
            <tr>
              <td>Syria</td>
              <td>24.7%</td>
            </tr>
            <tr>
              <td>Montenegro</td>
              <td>24.1%</td>
            </tr>
            <tr>
              <td>Tunisia</td>
              <td>23.7%</td>
            </tr>
            <tr>
              <td>Suriname</td>
              <td>23.5%</td>
            </tr>
            <tr>
              <td>Moldova</td>
              <td>22.9%</td>
            </tr>
            <tr>
              <td>Ukraine</td>
              <td>21.6%</td>
            </tr>
            <tr>
              <td>Serbia</td>
              <td>21.4%</td>
            </tr>
            <tr>
              <td>Madagascar</td>
              <td>21.4%</td>
            </tr>
            <tr>
              <td>Democratic Rep. of Congo</td>
              <td>21.0%</td>
            </tr>
            <tr>
              <td>Haiti</td>
              <td>20.8%</td>
            </tr>
            <tr>
              <td>Bosnia and Herzegovina</td>
              <td>20.5%</td>
            </tr>
            <tr id='highlighted'>
              <td>Greece (# 131)</td>
              <td>4.1%</td>
            </tr>
            <tr>
              <td>Global AVG</td>
              <td>5.2%</td>
            </tr>
          </tbody>
        </table>

      </Item>


    </Grid>



  </>
);


export default GlobalStats