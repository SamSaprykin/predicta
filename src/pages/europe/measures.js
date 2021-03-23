import React from "react"
//import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../../components/layout"
import NavbarSubLinks from "../../components/in-depth/navbarsub"
import ChartOne from "../../components/in-depth/europe/images/measures/a.svg"
import ChartTwo from "../../components/in-depth/europe/images/measures/b.svg"
import ChartThree from "../../components/in-depth/europe/images/measures/c.svg"
import ChartFour from "../../components/in-depth/europe/images/measures/d.svg"
import ChartFive from "../../components/in-depth/europe/images/measures/e.svg"
import ChartSix from "../../components/in-depth/europe/images/measures/f.svg"
import ChartSeven from "../../components/in-depth/europe/images/measures/g.svg"
import ChartEight from "../../components/in-depth/europe/images/measures/h.svg"
import ChartNine from "../../components/in-depth/europe/images/measures/i.svg"



const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: auto;
  grid-gap: 2rem;
  align-self: center;
  justify-content: center;
  width:100%;
  max-width:1256px;
  @media(max-width:1280px) {
    max-width:1080px;
    padding:0 32px;
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
  @media(max-width:1280px) {
    max-width:1080px;
    padding:0 32px;
  }
`;

const ItemSpan = styled.div`
grid-column: span 2;
justify-content: center;
padding: 1rem;
width: 700px;
	align-self: center;
	justify-self: center;

& h1 {
  color: white;
  margin:0;
}

@media (max-width: 1280px) {
  width: 600px;
}
@media (max-width: 600px) {
  width: 300px;
}
`

const Item = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 100%;
max-width:1094px;
@media(max-width:1280px) {
  max-width:1080px;
  svg {
    max-width:100%;
    height:auto;
  }
}
margin: 0 auto;
.metrics-table-alt {
  color: #606060;
  font-family: "IBM Plex Sans - Light";
  font-size: 19px;
  font-weight: 300;
  font-style: normal;
  letter-spacing: normal;
  line-height: 22.74px;
  text-align: left;
  /* Text style for "0 - no res" */
  font-family: "IBM Plex Sans";
  font-weight: 300;
  font-style: normal;
  letter-spacing: normal;
  line-height: normal;
  /* Text style for ",  ,  ," */
  font-style: normal;
  letter-spacing: normal;
  line-height: normal;
  th {
    @media(max-width:768px) {
			font-size: 12px;
		}
  }
  td {
    padding:17px 26px;
    @media(max-width:768px) {
			font-size: 12px;
		}
  }
  ul {
    margin:0;
  }
  
}
li {
  color: #606060;
  font-family: "IBM Plex Sans - Light";
  font-size: 19px;
  font-weight: 300;
  font-style: normal;
  letter-spacing: normal;
  line-height: 22.74px;
  text-align: left;
  /* Text style for "0 - no res" */
  font-family: "IBM Plex Sans";
  font-weight: 300;
  font-style: normal;
  letter-spacing: normal;
  line-height: normal;
  /* Text style for ",  ,  ," */
  font-style: normal;
  letter-spacing: normal;
  line-height: normal;
  
}

`

const TextBox = styled.div`
display: flex;
flex-direction: column;
width: 800px;
margin: 0 auto;

@media (max-width: 1024px) {
  width: 80%

}
`

const Gap = styled.div`
height: 2rem;

  @media (max-width: 1024px) {
  
  }
`


const Measures = (props) => (
    <Layout location={props.location}>

<div className="row" id="first-section">
    <div className="col">

    <NavbarSubLinks />
      
     <h1>MEASURES AGAINST COVID-19</h1>

     <Gap/>

    
<TextBox>
    <p>All the countries try to contain the pandemic by implementing a variety of preventing measures. The graph below demonstrates European countries percentage, that imposed every measures.
</p>


    </TextBox>

    </div>
    </div>


    <div className="row" style={{
        backgroundColor: `rgba(234,234,234,1)`
      }}>
    <div className="col">



    <h2
      style={{
        fontWeight: `normal`
      }}
    >Measures Imposed - Europe</h2>

<Grid>
  <Item>
<ChartOne />
<Gap />
</Item>
</Grid>

<TextBox>
<p>The measures that implied by more than 70% of the countries were: limitations of gatherings, school closure, economic measures, strengthening health system, restrictions in travelling and Lockdowns.
The graphs (Area Plots) that follow show some of the most important measures that governments imposed to fight the pandemic. The graphs describe the severity of the measures during the months of pandemic. The table below shows the levels of severity for the measures.</p>
</TextBox>

      </div>
    </div>

    <div className="row">
    <div className="col">


    <h2
      style={{
        fontWeight: `normal`
      }}
    >Measures Severity</h2>
    
<Grid>

    <Item>
    <table className="metrics-table-alt">
	<thead>
	<tr>
		<th>Name</th>
		<th>Severity</th>
	
	</tr>
	</thead>
	<tbody>
	<tr>
		<td>School closing</td>

		<td>
      <ul>
      <li>0 - no measures</li>
<li>1 - recommend closing or all schools open with alterations resulting in significant differences
      compared to non-Covid-19 operations</li>
<li>2 - require closing (only some levels or categories, eg just high school, or just public schools)</li>
<li>3 - require closing all levels</li>
</ul>

</td>
	</tr>

	<tr>
		<td>Workplace closing</td>
		<td>
      <ul>
      <li>0 - no measures</li>
<li>1 - recommend closing (or recommend work from home)</li>
<li>2 - require closing (or work from home) for some sectors or categories of workers</li>
<li>3 - require closing (or work from home) for all-but-essential workplaces (eg grocery stores, doctors)</li>

</ul>

</td>
	</tr>
  <tr>
		<td>Cancel public events</td>
		<td>
      <ul>
      <li>0 - no measures</li>
<li>1 - recommend cancelling</li>
<li>2 - require cancelling</li>
</ul>
</td>
	</tr>

  <tr>
		<td>Restrictions
on gatherings</td>
		<td>
      <ul>
      <li>0 - no restrictions</li>
    <li>1 - restrictions on very large gatherings (the limit is above 1000 people)</li>
    <li>2 - restrictions on gatherings between 101-1000 people</li>
    <li>3 - restrictions on gatherings between 11-100 people</li>
    <li>4 - restrictions on gatherings of 10 people or less</li>
    
    </ul>
    
    </td>
	</tr>


  <tr>
		<td>Restrictions
on internal movement</td>
		<td>
      <ul>
      <li>0 - no measures</li>
    <li>1 - recommend not to travel between regions/cities</li>
    <li>2 - internal movement restrictions in place</li>
    </ul>
    
    </td>
	</tr>

  <tr>
		<td>International
travel controls</td>
		<td>
      <ul>
        <li>0 - no restrictions</li>
<li>1 - screening arrivals</li>
<li>2 - quarantine arrivals from some or all regions</li>
<li>3 - ban arrivals from some regions</li>
<li>4 - ban on all regions or total border closure</li>
</ul>

</td>
	</tr>

  <tr>
		<td>Facial Coverings</td>
		<td>
      <ul><li>0 - No policy</li>
<li>1 - Recommended</li>
<li>2 - Required in some specified shared/public spaces outside the home with other people present, 
      or some situations when social distancing not possible</li>
<li>3 - Required in all shared/public spaces outside the home with other people present or all situations 
      when social distancing not possible</li>
<li>4 - Required outside the home at all times regardless of location or presence of other people</li>
</ul>
</td>
	</tr>
	</tbody>
</table>

</Item>
</Grid>

      </div>
    </div>


    <div className="row" style={{
        backgroundColor: `rgba(234,234,234,1)`
      }}>
    <div className="col">


<GridB>
<Item>

<h2
      style={{
        fontWeight: `normal`
      }}
    >School Closing</h2>


<ChartTwo />

<Gap/>

</Item>



<Item>

<h2
      style={{
        fontWeight: `normal`
      }}
    >Workplace Closing </h2>



<ChartThree />

<Gap/>

</Item>

<Item>

<h2
      style={{
        fontWeight: `normal`
      }}
    >Restrictions on Gatherings</h2>



<ChartFour />

<Gap/>

</Item>

<Item>

<h2
      style={{
        fontWeight: `normal`
      }}
    >International Travel Control</h2>



<ChartFive />

<Gap/>

</Item>

<Item>

<h2
      style={{
        fontWeight: `normal`
      }}
    >School Closing</h2>



<ChartSix />
<Gap/>


</Item>

<Item>

<h2
      style={{
        fontWeight: `normal`
      }}
    >Restrictions on Internal Movement</h2>



<ChartSeven />

<Gap/>

</Item>
<ItemSpan>
<h2
      style={{
        fontWeight: `normal`
      }}
    >Facial Masks</h2>



<ChartEight />

<Gap/>

</ItemSpan>

</GridB>

<TextBox>
<p>The above measures influenced country population mobility as the following graph demonstrates.</p></TextBox>

</div>
</div>


<div className="row">
    <div className="col">



    <h2
      style={{
        fontWeight: `normal`
      }}
    >Mobility in Europe</h2>

<Grid>
  <Item>
<ChartNine />
<Gap />
</Item>
</Grid>

<TextBox>
<p>During the first wave of the pandemic (Feb-May 2020) we see a considerable reduction in mobility in most European countries due to lockdown policies. After that period mobility remained low apart from Park mobility. Government policies such as work from home or closing business kept mobility low, while the good weather encouraged outdoor mobility.</p>
</TextBox>

      </div>
    </div>



</Layout>
)

export default Measures