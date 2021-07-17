import React from "react"
import styled from "styled-components"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const statTestsMetadata = {
    Title: "Statistical Tests | Advanced Statistics for the Covid-19 Pandemic",
    Keywords: [`covid analytics`,`predicta analytics`, `covid`, `predicta`],
    Description: "Statistical tests carried out for the analysis and simulation of the risk of infection effect of the covid-19 pandemic across society and various situations",
    Image: "/predicta-icon.png",
    url:"https://www.predicta4covid.com/",
    titleTemplate:"Statistical Tests | Advanced Statistics for the Covid-19 Pandemic"
}

const ImageContainer = styled.div`
    width:100%;
    height:auto;
    position:relative;
    margin-top:32px;
    display:flex;
    align-items:center;
    justify-content:center;
`
const ImageSoon = styled.img`
    width:100%;
    max-width:1280px;
    margin:0 auto;
    @media(max-width:1440px) {
        max-width:960px;
    }
`

const TextSoon = styled.h5`
    position:absolute;
    left:50%;
    top:30%;
    transform:translate(-50%,-50%);
    color: #222b3e;
    font-size: 50px;
    font-weight: 600;
    font-style: normal;
    letter-spacing: normal;
    line-height: 60px;
    text-align: center;
    text-transform: uppercase;
    font-family: IBM Plex Sans;
    font-weight: 600;
    font-style: normal;
    letter-spacing: normal;
    line-height: normal;
    @media (max-width:768px) {
        font-size:24px;
    }
`

const StatTests = () => (
  <Layout>
      <SEO 
        title={statTestsMetadata.Title} 
        keywords={statTestsMetadata.Keywords} 
        description={statTestsMetadata.Description} 
        image={statTestsMetadata.Image}
        url={statTestsMetadata.url}
        titleTemplate={statTestsMetadata.titleTemplate}
      />
      <ImageContainer>
          <ImageSoon src="/stat-tests.svg" />
          <TextSoon>Coming soon</TextSoon>
      </ImageContainer>
  </Layout>
)

export default StatTests