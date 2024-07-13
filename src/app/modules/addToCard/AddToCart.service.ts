/* eslint-disable @typescript-eslint/no-explicit-any */
import { AddToCart } from './AddToCart.module';

const addToCartIntoDB = async (payload: any) => {
  const { stockQuantity, ...rest } = payload;
  const newProduct = { ...rest };
  const isExists = await AddToCart.findOne({ mainId: payload.mainId });
  if (isExists) {
    const updateProduct = (isExists.addedProduct as number) + 1;
    const stockQuantity = (isExists.stockQuantity as number) - 1;
    const updateResult = await AddToCart.findOneAndUpdate(
      { mainId: payload.mainId },
      { addedProduct: updateProduct, stockQuantity },
      { new: true },
    );
    return updateResult;
  }
  newProduct.addedProduct = 1;
  newProduct.stockQuantity = stockQuantity - 1;
  const result = await AddToCart.create(newProduct);
  return result;
};

const getCartProductFromDB = async (incrementDecrement) => {
  console.log(25, JSON.parse(incrementDecrement));
  const result = await AddToCart.find();
  return result;
};

export const addToCartServices = {
  addToCartIntoDB,
  getCartProductFromDB,
};
