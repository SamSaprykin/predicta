
import React from "react"
import styled from "styled-components"
import {Link} from "gatsby"


const BackTop = ({goTo}) => {
  return (
    goTo !== undefined ? (
        <Link to={`${goTo.pathname}#first-section`}>
          <BackToTopWrapper>
            <IconUp src="/carat-down.svg"/>
          </BackToTopWrapper>
        </Link>
    ) : (
      <></>
    )
  )
}

const BackToTopWrapper = styled.div`
    width:60px;
    height:60px;
    display:flex;
    align-items:center;
    justify-content:center;
    position:absolute;
    right:-60px;
    bottom:-60px;
    border:1px solid #222b3e;
    background-color: #222b3e;
    border-radius:100%;
    svg {
      fill:red;
    }
    
    @media(max-width:1300px) {
      right:-20px;
      bottom:-60px;
    }
    @media(max-width:1080px) {
      right:20px;
      bottom:60px;
    }
    @media(max-width:470px) {
      right:12px;
      bottom:32px;
    }
`

const IconUp = styled.img`
    width: 20px;
    height: 20px;
    margin-bottom:4px;
    transform:rotate(-180deg);

`

export default BackTop