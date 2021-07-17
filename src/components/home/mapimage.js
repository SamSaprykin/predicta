import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Map from "./images/map.svg";


const MapWrap = styled.div`
  max-width:1280px;
  @media(max-width:1440px) {
    max-width:960px;
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