import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Map from "./images/map.svg";

const MapWrap = styled.div`


& svg {width:1220px;}


  @media (max-width: 1024px) {
 
  }
`



const MapImage = () => {
  return (
    <MapWrap as={Link} to="/">
      <Map alt="Main Map" />
    </MapWrap>
  )
}

export default MapImage