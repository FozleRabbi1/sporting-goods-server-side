import express from 'express';
import { productsControllers } from './Products.controller';

const router = express.Router();

router.get('/', productsControllers.getAllProducts);
router.get('/:category', productsControllers.getCategoryProducts);

export const productsRouter = router;
