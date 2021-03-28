import React from "react";
import styled from "styled-components";

export const PredictaContentContainer = ({
    children,
    background,
    containerSize,
    marginTop,
    marginBottom,
    ...otherProps
  }) => {
    return (
      <ContentContainer 
        background={background} 
        marginTop={marginTop} 
        marginBottom={marginBottom}
        containerSize={containerSize}  
      {...otherProps}>
        {children}
      </ContentContainer>
    )
}

const ContentContainer = styled.div`
    font-family: IBM Plex Sans, sans-serif;
    background:${props => props.background};
    display:flex;
    flex-direction:column;
    align-items:center;
    width:100%;
    max-width: 800px;
    margin: 0 auto;
    margin-bottom: ${props => props.marginBottom};
    margin-top: ${props => props.marginTop};
    max-width: ${props =>
        props.containerSize === "large"
          ? "1280px"
          : props.fontSize === "normal"
          ? "960px"
          : props.fontSize};
    @media (max-width:1440px) {
        max-width: ${props =>
            props.containerSize === "large"
              ? "960px"
              : props.fontSize === "normal"
              ? "720px"
              : props.fontSize};
    }
    @media (max-width:1024px) {
        padding:0 32px;
    }
    svg {
        max-width:100%;
        height:auto;
    }
    .living {
      .b {
        fill:#789ac4 !important;
      }
    }
    .deaths {
      .b {
        fill:#d02f34 !important;
      }
    }
    .title-graph {
        margin-bottom:22px;
    }
    .graph {
        margin-bottom:60px;
        background-color:white;
    }
    .graph-dark {
        margin-bottom:60px;
        background-color: #606060;
        fill:none;
        text {
            tspan {
                fill:white;
                opacity:1;
                font-family: 'IBM Plex Sans',sans-serif;
            }
        }
    }
    text {
        fill:#222B3E;
        stroke:none;
        opacity:.8;
        
    }
    ul {
        margin-bottom:24px;
    }
    li {
        margin:0;
    }
    @media (max-width:1024px) {
        max-width: 768px;
    }
`


export const PredictaTextWrapper = ({
    children,
    alignContent,
    ...otherProps
  }) => {
    return (
      <MainDiv alignContent={alignContent}  {...otherProps}>
        {children}
      </MainDiv>
    )
}
  
  
  
const MainDiv = styled.div`
    font-family: IBM Plex Sans, sans-serif;
    text-align: ${props => props.alignContent};
    width:100%;
    max-width: 800px;
    margin: 0 auto;
    @media (max-width:1440px) {
        max-width:600px;
    }
    @media (max-width:1024) {
        padding:0 32px;
    }
`

export const PredictaTitle = ({
    children,
    alignContent,
    marginBottom,
    marginTop,
    className,
    ...otherProps
  }) => {
    return (
      <TitleH2
        alignContent={alignContent}
        marginBottom={marginBottom}
        marginTop={marginTop}
        className={className}
        {...otherProps}
      >
        {children}
      </TitleH2>
    );
  };

const TitleH2 = styled.h2`
  font-family: IBM Plex Sans, sans-serif;
  text-align: ${props => props.alignContent};
  font-weight: 600;
  font-size: 32px;
  color: #222B3E;
  line-height:38px;
  margin-bottom: ${props => props.marginBottom};
  margin-top: ${props => props.marginTop};
  @media (max-width:1440px) {
    font-size: 28px;
    line-height:32px;
  }
  @media (max-width:1024px) {
    font-size: 26px;
    line-height:30px;
  }
`;


export const PredictaSubTitle = ({
    children,
    alignContent,
    marginBottom,
    className,
    ...otherProps
  }) => {
    return (
      <TitleH3
        alignContent={alignContent}
        marginBottom={marginBottom}
        className={className}
        {...otherProps}
      >
        {children}
      </TitleH3>
    );
  };

const TitleH3 = styled.h2`
  font-family: IBM Plex Sans, sans-serif;
  text-align: ${props => props.alignContent};
  font-weight: 400;
  font-size: 26px;
  line-height: 100%;
  color: #222B3E;
  line-height:38px;
  margin-bottom: ${props => props.marginBottom};
  @media (max-width:1440px) {
    font-size: 24px;
    line-height:32px;
  }
  @media (max-width:1024px) {
    font-size: 22px;
    line-height:30px;
  }
`;

export const PredictaText = ({
    children,
    marginTop,
    marginBottom,
    className,
    weightText,
    ...otherProps
  }) => {
    return (
      <Text
        marginTop={marginTop}
        marginBottom={marginBottom}
        className={className}
        weightText={weightText}
        {...otherProps}
      >
        {children}
      </Text>
    );
};


const Text = styled.p`
  font-family: IBM Plex Sans, sans-serif;
  letter-spacing: 0;
  font-size: 18px;
  line-height:38px;
  color: #606060;
  margin: 0;
  margin-top: ${props => props.marginTop};
  margin-bottom: ${props => props.marginBottom};
  font-weight: 400;
  font-style: normal;
  @media (max-width:1440px) {
    font-size: 16px;
    line-height:32px;
  }
  @media (max-width:1024px) {
    font-size: 15px;
    line-height:30px;
  }
`;

