import React from "react";
import styled from "styled-components";
import Title from "../components/atoms/Title/Title";
import Paragraph from "../components/atoms/Paragraph/Paragraph";
import Form from "../components/molocules/Form/Form";
const ContactWrapper = styled.div`
  width: 100%;
  min-height: 50vh;
  margin: 5rem 0;
  display: flex;
  flex-direction: column;
`;

const Contact = () => {
  return (
    <ContactWrapper>
      <Title>contact us</Title>
      <Paragraph bold>Insert your menu on clickmenu.uk Today</Paragraph>
      <Form />
    </ContactWrapper>
  );
};

export default Contact;
