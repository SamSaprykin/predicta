import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`

  body {
    margin: 0;
    padding: 0;
    background: transparent;
    font-family: 'IBM Plex Sans', sans-serif;
  }

  p {line-height: 38px;  color: #606060;}

  h1 {
text-transform: uppercase; 
margin-bottom: .6rem; 
font-family: 'IBM Plex Sans',sans-serif; 
font-size: 42px ;
font-weight: 600;
margin-bottom: 60px;
};

h2 {font-family: 'IBM Plex Sans',sans-serif; color: #222B3E; 

};

h3 {font-family: 'IBM Plex Sans',sans-serif; font-weight: normal; font-size: 35px;
};

h4 {margin-bottom:5px;}

  h1, h2 {text-align:center}

  #highlighted {background-color: rgba(120, 154, 196, 1); color: white}

  #highlighted-dark {background-color: rgba(209, 211, 212, 1); color: white}

  //svg {background-color: white}

  

  .row {
    padding: 5rem 0;
    @media (max-width:1080px) {
      padding 2.5rem 0;
    }
  }
  
  .col {
    display: flex;
    flex-basis: 100%;
    max-width: 1920px;
    flex-direction: column;
    margin: 0 auto;
  }

  table.metrics-table th, table.metrics-table-alt th {
    color: #fff;
    text-align: center;
  }

table.metrics-table, table.metrics-table-alt  {
  width: 100%;
  background-color: #FFFFFF;
  border-collapse: collapse;
  border-width: 1px;
  border-color: rgba(0,0,0,0.2);
  border-style: solid;
  color: #000000;
}

table.metrics-table td, table.metrics-table th, table.metrics-table-alt td, table.metrics-table-alt th {
  border-width: 1px;
  border-color: rgba(0,0,0,0.2);
  border-style: solid;
  padding: 5px;
  text-align:center;
}

table.metrics-table thead, table.metrics-table-alt thead {
  background-color: #222B3E;
}

table.metrics-table tbody tr:nth-child(odd){
  background-color: rgba(120,154,196, .05);

}

table.metrics-table-alt tbody{
  background-color: #F6F6F6;

}

.metrics-table-alt td {color: #606060; font-size:20px;}

.metrics-table-alt ul {list-style: none; color: #606060; font-size:10px;}

.metrics-table-alt li {margin:0; font-size:18px; color: #606060}

.metrics-table-alt td:nth-child(1) {text-align:center}

.metrics-table-alt td:nth-child(2) {text-align:left; padding-top: 30px}

.map-section {
	padding: 0;
}

.responsive-iframe {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  
}

th {
  text-align:left;
  padding-left:24px;
  font-size:16px !important;
  @media(max-width:1440px) {
    font-size: 14px !important;
  }
  @media(max-width:768px) {
    font-size: 12px !important;
  }
}
td {
  text-align:left;
  padding-left:24px;
  font-size:16px !important;
  @media(max-width:1440px) {
    font-size: 14px !important;
  }
  @media(max-width:768px) {
    font-size: 12px !important;
  }
}
 
`

export default GlobalStyle
