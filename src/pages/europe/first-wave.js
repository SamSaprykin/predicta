import React from "react"
//import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../../components/layout"
import NavbarSubLinks from "../../components/in-depth/navbarsub"
import ChartOne from "../../components/in-depth/europe/images/firstwave/a.svg"
import ChartTwo from "../../components/in-depth/europe/images/firstwave/b.svg"
import ChartThree from "../../components/in-depth/europe/images/firstwave/c.svg"
import ChartFour from "../../components/in-depth/europe/images/firstwave/d.svg"
import ChartFive from "../../components/in-depth/europe/images/firstwave/e.svg"
import ChartSix from "../../components/in-depth/europe/images/firstwave/f.svg"
import ChartSeven from "../../components/in-depth/europe/images/firstwave/g.svg"
import ChartEight from "../../components/in-depth/europe/images/firstwave/h.svg"
import ChartNine from "../../components/in-depth/europe/images/firstwave/i.svg"


const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: auto;
  grid-gap: 2rem;
  align-self: center;
  justify-content: center;
  .age-table {
	  width:100%;
	  max-width:1346px;
  }
`;

const Item = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 100%;
max-width:1094px;
margin: 0 auto;
min-width:927px;
margin: 0 auto;
@media (max-width: 1440px) {
	min-width:960px;
}
@media (max-width:960px) {
	min-width:640px;
}
@media (max-width:768px) {
	max-width:100%;
	svg {
		max-width:90%;
	}
}
.metrics-table {
	.wide-cell {
		min-width:206px;
		@media(max-width:960px) {
			min-width:auto;
		}
	}
	.mid-cell {
		min-width:160px;
		@media(max-width:960px) {
			min-width:auto;
		}
	}
	@media(max-width:1440px) {
		padding:0 32px;
		max-width:90%;
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
		@media(max-width:768px) {
			font-size: 16px;
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
		@media(max-width:768px) {
			font-size: 16px;
		}
	}
	
}
`

const TextBox = styled.div`
display: flex;
flex-direction: column;
width: 100%;
max-width:1085px;
margin: 0 auto;
@media(max-width:768px) {
	font-size: 16px;
}
@media (max-width: 1440px) {
	max-width:960px;
}
@media (max-width: 1280px) {
	padding:0 32px;
}
@media (max-width: 470px) {
	padding:0 24px;
}
`

const Gap = styled.div`
height: 2rem;

  @media (max-width: 1024px) {
  
  }
`


