/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
//import { Helmet } from 'react-helmet'
import NavBar from "./navbar"
import Footer from "./footer"
//import Header from "./header"
//import NavBar from "./navbar"
import "@fontsource/ibm-plex-sans"  
import "@fontsource/ibm-plex-sans/700.css" // Weight 700 Bold
import "@fontsource/ibm-plex-sans/600.css" // Weight 600 Semi-Bold
import "@fontsource/ibm-plex-sans/400.css" // Weight 600 Regular
import "./layout.css"
import GlobalStyle from "./globalstyle.js"


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
padding:3rem;


  @media (max-width: 1024px) {
    padding: 20px 0;
    
  }
`;

const Layout = ({ children }) => (
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
    render={ data => (
      <>
        {/* <Helmet
          title={'Predicta'}
          meta={[
            { name: 'description', content: 'Predicta' },
            { name: 'keywords', content: 'sample' },
          ]}
        >
        </Helmet> */}
        <GlobalStyle />
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <NavBar menuLinks={data.site.siteMetadata.menuLinks} siteTitle={data.site.siteMetadata.title} />
      <Wrapper> 
        <main>
        {children}
        </main>
        <FooterWrapper>
        <Footer />
        </FooterWrapper>
        </Wrapper>
    
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
