import { Link } from "gatsby"
//import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
//import NavFooter from "./navfooter"
import FooterNav from "./footernav"
import BackTop from "./backTop"
import PredictaLogo from "./images/predicta-logo.svg";
import IBMLogo from "./images/ibm-logo.svg";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)

const Container = styled.div`
  position:relative;
`
const NavLink = styled(Link)`
	color: white;
	text-decoration: none;
	/* font-weight: 700;
	font-size: 18px;
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
width:100%;
max-width:1160px;
margin: 0 auto;
  @media (max-width: 1080px) {
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
  width:100%;
  max-width: 1160px;
  margin: 0 auto;
  @media (max-width: 1080px) {
    grid-template-columns: 1fr;
    
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
  @media (max-width:1080px) {
    border-left:none;
  }
}
& p {
  margin:0; 
  color: white; 
  text-align:center; 
  padding:0 8px;
  @media (max-width:1280px) {
    font-size:16px;
  }
  @media (max-width:768px) {
    font-size: 14px;
  }
}
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
& p {margin:0; color:white;}
@media (max-width: 1080px) {
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



const Footer = ({ siteTitle,location }) => (

  <Container>

    {/* <NavFooter /> */}

    <FooterNav />



    <Gap />

    <Grid>
      <Item><p>18 Chatzikonstanti Str., 115 24 Athens, Greece    T. +30 210 69 31 040<br />
F. +30 210 69 31 079  &nbsp;  •  &nbsp;  E. info@predicta.gr &nbsp;   • &nbsp;   www.predicta.gr</p>
      </Item>
      <Item><NavLink to="/terms/">Terms & Conditions</NavLink></Item>
      <Item>
      <NavLink to="/privacy-policy/">Privacy Policy</NavLink>
      </Item>
      <Item>
        <List>
          <ListItem> <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon  style={{
          color: `rgb(255 255 255)`,
          textDecoration: `none`,
          //backgroundColor: `white`,
          borderRadius: `100%`,
          padding:`2px`
        }}  size='2x' icon={['fab', 'facebook-f']} /> </a></ListItem>

         <ListItem> <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon  style={{
          color: `rgb(255 255 255)`,
          textDecoration: `none`,
          //backgroundColor: `white`,
          borderRadius: `100%`,
          padding:`2px`
        }}  size='2x' icon={['fab', 'linkedin']} /> </a></ListItem>

         <ListItem> <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon  style={{
          color: `rgb(255 255 255)`,
          textDecoration: `none`,
          //backgroundColor: `white`,
          borderRadius: `100%`,
          padding:`2px`
        }}  size='2x' icon={['fab', 'twitter']} /> </a></ListItem>
        
        </List>
      </Item>
      <Gap />

    </Grid>
    
    <GridB>
      <ItemB style={{
paddingleft: `1rem`
}}>
      <PredictaLogo alt ='Predicta Logo'/>
     </ItemB>
     <ItemB>
    <h1 style={{ margin: 0 }}>
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        {siteTitle}
      </Link>
    </h1>

     <p>© {new Date().getFullYear()} Predicta, All Rights Reserved</p>
     </ItemB>
     <ItemB style={{
}}>
     <IBMLogo alt='IBM Logo'  />
     </ItemB>
     <BackTop goTo={location} />
     </GridB>
  </Container>

)

export default Footer




