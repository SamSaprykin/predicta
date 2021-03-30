import React from "react"
import CookieConsent from "react-cookie-consent"
// import { Link } from "gatsby"
import styled from "styled-components"

// GDPR Cookies
import { useLocation } from "@reach/router" // this helps tracking the location
import { initializeAndTrack } from "gatsby-plugin-gdpr-cookies"

const StyledContainer = styled.div`
  max-width: 100%;
  p {
    margin-bottom: 20px;
    @media (max-width:768px) {
      margin-bottom: 0;
    }
  }
  a,
  button {
    display: block;
    width: 100%;
    text-align: center;
    transform: scale(1);
    transition: all 200ms ease;
    @media (max-width:768px) {
      width: auto;
    }
  }
  button {
    width: calc(100% - 30px);
    margin: 15px;
    @media (max-width:768px) {
      width: auto;
    }
  }
  a:hover,
  button:hover {
    transition: all 200ms ease;
    transform: scale(1.05);
  }
  & > div {
    display: block !important;
    width: calc(100vw - 20px) !important;
    border-radius: 10px;
    margin: 10px;
    @media (max-width:768px) {
      max-width: 1168px;
      left: 0;
      right: 0;
      margin: 10px auto;
      display: flex !important;
      align-items: flex-end !important;
    }
    & > div {
      @media (max-width:768px) {
        display: flex;
        align-items: flex-end;
      }
    }
  }
`

const CookieNotice = () => (
  <StyledContainer>
    <CookieConsent
      debug={false}
      location="bottom"
      buttonText="Accept Cookies"
      enableDeclineButton
      cookieName="gatsby-gdpr-google-analytics"
      onAccept={() => {
        initializeAndTrack(useLocation)
      }}
      style={{
        background: "#1f1f1f",
        color: "#fff",
        zIndex: "200",
        padding: "20px",
        // display: "flex",
        // alignItems: "flex-end",
      }}
      buttonStyle={{
        background: "#8937f8",
        color: "#fff",
        fontWeight: "500",
        fontSize: "14px",
        padding: "12px 18px",
        border: "4px solid #8937F8",
        borderRadius: "4px",
        cursor: "pointer",
      }}
      expires={365}
    >
      <div>
        <h3 style={{ color: "#fff", fontSize: "18px", fontWeight: "500" }}>
          This Website uses cookie
        </h3>
        
      </div>
      
    </CookieConsent>
  </StyledContainer>
)

export default CookieNotice