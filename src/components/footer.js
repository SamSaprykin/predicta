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



const Footer = () => (

  <FooterWrapper>
    <FooterNav />
    <FooterContent>
      <CompanyInfo>
        <p>18 Chatzikonstanti Str., 115 24 Athens, Greece  T. +30 210 69 31 040 F. +30 210 69 31 079  &nbsp;  •  &nbsp;  E. info@predicta.gr &nbsp;   • &nbsp;  <a href="http://www.predicta.gr/" target="_blank" rel="noopener noreferrer">www.predicta.gr</a> </p>
      </CompanyInfo>
      <PrivacyPart>
        <PrivacyItem to="/terms">
          Terms &amp; Conditions
        </PrivacyItem>
        <PrivacyItem to="/privacy-policy">
          Privacy policy
        </PrivacyItem>
        <SocialWrapper>
           <a href="https://www.facebook.com/PREDICTA-SA-130541270342184/" target="_blank" rel="noopener noreferrer">
             <img src="/fb-icon.png" alt="fb-icon" />
           </a>
           <a href="https://www.linkedin.com/company/predicta-s-a-former-spss-bi-greece-s-a" target="_blank" rel="noopener noreferrer">
             <img src="/ln-icon.png" alt="linkedin-icon" />
           </a>
           <a>
             <img src="/tw-icon.png" alt="twitter-icon" />
           </a>
        </SocialWrapper>
      </PrivacyPart>
    </FooterContent>
    <FooterFooter>
      <Link to="/">
        <PredLogo src="/predicta-logo.svg" alt="logo-footer" />
      </Link>
      <RightsText>
          All rights reserved
      </RightsText>
      <Link to="/">
        <IbmLogo src="/ibm-logo.svg" alt="ibm-logo" />
      </Link>
      
    </FooterFooter>
  </FooterWrapper>

)

const FooterContent = styled.div`
  display:flex;
  flex-wrap:wrap;
  width:100%;
  justify-content:space-between;
  margin-bottom:60px;
  @media (max-width: 768px) {
    flex-direction:column-reverse;
  }
`

const PredLogo = styled.img`
  margin-bottom:8px;
  max-width:120px;
  @media (max-width: 1440px) {
    max-width:100px;
  }
`

const IbmLogo = styled.img`
  margin-bottom:8px;
  height:auto;
  max-width:120px;
  @media (max-width: 1440px) {
    max-width:100px;
  }
`

const RightsText = styled.p`
  color:white;
  margin-bottom:0;
  @media (max-width: 470px) {
    display:none;
  }
`

const FooterWrapper = styled.div`
  display:flex;
  flex-wrap:wrap;
  width:100%;
  max-width: 1440px;
  padding: 0 32px;
  @media (max-width: 1440px) {
    max-width:1280px;
  }
  @media (max-width: 470px) {
    padding: 0 24px;
  }
`

const FooterFooter = styled.div`
  display:flex;
  flex-wrap:wrap;
  justify-content:space-between;
  align-items:flex-end;
  width:100%;
  max-width: 1440px;
  @media (max-width: 1440px) {
    max-width:1280px;
  }
  @media (max-width: 470px) {
    align-items:center;
  }
  a {
    text-decoration:none;
  }
`

const CompanyInfo = styled.div`
  
  width:50%;
  padding-right:32px;
  @media (max-width: 1440px) {
    padding-right:24px;
  }
  @media (max-width: 1280px) {
    width:100%;
    margin-bottom:24px;
  }
  p {
    color:white;
    font-size:24.2px;
    margin-bottom:0;
    @media (max-width: 1440px) {
      font-size:18px; 
    }
    @media (max-width: 768px) {
      font-size:16px; 
    }
  }
  a {
    color: white;
    text-decoration:none;
  }
`

const PrivacyPart = styled.div`
  display:flex;
  justify-content:flex-start;
  width:50%;
  @media (max-width: 1280px) {
    width:100%;
    margin-bottom:24px;
  }

`

const PrivacyItem = styled(Link)`
  width:25%;
  color:white;
  text-decoration:none;
  display:flex;
  justify-content:center;
  align-items:center;
  border-left:5px solid white;
  border-right:5px solid white;
  :nth-of-type(2) {
    border-left:0 ;
  }
  :hover {
    color:lightgray;
  }
  @media (max-width: 1280px) {
    padding:0 12px;
  }
  @media (max-width: 470px) {
    border-left:2px solid white;
    border-right:2px solid white;
    font-size:14px;
  }
`

const SocialWrapper = styled.div`
  width:50%;
  display:flex;
  justify-content:space-evenly;
  align-items:center;
  img {
    margin-bottom:0;
    @media (max-width: 470px) {
      width:32px;
      height:32px;
    }
  }
`

export default Footer
