import { model, Schema } from 'mongoose';
import { IAddToCartProduct } from './AddToCart.interface';

const AddToCartctSchema: Schema = new Schema<IAddToCartProduct>({
  mainId: { type: Schema.Types.ObjectId },
  name: { type: String, required: true },
  category: { type: String, required: true },
  stockQuantity: { type: Number, required: true },
  brand: { type: String, required: true },
  rating: { type: Number, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  addedProduct: { type: Number },
});

export const AddToCart = model<IAddToCartProduct>(
  'AddToCart',
  AddToCartctSchema,
);
