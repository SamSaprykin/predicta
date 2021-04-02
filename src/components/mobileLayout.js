
import React, {useState} from "react"
import styled from "styled-components"

const MobileLayout = ({closed,dispatch}) => {
  console.log(closed)
  
  return (
    
      <LayoutWrapper closed={closed}>
          <CloseButton onClick={() => {dispatch({ type: "TOGGLE_MOBILE_LAYOUT" })}}>
          </CloseButton>
          <img src="/mobile-popup.svg" alt="mobile-layout-image" />
      </LayoutWrapper>
    
  
  )
}

const LayoutWrapper = styled.div`
    display:none;
    @media (max-width:470px) {
      display: ${props =>
        props.closed === true
          ? "none"
          : props.closed === false
          ? "flex"
          : ""};
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

const CloseButton = styled.button`

    outline:none;
    border:none;
    font-size:48px;
    position:absolute;
    top:16px;
    right:16px;
    background:transparent;
    height:40px;
    width:40px;
    display:flex;
    align-items:center;
    ::before,
    ::after {
      width: 32px;
      height: 2px;
      background-color: black;
      content: "";
      position: absolute;
    }

    ::before {
      transform: rotate(-45deg);
    }

    ::after {
      transform: rotate(45deg);
    }
`

export default MobileLayout
