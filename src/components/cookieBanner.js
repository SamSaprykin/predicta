import React from "react"
import {
    CookieConsentsProvider,
    useCookieConsents,
} from "@enzsft/react-cookie-consents";
import styled from "styled-components"
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
 
const WrapperBanner = styled.div`
  position:fixed;
  bottom:0;
  background:white;
  z-index:1000;
`
const CookieBanner = () => {
    const cookieConsents = useCookieConsents();
    
    
    const allConsents = cookieConsents.get();
    console.log(allConsents)
    return (
      <WrapperBanner>
        <span>
          We use cookies to help give you the best experience on our site. By
          continuing you agree to our use of cookies.
        </span>
        <button type="button" onClick={() => cookieConsents.add("gatsby-gdpr-google-tagmanager")}>
          Accept and close
        </button>
      </WrapperBanner>
    );
};

const CookieNotice = () => (
  <StyledContainer>
    <CookieConsentsProvider cookieName="cookieConsents" expiryInDays={365}>
        <CookieBanner />
    </CookieConsentsProvider>   
  </StyledContainer>
)

export default CookieNotice