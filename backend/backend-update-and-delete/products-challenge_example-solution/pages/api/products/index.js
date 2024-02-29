import dbConnect from "../../../db/connect";
import Product from "../../../db/model/Product";

export default async function handler(request, response) {
  try {
    await dbConnect();
    try {
      if (request.method === "GET") {
        const products = await Product.find();
        return response.status(200).json(products);
      } else if (request.method === "POST") {
        await Product.create(request.body);
        response.status(200).json({ success: "product successfully created" });
      }
    } catch (e) {
      console.log(e);
    }
  } catch (e) {
    console.log(e);
  }
}
