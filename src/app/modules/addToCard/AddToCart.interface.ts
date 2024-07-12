import { Types } from 'mongoose';

export type IAddToCartProduct = {
  mainId: Types.ObjectId;
  name: string;
  category: string;
  stockQuantity: number;
  brand: string;
  rating: number;
  description: string;
  price: number;
  image: string;
  addedProduct?: number;
};
