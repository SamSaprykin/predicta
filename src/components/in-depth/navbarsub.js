import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"



const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: auto;
  align-self: center;
  justify-content: center;
  background-color: #F6F6F6;
  border: 1px solid #A7A9AC;
  

`;



const NavLink = styled(Link)`
	color: white;
	text-decoration: none;
	font-weight: 700;
	font-size: 0.8rem;
	color: #222b3e;
	line-height: 1.4;
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
    padding: 0.5rem 0.5rem;
    transition: .3s;

    &:hover {

background-color: #222b3e;
color: white;
}

`

const ItemFull = styled.div`
grid-column: span 6;
background-color: #222b3e;
justify-content: center;
padding: .3rem;

& h1 {color: white;
margin:0;}

@media (max-width: 1280px) {
  width: 600px;
  }
  @media (max-width: 600px) {
    width: 300px;
    }
`

const Gap = styled.div`
height: 10rem;

  @media (max-width: 1024px) {
  
  }
`

const Item = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
border-right: 1px solid #A7A9AC;
text-align:center;


@media (max-width: 1280px) {
  width: 600px;
  }
  @media (max-width: 600px) {
    width: 300px;
    }
`

const NavbarSubLinks = () => {
  return (
    <>

<Grid>

<ItemFull>

<h1 id ='approach'> Europe</h1>

</ItemFull>

<Item>

<NavLink to="/europe/general-findings" activeStyle = {{ backgroundColor: `#222b3e`, color: `white` }}>General Findings</NavLink>

</Item>

<Item>

<NavLink to="/europe/first-wave" activeStyle = {{ backgroundColor: `#222b3e`, color: `white` }}>1st Wave of the Pandemic<br></br>
(Feb to May 2020)</NavLink>
</Item>

<Item>


<NavLink to="/europe/summer-period" activeStyle = {{ backgroundColor: `#222b3e`, color: `white` }}>Summer Period<br></br>
(Jun to Aug 2020)</NavLink>

</Item>

<Item>

<NavLink to="/europe/second-wave" activeStyle = {{ backgroundColor: `#222b3e`, color: `white` }}>2nd Wave of the Pandemic<br></br>
(Sep to Nov 2020)</NavLink>
</Item>

<Item>

<NavLink to="/europe/measures" activeStyle = {{ backgroundColor: `#222b3e`, color: `white` }}>Measures Against<br></br>
COVID-19</NavLink>

</Item>
<Item>
<NavLink to="/europe/conclusion" activeStyle = {{ backgroundColor: `#222b3e`, color: `white` }}>Conclusion</NavLink>
</Item>


</Grid>

<Gap />



    </>
  )
}

export default NavbarSubLinks