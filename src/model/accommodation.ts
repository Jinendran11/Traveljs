import mongoose, { Schema, Document } from 'mongoose';

interface IAccommodation extends Document {
  name: string;
  location: string;
  price: number;
  availability: boolean;
}

const accommodationSchema: Schema = new Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  price: { type: Number, required: true },
  availability: { type: Boolean, default: true }
}, {
  timestamps: true,
});

export default mongoose.model<IAccommodation>('Accommodation', accommodationSchema);
