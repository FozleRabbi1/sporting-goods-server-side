import { Product } from './Products.module';

const getAllProducts = async () => {
  const result = await Product.find();
  return result;
};

export const ProductsServices = {
  getAllProducts,
};
