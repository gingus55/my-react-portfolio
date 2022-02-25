import React, { useState } from "react";
import { TextField, Tooltip } from "@mui/material";

import "./style.css";

export const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [question, setQuestion] = useState("");
  const [email, setEmail] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
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

    // return name === "firstName" ? setFirstName(value) : setLastName(value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (firstName && lastName && question) {
      alert(
        `Thank you ${firstName} ${lastName} for asking the following ${question}. I'll get back to you when I can`
      );
      setFirstName("");
      setLastName("");
      setQuestion("");
    } else {
      alert("Please submit all fields.");
    }
  };

  return (
    <div>
      <form className="form">
        <Tooltip disableFocusListener title="REQUIRED">
          <TextField
            sx={{ m: 3 }}
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
            sx={{ m: 3 }}
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

        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};
