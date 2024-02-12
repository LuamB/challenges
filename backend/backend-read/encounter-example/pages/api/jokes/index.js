import Joke from "../../../db/Joke"
import dbConnect from "../../../db/connect";

export default async function handler(request, response) {
  await dbConnect();

  if(request.method === "GET"){

    try {
      const jokes= await Joke.find();

      response.status(200).json(jokes);
    } catch (error) {
      console.error(error)
    }


  }


}
