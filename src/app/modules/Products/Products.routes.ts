import express from 'express';
import { productsControllers } from './Products.controller';
import { validateRequest } from '../../middleware/validateRequest';
import { ProductValidationSchema } from './Products.validation';

const router = express.Router();

router.patch(
  '/update',
  validateRequest(ProductValidationSchema.UpdateProductSchema),
  productsControllers.updateProduct,
);
router.post(
  '/',
  validateRequest(ProductValidationSchema.ProductSchema),
  productsControllers.createProduct,
);
router.get('/all-products', productsControllers.getALlProductsFromDb);
router.get('/', productsControllers.getAllProducts);
router.get('/:category', productsControllers.getCategoryProducts);
router.get('/single-product/:id', productsControllers.getSingleProducts);
router.delete('/:id', productsControllers.deleteProduct);

export const productsRouter = router;
