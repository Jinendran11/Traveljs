import mongoose, { Schema, Document } from 'mongoose';

interface IReview extends Document {
  userId: mongoose.Schema.Types.ObjectId;
  serviceId: mongoose.Schema.Types.ObjectId;
  rating: number;
  comment: string;
}

const reviewSchema: Schema = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  serviceId: { type: mongoose.Schema.Types.ObjectId, required: true },
  rating: { type: Number, required: true },
  comment: { type: String, required: true }
}, {
  timestamps: true,
});

export default mongoose.model<IReview>('Review', reviewSchema);
