import React from "react";
import styled from "styled-components"
//import "./styles.css";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  grid-gap: 60px;
  width: auto;
  align-self:center;


  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  
  }

    @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  
  }


`;

const Item = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 240px;
height: 240px;
background-color: rgba(34, 43, 62, 1);
border-radius: 100%;
color: white;
padding: 2rem 2rem 0rem;
position: relative;

& p  {font-size: .8rem; line-height: 1.2; margin: 0; text-align: center; color: white}

`;

const Icon = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 80px;
height: 80px;
background-color: rgba(255, 255, 255, 1);
border-radius: 100%;
color: white;
//padding: 2rem;
position: absolute;
top:-10%;

& svg {width:100%}

`;

const GridC = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  grid-gap: 60px;
  width: auto;
  align-self: center;
  margin-top: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 10px;
        
      }
`;

const Gap = styled.div`
display: block;
height: 1rem;
`;

// const reqSvgs = require.context ( './images', true, /\.svg$/ )
// const allSvgFilepaths = reqSvgs.keys ()
// const imagePath = allSvgFilePaths[0]
// const image = reqSvgs ( imagePath )
const reqSvgs = require.context ( './images', true, /\.svg$/ )

const icons = reqSvgs.keys().reduce((images, path) => {
  const key = path.substring(path.lastIndexOf('/') + 1, path.lastIndexOf('.'))
  images[key] = reqSvgs(path).default
  return images
}, {})

const Equals = icons['equals']
const Fourty = icons['fourty']
const Plane = icons['plane']
const Old = icons['old']
const Lock = icons['lock']
const Down = icons['down']
const Temp = icons['temp']
const Poor = icons['poor']
const Door = icons['door']
const Clock = icons['clock']


  
const GridBox = () => (

  <>

<h1 id ='insights'
      style={{
        textTransform: `uppercase`
      }}>Insights</h1>

  <h2 style={{
        fontWeight: `normal`
      }}>The project reveals significant findings:</h2>

<Gap />

      <Grid>
        <Item>

          <Icon> 
          <Equals />
          
          </Icon>
          
          <p>Men have equal probabilities 
of getting infected as Women.</p></Item>
        <Item>
          
        <Icon> 
          <Fourty />
          
          </Icon>
          
          <p>Men have about ~40% 
higher risk of dying.</p></Item>
        <Item>
          
        <Icon> 
          <Plane />
          
          </Icon>
          
          <p>Frequent
flight connections 
between China, USA 
and Western Europe 
was the original cause 
of virus widespread.</p></Item>
        <Item>
          
        <Icon> 
          <Old />
          
          </Icon>
          
          <p>High percentage 
of the elderly age 
segment and increased 
number of nursery homes 
led to increased 
mortality.</p></Item>
        <Item>
          
        <Icon> 
          <Lock />
          
          </Icon>
          
          <p>Early imposement 
of restriction measures 
led to decreased citizens 
mobility and therefore to 
drastic limitation of the 
virus spread.</p></Item>
        <Item>
          
        <Icon> 
          <Down />
          
          </Icon>
          <p>
Once lockdown measures 
were imposed, ~22 days 
elapsed until the reproduction 
rate fell below 1 
in Western Europe 
and ~38 days 
in Latin America.</p></Item>
        <Item>
          
        <Icon> 
          <Temp />
          
          </Icon>
          
          <p>Increased 
temperatures 
minimize infection, 
as extensive outdoor mobility 
is encouraged.</p></Item>
        <Item>
          
        <Icon> 
          <Poor />
          
          </Icon>
          
          <p>Poverty 
and informal employment 
are significant spread 
accelerators in developing 
countries.</p></Item>

</Grid>
<GridC>



        <Item>
          
        <Icon> 
          <Door />
          
          </Icon>
          
          <p>Indoor 
recreation venues 
are considered superspreaders, 
while strolling in the nature 
is considered to be 
extremely safe.</p></Item>
        <Item>
          
        <Icon> 
          <Clock />
          
          </Icon>
          
          <p>Lengthy 
indoor exposure 
increases infection, 
while mask usage and 
ventilation prevent 
the virus spread.</p></Item>
</GridC>
      
</>
  );


export default GridBox