export default function Form({ onCreate }) {
  function handleSubmit(event) {
    console.log(event);
    event.preventDefault();
    const formData = event.target.elements;
    const name = formData.name.value;
    const email = formData.email.value;
    onCreate(name, email);
    event.target.reset()
  }

  return (
    <form
      className="form"
      aria-labelledby="user-details"
      onSubmit={handleSubmit}
    >
      <h2 id="user-details">Please enter your details here!</h2>
      <label htmlFor="name">Name: </label>
      <input id="name" name="name" type="text" placeholder="John Doe" />
      <label htmlFor="email">Email: </label>
      <input id="email" name="email" type="email" placeholder="john@doe.com" />
      <button className="form__submit-button" type="submit">
        Submit
      </button>
    </form>
  );
}
