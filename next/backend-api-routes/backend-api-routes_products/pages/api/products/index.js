import { getAllProducts } from "@/services/productServices";

export default function handler(req, res) {
  if (!getAllProducts()) {
    res.status(404).json({ status: "Products not found" });
    return;
  }
  res.status(200).json(getAllProducts());
}
