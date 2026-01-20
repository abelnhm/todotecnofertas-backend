import { Schema, model } from 'mongoose';
import { Vote } from '../../entities/vote';

const votesSchema = new Schema<Vote>({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  offer: {
    type: Schema.Types.ObjectId,
    ref: 'Offer',
  },
  isPositive: { type: Boolean, required: true },
  createdAt: { type: Number, default: Date.now() },
  updatedAt: { type: Number, default: Date.now() },
});

votesSchema.set('toJSON', {
  transform(_doc, returnedObject) {
    returnedObject.id = returnedObject._id.toString();
    delete (returnedObject as any)._id;
    delete (returnedObject as any).__v;
  },
});

export const VoteModel = model<Vote>('Vote', votesSchema, 'votes');
