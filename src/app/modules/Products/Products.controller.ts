import httpStatus from 'http-status';
import { catchAsync } from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ProductsServices } from './Products.service';

const getAllProducts = catchAsync(async (req, res) => {
  const result = await ProductsServices.getAllProducts();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Get All Products Successfully',
    data: result,
  });
});

const getALlProductsFromDb = catchAsync(async (req, res) => {
  const result = await ProductsServices.getAllProductsFromDB(req.query);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'get all Productssssss successFully',
    data: result,
  });
});

const getCategoryProducts = catchAsync(async (req, res) => {
  const result = await ProductsServices.getCategoryProducts(
    req?.params.category,
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Get All Products Successfully',
    data: result,
  });
});

const getSingleProducts = catchAsync(async (req, res) => {
  const result = await ProductsServices.getSingleProductsFromDB(req?.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Get Single Products Successfully',
    data: result,
  });
});

const createProduct = catchAsync(async (req, res) => {
  const result = await ProductsServices.createProductIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product create Successfully',
    data: result,
  });
});

const deleteProduct = catchAsync(async (req, res) => {
  const result = await ProductsServices.deleteProductfromDB(
    req?.params.id as string,
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product create Successfully',
    data: result,
  });
});

const updateProduct = catchAsync(async (req, res) => {
  const { id, ...updateFields } = req.body;
  const result = await ProductsServices.updateProductIntoDB(id, updateFields);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product update Successfully',
    data: result,
  });
});

export const productsControllers = {
  getAllProducts,
  getCategoryProducts,
  getALlProductsFromDb,
  getSingleProducts,
  createProduct,
  deleteProduct,
  updateProduct,
};
