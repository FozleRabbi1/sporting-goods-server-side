/* eslint-disable @typescript-eslint/no-explicit-any */
import { Product } from '../Products/Products.module';
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

const getCartProductFromDB = async (incrementDecrement: string) => {
  const incrementDecrementArray = incrementDecrement?.toString().split(',');

  const id = incrementDecrementArray[0];

  if (incrementDecrementArray[1] === 'increment') {
    const updatedData = await AddToCart.findById(id);

    await AddToCart.findByIdAndUpdate(
      id,
      {
        addedProduct: (updatedData!.addedProduct as number) + 1,
      },
      { new: true },
    );
  }
  if (incrementDecrementArray[1] === 'decrement') {
    const updatedData = await AddToCart.findById(id);
    await AddToCart.findByIdAndUpdate(
      id,
      {
        addedProduct: (updatedData!.addedProduct as number) - 1,
      },
      { new: true },
    );
  }

  const result = await AddToCart.find({});
  return result;
};

const deleteCartIntoDB = async (id: string) => {
  const result = await AddToCart.findByIdAndDelete(id);
  return result;
};

// const checkOutQueryIntoDB = async (payload) => {
//   const mainIds = payload.mainId;
//   const orderedCount = payload.addedProduct;
//   const products = await Product.find({ _id: { $in: mainIds } });
//   const updateData = await products.forEach({item, i} => item.stockQuantity - parseFloat(orderedCount[i]) )
//   console.log(updateData);
// };

const checkOutQueryIntoDB = async (payload) => {
  try {
    const mainIds = Array.isArray(payload.mainId)
      ? payload.mainId
      : [payload.mainId];
    const orderedCounts = Array.isArray(payload.addedProduct)
      ? payload.addedProduct
      : [payload.addedProduct];

    const cartIds = Array.isArray(payload.cartId)
      ? payload.cartId
      : [payload.cartId];

    const products = await Product.find({ _id: { $in: mainIds } });
    const updatePromises = products.map((product, i) => {
      const orderedCount = parseFloat(orderedCounts[i]);
      product.stockQuantity -= orderedCount;
      return product.save();
    });

    await Promise.all(updatePromises);
    await AddToCart.deleteMany({ _id: { $in: cartIds } });
  } catch (error) {
    console.error(error);
  }
};

export const addToCartServices = {
  addToCartIntoDB,
  getCartProductFromDB,
  deleteCartIntoDB,
  checkOutQueryIntoDB,
};
