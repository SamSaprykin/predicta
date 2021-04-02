/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useContext } from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import NavBar from "./navbar"
import Footer from "./footer"
import CookieNotice from "../components/cookieNotice"
import MobileLayout from "../components/mobileLayout"
import "@fontsource/ibm-plex-sans"  
import "@fontsource/ibm-plex-sans/700.css" // Weight 700 Bold
import "@fontsource/ibm-plex-sans/600.css" // Weight 600 Semi-Bold
import "@fontsource/ibm-plex-sans/400.css" // Weight 600 Regular
import "./layout.css"
import GlobalStyle from "./globalstyle.js"
import {
  GlobalDispatchContext,
  GlobalStateContext,
} from "../context/GlobalContextProvider"


if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}


const Wrapper = styled.div`
  
  max-width: 100%;
  display: block;
  margin: 0 auto;

  @media (max-width: 1024px) {
    position: sticky;
    height: 8vh;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
  }
`;



const FooterWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 100%;
background-color: rgba(96,96,96, 1);
text-align: center;
color:white;
padding:3rem 3rem 5rem;
@media (max-width:1280px) {
  padding:2rem 1rem 5rem;
}
@media (max-width:1080px) {
  padding:2rem 1rem 0;
}
`;

const Layout = ({ children,location }) => {
  const dispatch = useContext(GlobalDispatchContext)
  const state = useContext(GlobalStateContext)
  console.log(state)
  console.log(dispatch)
  return (
    <StaticQuery
    query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
              menuLinks {
                name
                link
                subMenu {
                  name 
                  link
                }
            }
            }
          }
        }
      `}
      render={data => (
        <>
        <GlobalStyle />
        
          <MobileLayout closed={state.closed} dispatch={dispatch} />
        
        <CookieNotice />
        <NavBar menuLinks={data.site.siteMetadata.menuLinks} siteTitle={data.site.siteMetadata.title} location={location}/>
        <Wrapper> 
          <main>
          {children}
          </main>
          <FooterWrapper>
            <Footer location={location} />
          </FooterWrapper>
        </Wrapper>
        </>
      )}
    />
  )

}
  
  


Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
