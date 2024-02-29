import dbConnect from "../../../db/connect";
import Product from "../../../db/model/Product";
import Reviews from "../../../db/model/Reviews";

export default async function handler(request, response) {
  const { id } = request.query;
  try {
    await dbConnect();
    try {
      if (request.method === "GET") {
        const products = await Product.findById(id).populate("reviews");
        return response.status(200).json(products);
      } else if (request.method === "DELETE") {
        const products = await Product.findByIdAndDelete(id);
        // ALSO delete all reviews associated with the product
        // (otherwise they will live in the db forever)
        await Reviews.deleteMany({
          _id: { $in: products.reviews },
        });
        response.status(260).json("Place and comments deleted");
        return response.status(200).json(products);
      } else if (request.method === "PUT") {
        await Product.findByIdAndUpdate(id, {
          $set: request.body,
        });
        return response
          .status(200)
          .json({ status: "Product successfully updated." });
      } else if (request.method === "POST") {
        try {
          const newComment = await Reviews.create(request.body);
          await Product.findByIdAndUpdate(
            id,
            { $push: { reviews: newComment._id } },
            { new: true }
          );
          response
            .status(200)
            .json({ success: "comment successfully created" });
        } catch (e) {
          console.log(e);
        }
      }
    } catch (e) {
      console.log(e);
    }
  } catch (e) {
    console.log(e);
  }
}
