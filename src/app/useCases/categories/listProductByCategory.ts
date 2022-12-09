import { Request, Response } from "express";

import { Product } from "../../models/Products";

export async function listProductByCategory(req: Request, res: Response) {
  try {
    const { categoryId } = req.params;
    const product = await Product.find().where('category').equals(categoryId);

    res.json(product);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
