import React from "react";
import styled from "styled-components"

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: auto;
  grid-gap: 2rem;
  align-self: center;
  justify-content:center;
  align-items: start;
  width:100%;
  max-width: 1220px;
  @media (max-width: 1440px) {
    max-width: 1080px;
  }
  @media (max-width: 1024px) {
    grid-template-columns: repeat(1, 1fr);
    width: 100%;
    padding:0 32px;
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
  .small-metrics {
    max-width:600px;
  }
  table {
    th {
      text-align:left;
      padding-left:24px;
    }
    td {
      text-align:left;
      padding-left:24px;
    }
  }
`;

const TextBox = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width:100%:
max-width: 1220px;
margin: 62px auto 48px;
@media (max-width: 1440px) {
  max-width: 1080px;
}
p {
  font-size:25px;
  color: #606060;
}
@media (max-width: 1024px) {
  width:100%;
  padding:0 32px;
  margin: 24px 0;
}
`



const TitleSection = styled.h1`
  text-transform: uppercase;
  color: #222B3E;
  letter-spacing: 0px;
  font-size:50px;
  line-height:65px;
  margin-bottom:0;
  @media (max-width: 1024px) {
    font-size:42px;
    line-height:48px;
  }
`



const GlobalStats = () => (
  <>
  <TitleSection >Data Category & Relevant Sources</TitleSection>
  <TextBox>
    <p>To create the Master COVID-19 file 23 different data sources were finally used after extensive research and evaluation. These sources belong to Official Health organizations like WHO & ECDC, Universities from the UK & the US, Non-Profit Foundations like Wikipedia and Institutes like the World Bank. 213 countries' data were included in the Master File and a total of over 1000 KPIs were found or produced. </p>
  </TextBox>
  <Grid>
    <Item>
    <table className="metrics-table">
      <thead>
        <tr>
          <th>Data Category</th>
          <th>Content</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Virus</td>
          <td>Infections, Tests, Demographics, Government Measures, Population Mobility etc.</td>
        </tr>
        <tr>
          <td>Health System</td>
          <td>Beds, ICUs, Hospitals, Physicians, Vaccines etc.</td>
        </tr>
        <tr>
          <td>Hazards</td>
          <td>Health Risk factors, Causes of Deaths, Perceived Health Status, Life Expectancy etc.</td>
        </tr>
        <tr>
          <td>General</td>
          <td>Population Density, Age, Climate, Continent etc.</td>
        </tr>
        <tr>
          <td>Socioeconomics</td>
          <td>Flights, Prosperity Indexes, Enterprizes, Households size etc.</td>
        </tr>
        
      </tbody>
    </table>

    </Item>
    <Item>
      <table className="metrics-table small-metrics">
        <thead>
          <tr>
            <th>Sources</th>
          
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>European Centre for Disease Prevention and Control (ECDC)</td>
            
          </tr>
          <tr>
            <td>Organisation for Economic Co-operation & Development (OECD)</td>
          
          </tr>
          <tr>
            <td>United Nations (OCHA)</td>
            
          </tr>
          <tr>
            <td>United Nations (UNDP)</td>
          
          </tr>
          <tr>
            <td>United Nations (DESA)</td>
            
          </tr>
          <tr>
            <td>World Health Organization (WHO)</td>
          
          </tr>
          <tr>
            <td>World Bank Group (WBG)</td>
            
          </tr>
          <tr>
            <td>Eurostat</td>
            
          </tr>
          <tr>
            <td>Central Intelligence Agency (CIA)</td>
          
          </tr>
          <tr>
            <td>University of Oxford</td>
          
          </tr>
          <tr>
            <td>Blavatnik School of Government</td>
          
          </tr>
          <tr>
            <td>University of Washington (GHDx)</td>
          
          </tr>
          <tr>
            <td>Legatum Institute</td>
          
          </tr>
          <tr>
            <td>ACAPS (NonProfit)</td>
          
          </tr>
          <tr>
            <td>OWID (NonProfit)</td>
          
          </tr>
          <tr>
            <td>Institute for Health Metrics and Evaluation (IHME)</td>
          
          </tr>
          <tr>
            <td>International Labour Organization (ILO)</td>
          
          </tr>
          <tr>
            <td>Worldometer (NonProfit)</td>
          
          </tr>
          <tr>
            <td>City Population (NonProfit)</td>
          
          </tr>
          <tr>
            <td>Wikipedia (NonProfit)</td>
          
          </tr>
          <tr>
            <td>Google LLC</td>
          
          </tr>
          <tr>
            <td>National Health Ministries</td>
          
          </tr>
        </tbody>
      </table>
    </Item>
  </Grid>
    
</>
  );


export default GlobalStats