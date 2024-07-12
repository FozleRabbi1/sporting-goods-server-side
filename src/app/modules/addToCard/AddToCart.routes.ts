import express from 'express';
import { addToCartControllers } from './AddToCart.controller';

const router = express.Router();

router.get('/', addToCartControllers.getAddToCart);
router.post('/addToCart', addToCartControllers.addToCart);

export const addToCartRouter = router;
