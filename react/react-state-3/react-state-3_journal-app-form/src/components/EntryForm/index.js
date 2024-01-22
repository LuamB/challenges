import "./EntryForm.css";
import Button from "../Button";
import { useState } from "react";

export default function EntryForm({ onAddEntry }) {
  const [motto, setMotto] = useState("");
  const [notes, setNotes] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newEntry = {
      motto: motto,
      notes: notes,
    };

    console.log("new entry", newEntry);

    onAddEntry(newEntry);

    setMotto("");
    setNotes("");
  }

  return (
    <form className="entry-form" onSubmit={handleSubmit}>
      <h2 className="entry-form__title">New Entry</h2>
      <div className="entry-form__fields">
        <div className="entry-form__field">
          <label htmlFor="motto">Motto</label>
          <input
            type="text"
            name="motto"
            id="motto"
            // value={motto}
            // onChange={(e) => setMotto(e.target.value)}
          />
        </div>
        <div className="entry-form__field">
          <label htmlFor="notes">Notes</label>
          <textarea
            name="notes"
            id="notes"
            rows="4"
            // value={notes}
            // onChange={(e) => setNotes(e.target.value)}
          />
        </div>
        <div className="entry-form__button-wrapper">
          <Button type="submit">Create</Button>
        </div>
      </div>
    </form>
  );
}
