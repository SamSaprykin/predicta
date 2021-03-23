import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"



const DepthSoon = ({image, title, navItems}) => {
  return (
    <Wrapper>
        <Table>
            <TableHeader>
                <TitleTable>{title}</TitleTable>
            </TableHeader>
            <TableRow>
                {
                    navItems.map((item,index) => {
                        return (
                            <TableItem key={index}>
                                {item}
                            </TableItem>
                        )
                    })
                }
            </TableRow>
            
        </Table>
        <ImageContainer>
            <ImageSoon src={image} />
            <TextSoon>Coming soon</TextSoon>
        </ImageContainer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    width:100%;
    max-width:1560px;
    margin:85px auto 0;
    @media(max-width:1920px) {
        max-width:1440px;
    }
    @media (max-width:1680px) {
        max-width:1280px;
    }
    @media (max-width:1440px) {
        max-width:1280px;
        padding:0 32px;
    }
    @media (max-width:1280px) {
        margin:65px 0 0;
    }
    @media (max-width:768px) {
        margin:125px 0 0;
        padding:0 32px;
    }
    @media (max-width:470px) {
        padding:0 16px;
    }
    
`

const Table = styled.div`
    display:flex;
    flex-direction:column;
    margin-bottom:32px;
`

const TableHeader = styled.div`
    border: 1px solid #a7a9ac;
    background-color: #222b3e;
    width:100%;
    height:auto;
    text-align:center;
    padding: .3rem;
`

const TitleTable = styled.h2`
    color: #ffffff;
    letter-spacing: normal;
    line-height: 60px;
    text-align: center;
    text-transform: uppercase;
    font-family: "IBM Plex Sans";
    font-size: 44px;
    font-weight: 600;
    font-style: normal;
    letter-spacing: normal;
    line-height: normal;
    margin-bottom:0;
    @media (max-width:1440px) {
        font-size:38px;
    }
    @media (max-width:768px) {
        font-size:32px;
    }
`

const TableRow = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
    :last-child {
        border-right: 1px solid #a7a9ac;
    }
`

const TableItem = styled.div`
    text-align:center;
    color: #222b3e;
    font-size: 14.4px;
    font-weight: 600;
    font-style: normal;
    letter-spacing: normal;
    line-height: 24px;
    text-align: center;
    font-family: IBM Plex Sans;
    font-weight: 600;
    font-style: normal;
    letter-spacing: normal;
    line-height: normal;
    padding:12px;
    border-left: 1px solid #a7a9ac;
    border-bottom: 1px solid #a7a9ac;
    background-color: #f6f6f6;
    flex-grow: 1;
    display:flex;
    align-items:center;
    justify-content:center;
    height:58px;
    @media (max-width:1440px) {
        padding:9px;
        font-size: 0.8rem;
        font-weight: 700;
        line-height: 1.4;
    }
    @media (max-width:768px) {
        font-size:16px;
        line-height:19px;
        width:25%;
    }
    @media (max-width:470px) {
        font-size:14px;
        line-height:18px;
        width:50%;
    }
`

const ImageContainer = styled.div`
    width:100%;
    height:auto;
    position:relative;
    margin-top:32px;
`
const ImageSoon = styled.img`

`

const TextSoon = styled.h5`
    position:absolute;
    left:50%;
    top:30%;
    transform:translate(-50%,-50%);
    color: #222b3e;
    font-size: 50px;
    font-weight: 600;
    font-style: normal;
    letter-spacing: normal;
    line-height: 60px;
    text-align: center;
    text-transform: uppercase;
    font-family: IBM Plex Sans;
    font-weight: 600;
    font-style: normal;
    letter-spacing: normal;
    line-height: normal;
    @media (max-width:768px) {
        font-size:24px;
    }
`

export default DepthSoon