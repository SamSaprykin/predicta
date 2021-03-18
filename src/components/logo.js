// Logo.js
import React from "react"
import styled from "styled-components"
//import Img from "gatsby-image"
import { Link } from "gatsby"
import Icon from "../images/icon.svg";

const LogoWrap = styled.div`
  margin: auto 0;
  flex: 0 1 36px;

  @media (max-width: 1024px) and (orientation: landscape) {
    flex: 0 1 25px;
  }
`
const Logo = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     file(name: { eq: "home-icon" }, extension: { eq: "png" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 50, pngQuality: 80) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //   }
  // `)

  return (
    <LogoWrap as={Link} to="/">
      <Icon alt="Home Icon" />
    </LogoWrap>
  )
}

export default Logo