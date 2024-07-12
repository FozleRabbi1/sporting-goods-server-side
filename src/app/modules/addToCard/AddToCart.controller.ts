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

export const addToCartControllers = {
  addToCart,
};
