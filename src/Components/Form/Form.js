import React, { useState } from "react";
import "./style.css";

export const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [question, setQuestion] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;

    if (name === "firstName") {
      return setFirstName(value);
    } else if (name === "lastName") {
      return setLastName(value);
    } else {
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
        <input
          value={firstName}
          name="firstName"
          onChange={handleInputChange}
          type="text"
          placeholder="First Name"
        />
        <input
          value={lastName}
          name="lastName"
          onChange={handleInputChange}
          type="text"
          placeholder="Last Name"
        />
        <input
          value={question}
          name="question"
          onChange={handleInputChange}
          type="text"
          placeholder="Question..."
        />
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};
