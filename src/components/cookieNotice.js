import React from "react"
import CookieConsent from "react-cookie-consent"
import { Link } from "gatsby"
import styled from "styled-components"

// GDPR Cookies
import { useLocation } from "@reach/router" // this helps tracking the location
import { initializeAndTrack } from "gatsby-plugin-gdpr-cookies"

const CookieNotice = () => {
  const location = useLocation();
  const handleCookieAccept = () => {
		initializeAndTrack(location);
		console.log("Accepted");
	};
  return (
    <StyledContainer>
      <StyledCookieConsent
        debug={false}
        location="bottom"
        buttonText="Allow all cookies"
        enableDeclineButton
        cookieName='gatsby-gdpr-google-analytics'
        onAccept={() => handleCookieAccept()}
        declineButtonText="Decline"
        expires={365}
      >
        <ContentWrapper>
          <h3>
            This Website uses cookies
          </h3>
        
          <CookieContent>
            <CookieTitle>
              PREDICTA is the controller of the personal data you make available through our website using our cookies.
              We only use Performance cookies to analyse anonymous traffic only after your consent is provided.
            </CookieTitle>   
            <LinksWrapper>
              <a href="/privacy-policy" target="_blank">Read our privacy policy </a>
            </LinksWrapper>
            
          </CookieContent>
        
        </ContentWrapper>
        
      </StyledCookieConsent>
    </StyledContainer>
  )
}


export default CookieNotice

const StyledCookieConsent = styled(CookieConsent)`
    
`
const StyledContainer = styled.div`
  max-width: 100%;
  
  h3 {
    margin-top:40px;
    color:#222B3E;
    width:100%;
    font-size:32px;
    line-height:1.1;
    text-align:center;
    font-weight:600;
  }
  div {
    margin:0 !important;
    @media (max-width:470px) {
      flex-direction:column;
    }
  }
  #rcc-decline-button {
    padding:22px 32px !important;
    font-family: IBM Plex Sans, sans-serif;
    font-size: 25px;
    font-weight:600 !important;
    color:white !important;
    background-color:#222B3E !important;
    width:350px;
    text-align:center;
  }
  #rcc-confirm-button {
    padding:22px 32px !important;
    font-family: IBM Plex Sans, sans-serif;
    font-size: 25px;
    font-weight:600 !important;
    color:white !important;
    background-color:#222B3E !important;
    width:350px;
    text-align:center;
  }
  .CookieConsent {
      background-color: #f8f8f8 !important;
      flex-direction:column;
      padding-bottom:20px;
      z-index:1000000000 !important;
      div {
        width:100%;
        display:flex;
        align-items:center;
        justify-content:center;
        margin:0;
      }
      @media (max-width:470px) {
          padding:0 24px !important;
          div {
              margin:0 auto !important;
          }
      }
  }
 
`

const CookieTitle = styled.h5`
    font-family: IBM Plex Sans, sans-serif;
    margin-bottom:0 !important;
    font-weight:400;
    color: #777777;
    font-size: 24px;
    line-height:44px;
    max-width:1100px;
    margin:24px auto;
    a {
      text-decoration:underline;
      color:#0023EB;
    }
    @media (max-width:768px) {
        margin-left:0;
    }
    @media (max-width:470px) {
        display:none;
    }
`

const CookieContent = styled.div`
    width:100%;
    margin:0 auto;
    padding:32px;
    display:flex;
    flex-direction:column;
    @media (max-width:470px) {
      padding:8px;
    }
`

const ContentWrapper = styled.div`
    display:flex;
    align-items:center;
    justify-content:
    position:relative;
    flex-direction:column;
    width:100%;
    padding-bottom:40px;
    @media (max-width:470px) {
      padding-bottom:8px;
    }
`

const LinksWrapper = styled.div`
    width:100%;
    max-width:730px;
    display:flex;
    justify-content:center !important;
    margin:0 auto !important;
    a {
      display:block;
      text-decoration:none;
      color: #777777;
      font-weight:700;
      font-size: 24px;
      line-height:44px;
      width:350px;
      margin:15px;
      text-align:center;
      @media (max-width:470px) {
        margin:8px 0;
      }
    }
`