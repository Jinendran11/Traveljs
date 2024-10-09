import mongoose, { Schema, Document } from 'mongoose';

interface IVehicleRental extends Document {
  type: string;
  location: string;
  price: number;
  availability: boolean;
}

const vehicleRentalSchema: Schema = new Schema({
  type: { type: String, required: true },
  location: { type: String, required: true },
  price: { type: Number, required: true },
  availability: { type: Boolean, default: true },
}, {
  timestamps: true,
});

export default mongoose.model<IVehicleRental>('VehicleRental', vehicleRentalSchema);
