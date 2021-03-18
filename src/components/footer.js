import { Link } from "gatsby"
//import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
//import NavFooter from "./navfooter"
import FooterNav from "./footernav"

import PredictaLogo from "./images/predicta-logo.svg";
import IBMLogo from "./images/ibm-logo.svg";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)


const NavLink = styled(Link)`
	color: white;
	text-decoration: none;
	/* font-weight: 700;
	font-size: 0.8rem;
	color: #222b3e;
	line-height: 1.4;
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center; */
    padding: 0.5rem 0.5rem;
    transition: .3s;

    &:hover {

//background-color: #222b3e;
color: lightgray;
}

`


const Grid = styled.div`
display: grid;
grid-template-columns: 3fr 1fr 1fr 1fr;
grid-template-rows: auto;
width:1160px;
margin: 0 auto;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    width: 300px;
  }
`;



const GridB = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: auto;
  grid-gap: 20px;
  width: 1160px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    ;
  }
`;

const Item = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align:center;
width: auto;
height: auto;
background-color: transparent;

&:nth-child(n+2) {
  border-left: 2px solid white;
}

& p {margin:0; color: white; text-align:center;}

& svg {height: 30%}

`;

const ItemB = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align:center;
width: auto;
height: auto;
background-color: transparent;

& p {margin:0; }

@media (max-width: 1024px) {
  & svg {height: 60%}
}



`;

const List = styled.ul`
  list-style: none;
  overflow-x: auto;
  margin-bottom:0;
`;

const ListItem = styled.li`
  display: inline-block;
  padding-right:1rem;
  margin-bottom:0;
`;

const Gap = styled.div`
display: block;
height: 2rem;
`;


const FooterWrapper = styled.div`
  display:flex;
  width:100%;
  max-width:1200px;
  @media (max-width: 1280px) {
    padding:0 32px;
  }
  @media (max-width: 1024px) {
    max-width: 600px; 
  }
  @media (max-width: 600px) {
    max-width: 300px;
  }
`
const Footer = ({ siteTitle }) => (

  <FooterWrapper>
    <FooterNav />

  </FooterWrapper>

)

export default Footer
