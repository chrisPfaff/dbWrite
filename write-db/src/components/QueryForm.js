import React from "react";
import { useState } from "react";

function QueryForm({ handleAnswers, holdingData }) {
  const [contactInfo, setContactInfo] = useState({ name: "", email: "" });

  function handleSubmit(event) {
    event.preventDefault();
    handleAnswers(contactInfo, holdingData);
  }
  return (
    <div className="query-form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="Name">Name</label>
        <input
          onChange={(event) => {
            let name = event.target.value;
            setContactInfo((prev) => {
              return { ...prev, name };
            });
          }}
          type="text"
          name="name"
          id="name"
          required
        />
        <label htmlFor="email">Email</label>
        <input
          onChange={(event) => {
            let email = event.target.value;
            setContactInfo((prev) => {
              return { ...prev, email };
            });
          }}
          type="email"
          name="email"
          id="email"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default QueryForm;
