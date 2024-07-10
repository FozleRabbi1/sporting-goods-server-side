import { Product } from './Products.module';

const getAllProducts = async () => {
  const result = await Product.find();
  return result;
};

const getCategoryProducts = async (category: string) => {
  const result = await Product.find({ category });
  return result;
};

export const ProductsServices = {
  getAllProducts,
  getCategoryProducts,
};
