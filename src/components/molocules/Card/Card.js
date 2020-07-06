import React from "react";
import styled from "styled-components";
import { theme } from "../../../theme/mainTheme";

const CardWrapper = styled.div`
  width: 270px;
  height: 260px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  margin: 0 auto;
  padding: 1rem 0.5rem 1rem 1rem;
  position: relative;

  ::before {
    content: "";
    width: 270px;
    height: 260px;
    box-shadow: 15px -10px 10px rgba(255, 255, 255, 1);
    position: absolute;
    /* top: 0px; */
    left: -2px;
    bottom: -2px;
  }
`;

const CardHeading = styled.h3`
  width: 100%;
  color: ${theme.textLighter};
  font-size: ${theme.fontSize.xxxl};
`;
const CardArticle = styled.article`
  width: 100%;
  font-size: ${theme.fontSize.m};
`;

const Card = (props) => {
  return (
    <CardWrapper>
      <CardHeading>{props.heading}</CardHeading>
      <CardArticle>{props.article}</CardArticle>
    </CardWrapper>
  );
};

export default Card;
