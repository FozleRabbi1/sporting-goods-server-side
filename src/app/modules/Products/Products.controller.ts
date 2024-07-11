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

export const productsControllers = {
  getAllProducts,
  getCategoryProducts,
  getALlProductsFromDb,
};
