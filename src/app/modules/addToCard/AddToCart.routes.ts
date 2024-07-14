import express from 'express';
import { addToCartControllers } from './AddToCart.controller';

const router = express.Router();

router.patch('/', addToCartControllers.checkOutQuery);
router.get('/', addToCartControllers.getAddToCart);
router.delete('/:id', addToCartControllers.deleteCart);
router.post('/addToCart', addToCartControllers.addToCart);

export const addToCartRouter = router;
