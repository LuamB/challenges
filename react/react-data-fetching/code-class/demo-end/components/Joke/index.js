import { useState } from "react";
import useSWR from "swr";

export default function Joke() {
  const [id, setId] = useState(0);

  const { data } = useSWR(
    `https://example-apis.vercel.app/api/bad-jokes/${id}`
  );

  function handlePrevJoke() {
    setId(data.prevId);
  }

  function handleNextJoke() {
    setId(data.nextId);
  }

  // initialize the local state with an empty array
  const [jokesInfo, setJokesInfo] = useState([]);

  function handleToggleFunny(id) {
    // find the joke in the state
    const info = jokesInfo.find((info) => info.id === id);

    // if the joke is already in the state, toggle the isFunny property
    if (info) {
      const newInfo = jokesInfo.map((info) =>
        info.id === id ? { ...info, isFunny: !info.isFunny } : info
      );
      setJokesInfo(newInfo);
    }
    // if the joke is not in the state, add it with isFunny set to true
    // return [...jokesInfo, { id, isFunny: true }];
    else {
      const newInfo = [...jokesInfo, { id, isFunny: true }];
      setJokesInfo(newInfo);
    }
  }

  if (!data) {
    return <h1>Loading...</h1>;
  }

  // find the joke in the state, default isFunny to false
  const info = jokesInfo.find((info) => info.id === id) ?? { isFunny: false };
  const { isFunny } = info;

  return (
    <>
      <small>ID: {id}</small>
      <h1>
        {data.joke} <span>{isFunny ? "🤣" : "🥹"}</span>
      </h1>
      <div>
        <button type="button" onClick={() => handleToggleFunny(id)}>
          {isFunny ? "Stop laughing" : "Start laughing"}
        </button>
      </div>
      <div>
        <button type="button" onClick={handlePrevJoke}>
          ← Prev Joke
        </button>
        <button type="button" onClick={handleNextJoke}>
          Next Joke →
        </button>
      </div>
    </>
  );
}
