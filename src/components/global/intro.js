import React from "react";
import styled from "styled-components"
//import { Helmet } from "react-helmet"
//import { Link } from "gatsby"
import { withPrefix } from "gatsby"

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  grid-gap: 2rem;
  align-self: center;
  justify-content:center;
  position: relative;
	
  width: 100%;
  height:1300px;
  @media (max-width:1280px;) {
    height:110px;
  }
  
`;

const Map = () => (
  <>
  <h1 id='#maps'>Covid-19 Pandemic Evolution</h1>

  <Grid>
    <iframe className='responsive-iframe' src={withPrefix('../map/index.html')}></iframe>
  </Grid>


    
    
</>
  );


export default Map


/*


@media (max-width: 1280px) {
	.map-block .map-box {
		margin:0 auto;
		max-width:1000px;
		padding-top:100px;
		margin-left:0;
	}
	.map-section.europe-view .map-box {
		padding: 100px 100px 0 !important;
	}
	.map-block .map-pagination .btn-play {
		width: 40px;
		height: 40px;
		border: 3px solid #222b3e;
		border-radius: 12px;
	}
	.map-block .map-pagination .btn-play::before {
		height: 0;
		width: 0;
		border-bottom: 12px solid transparent;
		border-left: 18px solid #222b3e;
		border-top: 12px solid transparent;
	}
	.map-block .map-pagination .paging-holder {
		max-width: 400px !important;
	}
	
	
}

@media (max-width: 960px) {
	.map-block .map-box {
		max-width:800px;
		margin-left:0;
	}
	.map-holder .statistic-list {
		font-size: 14px !important;
	}	
	.map-holder .statistic-block {
		width: 160px !important;
	}
	.map-holder .info-list {
		font-size: 14px !important;
	}
	.map-holder .country-info {
		width: 224px !important;
	}
	.map-block .map-container {
		padding-bottom:0% !important;
		height:450px !important;
	}
	.map-block .level-list {
		top: 33%;
		margin-right:-80px !important;
	}
}


*/