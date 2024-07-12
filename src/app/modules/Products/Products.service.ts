import QueryBuilder from '../../builder/QueryBuilder';
import { Product } from './Products.module';

const getAllProducts = async () => {
  const result = await Product.find();
  return result;
};

const getAllProductsFromDB = async (query: Record<string, unknown>) => {
  if (query.searchTerm === '' && query.minPrice && query.maxPrice) {
    const result = Product.find({
      price: {
        $gte: parseInt(query?.minPrice as string),
        $lte: parseInt(query?.maxPrice as string),
      },
    });
    return result;
  }
  const courseQuery = new QueryBuilder(Product.find(), {
    searchTerm: query.searchTerm,
  })
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

const getSingleProductsFromDB = async (id: string) => {
  const result = await Product.findById(id);
  return result;
};

export const ProductsServices = {
  getAllProducts,
  getCategoryProducts,
  getAllProductsFromDB,
  getSingleProductsFromDB,
};
