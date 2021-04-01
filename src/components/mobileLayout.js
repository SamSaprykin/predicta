
import React from "react"
import styled from "styled-components"

const MobileLayout = () => {
  return (
    <LayoutWrapper>
        <img src="/mobile-popup.svg" alt="mobile-layout-image" />
    </LayoutWrapper>
  )
}

const LayoutWrapper = styled.div`
    display:none;
    @media (max-width:470px) {
        display:flex;
    }
    width:100%;
    height:100vh;
    align-items:center;
    justify-content:center;
    position:fixed;
    background:white;
    z-index:100000000;
    img {
        width:100%;
        height:auto;
        margin:0 24px;
    }
`



export default MobileLayout
