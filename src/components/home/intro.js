import React from "react"
import styled from "styled-components"


const IntroBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width:100%;
  max-width: 800px;
  margin: 0 auto;
  @media (max-width:1440px) {
    max-width:600px;
  }
  @media (max-width:1024px) {
    max-width:600px;
  }
  @media (max-width:768px) {
    padding:0 32px;
    margin-top:64px;
  }
  h1 {
    
    margin-bottom:4px;
    font-size:32px;
    line-height:38px;
    @media (max-width: 1440px) {
      font-size:28px;
      line-height:32px;
    }
    @media (max-width: 1024px) {
      font-size:26px;
      line-height:30px;
    }
  }
  h2 {
    font-size:26px;
    line-height:38px;
    color: #606060;
    font-weight:400;
    @media (max-width: 1440px) {
      font-size:24px;
      line-height:32px;
    }
    @media (max-width: 1024px) {
      font-size:22px;
      line-height:30px;
    }
  }
  p {
    font-size:18px;
    line-height:38px;
    @media (max-width: 1440px) {
      font-size:16px;
      line-height:32px;
    }
    @media (max-width: 1024px) {
      font-size:15px;
      line-height:30px;
    }
    strong {
      letter-spacing:-0.67px;
    }
    
  }
  

`


const Intro = () => (
  <IntroBox>
    <h1>The Covid-19 Pandemic</h1>
    <h2>A Statistical Analysis</h2>
    <p>This event provoked chaos in modern society, where Scientists and Governments are trying to face an invisible enemy. Countries employed different "weapons" to take control of the virus spread. But why some Countries suffered so much and which Strategy worked well? Rumors spread faster than the truth. Public needs reliable answers. <span style={{ textTransform: `uppercase`}} > Predicta</span>&apos;s Experts take advantage of Technology and Experience in Data Management to provide an in-depth Data Analysis, which will eventually come up with useful findings, helping us understand/confront and predict relative incidents in the future.</p>
    <p><strong>The data analyzed and the findings presented in this first version of the COVID-19 micro site, cover the period elapsed from the beginning of the pandemic, January 2020, until the end of November 2020.  The data schema created for this analysis is continuously updated as new data become available and further results and findings will be presented in future versions of this microsite.</strong></p>
  </IntroBox>
)

export default Intro