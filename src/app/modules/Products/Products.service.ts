import QueryBuilder from '../../builder/QueryBuilder';
import { IProduct } from './Products.interface';
import { Product } from './Products.module';

const getAllProducts = async () => {
  const result = await Product.find();
  return result.reverse();
};

// const getAllProductsFromDB = async (query: Record<string, unknown>) => {
//   // const assenDessen = query?.sorting || '-createdAt';
//   console.log(12, query.sort);
//   if (query.searchTerm === '' && query.minPrice && query.maxPrice) {
//     const result = Product.find({
//       price: {
//         $gte: parseInt(query?.minPrice as string),
//         $lte: parseInt(query?.maxPrice as string),
//       },
//     });
//     return result;
//   }
//   const courseQuery = new QueryBuilder(Product.find(), {
//     searchTerm: query.searchTerm,
//   })
//     .search(['name', 'brand'])
//     .fields()
//   const result = await courseQuery.modelQuery;

//   return result;
// };

const getAllProductsFromDB = async (query: Record<string, unknown>) => {
  // Default to sorting by price in ascending order if no sort option is provided
  const sortOption = query?.sort === 'descending' ? -1 : 1;

  if (query.searchTerm === '' && query.minPrice && query.maxPrice) {
    const result = Product.find({
      price: {
        $gte: parseInt(query?.minPrice as string),
        $lte: parseInt(query?.maxPrice as string),
      },
    }).sort({ price: sortOption }); // Adding sort here
    return result;
  }

  const courseQuery = new QueryBuilder(Product.find(), {
    searchTerm: query.searchTerm,
  })
    .search(['name', 'brand'])
    .fields();
  // Adding sort to the QueryBuilder query
  courseQuery.modelQuery.sort({ price: sortOption });
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

const createProductIntoDB = async (payload: IProduct) => {
  const result = await Product.create(payload);
  return result;
};

const deleteProductfromDB = async (id: string) => {
  const result = await Product.findByIdAndDelete(id);
  return result;
};
const updateProductIntoDB = async (id: string, payload: Partial<IProduct>) => {
  const result = await Product.findByIdAndUpdate(
    id,
    { $set: payload },
    { new: true, runValidators: true },
  );
  return result;
};

export const ProductsServices = {
  getAllProducts,
  getCategoryProducts,
  getAllProductsFromDB,
  getSingleProductsFromDB,
  createProductIntoDB,
  deleteProductfromDB,
  updateProductIntoDB,
};
