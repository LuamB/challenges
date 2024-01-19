import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [date, setDate] = useState("");
  const [holiday, setHoliday] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    // const formData = e.target.elements;
    // console.log("Form data: ", formData);

    // setDate(formData.date.value);
    // setHoliday(formData.holiday.value);
    const rawDate = e.target.elements.date.value;
    const formattedDate = new Date(rawDate).toLocaleDateString();
    console.log("formatted date: ", formattedDate);

    setDate(formattedDate);
    setHoliday(e.target.elements.holiday.value);
  }

  return (
    <div className="container">
      <h1>Favourite Holiday Data Storage</h1>
      <h2 id="favourite-holiday">Please tell us your favourite holiday!</h2>
      <form
        className="form"
        aria-labelledby="favourite-holiday"
        onSubmit={handleSubmit}
      >
        <label htmlFor="holiday">My Favourite Holiday: </label>
        <input
          id="holiday"
          type="text"
          name="holiday"
          placeholder="e.g. Christmas"
        />
        <label htmlFor="date">Date: </label>
        <input id="date" type="date" name="date" />
        <button type="submit" className="form__submit-button">
          Submit
        </button>
      </form>
      <h2>Output of Submitted Data</h2>
      <p>
        Favourite Holiday: <span className="output">{holiday}</span>
      </p>
      <p>
        Date: <span className="output">{date}</span>
      </p>
    </div>
  );
}
