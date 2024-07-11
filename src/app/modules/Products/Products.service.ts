import QueryBuilder from '../../builder/QueryBuilder';
import { Product } from './Products.module';

const getAllProducts = async () => {
  const result = await Product.find();
  return result;
};

const getAllProductsFromDB = async (query: Record<string, unknown>) => {
  console.log(query);
  const courseQuery = new QueryBuilder(Product.find(), query)
    .search(['name', 'brand'])
    .fields()
    .filter()
    .paginate()
    .sort();
  const result = await courseQuery.modelQuery;
  return result;
};

const getCategoryProducts = async (category: string) => {
  const result = await Product.find({ category });
  return result;
};

export const ProductsServices = {
  getAllProducts,
  getCategoryProducts,
  getAllProductsFromDB,
};
