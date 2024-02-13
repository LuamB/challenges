import useSWR from "swr";

export default function JokeForm() {
  const { mutate } = useSWR("/api/jokes");
  const onJokeSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const jokeData = Object.fromEntries(formData);
    console.log("jokeData", jokeData);
    const response = await fetch("/api/jokes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jokeData),
    });
    if (response.ok) {
      mutate();
    }
  };
  return (
    <form onSubmit={onJokeSubmit}>
      <label htmlFor="joke-input">Enter a new joke</label>
      <input type="text" name="joke" id="joke-input" />
      <button>Submit</button>
    </form>
  );
}
