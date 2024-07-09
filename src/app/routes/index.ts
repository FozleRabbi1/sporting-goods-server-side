import express from 'express';
import { productsRouter } from '../modules/Products/Products.routes';
const router = express.Router();

const moduleRoutes = [
  { path: '/products', route: productsRouter },
  // { path: '/auth', route: AuthRoute },
];

moduleRoutes.forEach((pathRouter) =>
  router.use(pathRouter.path, pathRouter.route),
);

export default router;
