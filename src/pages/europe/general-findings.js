import React from "react"
//import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../../components/layout"
import NavbarSubLinks from "../../components/in-depth/navbarsub"
import ChartOne from "../../components/in-depth/europe/images/generalfindings/a.svg"
import ChartTwo from "../../components/in-depth/europe/images/generalfindings/b.svg"
import ChartThree from "../../components/in-depth/europe/images/generalfindings/c.svg"
import ChartFour from "../../components/in-depth/europe/images/generalfindings/d.svg"



const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: auto;
  grid-gap: 2rem;
  align-self: center;
  justify-content: center;
  width:100%;
  max-width:960px;
  @media(max-width:1440px) {
    max-width:720px;
  }
  @media(max-width:1024px) {
    max-width:768px;
    
  }
  @media(max-width:768px) {
    padding:0 32px;
  }
  &h2 {font-size: 35px}
  .wide-cell {
	  min-width:360px;
	  @media(max-width:960px) {
		min-width:auto;
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
  width:100%;
  max-width:1256px;
  @media(max-width:1440px) {
	  max-width:1080px;
  }
  @media(max-width:960px) {
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
	width:100%;
	max-width:1280px !important;
	@media(max-width:1440px) {
		max-width:960px !important;
	}
	@media(max-width:1024px) {
		max-width:768px !important;
	}
	@media(max-width:768px) {
		padding:0 32px;
	}
`

const Item = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 100%;
margin: 0 auto;

img {
	width:100%;
	height:auto;
}
@media(max-width:960px) {
	max-width:100%;
}

.metrics-table {
	@media(max-width:960px) {
		max-width:90%;
		padding:0 32px;
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
		@media(max-width:768px) {
			font-size: 12px;
		}
	}
	
}
`

const TextBox = styled.div`
display: flex;
flex-direction: column;
width:100%;
max-width: 800px;
margin: 0 auto;
@media (max-width:1440px) {
  max-width:600px;
}
@media (max-width: 1024px) {
  padding:0 32px;
}
p {
  font-size:18px;
  line-height:38px;
  @media (max-width: 1440px) {
    font-size:16px;
    line-height:32px;
  }
  @media (max-width: 1024px) {
    font-size:15px;
    line-height:30px;
  }
}
`

const Gap = styled.div`
	height: 2rem;
`

const TitleChart = styled.h3`
	color: #222b3e;
	font-family: "IBM Plex Sans";
	font-size: 35px;
	font-style: normal;
	letter-spacing: normal;
	line-height: 42px;
	text-align: center;
	/* Text style for "1st Wave -" */
	font-family: "IBM Plex Sans";
	font-weight: 400;
	font-style: normal;
	letter-spacing: normal;
	line-height: normal;
	margin-bottom:35px;
	@media(max-width:768px) {
		font-size: 16px;
	}
`

const WrapperCountriesGraphs = styled.div`
	background: #E8E8E8;
	padding:120px 0 187px;
	display:flex;
	flex-direction:column;
	align-items:center;
	.item-image {
		max-width:1000px;
	}
`

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
const SubTitle = styled.h2`
    color: #222B3E;
    font-weight:400;
    font-size:26px;
    line-height:38px;
    @media (max-width: 1440px) {
      font-size:24px;
      line-height:32px;
    }
    @media (max-width: 1024px) {
      font-size:22px;
      line-height:30px;
    }
`

const GeneralFindings = (props) => (
  <Layout location={props.location}>
    <div className="row" id="first-section">
     <div className="col">
      <NavbarSubLinks />
		<TextBox>
			<TitleSection>General Findings</TitleSection>
			<Gap/>
			<p>COVID-19 PANDEMIC has hit Europe much more than other geographical regions of the world, having almost 30% of diagnosed cases and deaths. We can also see that there is a significant difference between Western and Eastern Europe, with Western Europe having almost 20% of cases and deaths.</p>

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
				<tr id='highlighted-dark'>
					<td>Western Europe</td>
					<td>10.739.681</td>
					<td>17,1%</td>
					<td>277.659</td>
					<td>19,0%</td>
					<td>2,6%</td>
					<td>25.224</td>
					<td>652</td>
				</tr>
				<tr id='highlighted-dark'>
					<td>Eastern Europe</td>
					<td>6.812.975</td>
					<td>10,9%</td>
					<td>117.798</td>
					<td>8,1%</td>
					<td>1,7%</td>
					<td>20.012</td>
					<td>346</td>
				</tr>
				<tr id='highlighted'>
					<td>Total Europe</td>
					<td>17.552.656</td>
					<td>28,0%</td>
					<td>395.457</td>
					<td>27,1%</td>
					<td>2,3%</td>
					<td>23.319</td>
					<td>525</td>
				</tr>
				<tr>
					<td>North America</td>
					<td>13.753.617</td>
					<td>21,9%</td>
					<td>278.905</td>
					<td>19,1%</td>
					<td>2,0%</td>
					<td>37.524</td>
					<td>761</td>
				</tr>
				<tr>
					<td>Latin America and the Caribbean</td>
					<td>13.069.332</td>
					<td>20,8%</td>
					<td>447.886</td>
					<td>30,7%</td>
					<td>3,4%</td>
					<td>20.198</td>
					<td>692</td>
				</tr>
				<tr>
					<td>Asia-Pacific</td>
					<td>12.446.240</td>
					<td>19,8%</td>
					<td>195.684</td>
					<td>13,4%</td>
					<td>1,6%</td>
					<td>2.932</td>
					<td>46</td>
				</tr>
				<tr>
					<td>Middle East and North Africa</td>
					<td>4.524.000</td>
					<td>7,2%</td>
					<td>110.604</td>
					<td>7,6%</td>
					<td>2,4%</td>
					<td>8.425</td>
					<td>206</td>
				</tr>
				<tr>
					<td>Sub-Saharan Africa</td>
					<td>1.433.917</td>
					<td>2,3%</td>
					<td>32.506</td>
					<td>2,2%</td>
					<td>2,3%</td>
					<td>1.291</td>
					<td>29</td>
				</tr>
				<tr>
					<td>Global</td>
					<td>62.779.762</td>
					<td>&nbsp;</td>
					<td>1.461.042</td>
					<td>&nbsp;</td>
					<td>2,3%</td>
					<td>8.182</td>
					<td>190</td>
				</tr>
			</tbody>
		</table>
	</Item>
    </Grid>
  </div>
</div>




<div className="row" style={{backgroundColor: `rgba(234,234,234,1)`}}>
    <div className="col">
		<SubTitle style={{fontWeight: `normal`, color: "#222B3E"}}>Europe - Deaths per 1M</SubTitle>
		<Grid>
  			<Item>
				<ChartOne />
				<Gap />
			</Item>
		</Grid>

		<TextBox>
			<p>The first wave of the pandemic (Feb-May 2020) was quite difficult, with a stable and controllable summer period, followed by a much more aggressive second wave, especially from October 2020 onwards. It is interesting to examine the differentiation by region of this general trend. The graph below, of deaths per million of population, demonstrates the outlined differences..</p>
		</TextBox>

	</div>
</div>



<div className="row">
    <div className="col">
	<Grid>
		<Item>
			<TitleChart>1st Wave - Deaths per 1M</TitleChart>
			<ChartTwo />
			<Gap/>
			<TitleChart>2nd Wave - Deaths per 1M</TitleChart>
			<ChartThree />
			<Gap />
		</Item>
	</Grid>
	</div>
</div>
<div className="row" style={{backgroundColor: `rgba(234,234,234,1)`}}>
	<div className="col">
		<SubTitle style={{fontWeight: `normal`, color: "#222B3E"}}>Phases by Regions</SubTitle>
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
						<td>26.494</td>
						<td>685</td>
						<td>1,9%</td>
					</tr>
					<tr>
						<td>Ex East Block (Central Europe)</td>
						<td>4</td>
						<td>28.626</td>
						<td>483</td>
						<td>1,6%</td>
					</tr>
					<tr>
						<td>Balkans</td>
						<td>11</td>
						<td>24.940</td>
						<td>519</td>
						<td>2,1%</td>
					</tr>
					<tr>
						<td>Greece</td>
						<td>1</td>
						<td>9.718</td>
						<td>216</td>
						<td>2,2%</td>
					</tr>
					<tr>
						<td>Baltic</td>
						<td>5</td>
						<td>15.937</td>
						<td>238</td>
						<td>1,1%</td>
					</tr>
					<tr>
						<td>Scandinavian</td>
						<td>3</td>
						<td>8.331</td>
						<td>93</td>
						<td>1,2%</td>
					</tr>
					<tr>
						<td>Sweden</td>
						<td>1</td>
						<td>23.766</td>
						<td>653</td>
						<td>2,7%</td>
					</tr>
					</tbody>
				</table>
			</Item>
		<Item>


<table className="metrics-table">
	<thead>
	<tr>
		<th className="wide-cell">Europe - Regions</th>
		<th>Cases per 1M(Feb - May)</th>
		<th>Cases per 1M(Jun - Aug)</th>
		<th>Cases per 1M(Sep- Nov)</th>
		<th>Deaths per 1M(Feb - May)</th>
		<th>Deaths per 1M(Jun - Aug)</th>
		<th>Deaths per 1M(Sep- Nov)</th>
	</tr>
	</thead>
	<tbody>
	<tr>
		<td>Western Europe</td>
		<td>3.261</td>
		<td>1.617</td>
		<td>21.616</td>
		<td>398</td>
		<td>32</td>
		<td>255</td>
	</tr>
	<tr>
		<td>Ex East Block (Central Europe)</td>
		<td>598</td>
		<td>985</td>
		<td>27.043</td>
		<td>30</td>
		<td>18</td>
		<td>434</td>
	</tr>
	<tr>
		<td>Balkans</td>
		<td>959</td>
		<td>3.563</td>
		<td>20.418</td>
		<td>46</td>
		<td>107</td>
		<td>366</td>
	
	</tr>
	<tr>
		<td>Greece</td>
		<td>272</td>
		<td>673</td>
		<td>8.774</td>
		<td>16</td>
		<td>8</td>
		<td>192</td>

	</tr>
	<tr>
		<td>Baltic</td>
		<td>1.168</td>
		<td>2.151</td>
		<td>12.619</td>
		<td>18</td>
		<td>39</td>
		<td>181</td>
	</tr>
	<tr>
		<td>Scandinavian</td>
		<td>1.614</td>
		<td>507</td>
		<td>6.210</td>
		<td>67</td>
		<td>6</td>
		<td>20</td>
	</tr>
	<tr>
		<td>Sweden</td>
		<td>3.753</td>
		<td>4.481</td>
		<td>15.532</td>
		<td>452</td>
		<td>114</td>
		<td>86</td>
	</tr>
	</tbody>
</table>

</Item>



<Item>
<table className="metrics-table">
	<thead>
	<tr>
		<th>Europe - Regions</th>
		<th>% Mortality
(Feb - May)</th>
		<th>% Mortality
(Jun - Aug)</th>
		<th>% Mortality
(Sep- Nov)</th>
	</tr>
	</thead>
	<tbody>
	<tr>
		<td>Western Europe</td>
		<td>12,2%</td>
		<td>2,0%</td>
		<td>1,2%</td>
	</tr>
	<tr>
		<td>Ex East Block (Central Europe)</td>
		<td>5,1%</td>
		<td>1,9%</td>
		<td>1,6%</td>
	</tr>
	<tr>
		<td>Balkans</td>
		<td>4,8%</td>
		<td>3,0%</td>
		<td>1,8%</td>
	</tr>
	<tr>
		<td>Greece</td>
		<td>6,0%</td>
		<td>1,2%</td>
		<td>2,2%</td>
	</tr>
	<tr>
		<td>Baltic</td>
		<td>1,6%</td>
		<td>1,8%</td>
		<td>1,4%</td>
	</tr>
	<tr>
		<td>Scandinavian</td>
		<td>4,2%</td>
		<td>1,2%</td>
		<td>0,3%</td>
	</tr>
	<tr>
		<td>Sweden</td>
		<td>12,1%</td>
		<td>2,6%</td>
		<td>0,6%</td>
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
        fontWeight: `normal`, color: "#222B3E"
      }}
    >Ranking - Cases & Deaths per 1M (Feb-Nov 2020)</SubTitle>

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
		<td>56.062</td>
	</tr>
	<tr>
		<td>2</td>
		<td>Luxembourg</td>
		<td>55.340</td>
	</tr>
	<tr>
		<td>3</td>
		<td>Belgium</td>
		<td>50.390</td>
	</tr>
	<tr>
		<td>4</td>
		<td>Czechia;</td>
		<td>48.801</td>
	</tr>
	<tr>
		<td>5</td>
		<td>Switzerland</td>
		<td>37.102</td>
	</tr>
	<tr>
		<td>6</td>
		<td>Slovenia</td>
		<td>36.225</td>
	</tr>
	<tr>
		<td>7</td>
		<td>Spain</td>
		<td>35.115</td>
	</tr>
	<tr>
		<td>8</td>
		<td>Liechtenstein</td>
		<td>33.170</td>
	</tr>
	<tr>
		<td>9</td>
		<td>France</td>
		<td>33.105</td>
	</tr>
	<tr>
		<td>10</td>
		<td>Austria;</td>
		<td>31.402</td>
	</tr>
	<tr>
	<td>11</td>
		<td>Croatia</td>
		<td>31.061</td>
		
	</tr>
	<tr>
		<td>12</td>
		<td>Netherlands</td>
		<td>29.989</td>
	</tr>
	<tr>
		<td>13</td>
		<td>North Macedonia</td>
		<td>29.629</td>
	</tr>
	<tr>
		<td>14</td>
		<td>Portugal</td>
		<td>28.686</td>
	</tr>
	<tr>
		<td>15</td>
		<td>Bosnia and Herzegovina</td>
		<td>26.469</td>
	</tr>
	<tr>
		<td>16</td>
		<td>Moldova</td>
		<td>26.468</td>
	</tr>
	<tr>
		<td>17</td>
		<td>Italy</td>
		<td>26.262</td>
	</tr>
	<tr>
		<td>18</td>
		<td>Poland</td>
		<td>25.942</td>
	</tr>
	<tr>
		<td>19</td>
		<td>Serbia</td>
		<td>24.299</td>
	</tr>
	
	<tr>
		<td>20</td>
		<td>Romania</td>
		<td>24.288</td>
	</tr>
	<tr>
		<td>21</td>
		<td>United Kingdom</td>
		<td>24.267</td>
	</tr>
	<tr>
		<td>22</td>
		<td>Sweden</td>
		<td>23.766</td>
	</tr>
	<tr>
		<td>23</td>
		<td>Hungary</td>
		<td>22.217</td>
	</tr>
	<tr>
		<td>24</td>
		<td>Lithuania</td>
		<td>21.947</td>
	</tr>
	<tr>
		<td>25</td>
		<td>Kosovo</td>
		<td>21.716</td>
	</tr>
	<tr>
		<td>26</td>
		<td>Bulgaria</td>
		<td>20.355</td>
	</tr>
	<tr>
		<td>27</td>
		<td>Malta</td>
		<td>19.759</td>
	</tr>
	<tr>
		<td>28</td>
		<td>Slovakia</td>
		<td>19.399</td>
	</tr>
	<tr>
		<td>29</td>
		<td>Ukraine</td>
		<td>16.427</td>
	</tr>
	<tr>
		<td>30</td>
		<td>Russia</td>
		<td>15.737</td>
	</tr>
	<tr>
		<td>31</td>
		<td>Iceland</td>
		<td>15.073</td>
	</tr>
	<tr>
		<td>32</td>
		<td>Ireland</td>
		<td>14.730</td>
	</tr>
	<tr>
		<td>33</td>
		<td>Belarus</td>
		<td>14.283</td>
	</tr>
	<tr>
		<td>34</td>
		<td>Denmark</td>
		<td>13.667</td>
	</tr>
	<tr>
		<td>35</td>
		<td>Albania</td>
		<td>13.144</td>
	</tr>
	<tr>
		<td>36</td>
		<td>Germany</td>
		<td>12.694</td>
	</tr>
	<tr>
		<td>37</td>
		<td>Cyprus</td>
		<td>11.854</td>
	</tr>
	<tr>
		<td>38</td>
		<td>Greece</td>
		<td>9.718</td>
	</tr>
	<tr>
		<td>39</td>
		<td>Estonia</td>
		<td>9.097</td>
	</tr>
	<tr>
		<td>40</td>
		<td>Latvia</td>
		<td>8.841</td>
	</tr>
	<tr>
		<td>41</td>
		<td>Norway</td>
		<td>6.521</td>
	</tr>
	<tr>
		<td>42</td>
		<td>Finland</td>
		<td>4.463</td>
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
		<td>Belgium</td>
		<td>1452</td>
	</tr>
	<tr>
		<td>2</td>
		<td>Spain</td>
		<td>960</td>
	</tr>
	<tr>
		<td>3</td>
		<td>Italy</td>
		<td>910</td>
	</tr>
	<tr>
		<td>4</td>
		<td>United Kingdom</td>
		<td>874</td>
	</tr>
	<tr>
		<td>5</td>
		<td>North Macedonia</td>
		<td>833</td>
	</tr>
	<tr>
		<td>6</td>
		<td>Bosnia and Herzegovina</td>
		<td>794</td>
	</tr>
	<tr>
		<td>7</td>
		<td>Montenegro</td>
		<td>783</td>
	</tr>
	<tr>
		<td>8</td>
		<td>France</td>
		<td>781</td>
	</tr>
	<tr>
		<td>9</td>
		<td>Czechia</td>
		<td>764</td>
	</tr>
	<tr>
		<td>10</td>
		<td>Sweden</td>
		<td>653</td>
	</tr>
	<tr>
		<td>11</td>
		<td>Romania</td>
		<td>577</td>
	</tr>
	<tr>
		<td>12</td>
		<td>Moldova</td>
		<td>566</td>
	</tr>
	<tr>
		<td>13</td>
		<td>Kosovo</td>
		<td>559</td>
	</tr>
	<tr>
		<td>14</td>
		<td>Bulgaria</td>
		<td>545</td>
	</tr>
	<tr>
		<td>15</td>
		<td>Netherlands</td>
		<td>540</td>
	</tr>
	<tr>
		<td>16</td>
		<td>Luxembourg</td>
		<td>498</td>
	</tr>
	<tr>
		<td>17</td>
		<td>Switzerland</td>
		<td>496</td>
	</tr>
	<tr>
		<td>18</td>
		<td>Hungary</td>
		<td>494</td>
	</tr>
	<tr>
		<td>19</td>
		<td>Poland</td>
		<td>448</td>
	</tr>
	<tr>
		<td>20</td>
		<td>Slovenia</td>
		<td>445</td>
	</tr>
	<tr>
		<td>21</td>
		<td>Portugal</td>
		<td>431</td>
	</tr>
	<tr>
		<td>22</td>
		<td>Croatia</td>
		<td>420</td>
	</tr>
	<tr>
		<td>23</td>
		<td>Ireland</td>
		<td>418</td>
	</tr>
	<tr>
		<td>24</td>
		<td>Liechtenstein</td>
		<td>391</td>
	</tr>
	<tr>
		<td>25</td>
		<td>Austria</td>
		<td>328</td>
	</tr>
	<tr>
		<td>26</td>
		<td>Albania</td>
		<td>279</td>
	</tr>
	<tr>
		<td>27</td>
		<td>Ukraine</td>
		<td>278</td>
	</tr>
	<tr>
		<td>28</td>
		<td>Russia</td>
		<td>273</td>
	</tr>
	<tr>
		<td>29</td>
		<td>Malta</td>
		<td>269</td>
	</tr>
	
	<tr>
		<td>30</td>
		<td>Serbia</td>
		<td>222</td>
	</tr>
	<tr>
		<td>31</td>
		<td>Greece</td>
		<td>216</td>
	</tr>
	<tr>
		<td>32</td>
		<td>Germany</td>
		<td>196</td>
	</tr>
	<tr>
		<td>33</td>
		<td>Lithuania</td>
		<td>181</td>
	</tr>
	<tr>
		<td>34</td>
		<td>Slovakia</td>
		<td>150</td>
	</tr>
	<tr>
		<td>35</td>
		<td>Denmark</td>
		<td>143</td>
	</tr>
	
	<tr>
		<td>36</td>
		<td>Belarus</td>
		<td>122</td>
	</tr>
	<tr>
		<td>37</td>
		<td>Latvia</td>
		<td>103</td>
	</tr>
	<tr>
		<td>38</td>
		<td>Estonia</td>
		<td>85</td>
	</tr>
	<tr>
		<td>39</td>
		<td>Iceland</td>
		<td>73</td>
	</tr>
	<tr>
		<td>40</td>
		<td>Finland</td>
		<td>71</td>
	</tr>

	<tr>
		<td>41</td>
		<td>Norway</td>
		<td>62</td>
	</tr>
	<tr>
		<td>42</td>
		<td>Cyprus</td>
		<td>55</td>
	</tr>
	</tbody>
</table>


</Item>

</GridB>

<Gap/>


</div>
</div>
<WrapperCountriesGraphs>
	<SubTitle style={{fontWeight: `normal`, color: "#222B3E"}}>GDP per Capita vs COVID-19 Test Policy</SubTitle>
	<GridC>
  		<Item className="big-item">
			<ChartFour/>
			<Gap />
			</Item>
			<TextBox>
				<p>The above graph demonstrates a positive correlation between GDP and COVID-19 testing policy. There are though some exceptions to this rule, with Belarus, Latvia, Lithuania performing significantly higher number of tests given their lower GDP, while the Netherlands did exactly the opposite. </p>
			</TextBox>
	</GridC>
	<Gap/>
	<SubTitle style={{fontWeight: `normal`, color: "#222B3E"}}>GDP per Capita vs Deaths per 1M</SubTitle>
	<GridC>
  		<Item className="big-item">
			
			<img src="/graph-5.png" alt="GDP per Capita vs Deaths per 1M" />
			<Gap />
		</Item>
		<TextBox>
			<p>With respect to GDP per Capita, we note that there is a group of countries who perform well as far as deaths per million is concerned independent of the level of GDP per Capita.  (Balkan countries, ex-eastern block countries, Greece, Cyprus, Germany, Austria, Finland, Switzerland, Ireland and Norway).  While there is another group of countries of low and medium GDP per Capita who demonstrate much higher death per million index with outstanding the large western european countries (Spain, Italy, United Kingdom and France). It looks like the GDP per Capita is not a primary factor in the evolution of the pandemic in Europe.</p>
		</TextBox>
	</GridC>
</WrapperCountriesGraphs>



















  </Layout>
)

export default GeneralFindings

