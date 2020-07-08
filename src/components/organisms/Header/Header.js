import React from "react";
import {
  StyledHeaderWrapper,
  StyledHeaderArticle,
  StyledHeaderImgContainer,
  StyledHeading,
  StyledHeaderText,
} from "./Header.styled";
import Image from "../../../assets/phone.jpg";

const Header = () => {
  return (
    <StyledHeaderWrapper>
      <StyledHeaderArticle>
        <StyledHeading>Online Menu for restaurants</StyledHeading>
        <StyledHeaderText>No more need to touch menu cards.</StyledHeaderText>
      </StyledHeaderArticle>
      <StyledHeaderImgContainer>
        <img
          style={{ display: "block", width: "100%", height: "auto" }}
          src={Image}
          alt="mobile phone"
        />
      </StyledHeaderImgContainer>
    </StyledHeaderWrapper>
  );
};

export default Header;
