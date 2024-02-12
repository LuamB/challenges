import mongoose from "mongoose";

const {Schema, models, model} = mongoose

const jokeSchema = new Schema({
    id: {type: String, required: true},
    joke: {type: String, required: true},
})

const Joke = models.Joke || model("Joke", jokeSchema)

export default Joke;