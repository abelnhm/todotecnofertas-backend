import { Schema, model } from 'mongoose';
import { Offer } from '../../entities/offer';

const offersSchema = new Schema<Offer>({
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  title: { type: String },
  image: {
    publicId: String,
    size: Number,
    width: Number,
    height: Number,
    format: String,
    url: String,
    cloudinaryURL: String,
  },
  description: { type: String },
  regularPrice: { type: Number },
  offerPrice: { type: Number },
  isCoupon: { type: Boolean, default: true },
  coupon: { type: String },
  offerURL: { type: String },
  category: { type: String },
  dateToStart: { type: Number },
  dateToEnd: { type: Number },
  createdAt: { type: Number, default: Date.now() },
  updatedAt: { type: Number, default: Date.now() },
});

offersSchema.set('toJSON', {
  transform(_doc, returnedObject) {
    returnedObject.id = returnedObject._id.toString();
    delete (returnedObject as any)._id;
    delete (returnedObject as any).__v;
  },
});

export const OfferModel = model<Offer>('Offer', offersSchema, 'offers');
