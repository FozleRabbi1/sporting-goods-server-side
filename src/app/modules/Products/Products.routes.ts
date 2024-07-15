import express from 'express';
import { productsControllers } from './Products.controller';

const router = express.Router();

router.post('/', productsControllers.createProduct);
router.get('/all-products', productsControllers.getALlProductsFromDb);
router.get('/', productsControllers.getAllProducts);
router.get('/:category', productsControllers.getCategoryProducts);
router.get('/single-product/:id', productsControllers.getSingleProducts);
router.delete('/:id', productsControllers.deleteProduct);

export const productsRouter = router;
