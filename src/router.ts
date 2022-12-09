import path from "node:path";

import { Router } from "express";
import multer, { Multer } from "multer";

import { createCategory } from "./app/useCases/categories/createCategory";
import { listCategories } from "./app/useCases/categories/listCategories";
import { createProduct } from "./app/useCases/products/createProduct";
import { listProducts } from "./app/useCases/products/listProducts";
import { listProductByCategory } from "./app/useCases/categories/listProductByCategory";
import { listOrder } from "./app/useCases/orders/listOrder";
import { createOrder } from "./app/useCases/orders/createOrder";

export const router = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname, '..', 'uploads'));
    },
    filename(req, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`)
    },
  }),
});


//list category

router.get('/categories', listCategories);

//create category

router.post('/categories', createCategory);

// list products

router.get('/products', listProducts);

//create products

router.post('/products', upload.single('image'), createProduct);


//get product by category

router.post('/categories:categoryId/products', listProductByCategory);

//list orders

router.get('/orders',  listOrder );

//create order

router.post('/orders', createOrder);

//change order

router.patch('/orders:orderId', (req, res) => {
  res.send('ok');
});

//dele or cancel

router.delete('/orders', (req, res) => {
  res.send('ok');
});
