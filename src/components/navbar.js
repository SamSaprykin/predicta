// Navbar.js

import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Icon from "../images/icon.svg"


const Navigation = styled.nav`
  height: 4rem;
  display: flex;
  background-color: #f8f8f8;
  position: relative;
  justify-content: center;
  text-transform: uppercase;
  margin: 0 auto;
  z-index: 2;
  align-self: center;
  max-width: 100%;

  @media (max-width: 768px) {
    position: sticky;
    padding: 0 10vw;
    height: 8vh;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
    justify-content: space-between;
  }
`;

const LogoWrap = styled.div`
  margin: auto 0;
  flex: 0 1 66px;

  & svg {width: 65%};

  @media (max-width: 768px) and (orientation: landscape) {
    flex: 0 1 25px;
  }
`;

const StyledUl = styled.ul`
list-style-type: none;
margin: 0;
overflow: hidden;
padding: 0px;
font-weight: 700;
display: flex;
height: 100%;
align-content: center;

`;

const StyledUlB= styled.ul`
list-style-type: none;
margin: 0;
overflow: hidden;
padding: 0px;
font-weight: 700;
display: flex;
height: 100%;
align-content: center;
flex-direction: column;
align-items: center;

`;

const StyledA = styled(Link)`
    display: flex;
    text-align: center;
    text-decoration: none;
    font-size: .9rem;
    color: #222b3e;
    align-items: center;
    padding: 1rem 0rem;
    height: 100%;
    width: 200px;
    justify-content: center;

    &:hover  {
      color: grey;
      background-color: transparent;
    }

    @media (max-width: 1280px) {
      padding: .5rem;
      max-width:150px;
      font-size:.7rem;
    }
    @media (max-width: 1080px) {
      padding: 0;
      max-width:140px;
      font-size:.7rem;
    }

`;

const DropDownBox = styled.div`
    visibility: hidden;
    position: absolute;
    z-index: 999;
    flex-direction: column;
	  //background-color: rgba(34, 43, 62, 1);
    background-color: transparent;
    text-align: center;
    display: block;
	  margin-top: -2.5rem;
	  padding-top: 4rem;

    &::after {
    position: absolute;
  content: " ";
  width: 8%;
  height: 8%;
  background: url("../images/carat-down.svg");
  background-repeat: no-repeat;

  top: 0;
      margin-top: 53px;
      margin-left: -10px;
    }


    /* &::after {
      content: "v";
      position: absolute;
      top: 0;
      margin-top: 48px;
      font-size: 20px;
      font-family: Arial, Helvetica, sans-serif;
    } */
`;


const StyledLi = styled.li`
display:  inline-block;


    margin:0;

    &:hover {

        background-color: transparent;
    }
    &:hover ${DropDownBox} {
      visibility: visible;
     
  }
`;

const DropDownA = styled(Link)`
    text-decoration: none;
    display: block;
    text-align: center;
    background-color: #222b3e;
    color: white;
    border-top: 3px solid white;
    padding: .5rem 0rem;
    font-size: 0.8rem;
    width: 200px;

    &:hover {background-color: #222A53};

`;


const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
  }
`

const Navbox = styled.div`
  display: flex;
  height: 100%;
  //justify-content: flex-end;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    width: 100vw;
    padding-top: 10vh;
    background-color: #fff;
    top: 8vh;
    transition: all 0.3s ease-in;
    left: ${props => (props.open ? "-100%" : "0")};
    
   
  }
`

const Hamburger = styled.div`
  background-color: #111;
  width: 30px;
  height: 3px;
  transition: all .3s linear;
  align-self: center;
  position: relative;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};

  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: #111;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${props =>
      props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }

  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
  }
`
const Navbar = ({ menuLinks }) => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
<>
    <header>
    {/* <GlobalStyle /> */}
    
    <Navigation>
    <LogoWrap as={Link} to="/">
      <Icon alt="Home Icon" />
    </LogoWrap>


      <Toggle
        navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? <Hamburger open /> : <Hamburger />}
      </Toggle>
      {navbarOpen ? (
        <Navbox>
                   <StyledUlB>
  {menuLinks.map((link) => (
    <StyledLi key={link.name}>
      <StyledA
        to = {link.link} 
        aria-haspopup={link.subMenu && link.subMenu.length > 0 ? true : false}
      >
        {link.name}
      </StyledA>
      {/* {link.subMenu && link.subMenu.length > 0 ? (
        <DropDownBox aria-label="submenu">

          {link.subMenu.map((subLink) => (

           <DropDownA to = {subLink.link}>{subLink.name} </DropDownA>


          ))}
        </DropDownBox>
      ) : null} */}
    </StyledLi>
  ))}
</StyledUlB>
        </Navbox>
      ) : (
        <Navbox open>
                   <StyledUl>
  {menuLinks.map((link) => (
    <StyledLi key={link.name}>
      <StyledA
        to = {link.link} activeStyle = {{ backgroundColor: `#222b3e`, color: `white` }}
        aria-haspopup={link.subMenu && link.subMenu.length > 0 ? true : false}
      >
        {link.name}
      </StyledA>
      {link.subMenu && link.subMenu.length > 0 ? (
        <DropDownBox aria-label="submenu">

          {link.subMenu.map((subLink) => (

           <DropDownA to = {subLink.link} key = {subLink.name}> {subLink.name} </DropDownA>


          ))}
        </DropDownBox>
      ) : null}
    </StyledLi>
  ))}
</StyledUl>
        </Navbox>
      )}
    </Navigation>
    </header>
    </>

  )
}

export default Navbar