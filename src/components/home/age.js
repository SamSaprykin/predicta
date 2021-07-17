import React from "react";
import styled from "styled-components";
import Group from "./images/cases-by-age.svg";

const ImageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 920px;
  margin: 0 auto;
  @media (max-width: 1440px) {
    max-width: 720px;
  }
  @media (max-width: 1024px) {
    max-width: 768px;
  }
  @media (max-width: 768px) {
    padding: 0 32px;
  }
`;

const Gap = styled.div`
  display: block;
  height: 2rem;
`;

const TitleSection = styled.h2`
  color: #222b3e;
  font-size: 32px;
  line-height: 38px;
  @media (max-width: 1440px) {
    font-size: 28px;
    line-height: 32px;
  }
  @media (max-width: 1024px) {
    font-size: 26px;
    line-height: 30px;
  }
`;

const GridBox = () => (
  <>
    <TitleSection id="age">Cases by Age Group</TitleSection>

    <Gap />

    <ImageBox>
      <Group />
    </ImageBox>
  </>
);

export default GridBox;
