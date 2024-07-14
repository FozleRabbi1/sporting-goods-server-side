import httpStatus from 'http-status';
import { catchAsync } from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { addToCartServices } from './AddToCart.service';

const addToCart = catchAsync(async (req, res) => {
  const result = await addToCartServices.addToCartIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product Added SuccessFully ',
    data: result,
  });
});

const getAddToCart = catchAsync(async (req, res) => {
  const params: string = req.query.incrementDecrement as string;
  const result = await addToCartServices.getCartProductFromDB(params);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'AddtoCart Product get SuccessFully ',
    data: result,
  });
});

const deleteCart = catchAsync(async (req, res) => {
  const result = await addToCartServices.deleteCartIntoDB(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'AddtoCart Product get SuccessFully ',
    data: result,
  });
});

const checkOutQuery = catchAsync(async (req, res) => {
  try {
    // Ensure req.query.data exists
    const data = req.query.data;

    if (!data) {
      throw new Error('Data is missing in the query');
    }

    // Parse the data
    const parsedData = Array.isArray(data)
      ? data.map((item) => (typeof item === 'string' ? JSON.parse(item) : item))
      : [typeof data === 'string' ? JSON.parse(data) : data];

    const result = await addToCartServices.checkOutQueryIntoDB(parsedData);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'AddtoCart Product get Successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
});

// const checkOutQuery = catchAsync(async (req, res) => {
//   const data = req?.query?.data[0];
//   // console.log(39, typeof data);
//   const result = await addToCartServices.checkOutQueryIntoDB(data);
//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'AddtoCart Product get SuccessFully ',
//     data: result,
//   });
// });

export const addToCartControllers = {
  addToCart,
  getAddToCart,
  deleteCart,
  checkOutQuery,
};
