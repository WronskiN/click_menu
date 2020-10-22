import React from "react";
import {
  StyledHeaderWrapper,
  StyledHeaderArticle,
  StyledHeaderImgContainer,
  StyledHeading,
  StyledHeaderText,
  StyledImage,
} from "./Header.styled";
import Button from "../../atoms/Button/Button";
import Image from "../../../assets/jpg/phone2.jpg";

const Header = () => {
  return (
    <StyledHeaderWrapper>
      <StyledHeaderArticle>
        <StyledHeading>Online Menu for restaurants</StyledHeading>
        <StyledHeaderText>No more need to touch menu cards.</StyledHeaderText>
        <Button>Join today</Button>
      </StyledHeaderArticle>
      <StyledHeaderImgContainer>
        <StyledImage src={Image} alt="mobile phone" />
      </StyledHeaderImgContainer>
    </StyledHeaderWrapper>
  );
};

export default Header;
