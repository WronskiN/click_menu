import React, { Component } from "react";
import { HowItWorksWrapper, CardWrapper } from "./HowItWorks.styled";
import Title from "../../atoms/Title/Title";
import Card from "../../molocules/Card/Card";
import Paragraph from "../../atoms/Paragraph/Paragraph";

class HowItWorks extends Component {
  state = {
    card: [
      {
        title: "one",
        article:
          "Contact us and we will create your restaurant menu on our site!",
      },
      {
        title: "two",
        article:
          "Get your unique online clickmenu link and QR code ready printed and place them on your tables and entrance.",
      },
      {
        title: "three",
        article:
          "No more need to touch menu cards. Let your customer to scan QR code for easy access on mobile",
      },
    ],
  };
  render() {
    const card = this.state.card;
    return (
      <HowItWorksWrapper>
        <Title>how it works</Title>
        <Paragraph>You are only three steps away from the clickmenu!</Paragraph>
        <CardWrapper>
          {card.map((card) => (
            <Card key={card.title} title={card.title} article={card.article} />
          ))}
        </CardWrapper>
      </HowItWorksWrapper>
    );
  }
}

export default HowItWorks;
