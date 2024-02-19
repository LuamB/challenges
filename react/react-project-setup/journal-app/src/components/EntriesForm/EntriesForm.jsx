import "./EntriesForm.css";

export default function EntriesForm() {
  return (
    <form className="entry-form">
      <h2 className="entry-form__title">New Entry</h2>
      <div className="entry-form_fields">
        <div className="entry-form__field">
          <label htmlFor="motto">Motto</label>
          <input type="text" name="motto" id="motto"></input>
        </div>
        <div className="entry-form__field">
          <label htmlFor="notes">Notes</label>
          <textarea name="notes" id="notes" rows="4"></textarea>
        </div>
        <div className="entry-form__button-container">
          <button type="submit" className="entry-form__button">
            Create
          </button>
        </div>
      </div>
    </form>
  );
}
