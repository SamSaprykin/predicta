import React from "react";
import styled from "styled-components"
//import "./styles.css";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  grid-gap: 55px;
  width:auto;
  align-self:center;

  @media (max-width: 1024px) {
   grid-gap: 10px;
  }
  @media (max-width: 600px) {
    grid-gap: 10px;
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Item = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 220px;
height: 220px;
background-color: rgba(34, 43, 62, 1);
border-radius: 100%;
color: white;
padding: 2rem;
position: relative;

h3  {
  font-size: 2rem; 
  line-height: 1.2; 
  margin: 0; 
  text-align: center
}
p  {
  font-size: 1rem; 
  line-height: 1.2; 
  margin: 0; 
  text-align: center
}

@media (max-width: 1024px) {
  padding: 1rem;
  width:180px;
  height:180px;
  h3 {
    font-size:24px;
    line-height:1.1;
  }
  p {
    font-size:18px;
  }
}

@media (max-width: 768px) {
  padding: 1.5rem;
  width:160px;
  height:160px;
  h3 {
    font-size:24px;
    line-height:1.1;
  }
  p {
    font-size:16px;
  }
}

`;

const GridB = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  grid-gap: 40px;
  width:auto;
  align-self:center;
  @media (max-width: 1024px) {
    grid-gap: 20px;
  }
  @media (max-width: 470px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const GridC = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  grid-gap: 55px;
  width: auto;
  align-self: center;
  margin-top: 55px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;  
    margin-top:20px;  
  }
  @media (max-width: 470px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;


const ItemB = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 1rem;
position: relative;
text-align:center;
margin-top: 20px;
h3 {
  font-size:35px;
  line-height:42px;
  color:#606060;
  margin-bottom:3.5px;
}
p {
  font-size:35px;
  line-height:42px;
  letter-spacing: 0px;
  color: #222B3E;
}
@media (max-width: 1024px) {
  margin-top:0;
  h3 {
    font-size:28px;
    line-height:1.1;
  }
  p {
    font-size:28px;
    line-height:1.1;
    margin-bottom:8px;
  }
}

`;

const TitleSection = styled.h2`
  text-transform: capitalize;
  color: #222B3E;
  letter-spacing: 0px;
  font-size:50px;
  line-height:60px;
  margin-bottom:26px;
  @media (max-width: 1024px) {
    font-size:42px;
    line-height:48px;
  }
`

const Gap = styled.div`
  display: block;
  height: 2rem;
`;


const GridBox = () => (
  <>
    <TitleSection id='#global'>Global Overview</TitleSection>
    <GridB>
      <ItemB>
        <h3>First Day of Infection</h3>
        <p>01/12/2019</p>
      </ItemB>
      <ItemB>
        <h3>Countries</h3>
        <p>213</p>
      </ItemB>
      <ItemB>
        <h3>Global Population</h3>
        <p>7.672.512.111</p>
      </ItemB>
    </GridB>
    <Gap />
    <Grid>
      <Item>
        <h3>62.779.735</h3> 
        <p style={{color: `#fff`}}>Cases</p>
      </Item>
      <Item>
        <h3>8.183</h3>
        <p style={{color: `#fff`}}>Cases per 1M Pop</p>
      </Item>
      <Item>
        <h3>1.461.042</h3>
        <p style={{color: `#fff`}}>Deaths</p>
      </Item>
      <Item>
        <h3>190</h3>
        <p style={{color: `#fff`}}>Deaths per 1M Pop</p>
      </Item>
      <Item>
        <h3>2,3%</h3>
        <p style={{color: `#fff`}}>Mortality</p>
      </Item>
      <Item>
        <h3>96%</h3>
        <p style={{color: `#fff`}}>Deaths with Underlying Conditions</p>
      </Item>
      <Item>
        <h3>65,7%</h3>
        <p style={{color: `#fff`}}>Recovery</p>
      </Item>
      <Item><h3>7,0%</h3><p style={{color: `#fff`}}>Positivity</p></Item>
    </Grid>
    <GridC>
      <Item>
        <h3>7,1</h3>
        <p style={{color: `#fff`}}>Estimated Real Cases Multiplier</p>
      </Item>
      <Item>
        <h3>7,0%</h3>
        <p style={{color: `#fff`}}>Population Immunity</p>
      </Item>
      <Item>
        <h3>6,3%</h3>
        <p style={{color: `#fff`}}>Estimated Excess Deaths due to Covid-19</p>
      </Item>
    </GridC>
</>
  );


export default GridBox