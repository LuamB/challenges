import { getProductById } from "@/services/productServices";

export default function handler(req, res) {
  const id = req.query.id;
  if (!getProductById(id)) {
    res.status(404).json({ status: "Product not found" });
    return;
  }
  res.status(200).json(getProductById(id));
}
