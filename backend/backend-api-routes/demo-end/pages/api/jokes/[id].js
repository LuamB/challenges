import { jokes } from "lib/data";

export default function handler(request, response) {
  const { id } = request.query;
  const joke = jokes.find((joke) => joke.id === id);
  console.log("request method: ", request.method);
  if (!joke) {
    response.status(404).json({ status: "not found" });
    return;
  }
  response.status(200).json(joke);
}