const FirstWave = () => (
    <Layout>

<div className="row">
    <div className="col">

    <NavbarSubLinks />
      
     <h1>1ST WAVE OF THE PANDEMIC (FEB TO MAY 2020)</h1>

     <Gap/>

     <Grid>
  <Item>
<ChartOne />
<Gap />
</Item>
</Grid>
  
<Gap />
<TextBox>
    <p>In the map above, Europe is grouped in three major areas described by the level of the death per million index.  During the first wave of the pandemic and specifically during the months of February 2020 to May 2020, Western Europe was majorly hit by COVID-19 and presents the higher death per million indices.  Taking into account the socioeconomic status of the countries, as well as the ways the countries responded with special measures to the pandemic, we can suggest some explanations for these observations.</p>

<p>The table below presents the data concerning the first COVID-19 case date for each country, the date each country reached 100 cases, the days elapsed between these two dates and finally the dates elapsed between the 100 cases date and the date lockdown measures were imposed. We notice that the virus first arrived in prosperous countries with the highest numbers of arrivals in their airports. </p>

<p>For example, in Belgium the first COVID-19 case was recorded on the 4rth of February 2020, while many neighboring countries took more than twenty days to record the first case. We can also see that in most of the countries in the red group, more than a month passed before they reached one hundred (100) cases. During this period, most probably the virus achieved a substantial spread before any special measures were even considered. </p>

 <p>In the rest of countries where the virus arrived with delay, there was enough time for awareness and preparation.  As a consequence, many of these countries proceeded with lockdowns without any delay and prevented the spread of the virus. </p>


    </TextBox>

    </div>
    </div>



<div className="row" style={{
        backgroundColor: `#EAEAEA`
      }}>
    <div className="col">


<Grid>

<Item>


<table className="metrics-table">
	<thead>
	<tr>
		<th>Country</th>
		<th>Date of <br></br>First Case</th>
		<th>Days to<br></br> 100th Cases</th>
		<th>Date of <br></br>100th Case</th>
		<th>Date of <br></br>Lockdown</th>
		<th>Days to Lock down<br></br>From 100th Case</th>

	</tr>
	</thead>
	<tbody>
	<tr id='highlighted-dark'>
		<td>France</td>
		<td>25/1/2020</td>
		<td>1/3/2020</td>
		<td>36</td>
		<td>16/3/2020</td>
		<td>15</td>
	</tr>
	<tr id='highlighted-dark'>
		<td>Germany</td>
		<td>28/1/2020</td>
		<td>1/3/2020</td>
		<td>33</td>
		<td>21/3/2020</td>
		<td>20</td>
	</tr>
	<tr id='highlighted-dark'>
		<td>Italy</td>
		<td>31/1/2020</td>
		<td>24/2/2020</td>
		<td>24</td>
		<td>8/3/2020</td>
		<td>13</td>
	</tr>
	<tr id='highlighted-dark'>
		<td>Russia</td>
		<td>1/2/2020</td>
		<td>18/3/2020</td>
		<td>46</td>
		<td>28/3/2020</td>
		<td>10</td>
		
	</tr> 
	<tr id='highlighted-dark'>
		<td>Spain</td>
		<td>1/2/2020</td>
		<td>2/3/2020</td>
		<td>30</td>
		<td>13/3/2020</td>
		<td>11</td>
		
	</tr>
	<tr id='highlighted-dark'>
		<td>United Kingdom</td>
		<td>1/2/2020</td>
		<td>4/3/2020</td>
		<td>32</td>
		<td>24/3/2020</td>
		<td>20</td>
		
	
	</tr>
	<tr id='highlighted-dark'>
		<td>Belgium</td>
		<td>4/2/2020</td>
		<td>5/3/2020</td>
		<td>30</td>
		<td>18/3/2020</td>
		<td>13</td>
		
		
	</tr>
	<tr id='highlighted-dark'>
		<td>Sweden</td>
		<td>5/2/2020</td>
		<td>7/3/2020</td>
		<td>31</td>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
		
	</tr>
	<tr>
		<td>Austria</td>
		<td>26/2/2020</td>
		<td>9/3/2020</td>
		<td>12</td>
		<td>16/3/2020</td>
		<td>7</td>
		
		
	</tr>
	<tr>
		<td>Croatia</td>
		<td>26/2/2020</td>
		<td>20/3/2020</td>
		<td>23</td>
		<td>18/4/2020</td>
		<td>29</td>
		
	</tr>
	<tr>
		<td>Switzerland</td>
		<td>26/2/2020</td>
		<td>7/3/2020</td>
		<td>10</td>
		<td>23/3/2020</td>
		<td>16</td>
	
		
	</tr>
	<tr>
		<td>Denmark</td>
		<td>27/2/2020</td>
		<td>10/3/2020</td>
		<td>12</td>
		<td>18/3/2020</td>
		<td>8</td>
	
	</tr>
	<tr>
		<td>Greece</td>
		<td>27/2/2020</td>
		<td>13/3/2020</td>
		<td>15</td>
		<td>23/3/2020</td>
		<td>10</td>
		
		
	</tr>
	<tr>
		<td>North Macedonia</td>
		<td>27/2/2020</td>
		<td>23/3/2020</td>
		<td>25</td>
		<td>4/6/2020</td>
		<td>73</td>
		
		
	</tr>
	<tr>
		<td>Norway</td>
		<td>27/2/2020</td>
		<td>7/3/2020</td>
		<td>9</td>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
		
		
	</tr>
	<tr>
		<td>Romania</td>
		<td>27/2/2020</td>
		<td>15/3/2020</td>
		<td>17</td>
		<td>30/3/2020</td>
		<td>15</td>
		
	
	</tr>
	<tr>
		<td>Belarus</td>
		<td>28/2/2020</td>
		<td>31/3/2020</td>
		<td>32</td>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
		
	</tr>
	<tr>
		<td>Estonia</td>
		<td>28/2/2020</td>
		<td>15/3/2020</td>
		<td>16</td>
		<td>30/3/2020</td>
		<td>15</td>
		
		
	</tr>
	<tr>
		<td>Lithuania</td>
		<td>28/2/2020</td>
		<td>22/3/2020</td>
		<td>23</td>
		<td>27/5/2020</td>
		<td>66</td>
		
		
	</tr>
	<tr>
		<td>Netherlands</td>
		<td>28/2/2020</td>
		<td>7/3/2020</td>
		<td>8</td>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
		
	</tr>
	<tr>
		<td>Iceland</td>
		<td>29/2/2020</td>
		<td>13/3/2020</td>
		<td>13</td>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
		
		
	</tr>
	<tr>
		<td>Ireland</td>
		<td>1/3/2020</td>
		<td>15/3/2020</td>
		<td>14</td>
		<td>28/3/2020</td>
		<td>13</td>
		
	</tr>
	<tr>
		<td>Luxembourg</td>
		<td>1/3/2020</td>
		<td>18/3/2020</td>
		<td>17</td>
		<td>16/3/2020</td>
		<td>-2</td>
	
	</tr>
	<tr>
		<td>Czechia</td>
		<td>2/3/2020</td>
		<td>13/3/2020</td>
		<td>11</td>
		<td>16/3/2020</td>
		<td>3</td>
		
	</tr>
	<tr>
		<td>Latvia</td>
		<td>3/3/2020</td>
		<td>21/3/2020</td>
		<td>18</td>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
		
	</tr>
	<tr>
		<td>Portugal</td>
		<td>3/3/2020</td>
		<td>14/3/2020</td>
		<td>11</td>
		<td>3/4/2020</td>
		<td>20</td>
		
	</tr>
	<tr>
		<td>Poland</td>
		<td>4/3/2020</td>
		<td>15/3/2020</td>
		<td>11</td>
		<td>24/3/2020</td>
		<td>9</td>
		
	</tr>
	<tr>
		<td>Ukraine</td>
		<td>4/3/2020</td>
		<td>26/3/2020</td>
		<td>22</td>
		<td>15/3/2020</td>
		<td>-11</td>
		
	</tr>
	<tr>
		<td>Hungary</td>
		<td>5/3/2020</td>
		<td>21/3/2020</td>
		<td>16</td>
		<td>17/3/2020</td>
		<td>-4</td>
		
	</tr>
	<tr>
		<td>Liechtenstein</td>
		<td>5/3/2020</td>
		<td>21/8/2020</td>
		<td>169</td>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
		
	</tr>
	<tr>
		<td>Slovenia</td>
		<td>5/3/2020</td>
		<td>14/3/2020</td>
		<td>9</td>
		<td>19/3/2020</td>
		<td>5</td>
	
	</tr>
	<tr>
		<td>Bosnia and Herzegovina</td>
		<td>6/3/2020</td>
		<td>23/3/2020</td>
		<td>17</td>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
		
		
	</tr>
	<tr>
		<td>Malta</td>
		<td>7/3/2020</td>
		<td>23/3/2020</td>
		<td>16</td>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
		
		
	</tr>
	<tr>
		<td>Serbia</td>
		<td>7/3/2020</td>
		<td>20/3/2020</td>
		<td>13</td>
		<td>2/4/2020</td>
		<td>13</td>
		
	</tr>
	<tr>
		<td>Slovakia</td>
		<td>7/3/2020</td>
		<td>19/3/2020</td>
		<td>12</td>
		<td>8/4/2020</td>
		<td>20</td>
		
		
	</tr>
	<tr>
		<td>Bulgaria</td>
		<td>8/3/2020</td>
		<td>20/3/2020</td>
		<td>12</td>
		<td>13/3/2020</td>
		<td>-7</td>
		
	</tr>
	<tr>
		<td>Moldova</td>
		<td>8/3/2020</td>
		<td>24/3/2020</td>
		<td>16</td>
		<td>8/4/2020</td>
		<td>15</td>
		
		
	</tr>
	<tr>
		<td>Albania</td>
		<td>9/3/2020</td>
		<td>24/3/2020</td>
		<td>15</td>
		<td>2/4/2020</td>
		<td>9</td>
	
	</tr>
	<tr>
		<td>Cyprus</td>
		<td>10/3/2020</td>
		<td>24/3/2020</td>
		<td>14</td>
		<td>24/3/2020</td>
		<td>0</td>
	
		
	</tr>
	</tbody>
</table>

</Item>
</Grid>
        </div>
        </div>





<div className="row">
    <div className="col">

    <h2
      style={{
        fontWeight: `normal`
      }}
    >Prosperity Index 2019</h2>

<Grid>

<Item>

    <ChartTwo/>
 
</Item>

</Grid>

<Gap />
<Gap />
</div>
</div>



<div className="row" style={{
        backgroundColor: `#EAEAEA`}}>
    <div className="col">

<h2
      style={{
        fontWeight: `normal`
      }}
    >Airport Passengers 2019 (Million) </h2>

<Grid>

<Item>

    <ChartThree/>
 
</Item>

</Grid>
<Gap />
<TextBox>
<p>Prosperous countries, which in most cases have a high mobility in their airports, were among the first to be hit by the pandemic, for one more reason. They probably delayed their decisions on taking aggressive measures against COVID-19, under the fear that such decisions could slow down their economies. This ambivalence may resulted in a high spread of the virus with dramatic results.</p>
</TextBox>
<Gap />
<Gap />

</div>
</div>

<div className="row">
    <div className="col">



<h2
      style={{
        fontWeight: `normal`
      }}
    >Population Density </h2>

<Grid>

<Item>

    <ChartFour/>
 
</Item>

</Grid>

<Gap />

<TextBox>
<p>The population density is another factor working in favor of the spread of the virus, and although regional density within a country is a more appropriate index, the total country population density helps the understanding of the European incidence differentiation.  For example, Scandinavian and Baltic countries having lower population density are among medium and lower hit countries. While countries of Western Europe with high population density such as The Netherlands, Belgium or United Kingdom, were highly hit by the pandemic.</p>
</TextBox>
<Gap />
<Gap />

</div>
</div>


<div className="row" style={{
        backgroundColor: `#EAEAEA`}}>
    <div className="col">

<h2
      style={{
        fontWeight: `normal`
      }}
    >Health System Index 2019</h2>

<Grid>

<Item>

    <ChartFive/>
 
</Item>

</Grid>
<Gap />
<Gap />

</div>
</div>

<div className="row">
    <div className="col">

<h2
      style={{
        fontWeight: `normal`
      }}
    >ICU Beds per 100.000 Pop</h2>

<Grid>

<Item>

    <ChartSix/>
 
</Item>

</Grid>
<Gap />
<TextBox>
<p>The health systems of the western European countries are usually of higher quality compared to the health systems of the eastern European countries, as the above two graphs demonstrate. This situation, combined with the incidents in Italy – Bergamo, was most probably another reason that led eastern European countries to adopt aggressive measures against COVID-19, faster that their western partners.</p>
</TextBox>

</div>
</div>


<div className="row" style={{backgroundColor: `#EAEAEA`}}>
    <div className="col">

	<h2 style={{fontWeight: `normal`}}>COVID-19 Cases Age Distribution</h2>
 
     <Gap/>


     <Grid>
  <Item>
  <table className="metrics-table">

	<thead>
	<tr>
		<th>Europe</th>
		<th>0 - 19</th>
		<th>20 - 29</th>
		<th>30 - 39</th>
		<th>40 - 49</th>
		<th>50 - 59</th>
		<th>60 - 69</th>
		<th>70 - 79</th>
		<th>80 +</th>
		

	</tr>
	</thead>
	<tbody>
	<tr>
		<td>Western Europe</td>
		<td>2%</td>
		<td>8%</td>
		<td>10%</td>
		<td>13%</td>
		<td>17%</td>
		<td>13%</td>
		<td>13%</td>
		<td>25%</td>
	</tr>
	<tr>
		<td>Eastern Europe</td>
		<td>6%</td>
		<td>9%</td>
		<td>15%</td> 
		<td>21%</td>
		<td>21%</td>
		<td>15%</td>
		<td>8%</td>
		<td>5%</td>
		
	</tr>
	</tbody>
</table>
<Gap />
</Item>
</Grid>

<TextBox>
<p>There is a significant difference in the age distribution of COVID-19 cases between western and eastern European countries.  More than 50% of COVID-19 cases in western European countries fall in the 60+ years segment, with 25% in the 80+ years segment. On the contrary, only 28% of COVID-19 cases fall in the 60+ years segment, in the eastern European countries.</p>
</TextBox>

</div>
</div>




<div className="row">
    <div className="col">

	 <h2
      style={{
        fontWeight: `normal`
      }}
    >Countries – Age Statistics</h2>

     <Gap/>

     <Grid>
  <Item className="age-table">

  <table className="metrics-table">
	<thead>
	<tr>
		<th>Country</th>
		<th>Pop<br></br>
Median Age</th>
		<th>Pop Age<br></br> 
&gt; 70 years %</th>
		<th>Cases<br></br>
Med Age</th>
		<th>Deaths<br></br>
Med Age</th>
		<th>Cases<br></br>
		&gt; 70 years %</th>
		<th>Cases Med Age<br></br>
vs Pop Age</th>
		<th>Deaths Med Age<br></br>
vs Pop Age</th>
		<th>Cases &gt; 70 years %<br></br>
vs<br></br>
Pop Age &gt; 70 years %</th>
		<th>Mortality %</th>
	</tr>
	</thead>
	<tbody>
	<tr>
		<td>United Kingdom</td>
		<td>40,5</td>
		<td>12,5</td>
		<td>61,5</td>
		<td>80,5</td>
		<td>42,4</td>
		<td>1,519</td>
		<td>1,987</td>
		<td>3,381</td>
		<td>14,7%</td>
	</tr>
	<tr>
		<td>Belgium</td>
		<td>41,4</td>
		<td>12,8</td>
		<td>62,2</td>
		<td>84,0</td>
		<td>42,7</td>
		<td>1,502</td>
		<td>2,029</td>
		<td>3,326</td>
		<td>16,0%</td>
	</tr>
	<tr> 
		<td>Netherlands</td>
		<td>42,6</td>
		<td>11,9</td>
		<td>60,2</td>
		<td>82,2</td>
		<td>38,0</td>
		<td>1,413</td>
		<td>1,929</td>
		<td>3,198</td>
		<td>12,9%</td>
	</tr>
	<tr>
		<td>France</td>
		<td>41,4</td>
		<td>13,1</td>
		<td>54,0</td>
		<td>84,0</td>
		<td>38,0</td>
		<td>1,304</td>
		<td>2,029</td>
		<td>2,905</td>
		<td>19,0%</td>
	</tr>
	<tr>
		<td>Spain</td>
		<td>42,7</td>
		<td>13,8</td>
		<td>60,4</td>
		<td>82,6</td>
		<td>37,1</td>
		<td>1,414</td>
		<td>1,934</td>
		<td>2,689</td>
		<td>11,3%</td>
	</tr>
	<tr>
		<td>Italy</td>
		<td>45,5</td>
		<td>16,2</td>
		<td>62,0</td>
		<td>81,5</td>
		<td>40,0</td>
		<td>1,363</td>
		<td>1,791</td>
		<td>2,462</td>
		<td>14,3%</td>
	</tr>
	<tr>
		<td>Sweden</td>
		<td>41,2</td>
		<td>13,4</td>
		<td>55,0</td>
		<td>82,0</td>
		<td>29,8</td>
		<td>1,336</td>
		<td>1,99</td>
		<td>2,218</td>
		<td>12,1%</td>
	</tr>
	<tr>
		<td>Switzerland</td>
		<td>42,4</td>
		<td>12,6</td>
		<td>51,9</td>
		<td>85,4</td>
		<td>22,8</td>
		<td>1,224</td>
		<td>2,014</td>
		<td>1,807</td>
		<td>5,4%</td>
	</tr>
	<tr>
		<td>Portugal</td>
		<td>42,2</td>
		<td>14,9</td>
		<td>49,1</td>
		<td>84,9</td>
		<td>21,9</td>
		<td>1,164</td>
		<td>2,012</td>
		<td>1,467</td>
		<td>4,3%</td>
	</tr>
	<tr>
		<td>Estonia</td>
		<td>42,7</td>
		<td>13,5</td>
		<td>52,1</td>
		<td>&nbsp;</td>
		<td>19,5</td>
		<td>1,219</td>
		<td>&nbsp;</td>
		<td>1,442</td>
		<td>3,4%</td>
	</tr>
	<tr>
		<td>Denmark</td>
		<td>42,2</td>
		<td>12,3</td>
		<td>47,9</td>
		<td>&nbsp;</td>
		<td>17,3</td>
		<td>1,134</td>
		<td>&nbsp;</td>
		<td>1,404</td>
		<td>4,9%</td>
	</tr>
	<tr>
		<td>Greece</td>
		<td>44,5</td>
		<td>14,5</td>
		<td>47,3</td>
		<td>77,0</td>
		<td>20,0</td>
		<td>1,062</td>
		<td>1,731</td>
		<td>1,377</td>
		<td>6,0%</td>
	</tr>
	<tr>
		<td>Moldova</td>
		<td>36,7</td>
		<td>7,0</td>
		<td>49,2</td>
		<td>&nbsp;</td>
		<td>8,8</td>
		<td>1,341</td>
		<td>&nbsp;</td>
		<td>1,265</td>
		<td>3,6%</td>
	</tr>
	<tr>
		<td>Germany</td>
		<td>47,1</td>
		<td>16,0</td>
		<td>49,6</td>
		<td>82,6</td>
		<td>20,0</td>
		<td>1,053</td>
		<td>1,754;</td>
		<td>1,253</td>
		<td>4,6%</td>
	</tr>
	<tr>
		<td>Norway</td>
		<td>39,2</td>
		<td>10,8</td>
		<td>45,2</td>
		<td>&nbsp;</td>
		<td>12,9</td>
		<td>1,153</td>
		<td>&nbsp;</td>
		<td>1,195</td>
		<td>2,8%</td>
	</tr>
	<tr>
		<td>Romania</td>
		<td>41,1</td>
		<td>11,7</td>
		<td>48,4</td>
		<td>&nbsp;</td>
		<td>13,3</td>
		<td>1,117</td>
		<td>&nbsp;</td>
		<td>1,136</td>
		<td>6,5%</td>
	</tr>
	<tr>
		<td>Finland</td>
		<td>42,5</td>
		<td>13,3</td>
		<td>43,0</td>
		<td>&nbsp;</td>
		<td>12,1;</td>
		<td>1,012</td>
		<td>&nbsp;</td>
		<td>0,909</td>
		<td>4,6%</td>
	</tr>
	<tr>
		<td>Latvia</td>
		<td>43,6</td>
		<td>14,1</td>
		<td>43,4</td>
		<td>&nbsp;</td>
		<td>12,8</td>
		<td>0,995</td>
		<td>&nbsp;</td>
		<td>0,902</td>
		<td>2,3%</td>
	</tr>
	</tbody>
</table>
 
<Gap />
</Item>
</Grid>

<TextBox>
<p>To better understand the population age effect on COVID-19 incidences and deaths by country, we can examine the above table summary data.  In the blue area of the table, we see countries that have a high median age in their COVID-19 cases, 55+ years and over. The ratio of %Cases 70 years over %Population Age&gt;70 years in these countries, is above 2.2 demonstrating that COVID-19 hit twice as much the elderly population. As a consequence, to this, we note a high mortality rate in these countries. In contrast Germany, despite the fact that it has the highest median age population, we note a lower median age of COVID-19 cases (50 years vs 55+) and a ratio of 1.2, which leads to a much lower mortality rate (4.6% as compared to over 12% in the countries in the blue area of the table). It is interesting to understand the potential factors behind this difference.</p>
</TextBox>

</div>
</div>


<div className="row" style={{
        backgroundColor: `#EAEAEA`
      }}>
    <div className="col">



    <h2
      style={{
        fontWeight: `normal`
      }}
    >Care Home Bed per 1000 Pop</h2>

<Grid>
  <Item>
<ChartSeven />
<Gap />
</Item>
</Grid>

<TextBox>
The above graph demonstrates the fact that many countries of the blue area of the previous table have significantly higher number of elderly people care homes, which were severely hit by the COVID-19 pandemic as we will see in the table below.   Most of these countries did not protect early enough these elderly people care facilities, with the exception of Germany, which probably explains the demonstrated difference in the mortality rates.</TextBox>

      </div>
    </div>


<div className="row">
    <div className="col">

	<Gap />

    <TextBox>
    In the table below we can see that almost 50% of the COVID 19 deaths happened in elderly people care facilities.</TextBox>

<Grid>
  <Item>
  <Gap />


  <table className="metrics-table">
	<thead>
	<tr>
		<th className="wide-cell">Country</th>
		<th className="mid-cell">Report date</th>
		<th>Confirmed
COVID-19
Cases 
in LTCF residents</th>
		<th>COVID-19-related 
Deaths
in LTCF residents</th>
		<th>Total
COVID-19
Deaths</th>
		<th>% of all COVID-19
Deaths in LTCF
in the country</th>
		
	</tr>
	</thead>
	<tbody>
	<tr>
		<td>Belgium</td>
		<td>25 May</td>
		<td>5,734</td>
		<td>4,735</td>
		<td>9,312</td>
		<td>51%</td>
	
	</tr>
	<tr>
		<td>France</td>
		<td>29 May</td>
		<td>74,402</td>
		<td>14,113</td>
		<td>28,539</td>
		<td>50%</td>
	
	</tr>
	<tr>
		<td>Germany</td>
		<td>25 May</td>
		<td>15,757</td>
		<td>3,138</td>
		<td>8,257</td>
		<td>38%</td>
	</tr>
	<tr>
		<td>Ireland</td>
		<td>25 May</td>
		<td>6,392</td>
		<td>811</td>
		<td>1,354</td>
		<td>60%</td>
		
	</tr>

<tr>
	<td>Norway</td>
	<td>25 May </td>
		<td>Unknown</td>
		<td>139</td>
		<td>235</td>
		<td>59%</td>
		
</tr>

	<tr>
		<td>Netherlands</td>
		<td>19 May</td>
		<td>9,474</td>
		<td>1,779</td>
		<td>5,694</td>
		<td>31%</td>
		
	</tr>
	<tr>
		<td>Spain </td>
		<td>25 May</td>
		<td>Unknown</td>
		<td>19,066</td>
		<td>28,752</td>
		<td>66%</td>

	</tr>
	<tr>
		<td>Sweden</td>
		<td>18 May</td>
		<td>2,866</td>
		<td>1,777</td>
		<td>3,661</td>
		<td>49%</td>
	</tr>
	<tr>
		<td>UK – England & Wales</td>
		<td>15 May</td>
		<td>Unknown</td>
		<td>11,653</td>
		<td>45,226</td>
		<td>26%</td>
	</tr>
<tr>
	<td>UK – Scotland</td>
		<td>17 May</td>
		<td>5,652</td>
		<td>1,623</td>
		<td>3,546</td>
		<td>46%</td>

</tr>

	</tbody>
</table>

<Gap />
</Item>
</Grid>

<TextBox>
The following graph demonstrates the average reduction of mobility during the first wave of the pandemic (March to May 2020) attributed to the lockdown policies applied by most of the European countries.  Most European countries reduced their population mobility over 50%. Italy, Spain, France, UK, Belgium demonstrate some of the highest reduction rates of mobility but failed to restrain the first wave of pandemic. We note that Germany had a reduction of population mobility of 40%.</TextBox>

      </div>
    </div>


    <div className="row" style={{
        backgroundColor: `#EAEAEA`
      }}>
    <div className="col">



    <h2
      style={{
        fontWeight: `normal`
      }}
    >Avg Mobility Mar-May</h2>

<Grid>
  <Item>
<ChartEight />
<Gap />
</Item>
</Grid>



      </div>
    </div>


    <div className="row">
    <div className="col">



    <h2
      style={{
        fontWeight: `normal`
      }}
    >Cases per 1M vs Deaths per 1M (Feb-May)</h2>

<Grid>
  <Item>
<ChartNine />
<Gap />
</Item>
</Grid>

<TextBox>
<p>In most countries, there is an analogy between cases and deaths per million.  The Western European countries, such us Belgium, Spain, Italy, UK etc present the highest number of cases and deaths per million, with Germany being the odd one out with much lower numbers of cases and deaths per million.  Belarus, on the other hand demonstrate a significantly lower number of deaths per million, given their high number of cases per million.</p>
</TextBox>

      </div>
    </div>




</Layout>
)

export default FirstWave