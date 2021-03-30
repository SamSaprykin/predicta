import React from "react";
import styled from "styled-components"

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
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
      <td>13.383.321</td>
    </tr>
    <tr>
      <td>India</td>
      <td>9.431.691</td>
    </tr>
    <tr>
      <td>Brazil</td>
      <td>6.314.740</td>
    </tr>
    <tr>
      <td>Russia</td>
      <td>2.295.654</td>
    </tr>
    <tr>
      <td>France</td>
      <td>2.218.483</td>
    </tr>
    <tr>
      <td>Spain</td>
      <td>1.648.187</td>
    </tr>
    <tr>
      <td>United Kingdom</td>
      <td>1.617.327</td>
    </tr>
    <tr>
      <td>Italy</td>
      <td>1.585.178</td>
    </tr>
    <tr>
      <td>Argentina</td>
      <td>1.418.794</td>
    </tr>
    <tr>
      <td>Colombia</td>
      <td>1.308.376</td>
    </tr>
    <tr>
      <td>Mexico</td>
      <td>1.107.071</td>
    </tr>
    <tr>
      <td>Germany</td>
      <td>1.053.869</td>
    </tr>
    <tr>
      <td>Poland</td>
      <td>985.075</td>
    </tr>
    <tr>
      <td>Peru</td>
      <td>962.530</td>
    </tr>
    <tr>
      <td>Iran</td>
      <td>948.749</td>
    </tr>
    <tr>
      <td>South Africa</td>
      <td>787.702</td>
    </tr>
    <tr>
      <td>Ukraine</td>
      <td>722.679</td>
    </tr>
    <tr>
      <td>Belgium</td>
      <td>577.248</td>
    </tr>
    <tr>
      <td>Iraq</td>
      <td>550.435</td>
    </tr>
    <tr>
      <td>Chile</td>
      <td>550.430</td>
    </tr>
    <tr id='highlighted'>
      <td>Greece (# 65)</td>
      <td>104.227</td>
    </tr>
    <tr>
      <td>Global AVG</td>
      <td>294.741</td>
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
      <td>Bahrain</td>
      <td>52.881</td>
    </tr>
    <tr>
      <td>Belgium</td>
      <td>50.390</td>
    </tr>
    <tr>
      <td>Qatar</td>
      <td>48.956</td>
    </tr>
    <tr>
      <td>Czechia</td>
      <td>48.801</td>
    </tr>
    <tr>
      <td>Armenia</td>
      <td>45.685</td>
    </tr>
    <tr>
      <td>United States of America</td>
      <td>40.671</td>
    </tr>
    <tr>
      <td>Israel</td>
      <td>39.437</td>
    </tr>
    <tr>
      <td>Panama</td>
      <td>38.792</td>
    </tr>
    <tr>
      <td>Switzerland</td>
      <td>37.102</td>
    </tr>
    <tr>
      <td>Slovenia</td>
      <td>36.225</td>
    </tr>
    <tr>
      <td>Spain</td>
      <td>35.115</td>
    </tr>
    <tr>
      <td>Georgia</td>
      <td>33.923</td>
    </tr>
    <tr>
      <td>Kuwait</td>
      <td>33.854</td>
    </tr>
    <tr>
      <td>France</td>
      <td>33.105</td>
    </tr>
    <tr>
      <td>Argentina</td>
      <td>31.683</td>
    </tr>
    <tr>
      <td>Austraia</td>
      <td>31.402</td>
    </tr>
    <tr>
      <td>Croatia</td>
      <td>31.061</td>
    </tr>
    <tr>
      <td>Puerto Rico</td>
      <td>30.884</td>
    </tr>
    <tr>
      <td>Netherlands</td>
      <td>29.989</td>
    </tr>
    <tr>
      <td>Brazil</td>
      <td>29.921</td>
    </tr>
    <tr id='highlighted'>
      <td>Greece (# 89)</td>
      <td>9.718</td>
    </tr>
    <tr>
      <td>Global AVG</td>
      <td>12.162</td>
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
      <td>266.873</td>
    </tr>
    <tr>
      <td>Brazil</td>
      <td>172.833</td>
    </tr>
    <tr>
      <td>India</td>
      <td>137.139</td>
    </tr>
    <tr>
      <td>Mexico</td>
      <td>105.655</td>
    </tr>
    <tr>
      <td>United Kingdom</td>
      <td>58.245</td>
    </tr>
    <tr>
      <td>Italy</td>
      <td>54.904</td>
    </tr>
    <tr>
      <td>France</td>
      <td>52.325</td>
    </tr>
    <tr>
      <td>Iran</td>
      <td>47.875</td>
    </tr>
    <tr>
      <td>Spain</td>
      <td>45.069</td>
    </tr>
    <tr>
      <td>Russia</td>
      <td>39.895</td>
    </tr>
    <tr>
      <td>Argentina</td>
      <td>38.473</td>
    </tr>
    <tr>
      <td>Colombia</td>
      <td>36.584</td>
    </tr>
    <tr>
      <td>Peru</td>
      <td>35.923</td>
    </tr>
    <tr>
      <td>South Africa</td>
      <td>21.477</td>
    </tr>
    <tr>
      <td>Poland</td>
      <td>17.029</td>
    </tr>
    <tr>
      <td>Indonesia</td>
      <td>16.815</td>
    </tr>
    <tr>
      <td>Belgium</td>
      <td>16.635</td>
    </tr>
    <tr>
      <td>Germany</td>
      <td>16.248</td>
    </tr>
    <tr>
      <td>Chile</td>
      <td>15.356</td>
    </tr>
    <tr>
      <td>Turkey</td>
      <td>13.558</td>
    </tr>
    <tr id = 'highlighted'>
      <td>Greece (# 52)</td>
      <td>2.321</td>
    </tr>
    <tr>
      <td>Global AVG</td>
      <td>6.859</td>
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
      <td>Belgium</td>
      <td>1.452</td>
    </tr>
    <tr>
      <td>Peru</td>
      <td>1.105</td>
    </tr>
    <tr>
      <td>Spain</td>
      <td>960</td>
    </tr>
    <tr>
      <td>Italy</td>
      <td>910</td>
    </tr>
    <tr>
      <td>United Kingdom</td>
      <td>874</td>
    </tr>
    <tr>
      <td>Argentina</td>
      <td>859</td>
    </tr>
    <tr>
      <td>North Macedonia</td>
      <td>833</td>
    </tr>
    <tr>
      <td>Mexico</td>
      <td>828</td>
    </tr>
    <tr>
      <td>Brazil</td>
      <td>819</td>
    </tr>
    <tr>
      <td>United States of America</td>
      <td>811</td>
    </tr>
    <tr>
      <td>Chile</td>
      <td>810</td>
    </tr>
    <tr>
      <td>Bosnia and Herzegovina</td>
      <td>794</td>
    </tr>
    <tr>
      <td>France</td>
      <td>781</td>
    </tr>
    <tr>
      <td>Bolivia</td>
      <td>778</td>
    </tr>
    <tr>
      <td>Ecuador</td>
      <td>773</td>
    </tr>
    <tr>
      <td>Czechia</td>
      <td>764</td>
    </tr>
    <tr>
      <td>Armenia</td>
      <td>732</td>
    </tr>
    <tr>
      <td>Colombia</td>
      <td>727</td>
    </tr>
    <tr>
      <td>Panama</td>
      <td>721</td>
    </tr>
    <tr>
      <td>Guam</td>
      <td>669</td>
    </tr>
    <tr id='highlighted'>
      <td>Greece (# 68) </td>
      <td>216</td>
    </tr>
    <tr>
      <td>Global AVG</td>
      <td>208</td>
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
      <td>28,3%</td>
    </tr>
    <tr>
      <td>Mexico</td>
      <td>9,5%</td>
    </tr>
    <tr>
      <td>Sudan</td>
      <td>7,0%</td>
    </tr>
    <tr>
      <td>Ecuador</td>
      <td>7,0%</td>
    </tr>
    <tr>
      <td>Bolivia</td>
      <td>6,2%</td>
    </tr>
    <tr>
      <td>Egypt</td>
      <td>5,7%</td>
    </tr>
    <tr>
      <td>Syria</td>
      <td>5,3%</td>
    </tr>
    <tr>
      <td>Liberia</td>
      <td>5,2%</td>
    </tr>
    <tr>
      <td>China</td>
      <td>5,2%</td>
    </tr>
    <tr>
      <td>Iran</td>
      <td>5,0%</td>
    </tr>
    <tr>
      <td>Afghanistan</td>
      <td>3,8%</td>
    </tr>
    <tr>
      <td>Peru</td>
      <td>3,7%</td>
    </tr>
    <tr>
      <td>United Kingdom</td>
      <td>3,6%</td>
    </tr>
    <tr>
      <td>Italy</td>
      <td>3,5%</td>
    </tr>
    <tr>
      <td>Jersey</td>
      <td>3,4%</td>
    </tr>
    <tr>
      <td>Guatemala</td>
      <td>3,4%</td>
    </tr>
    <tr>
      <td>Tunisia</td>
      <td>3,3%</td>
    </tr>
    <tr>
      <td>Gambia</td>
      <td>3,3%</td>
    </tr>
    <tr>
      <td>Australia</td>
      <td>3,3%</td>
    </tr>
    <tr>
      <td>Canada</td>
      <td>3,2%</td>
    </tr>
    <tr id='highlighted'>
    <td>Greece (# 67)</td>
      <td>2,2%</td>
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
      <td>Bolivia</td>
      <td>39,8%</td>
    </tr>
    <tr>
      <td>Peru</td>
      <td>37,3%</td>
    </tr>
    <tr>
      <td>Ecuador</td>
      <td>20,7%</td>
    </tr>
    <tr>
      <td>Panama</td>
      <td>16,8%</td>
    </tr>
    <tr>
      <td>Colombia</td>
      <td>16,7%</td>
    </tr>
    <tr>
      <td>Mexico</td>
      <td>16,5%</td>
    </tr>
    <tr>
      <td>Belgium</td>
      <td>15,0%</td>
    </tr>
    <tr>
      <td>Chile</td>
      <td>14,9%</td>
    </tr>
    <tr>
      <td>Tunisia</td>
      <td>14,7%</td>
    </tr>
    <tr>
      <td>Iran</td>
      <td>14,6%</td>
    </tr>
    <tr>
      <td>Kuwait</td>
      <td>14,6%</td>
    </tr>
    <tr>
      <td>Brazil</td>
      <td>13,7%</td>
    </tr>
    <tr>
      <td>Saudi Arabia</td>
      <td>12,9%</td>
    </tr>
    <tr>
      <td>Bahrain</td>
      <td>12,7%</td>
    </tr>
    <tr>
      <td>Argentina</td>
      <td>11,6%</td>
    </tr>
    <tr>
      <td>Iraq</td>
      <td>11,5%</td>
    </tr>
    <tr>
      <td>Morocco</td>
      <td>11,0%</td>
    </tr>
    <tr>
      <td>Qatar</td>
      <td>10,7%</td>
    </tr>
    <tr>
      <td>Spain</td>
      <td>10,7%</td>
    </tr>
    <tr>
      <td>United States of America</td>
      <td>9,8%</td>
    </tr>
    <tr id='highlighted'>
      <td>Greece (# 76)</td>
      <td>1,9%</td>
    </tr>
    <tr>
      <td>Global AVG</td>
      <td>3,5%</td>
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
      <td>Luxembourg</td>
      <td>2.180.641</td>
    </tr>
    <tr>
      <td>United Arab Emirates</td>
      <td>1.682.881</td>
    </tr>
    <tr>
      <td>Denmark</td>
      <td>1.280.243</td>
    </tr>
    <tr>
      <td>Bahrain</td>
      <td>1.190.350</td>
    </tr>
    <tr>
      <td>Iceland</td>
      <td>1.139.996</td>
    </tr>
    <tr>
      <td>Malta</td>
      <td>968.281</td>
    </tr>
    <tr>
      <td>Singapore</td>
      <td>757.835</td>
    </tr>
    <tr>
      <td>United Kingdom</td>
      <td>639.070</td>
    </tr>
    <tr>
      <td>Israel</td>
      <td>609.406</td>
    </tr>
    <tr>
      <td>United States of America</td>
      <td>587.409</td>
    </tr>
    <tr>
      <td>Russia</td>
      <td>523.585</td>
    </tr>
    <tr>
      <td>Cyprus</td>
      <td>511.486</td>
    </tr>
    <tr>
      <td>Belgium</td>
      <td>507.835</td>
    </tr>
    <tr>
      <td>San Marino</td>
      <td>506.287</td>
    </tr>
    <tr>
      <td>Spain</td>
      <td>491.693</td>
    </tr>
    <tr>
      <td>Aruba</td>
      <td>468.692</td>
    </tr>
    <tr>
      <td>Lithuania</td>
      <td>464.264</td>
    </tr>
    <tr>
      <td>Maldives</td>
      <td>457.122</td>
    </tr>
    <tr>
      <td>Portugal</td>
      <td>427.449</td>
    </tr>
    <tr>
      <td>Norway</td>
      <td>408.915</td>
    </tr>
    <tr id='highlighted'>
      <td>Greece (# 41)</td>
      <td>221.320</td>
    </tr>
    <tr>
      <td>Global AVG</td>
      <td>241.868</td>
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
<td>Mexico</td>
<td>41,3%</td>
</tr>
<tr>
<td>Honduras</td>
<td>41,2%</td>
</tr>
<tr>
<td>Bolivia</td>
<td>39,1%</td>
</tr>
<tr>
<td>Costa Rica</td>
<td>39,0%</td>
</tr>
<tr>
<td>Argentina</td>
<td>36,9%</td>
</tr>
<tr>
<td>Ecuador</td>
<td>32,0%</td>
</tr>
<tr>
<td>Afghanistan</td>
<td>31,8%</td>
</tr>
<tr>
<td>Brazil</td>
<td>29,1%</td>
</tr>
<tr>
<td>Myanmar</td>
<td>28,4%</td>
</tr>
<tr>
<td>Haiti</td>
<td>27,1%</td>
</tr>
<tr>
<td>Armenia</td>
<td>26,6%</td>
</tr>
<tr>
<td>Montenegro</td>
<td>26,4%</td>
</tr>
<tr>
<td>Colombia</td>
<td>26,0%</td>
</tr>
<tr>
<td>Suriname</td>
<td>24,9%</td>
</tr>
<tr>
<td>Guatemala</td>
<td>23,2%</td>
</tr>
<tr>
<td>Moldova</td>
<td>23,1%</td>
</tr>
<tr>
<td>Oman</td>
<td>22,4%</td>
</tr>
<tr>
<td>Bosnia and Herzegovina</td>
<td>20,7%</td>
</tr>
<tr>
<td>Albania</td>
<td>20,3%</td>
</tr>
<tr>
<td>Tunisia</td>
<td>20,0%</td>
</tr>
<tr id='highlighted'>
<td>Greece (# 111)</td>
<td>4,4%</td>
</tr>
<tr>
<td>Global AVG)</td>
<td>7,0%</td>
</tr>
</tbody>
</table>

</Item>


</Grid>

      
    
</>
  );


export default GlobalStats