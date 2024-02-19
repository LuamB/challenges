export default function Greeting() {
  const name = "Pete";
  return <h1 id="greeting">Hello {name ? name : "stranger"}</h1>;
}
