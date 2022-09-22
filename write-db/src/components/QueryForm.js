import React from "react";

function QueryForm() {
  return (
    <div className="query-form">
      <form>
        <label htmlFor="Name">Name</label>
        <input type="text" name="name" id="name" required />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default QueryForm;
