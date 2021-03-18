// NavbarLinks.js

import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Icon from "../images/icon.svg"
//import "@fontsource/ibm-plex-sans/700.css" // Weight 700.

const Navigation = styled.nav`
  height: 4rem;
  display: flex;
  background-color: transparent;
  position: relative;
  justify-content: center;
  text-transform: uppercase;
  margin: 0 auto;
  padding: 0 10vw;
  z-index: 2;
  align-self: center;
  max-width: 100%;
  align-items: center;

  @media (max-width: 1024px) {
    position: sticky;
    height: 8vh;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
    display:none;
  }
`

const LogoWrap = styled.div`
  margin: auto 0;
  flex: 0 1 36px;

  @media (max-width: 1024px) and (orientation: landscape) {
    flex: 0 1 45px;
  }
  & svg {width:80%} 
`;

const NavItem = styled(Link)`
  text-decoration: none;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: 300ms;
  position: relative;
  font-weight: 700;
  color: #fefefe;

  :hover {
    color: white;
  }

  @media (max-width: 1024px) {
   
    font-size: .7rem;
    z-index: 6;
  }
`;

const NavbarLinks = () => {
  return (
    <>
    <Navigation>
<LogoWrap as={Link} to="/">
  <Icon alt="Home Icon" />
</LogoWrap>
      <NavItem to="/about">About</NavItem>
      <NavItem to="/global-analysis">Global Analysis</NavItem>
      <NavItem to="/in-depth">In Depth</NavItem>
      <NavItem to="/advanced-statistics">Advanced Statistics</NavItem>
      <NavItem to="/technology">Technology</NavItem>
      <NavItem to="/get-in-touch">Get In Touch</NavItem>

      </ Navigation>

    </>
  )
}

export default NavbarLinks