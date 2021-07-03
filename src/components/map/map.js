import React from "react"
import { Helmet } from "react-helmet"
//import { Link } from "gatsby"
import { withPrefix } from "gatsby"

// import "../styles/normalize.css"
// import "../styles/style.css"
export default function MapAnimated() {
	return (

		<>
			<Helmet>

				<script src={withPrefix('/js/jquery-3.3.1.min.js')}> </script>
				<script src="https://d3js.org/d3.v5.min.js"></script>
				<script src="https://d3js.org/d3-geo-projection.v2.min.js"></script>
				<script src={withPrefix('/js/jquery.main.js')}> </script>

			</Helmet>

			{/* eslint-disable jsx-a11y/anchor-is-valid */}
			<main id="main">
				<div className="map-section text-center">
					{/* <div className="container">
					<h2 className="text-uppercase">COVID-19 PANDEMIC EVOLUTION</h2>
				</div> */}
					<div className="map-block">
						<h3><span className="current-month"></span></h3>
						<div className="map-frame">
							{/* <div className="mobile-cap">
							<div className="holder">
								<h4>Viewing from Mobile?</h4>
								<p>Please view this website from desktop.</p>
							</div>
						</div> */}
							<div className="map-holder">
								<div className="statistic-block">
									<ul className="statistic-list">
										<li className="active"><a data-filter="Cases_per_Mil" data-range="[44, 540]" href="#">Cases per 1M Pop</a></li>
										<li><a data-filter="Deaths_per_Mil" data-range="[0.2, 7]" href="#">Deaths per 1M Pop</a></li>
										<li><a data-filter="Mortality_Rate" data-range="[1, 2.8]" href="#">Mortality %</a></li>
										<li><a data-filter="Positivity_Rate" data-range="[2, 8]" href="#">Positivity %</a></li>
										<li><a data-filter="Mobility_Rate" data-range="[-35, -18]" href="#">Mobility %</a></li>
										<li><a data-filter="Government_Stringency" data-range="[51, 71]" href="#">Gov Stringency</a></li>
										<li><a data-filter="Vaccinations_Rate" data-range="[0, 15]" href="#">Vaccinations
											Rate</a></li>
									</ul>
								</div>
								<ul className="map-switcher">
									<li className="active"><a href="#" data-map="global">GLOBAL</a></li>
									<li><a href="#" data-map="europe">EUROPE</a></li>
								</ul>
								<div className="country-info">
									<div className="heading">
										<div className="flag-box">
											<img className="flag-image" src="./images/none.png" alt=""></img>
										</div>
										<h4 className="country"></h4>
									</div>
									<ul className="info-list">
										<li>
											<span className="dt">Population:</span>
											<span className="dd population">-</span>
										</li>
										<li>
											<span className="dt">Day of First Case:</span>
											<span className="dd day-first-case">-</span>
										</li>
										<li>
											<span className="dt">Cases:</span>
											<span className="dd cases">-</span>
										</li>
										<li>
											<span className="dt">Cases per 1M Pop:</span>
											<span className="dd cases-per-million">-</span>
										</li>
										<li>
											<span className="dt">Deaths:</span>
											<span className="dd deaths">-</span>
										</li>
										<li>
											<span className="dt">Deaths per 1M Pop:</span>
											<span className="dd deaths-per-million">-</span>
										</li>
										<li>
											<span className="dt">Mortality:</span>
											<span className="dd mortality">-</span>
										</li>
										<li>
											<span className="dt">Tests per 1M Pop:</span>
											<span className="dd tests-per-million">-</span>
										</li>
										<li>
											<span className="dt">Positivity:</span>
											<span className="dd positivity">-</span>
										</li>
										<li>
											<span className="dt">Mobility:</span>
											<span className="dd mobility">-</span>
										</li>
										<li>
											<span className="dt">Gov Stringency:</span>
											<span className="dd gov-stringency">-</span>
										</li>
									</ul>
								</div>
							</div>
							<div className="map-box">
								<div className="map-container"></div>
								<ul className="level-list">
									<li>
										HIGH
									<span className="label high"></span>
									</li>
									<li>
										MEDIUM
									<span className="label medium"></span>
									</li>
									<li>
										LOW
									<span className="label low"></span>
									</li>
								</ul>
							</div>
							<div className="map-pagination">
								<a className="btn-play" href="#">play</a>
								<a className="btn-prev" href="#"><i className="icon-arrow-l"></i></a>
								<div className="paging-holder">
									<ul className="pagination"></ul>
								</div>
								<a className="btn-next" href="#"><i className="icon-arrow-r"></i></a>
							</div>
						</div>
					</div>
				</div>
				{/* <div className="section-static-map text-center bg-light-gray">
				<div className="container">
					<h2>Cases per 1M Pop (end Nov. 2020)</h2>
				</div>
				<div className="map-block">
					<div className="map-box">
						<div className="map-container"></div>
						<ul className="level-list">
							<li>
								HIGH
								<span className="label high"></span>
							</li>
							<li>
								MEDIUM
								<span className="label medium"></span>
							</li>
							<li>
								LOW
								<span className="label low"></span>
							</li>
						</ul>
					</div>
				</div>
			</div> */}
			</main>
		</>
	)
}