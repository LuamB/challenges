import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --color-nemo: #ff4a11;
    --color-granite: #252629;
    --color-water-10: #f3f5f9;
    --color-foam: #ffffff;
    --gap: 20px;
  }
    
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    display: grid;
    margin: auto;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 12px;
    place-items: center;
    min-height: 100vh;
    max-width: 50rem;
  }

  button {
    appearance: none;
    border: none;
    background: var(--color-water-10);
    font-size: larger;
    padding: 0.5rem 1rem;
    margin: .5rem 0;
  } 

  a {
    text-decoration: none;
    display: inline-block;
    color: inherit;
    border: none;
    background: var(--color-water-10);
    font-size: larger;
    padding: 0.5rem 1rem;
  } 

  a:visited {
    color: inherit;
  }

  form {
    display: flex;
    justify-content: center;
    gap: 2rem;
    align-items: center;
  }

  ul {
    list-style-type: none;
    display: grid;
    gap: 1rem;
    justify-items: center;
    padding: 0;
  }

  li {
    width: 100%;
  }

  li a {
    width: 100%;
  }

  div:has(h1) {
    display: flex;
    flex-direction: column;

  }

  div:has(h1) button {
    width: fit-content;
    align-self: center;
  }
`;
