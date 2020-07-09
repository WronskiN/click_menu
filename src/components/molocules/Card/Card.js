import React from "react";
import { CardWrapper, CardHeading, CardArticle } from "./Card.styled";

const Card = ({ title, article }) => {
  return (
    <CardWrapper>
      <CardHeading>{title}</CardHeading>
      <CardArticle>{article}</CardArticle>
    </CardWrapper>
  );
};

export default Card;
