import { jokes } from "lib/data";

export default function handler(request, response) {
  const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
  if (!randomJoke) {
    response.status(404).json({ status: "not found" });
    return;
  }
  response.status(200).json(randomJoke);
}
