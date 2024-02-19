import dbConnect from "../../../db/connect";
import Joke from "../../../db/models/Joke";

export default async function handler(request, response) {
  await dbConnect();
  if (request.method === "GET") {
    const jokes = await Joke.find();
    return response.status(200).json(jokes);
  }
  if (request.method === "POST") {
    try {
      console.log("request", request);
      const jokeData = request.body;
      await Joke.create(jokeData);
      return response.status(200).json({ status: "Joke created" });
    } catch (e) {
      console.error(e);
      return response.status(404).json({ error: e.message });
    }
  }
}
