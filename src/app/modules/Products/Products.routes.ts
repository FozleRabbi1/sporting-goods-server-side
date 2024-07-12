import express from 'express';
import { productsControllers } from './Products.controller';

const router = express.Router();

router.get('/all-products', productsControllers.getALlProductsFromDb);
router.get('/', productsControllers.getAllProducts);
router.get('/:category', productsControllers.getCategoryProducts);
router.get('/single-product/:id', productsControllers.getSingleProducts);

export const productsRouter = router;
