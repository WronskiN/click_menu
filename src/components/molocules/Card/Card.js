import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  width: 270px;
  height: 260px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  margin: 2rem 0;
  padding: 1rem 0.5rem 1rem 1rem;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  position: relative;
  @media (min-width: 768px) {
    margin: 2rem;
  }
  @media (min-width: 1200px) {
    width: 300px;
    height: 300px;
  }

  ::before {
    content: "";
    width: 270px;
    height: 260px;
    position: absolute;
    left: -2px;
    bottom: -2px;
    box-shadow: 15px -10px 10px rgba(255, 255, 255, 1);

    @media (min-width: 1200px) {
      width: 300px;
      height: 300px;
    }
  }
`;

const CardHeading = styled.h3`
  width: 100%;
  color: ${({ theme }) => theme.textLighter};
  font-size: ${({ theme }) => theme.fontSize.xxxl};
`;
const CardArticle = styled.article`
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.m};
`;

const Card = ({ title, article }) => {
  return (
    <CardWrapper>
      <CardHeading>{title}</CardHeading>
      <CardArticle>{article}</CardArticle>
    </CardWrapper>
  );
};

export default Card;
