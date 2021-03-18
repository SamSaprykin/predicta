import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"

const Navigation = styled.nav`
  height: 4rem;
  display: flex;
  background-color: #f8f8f8;
  position: relative;
  justify-content: center;
  text-transform: uppercase;
  margin: 0 auto;
  padding: 0 3vw;
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
`;

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
    font-size: 1rem;
    color: #222b3e;
    align-items: center;
    padding: 2rem;
    
    &:hover  {
              color:inherit;
          }
         
      `;

const DropDownBox = styled.div`
    display: none;
    position: absolute;
    z-index: 1;
    flex-direction: column;
	  background-color: rgba(34, 43, 62, 1);
    text-align: center;
    margin-top: 4rem;
    padding: 0rem 0 1rem;

`;


const StyledLi = styled.li`
display:  flex;

    margin:0;
    
    &:hover {
   
        background-color: transparent;
    }
    &:hover ${DropDownBox} {
      display: flex;
  }
`;



// const DropDownLi = styled.li`
// margin-bottom: 0;
// }
// `;

const DropDownA = styled(Link)`
    text-decoration: none;
    display: block;
    text-align: center;
    background-color: transparent;
    color: white;
    border-top: 1px solid white;
    padding: 1rem 2rem;
    transition: .8s;

    & :hover {background-color: #606060}
`;




const NavLinks = ({ menuLinks }) => (

  <>
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
           
           <DropDownA to = {subLink.link}>{subLink.name} </DropDownA>
          
          ))}
        </DropDownBox>
      ) : null}
    </StyledLi>
  ))}
</StyledUl>

          </nav>

  </>
)

NavLinks.propTypes = {
  siteTitle: PropTypes.string,
}

NavLinks.defaultProps = {
  siteTitle: ``,
}

export default NavLinks
