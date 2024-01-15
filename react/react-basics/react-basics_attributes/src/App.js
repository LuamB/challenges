import React, { useState } from "react";
import "./styles.css";

export default function App() {
  // return <div>Replace me with an article</div>;
  return YourNameDay();
}

function YourNameDay() {
  const baseUrl = "https://www.namedaycalendar.com/search/";
  const title = "Find your Name Day";
  // get value of input field
  const [name, setMessage] = useState("");
  const handleChange = (event) => {
    setMessage(event.target.value);

    console.log("value is:", event.target.value);
  };
  const element = (
    <article>
      <h2 className="article__title">{title}</h2>
      <label htmlFor="username">Your name:</label>
      <input
        type="text"
        id="username"
        onChange={handleChange}
        value={name}
      ></input>
      <a href={baseUrl + name} className="article__link">
        Click here
      </a>
    </article>
  );
  return element;
}
