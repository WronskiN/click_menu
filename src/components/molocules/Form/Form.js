import React, { Component } from "react";
import InputForm from "../../atoms/InputForm/InputForm";
import InputTextarea from "../../atoms/InputTextarea/InputTextarea";
import Button from "../../../components/atoms/Button/Button";
import InputCheckbox from "../../../components/atoms/InputCheckbox/InputCheckbox";
import Paragraph from "../../../components/atoms/Paragraph/Paragraph";
import {
  FormWrapper,
  FormErrorMessage,
  FormCorrectMessage,
} from "./Form.styled";

class Form extends Component {
  state = {
    clientName: "",
    email: "",
    textarea: "",
    checkbox: false,
    message: "",

    errors: {
      clientName: false,
      email: false,
      textarea: false,
      checkbox: false,
    },
  };

  messages = {
    clientName_incorrect:
      "Your name is too short. Please provide your full name.",
    email_incorrect: "Please provide valid '@' email name.",
    textarea_incorrect: "Please provide more information in message field.",
    checkbox_incorrect: "Please accept our Privacy Policy",
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const validation = this.formValidation();

    if (validation.correct) {
      this.setState({
        clientName: "",
        email: "",
        textarea: "",
        checkbox: false,
        message: "You message has been sent, thank you.",

        errors: {
          clientName: false,
          email: false,
          textarea: false,
          checkbox: false,
        },
      });
    } else {
      this.setState({
        errors: {
          clientName: !validation.clientName,
          email: !validation.email,
          textarea: !validation.textarea,
          checkbox: !validation.checkbox,
        },
      });
    }
  };

  formValidation = () => {
    let clientName = false;
    let email = false;
    let textarea = false;
    let checkbox = false;
    let correct = false;
    if (this.state.clientName.length >= 3) {
      clientName = true;
    }
    if (this.state.email.indexOf("@") !== -1) {
      email = true;
    }
    if (this.state.textarea.length >= 10) {
      textarea = true;
    }
    if (this.state.checkbox) {
      checkbox = true;
    }
    if (clientName && email && textarea && checkbox) {
      correct = true;
    }

    return {
      clientName,
      email,
      textarea,
      checkbox,
      correct,
    };
  };

  handleChange = (e) => {
    const name = e.target.name;
    const type = e.target.type;
    if (type === "text" || type === "email" || type === "textarea") {
      const value = e.target.value;
      this.setState({
        [name]: value,
      });
    } else if (type === "checkbox") {
      const checked = e.target.checked;
      this.setState({
        [name]: checked,
      });
    }
  };

  render() {
    const { clientName, email, textarea, checkbox } = this.state;
    return (
      <FormWrapper onSubmit={this.handleSubmit} noValidate>
        <InputForm
          id="name"
          type="text"
          name="clientName"
          placeholder="name"
          label="name"
          value={clientName}
          onChange={this.handleChange}
        />
        {this.state.errors.clientName && (
          <FormErrorMessage>
            {this.messages.clientName_incorrect}
          </FormErrorMessage>
        )}
        <InputForm
          id="email"
          type="email"
          name="email"
          placeholder="email"
          label="email"
          value={email}
          onChange={this.handleChange}
        />
        {this.state.errors.email && (
          <FormErrorMessage>{this.messages.email_incorrect}</FormErrorMessage>
        )}
        <InputTextarea
          id="textarea"
          type="textarea"
          name="textarea"
          placeholder="message"
          label="textarea"
          value={textarea}
          onChange={this.handleChange}
        />
        {this.state.errors.textarea && (
          <FormErrorMessage>
            {this.messages.textarea_incorrect}
          </FormErrorMessage>
        )}
        <div style={{ margin: "2rem 0 0" }}>
          <InputCheckbox
            onChange={this.handleChange}
            type="checkbox"
            label="checkbox"
            name="checkbox"
            checked={checkbox}
          />
        </div>
        {this.state.errors.checkbox && (
          <FormErrorMessage>
            {this.messages.checkbox_incorrect}
          </FormErrorMessage>
        )}
        <Paragraph style={{ padding: "0 2rem", fontSize: "1.4rem" }}>
          By clicking this box I confirm that I have read Privacy Policy
        </Paragraph>
        <Button type="submit">send</Button>
        {this.state.message && (
          <FormCorrectMessage>{this.state.message}</FormCorrectMessage>
        )}
      </FormWrapper>
    );
  }
}

export default Form;
