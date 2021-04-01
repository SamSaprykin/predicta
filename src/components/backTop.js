
import React, {useState, useEffect} from "react"
import styled from "styled-components"
import {Link} from "gatsby"


const BackTop = ({goTo, visible}) => {
  const [isScrolled, setScrolled] = useState(false)
  const isBrowser = typeof window !== `undefined`
  const handleScroll = e => {
    let bodyOffset = document.body.getBoundingClientRect()

    if (bodyOffset.top < -100) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  useEffect(() => {
    if (!isBrowser) return null
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  })
  
  return (
    goTo !== undefined ? (
        <Link to={`${goTo.pathname}#navbar`} >
          <BackToTopWrapper  isScrolled={isScrolled}>
            <IconUp src="/carat-down.svg"/>
          </BackToTopWrapper>
        </Link>
    ) : (
      <></>
    )
  )
}

const BackToTopWrapper = styled.div`
    opacity:${props => props.isScrolled === true ? "1" : "0"};
    transition:all .3s ease-in-out;
    width:60px;
    height:60px;
    display:flex;
    align-items:center;
    justify-content:center;
    position:fixed;
    right:60px;
    top:80%;
    border:1px solid #222b3e;
    background-color: #222b3e;
    border-radius:100%;
    svg {
      fill:red;
    }
    @media(max-width:768px) {
      right:24px;
      width:48px;
      height:48px;
    }
    
    @media(max-width:470px) {
      right:12px;
      
    }
`

const IconUp = styled.img`
    width: 20px;
    height: 20px;
    margin-bottom:4px;
    transform:rotate(-180deg);

`

export default BackTop
