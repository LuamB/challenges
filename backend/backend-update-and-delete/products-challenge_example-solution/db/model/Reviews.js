import mongoose from "mongoose";
const { Schema } = mongoose;
const reviewsSchema = new Schema({
  title: { type: String, require: true },
  text: { type: String, require: true },
  rating: { type: Number, require: true },
});

const Reviews =
  mongoose.models.Reviews || mongoose.model("Reviews", reviewsSchema);
export default Reviews;
