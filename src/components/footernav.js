// NavbarLinks.js

import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Icon from "../images/icon.svg"
//import "@fontsource/ibm-plex-sans/700.css" // Weight 700.

const Navigation = styled.nav`
  height: auto;
  display: flex;
  flex-wrap:wrap;
  background-color: transparent;
  position: relative;
  justify-content: space-between;
  text-transform: uppercase;
  margin: 0 auto;
  z-index: 2;
  align-self: center;
  max-width: 100%;
  width:100%;
  align-items: center;
  margin-bottom:75px;
  @media (max-width: 1280px) {
    justify-content:flex-start;
    margin-bottom:50px;
  }
  @media (max-width: 1080px) {
    margin-bottom:24px;
  }
`



const NavItem = styled(Link)`
  text-decoration: none;
  display: inline-block;
  white-space: nowrap;
  transition: 300ms;
  position: relative;
  font-weight: 700;
  color: #fefefe;
  font-size: 18px;
  line-height:30px;
  :hover {
    color: white;
  }
  @media (max-width: 1280px) {
    width:33%;
    text-align:left;
    margin-top:16px;
    font-size:20px;
  }
  @media (max-width: 768px) {
    font-size:16px;
    line-height:19.2px;
  }
  @media (max-width: 470px) {
    width:50%;
  }
`;

const NavbarLinks = () => {
  return (
    <>
      <Navigation>
        <NavItem to="/">Home</NavItem>
        <NavItem to="/about">About</NavItem>
        <NavItem to="/global-analysis">Global Analysis</NavItem>
        <NavItem to="/europe/general-findings ">In Depth</NavItem>
        <NavItem to="/advanced-statistics/risk-analysis">Advanced Statistics</NavItem>
        <NavItem to="/technology">Technology</NavItem>
        <NavItem to="/get-in-touch">Get In Touch</NavItem>
      </ Navigation>
    </>
  )
}

export default NavbarLinks
