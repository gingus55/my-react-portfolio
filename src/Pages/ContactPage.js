import React from "react";
import { ContactLinks } from "../Components/ContactLinks/ContactLinks";
import { Form } from "../Components/Form/Form";
import { Header } from "../Components/Header/Header";

export const ContactPage = () => {
  return (
    <>
      <Header />
      <Form />
      <ContactLinks />
    </>
  );
};
