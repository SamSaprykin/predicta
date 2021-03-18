import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"
import Icon from "../images/icon.svg"



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

  @media (max-width: 1024px) {
    position: sticky;
    height: 8vh;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
  }
`

const LogoWrap = styled.div`
  margin: auto 0;
  flex: 0 1 36px;

  @media (max-width: 1024px) and (orientation: landscape) {
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
height:100%;
align-content: center;
`;




const StyledA = styled(Link)`
    display: flex;
    text-align: center;
    text-decoration: none;
    color: red;
    font-size: 1rem;
    color: #222b3e;
    align-items: center;
    
   

    &:hover  {
              color:inherit;
          }
         
      `;

const DropDownBox = styled.div`
    display: none;
    position: absolute;
    width: 220px;
    z-index: 1;
    flex-direction: column;
	  background-color: rgba(34, 43, 62, 1);
    text-align: center;
    margin-left: -2rem;
    margin-top: 4rem;
    padding: 0rem 0 1rem;

`;


const StyledLi = styled.li`
display:  flex;
    padding:0 2rem 0 2rem;
    margin:0;
    
    &:hover {
   
        background-color: transparent;
    }
    &:hover ${DropDownBox} {
      display: block;
  }
`;



const DropDownLi = styled.li`

margin-bottom: 0;

    &:hover ${DropDownBox} {
        display: block;
    }
`;

const DropDownA = styled(Link)`
    text-decoration: none;
    display: block;
    text-align: center;
    background-color: transparent;
    padding: 10px;
    color: white;
    font-size:0.9rem;
    border-top: 1px solid white;
`;



const NavFooter = ({ menuLinks }) => (
  <header>
    <Navigation>
    <LogoWrap as={Link} to="/">
      <Icon alt="Home Icon" />
    </LogoWrap>

    {/* <div className='main-menu'> */}

            <nav>

          <StyledUl>
  {menuLinks.map((link) => (
    <StyledLi key={link.name}>
      <StyledA
        to = {link.link}
        aria-haspopup={link.subMenu && link.subMenu.length > 0 ? true : false}
      >
        {link.name}
      </StyledA>
      {link.subMenu && link.subMenu.length > 0 ? (
        <DropDownBox aria-label="submenu">
          {link.subMenu.map((subLink) => (
            <DropDownLi key={subLink.name}>
              <DropDownA to = {subLink.link}>{subLink.name}</DropDownA>
            </DropDownLi>
          ))}
        </DropDownBox>
      ) : null}
    </StyledLi>
  ))}
</StyledUl>

          </nav>
          {/* </div> */}
    
          
    </Navigation>
  </header>
)

NavFooter.propTypes = {
  siteTitle: PropTypes.string,
}

NavFooter.defaultProps = {
  siteTitle: ``,
}

export default NavFooter
