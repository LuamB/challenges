import React from "react";
import { useState } from "react";
import Form from "./components/Form.js";
import "./styles.css";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleCreateUser(name, email) {
    setName(name);
    setEmail(email);
  }

  return (
    <div className="container">
      <h1>Personal Details Form</h1>
      <Form onCreate={handleCreateUser} />
      <h2>Your submitted details:</h2>
      <p>
        Name: <span className="output">{name}</span>
      </p>
      <p>
        Email: <span className="output">{email}</span>
      </p>
    </div>
  );
}
