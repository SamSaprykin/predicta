import React from "react"
import styled from "styled-components"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const modelingScenariosMetadata = {
    Title: "Predicta",
    Keywords: [`covid analytics`,`predicta analytics`, `covid`, `predicta`],
    Description: "Analytics for Decision Making, is a leading provider of Predictive Analytics Solutions.",
    Image: "/predicta-icon.png",
    url:"https://www.predicta4covid.com/",
    titleTemplate:"Predicta"
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


const ModScene = () => (
  <Layout>
      <SEO 
        title={modelingScenariosMetadata.Title} 
        keywords={modelingScenariosMetadata.Keywords} 
        description={modelingScenariosMetadata.Description} 
        image={modelingScenariosMetadata.Image}
        url={modelingScenariosMetadata.url}
        titleTemplate={modelingScenariosMetadata.titleTemplate}
      />
      <ImageContainer>
                  <ImageSoon src="/modeling-scenarios-soon.png" />
                  <TextSoon>Coming soon</TextSoon>
      </ImageContainer>
  </Layout>
)

export default ModScene