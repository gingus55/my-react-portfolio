import React, { useState } from "react";
import validator from "validator";
import { Button, TextField, Tooltip } from "@mui/material";

import "./style.css";

export const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [question, setQuestion] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateEmail = (email) => {
    if (validator.isEmail(email)) {
      setEmailError("Valid Email");
    } else {
      setEmailError("Enter valid Email!");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "firstName") {
      return setFirstName(value);
    }
    if (name === "lastName") {
      return setLastName(value);
    }
    if (name === "question") {
      return setQuestion(value);
    }
    if (name === "email") {
      validateEmail(value);
      return setEmail(value);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (firstName && lastName && question && email) {
      alert(
        `Thank you ${firstName} ${lastName} for asking the following ${question}. I'll get back to you at ${email} when I can`
      );
      setFirstName("");
      setLastName("");
      setQuestion("");
      setEmail("");
    } else {
      alert("Please submit all fields.");
    }
  };

  return (
    <div>
      <form className="form">
        <Tooltip disableFocusListener title="REQUIRED">
          <TextField
            sx={{ mt: 3 }}
            helperText="Please enter your first name"
            id="firstName-text-aligned"
            label="First Name"
            name="firstName"
            value={firstName}
            type="text"
            onChange={handleInputChange}
          />
        </Tooltip>
        <Tooltip disableFocusListener title="REQUIRED">
          <TextField
            sx={{ mt: 3, ml: 3 }}
            helperText="Please enter your last name"
            id="lastName-text-aligned"
            label="Last Name"
            name="lastName"
            value={lastName}
            type="text"
            onChange={handleInputChange}
          />
        </Tooltip>

        <Tooltip disableFocusListener title="REQUIRED">
          <TextField
            sx={{ mt: 3 }}
            id="outlined-multiline-static"
            label="Question"
            name="question"
            value={question}
            onChange={handleInputChange}
            multiline
            fullWidth
            rows={4}
            defaultValue=" "
          />
        </Tooltip>
        <Tooltip disableFocusListener title="REQUIRED">
          <TextField
            sx={{ mt: 3 }}
            fullWidth
            helperText=""
            id="email-text-aligned"
            label="Email"
            name="email"
            value={email}
            type="text"
            onChange={handleInputChange}
          />
        </Tooltip>
        <span
          style={{
            fontWeight: "bold",
            color: "red",
          }}
        >
          {emailError}
        </span>
        <Button
          sx={{ mt: 3 }}
          fullWidth
          onClick={handleFormSubmit}
          variant="contained"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};
